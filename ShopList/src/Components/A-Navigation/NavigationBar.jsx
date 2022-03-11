import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const NavigationBar = ({ setText }) => {
  return (
    <div>
      <Link to="/" className="Name">
        {" "}
        Shop List
      </Link>
      <input 
      list="items"
        type="text"
        placeholder="  Search Products"
        className="NavigationInput"
        onChange={(e) => setText(e.target.value)}
      />
      <datalist id="items">
        <option value="jacket"></option>
        <option value="mens casual"></option>
        <option value="Mens Cotton"></option>
        <option value="solid gold"></option>
        <option value="SanDisk"></option>
        <option value="Acer"></option>
        <option value="Samsung"></option>
        <option value="MBJ women's"></option>
        <option value="Lock and Lo"></option>
        <option value="Rain jacket"></option>
        <option value="DANVOUY Wom"></option>
        <option value="Opna Women"></option>
        <option value="WD"></option>
        <option value="Silicon Pow"></option>
        <option value="John Hardy"></option>
        
      </datalist>
      <button className="button">Search</button>
    </div>
  );
};

export default NavigationBar;
