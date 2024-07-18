const express = require("express");
const cors = require("cors");
const pool = require("./db");
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//Routes//

//Create a todo

//get all todos

//get a todo

//update a todo

//delete a todo

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
