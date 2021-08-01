const express = require("express");
const router = express.Router();
const ObjectID = require("mongoose").Types.ObjectId;

var { PostBook } = require("../models/postBook");

router.get("/", (req, res) => {
  PostBook.find((err, docs) => {
    if (!err) res.send(docs);
    else
      console.log(
        "Error while retrieving all records: " +
          JSON.stringify(err, undefined, 2)
      );
  });
});

router.post("/", (req, res) => {
  const newRecord = new PostBook({
    title: req.body.title,
    author: req.body.author,
    read: req.body.read,
  });
  newRecord.save((err, docs) => {
    if (!err) res.send(docs);
    else
      console.log(
        "Error while creating new records: " + JSON.stringify(err, undefined, 2)
      );
  });
});

router.put("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("No record with given id : " + req.params.id);

  const updatedRecord = {
    title: req.body.title,
    author: req.body.author,
    read: req.body.read,
  };
  PostBook.findByIdAndUpdate(
    req.params.id,
    { $set: updatedRecord },
    { new: true },
    (err, docs) => {
      if (!err) res.send(docs);
      else
        console.log(
          "Error while updating a record: " + JSON.stringify(err, undefined, 2)
        );
    }
  );
});

router.delete("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("No record with given id : " + req.params.id);

  PostBook.findByIdAndRemove(req.params.id, (err, docs) => {
    if (!err) res.send(docs);
    else
      console.log(
        "Error while deleting a record: " + JSON.stringify(err, undefined, 2)
      );
  });
});

module.exports = router;
