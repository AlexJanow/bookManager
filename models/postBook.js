const mongoose = require("mongoose");

const PostBook = mongoose.model(
  "PostBook",
  {
    title: { type: String },
    author: { type: String },
    read: { type: Boolean },
  },
  "books"
);

module.exports = { PostBook };
