import React from "react";

/*
 * This higher order components returns a local results component or
 * a random results component depending on the props in
 * countryBigMacData object
 *
 * @params wrappedComponent: the base component
 * @params type: this is a string which takes two possible values:
 * "local-result" or "random-result"
 * Usage: the base component requires this to decide what to render
 *
 * @params countryBigMacData: an object with all data needed to
 * fill in the base component (WrappedComponent)
 */
function withResult(WrappedComponent, type, countryBigMacData) {
  let {
    inputAmount,
    "Dollar PPP": dolarPPP,
    "Local price": localPrice,
    Country,
    bigMacCount,
    amountInCountryCurrency,
  } = countryBigMacData;

  // This method returns the number of big macs depending
  // on the type of component we are rendering, i.e local-result vs random-result
  function getBigMacCount(bigMacCount) {
    // If local-result component
    if (bigMacCount === undefined) {
      let result = Math.floor(inputAmount / Number(localPrice));
      return result;
    }

    // If random-result component
    return bigMacCount;
  }

  return (
    <WrappedComponent
      isLocalResult={type === "local-result"} // decides which component to render
      country={Country}
      type={type}
      purchaseParity={dolarPPP}
      inputAmount={inputAmount}
      bigMacCount={getBigMacCount(bigMacCount)}
      amountInCountryCurrency={amountInCountryCurrency}
      localPrice={localPrice}
    />
  );
}

export default withResult;
