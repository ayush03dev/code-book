const util = require("util");
const fs = require("fs");

const exec = util.promisify(require("child_process").exec);

const java = (res, input, name) => {
  fs.writeFile(`${name}.txt`, input, (err) => {
    if (err) res.json({ error: err });
    exec("docker run -d -it java:v1 /bin/bash").then((resp) => {
      const id = resp.stdout.substring(0, 12);
      exec(
        `docker cp ${name}.java ${id}:/usr/src/app/${name}.java && docker cp ${name}.txt ${id}:/usr/src/app/input.txt && docker exec ${id} bash -c "javac ${name}.java && java Program < input.txt"`,
        { timeout: 15000, maxBuffer: 50000 }
      )
        .then((resp) => {
          res.json(resp);
          exec(`del ${name}.java && del ${name}.class && del ${name}.txt`).then(
            (resp) => console.log("Files have been removed")
          );
          exec(`docker kill ${id}`).then((resp) =>
            console.log("Container has been stopped")
          );
        })
        .catch((err) => {
          console.log(err);
          res.status(400).json(err);
          exec(`del ${name}.java && del ${name}.class && del ${name}.txt`).then(
            (resp) => console.log("Files have been removed")
          );
          exec(`docker kill ${id}`).then((resp) =>
            console.log("Container has been stopped")
          );
        });
    });
  });
};

module.exports = java;
