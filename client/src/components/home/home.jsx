import React, { useState, useEffect } from "react";
import "./home.css";
import Header from "../header/header.jsx";
import Result from "../Result/Result.jsx";
import ResultService from "../../services/resultService";
import withResult from "../../helpers/withResult";
import HomeHelper from "../../helpers/homeHelper";

function Home() {
  const [localCountry, setLocalCountry] = useState("France");

  const [inputAmount, setInputAmount] = useState(0);

  const [localCountryBigMacData, setLocalCountryBigMacData] = useState({});

  const [randomCountryBigMacData, setRandomCountryBigMacData] = useState({});

  useEffect(() => {
    const resultService = new ResultService();

    resultService.getCountryFromIp().then((res) => {
      console.log("TEST", res.data);
      setLocalCountry(res.data.country_name);
    });
  });

  useEffect(() => {
    const resultService = new ResultService();

    // If there is no cache, fetch data from csv file
    if (!localStorage.getItem("csvData")) {
      resultService.getBigMac().then((res) => {
        let helper = new HomeHelper();

        // Get the big mac data for the user's location
        let countryObj = helper.getCountryData(res.data, localCountry);
        setLocalCountryBigMacData(countryObj);

        // Cache the csv data if not already cached
        if (!localStorage.getItem("csvData")) {
          localStorage.setItem("csvData", JSON.stringify(res.data));
        }
      });
    }
  }, [localCountry, inputAmount]);

  // Fetch
  useEffect(() => {
    // If csv data has been cached, don't fetch it anymore
    if (localStorage.getItem("csvData")) {
      let helper = new HomeHelper();

      // Get data from cache
      let data = JSON.parse(localStorage.getItem("csvData"));

      // Get the big mac data for the user's location
      let countryObj = helper.getCountryData(data, localCountry);
      setLocalCountryBigMacData(countryObj);

      // Get the big mac data for a random country
      let rand = helper.getRandomArbitrary(0, data.length);
      let randCountryObj = data[Math.floor(rand)];

      randCountryObj = helper.getRandomCountryData(
        inputAmount,
        countryObj,
        randCountryObj
      );
      setRandomCountryBigMacData(randCountryObj);
    }
  }, [localCountry, inputAmount]);

  return (
    <div className="container">
      <Header country={localCountry} onSetInputAmount={setInputAmount} />

      {localCountryBigMacData.hasOwnProperty("Country") &&
        withResult(Result, "local-result", {
          ...localCountryBigMacData,
          inputAmount,
        })}

      {randomCountryBigMacData.hasOwnProperty("Country") &&
        withResult(Result, "random-result", {
          ...randomCountryBigMacData,
          inputAmount,
        })}
    </div>
  );
}

export default Home;
