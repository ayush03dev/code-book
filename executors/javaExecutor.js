const util = require("util");
const fs = require("fs");

const exec = util.promisify(require("child_process").exec);

const java = async (res, input, name) => {
  let id = undefined;
  try {
    await new Promise((resolve, reject) => {
      fs.writeFile(`${name}.txt`, input, (err) => {
        if (err) reject(err);
        else resolve();
      });
    });

    const resp = await exec("docker run -d -it --rm java-exec:latest /bin/sh");
    id = resp.stdout.substring(0, 12);
    const result = await exec(
      `docker cp ${name}.java ${id}:/home/app/${name}.java && docker cp ${name}.txt ${id}:/home/app/input.txt && docker exec ${id} sh -c "javac ${name}.java && cat input.txt | java Program"`,
      { timeout: 15000, maxBuffer: 50000 }
    );

    res.json(result);
    console.log(result);

    console.log("Removing files...");
    await exec(`rm ${name}.java && rm ${name}.txt`);
    console.log("Files removed!");

    console.log("Stopping the container...");
    await exec(`docker kill ${id}`);
    console.log("Container stopped!");
  } catch (err) {
    console.log(err);
    res.status(400).json(err);

    console.log("Removing files...");
    await exec(`rm ${name}.java && rm ${name}.txt`);
    console.log("Files removed!");

    console.log("Stopping the container...");
    await exec(`docker kill ${id}`);
    console.log("Container stopped!");
  }
};

module.exports = java;
