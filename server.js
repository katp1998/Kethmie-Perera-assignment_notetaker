const bodyParser = require("body-parser"); //take rq and get data from the body
const express = require("express");
const mongoose = require("mongoose"); //will be interacting with the mongoDB -- database

const app = express();

const users = require("./routes/api/users");

app.use(bodyParser.json());

//D config import
const db = require("./config/keys").mongoURI;

//connecting to db
mongoose
  .connect(db)
  .then(() => console.log("connected to mongo db"))
  .catch((err) => console.log(err));

//user the routes to get details
app.use("./api/users", users);

const port = process.env.port || 5000;

app.listen(port, () => console.log(`server has started on ${port}`));
