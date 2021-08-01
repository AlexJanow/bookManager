const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/bookManager",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log("MongoDB connection success!");
    else
      console.log(
        "Error while connecting MongoDB:" + JSON.stringify(err.undefined, 2)
      );
  }
);
