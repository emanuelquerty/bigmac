import React from "react";
import "./Result.css";

function Result(props) {
  let {
    isLocalResult,
    country,
    type,
    bigMacCount,
    inputAmount,
    amountInCountryCurrency,
    purchaseParity,
  } = props;

  // This renders the local results
  function getLocalResult() {
    return (
      <React.Fragment>
        <div className="result">
          <h2>Local Results</h2>
          <p>
            You could buy <span className="highlight">{bigMacCount}</span> of
            Big Macs in your country
          </p>
          <p>
            Your Dollar Purchasing Parity (PPP) is{" "}
            <span className="highlight">
              {Number(purchaseParity).toFixed(2)}
            </span>
          </p>
        </div>
      </React.Fragment>
    );
  }

  function getRandomResult() {
    return (
      <React.Fragment>
        <div className="result">
          <h2>Results compared to random country</h2>
          <p>Random Country: {country}</p>
          <p>
            You could buy{" "}
            <span className="highlight">{Number(bigMacCount).toFixed(2)}</span>{" "}
            of Big Macs in {country} with{" "}
            <span className="highlight">{inputAmount}</span>!
          </p>
          <p>
            Your <span className="highlight">{inputAmount}</span> is worth about{" "}
            <span className="highlight">
              {Number(amountInCountryCurrency).toFixed(2)}
            </span>{" "}
            in {country}
          </p>
        </div>
      </React.Fragment>
    );
  }

  return (
    <div className="result" data-testid={type}>
      {isLocalResult ? getLocalResult() : getRandomResult()}
    </div>
  );
}

export default Result;
