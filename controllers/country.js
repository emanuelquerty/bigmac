const axios = require("axios");

const apiUlr = "https://ipvigilante.com/json/";

exports.getCountry = function (req, res) {
  axios
    .get(apiUlr)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      //   console.log(error);
    });
};
