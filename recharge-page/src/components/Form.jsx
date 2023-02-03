import React from "react";
import "./Form.css";
import { useState } from "react";
import Button from "./Button";

const Form = () => {
  const [input, setInput] = useState("");
  const [err, setError] = useState("");

  const handleInp = (e) => {
    let mobileNumber = e.target.value;
    console.log(mobileNumber.split(""));
    if (
      (mobileNumber.split("")[0] === "7" ||
        mobileNumber.split("")[0] === "6" ||
        mobileNumber.split("")[0] === "5") &&
      mobileNumber.length === 10
    ) {
      console.log("the number is correct");
      setInput(mobileNumber);
      setError("");
    } else if (
      !(
        mobileNumber.split("")[0] === "7" ||
        mobileNumber.split("")[0] === "6" ||
        mobileNumber.split("")[0] === "5"
      )
    ) {
      setError("Mobile number should start with either 5, 6 or 7");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  const showError = () => {
    setError("Mob no. should be a 10 digit num");
  };

  return (
    <form className="form-group">
      <div className="input-group">
        <label>Customer mobile number </label>
        <input
          type="number"
          placeholder="Enter 10 digit mobile number"
          onChange={handleInp}
        />
      </div>
      <div className="input-group">
        <label>Confirm mobile number </label>
        <input
          type="number"
          placeholder="Enter 10 digit mobile number"
          onChange={handleInp}
        />
      </div>
      <Button validInp={input} showErr={showError} />
      {err && <span className="error">{err}</span>}
    </form>
  );
};

export default Form;
