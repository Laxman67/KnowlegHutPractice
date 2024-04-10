import React from "react";

function CurrencyInput({ symbol, selectSymbol, amount, setAmount }) {
  return (
    <div className="field">
      <div className="currency-picker">
        <select value={symbol} onChange={(e) => selectSymbol(e.target.value)}>
          <option>USD</option>
          <option>INR</option>
          <option>EUR</option>
          <option>SGD</option>
          <option>GBP</option>
          <option>AUD</option>
          <option>CNY</option>
          <option>JPY</option>
          <option>NZD</option>
        </select>
      </div>

      <div className="currency-input">
        <input
          className="number-input"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          amount={(evt) => amount(evt)}
        />
      </div>
    </div>
  );
}

export default CurrencyInput;
