class HomeHelper {
  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  getCountryData(bigmac, country) {
    let countries = bigmac.filter(
      (countryObj) => countryObj.Country === country
    );

    return countries.slice(-1)[0];
  }

  getRandomCountryData(input, localBigMacData, randomBigMacData) {
    let {
      "Local price": localPrice,
      "Dollar price": localDolarPrice,
    } = localBigMacData;

    let { "Dollar price": randDolarPrice } = randomBigMacData;

    const bigMacCount = Math.floor(
      (input / localPrice) * (localDolarPrice / randDolarPrice)
    );

    const amountInCountryCurrency = Math.floor(
      input * (localDolarPrice / randDolarPrice)
    );

    return { ...randomBigMacData, bigMacCount, amountInCountryCurrency };
  }
}

export default HomeHelper;
