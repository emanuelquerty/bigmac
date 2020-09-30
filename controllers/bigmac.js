const axios = require("axios");

const neatCsv = require("neat-csv");

const bigMacRawUrl =
  "https://raw.githubusercontent.com/zelima/big-mac-index/master/data/big-mac-index.csv";

exports.getBigMac = function (req, res) {
  axios
    .get(bigMacRawUrl)
    .then(async (response) => {
      let data = await neatCsv(response.data);

      res.json({ data });
    })
    .catch((err) => {
      console.log(err);
    });
};
