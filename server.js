const express = require('express');
const codeRouter = require('./routes/codeRoute');

const util = require("util");
const exec = util.promisify(require("child_process").exec);
// const exec = require('child_process').exec;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    exec("docker run -d -it java:v1 /bin/bash").then((resp) => {
        var id = resp.stdout.substring(0, 12);
        exec(
          `docker cp Test.java ${id}:/usr/src/app/Test.java && docker exec ${id} bash -c "javac Test.java && java Test"`,
          { timeout: 15000, maxBuffer: 50000 }
        )
          .then((resp) => {
            res.json(resp);
            exec(`java -version`).then((resp) =>
              console.log("Files removed")
            );
            exec(`docker kill ${id}`).then((resp) =>
              console.log("Container Stopped")
            );
          })
          .catch((err) => {
            console.log(err);
            res.json(err);
            exec(`java -version`).then((resp) =>
              console.log("Files removed")
            );
            exec(`docker kill ${id}`).then((resp) =>
              console.log("Container Stopped")
            );
          });
      });
})

app.use('/code', codeRouter);

app.listen(5000, () => console.log('API Started listening at port 5000!'));