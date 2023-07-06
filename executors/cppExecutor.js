const util = require("util");
const fs = require("fs");

const exec = util.promisify(require("child_process").exec);

const cpp = async (res, input, name) => {

    let id = undefined;
    try {
        await new Promise((resolve, reject) => {
            fs.writeFile(`${name}.txt`, input, (err) => {
                if (err) reject(err);
                else resolve();
            });
        });

        const resp = await exec("docker run -d -it --rm cpp-exec:latest /bin/sh");
        id = resp.stdout.substring(0, 12);

        const result = await exec(
            `docker cp ${name}.cpp ${id}:/home/app/${name}.cpp && docker cp ${name}.txt ${id}:/home/app/input.txt && docker exec ${id} sh -c "g++ ${name}.cpp && ./a.out<input.txt"`,
            { timeout: 15000, maxBuffer: 50000 }
        );

        res.json(result);
        console.log(result);

        console.log("Removing files...");
        await exec(`rm ${name}.cpp && rm ${name}.txt`);
        console.log("Files removed!");

        console.log("Stopping the container...");
        await exec(`docker kill ${id}`);
        console.log("Container stopped!");
    } catch (err) {
        console.log(err);
        res.status(400).json(err);

        console.log("Removing files...");
        await exec(`rm ${name}.cpp && rm ${name}.txt`);
        console.log("Files removed!");

        console.log("Stopping the container...");
        await exec(`docker kill ${id}`);
        console.log("Container stopped!");
    }
};

module.exports = cpp;
