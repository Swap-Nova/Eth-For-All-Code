import React, { useState } from "react";
import "./CelsiusTemperature.css";

function CelsiusTemperature() {
  const [celsius, setCelsius] = useState(0);

  const incrementCelsius = () => {
    setCelsius(celsius + 1);
  };

  const decrementCelsius = () => {
    if (celsius > -273) {
      setCelsius(celsius - 1);
    }
  };

//   const fahrenheit = (celsius * 9) / 5 + 32;

  return (
    <div className='button-div'>
      {/* <h2>Fahrenheit: {fahrenheit} °F</h2> */}
      <button className="increment-button" onClick={incrementCelsius}>+</button>
      <div>
        <h2 className="temp-heading"> {celsius}</h2>
        <h2 className="celsius-symbol">°C</h2>
      </div>
      <button className="decrement-button" onClick={decrementCelsius}>-</button>
    </div>
  );
}

export default CelsiusTemperature;