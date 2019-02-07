const express = require("express");
const userController = require("./controllers/UserController");
const bodyParser = require("body-parser");

// db instance connection
require("./config/db");

const app = express();

const port = process.env.PORT || 9292;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app
  .route("/users")
  .get(userController.listAllUsers)
  .post(userController.createNewUser);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
