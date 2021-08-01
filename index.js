require("./db");
const express = require("express");
// const bodyParser = require("body-parser");
const postBookRoutes = require("./controller/postBookController");

const app = express();
app.use(express.json());
app.listen(4000, () => console.log("Server started at : 4000"));

app.use("/postbooks", postBookRoutes);
