import React, { useState } from "react";
import "./header.css";
import { useEffect } from "react";

function Header(props) {
  const [amount, setAmount] = useState(0);
  const { country, onSetInputAmount } = props;

  function handleChange(event) {
    let value = event.target.value;
    setAmount(value);
  }

  useEffect(() => {
    onSetInputAmount(amount);
  }, [amount, onSetInputAmount]);

  return (
    <header className="header" data-testid="test-header">
      <h1>Big Mac </h1>
      <p>You are in {country}</p>

      <label htmlFor="amount" className="header__amount-label">
        Please enter an amount of money in your local currency
      </label>

      <input
        type="text"
        id="header__amount-input"
        data-testid="test-amount-input"
        onChange={handleChange}
        value={amount}
      />
    </header>
  );
}

export default Header;
