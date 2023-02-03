import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import "./Header.css";
const Header = () => {
  return (
    <header className="header-common">
      <div className="container">
        <IoIosArrowBack />
        <p>Recharge</p>
      </div>
    </header>
  );
};

export default Header;
