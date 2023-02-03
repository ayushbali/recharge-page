import React from "react";
import "./Button.css";

const Button = ({ validInp, showErr }) => {
  const validateLength = (e) => {
    e.preventDefault();
    // let mobileNumber = e.target.value;
    if (validInp.length > 10) {
      showErr();
    }
    console.log("I am clicked from Button");
    console.log(validInp);
  };

  return (
    <div className="btn">
      <button type="submit" className="primary-btn" onClick={validateLength}>
        Continue
      </button>
    </div>
  );
};

export default Button;
