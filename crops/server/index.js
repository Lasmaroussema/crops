const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors")
const cropRoute = require("./router/crops")
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
app.use(express.json());
app.use(cors())
app.use('/crops',cropRoute )
mongoose
  .connect("mongodb://0.0.0.0:27017/crops")
  .then(() =>
    app.listen(5001, () => console.log(`server is listening on port 5001`))
  )
  .catch((err) => console.log(err));

