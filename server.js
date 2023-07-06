const express = require('express');
const codeRouter = require('./routes/codeRoute');
const userRouter = require('./routes/userRoutes');
const snippetRouter = require('./routes/snippetRoute');
const dotenv = require('dotenv');
const util = require("util");
const app = express();
const connectDb = require('./config/db');

dotenv.config();
connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  return res.send("API Running!");
});

app.use('/code', codeRouter);
app.use('/user', userRouter);
app.use('/snippet', snippetRouter);

app.listen(5000, () => console.log('API Started listening at port 5000!'));