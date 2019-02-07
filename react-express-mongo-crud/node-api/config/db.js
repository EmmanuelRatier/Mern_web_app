const mongoose = require("mongoose");

const dbURI =
  "mongodb://root:root@cluster01-shard-00-00-nktpn.mongodb.net:27017,cluster01-shard-00-01-nktpn.mongodb.net:27017,cluster01-shard-00-02-nktpn.mongodb.net:27017/test?ssl=true&replicaSet=Cluster01-shard-0&authSource=admin&retryWrites=true";

mongoose.connect(dbURI,{ useNewUrlParser: true }).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);