const User = require("../models/User");

exports.listAllUsers = (req, res) => {
    User.find({}, (err, user) => {
      console.log(user)
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json(user);
    });
  };
  

exports.createNewUser = (req, res) => {
  let newUser = new User(req.body.data);
   newUser.save((err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(user);
  }); 
};
