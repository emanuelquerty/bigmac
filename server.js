const express = require("express");

const app = express();

const port = process.env.PORT || 5000;

const countryController = require("./controllers/country");
const bigMacController = require("./controllers/bigmac");
const { response } = require("express");

app.get("/country", countryController.getCountry);

app.get("/bigmac", bigMacController.getBigMac);

app.get("/", (req, res) => {
  res.json({ msg: "hello there ..!" });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
