const User = require("../models/User");

exports.createNewUser = (req, res) => {
  let newUser = new User(req.body.data);
   newUser.save((err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(user);
  }); 
};
