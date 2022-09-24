import React, { useState } from "react";

const District = (props) => {
  const [power, setPower] = useState(100);
  const [powerMsg, setPowerMsg] = useState("");
  const [value, setValue] = useState(0);

  const decreasePower = (a) => {
    console.log(a.type);
    const newPower = power - 10;
    setPower(newPower);

    if (newPower <= 0) {
      setPower(0);
      setPowerMsg("Battery is down");
      setTimeout(function () {
        setPowerMsg("");
      }, 5000);
    }
  };

  const increaseValue = () => {
    const newValue = value + 1;
    setValue(newValue);
  };

  setInterval(increaseValue, 1000);

  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Speciality: {props.speciality}</p>
      <p>
        <strong>Power: {power}</strong>
      </p>
      <button onClick={(event) => decreasePower(event)}>
        Decrease the Power
      </button>
      <p>
        <strong>{powerMsg}</strong>
      </p>
      <p>
        <strong>Value: {value}</strong>
      </p>
    </div>
  );
};

export default District;
