const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const userData = require("./Registrationdb");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.use(bodyParser.json()); // parse request body as JSON
app.use(cors());


app.post("/mylogin", (req, res) => {
  const { password, email } = req.body;

  for (let i = 0; i < userData.length; i++) {
    if (userData[i].email == email) {
      if (userData[i].password == password) {
        res.send("You are Logged In");
      }

      res.send("Incorrect Password!! Please Enter Correct password");
    }
  }
  res.send("User doesnt Exist, Please Register");
});
app.post("/register", (req, res) => {
  const { name, phone, email, password } = req.body;

  const objToInsert = {
    name,
    phone,
    email,
    password,
  };

  for (let i = 0; i < userData.length; i++) {
    const emailInUserData = userData[i].email;
    console.log("Email in DB", emailInUserData);
    console.log("Email sent from UI", email);

    if (emailInUserData == email) {
      console.log("It came to equals block");
      res.send("User was already registered");
    }
  }
  

  console.log("It came to else block");
  userData.push(objToInsert);
  res.send("User has been registered successfully");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
