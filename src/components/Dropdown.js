import React from "react";
import "../Assets/DropdownList.css";

import plusIcon from "../icon/plus-icon.svg";
const Dropdown = () => {
  return (
    <>
      <div className="main-container">
        <div className="list-container">
          <ul className="list">
            <li>
              <img src="" />
              Milk and Dairies
            </li>
            <li>
              {" "}
              <img src="" />
              Clothing & Beauty
            </li>
            <li>
              {" "}
              <img src="" />
              Pet foods & Toys
            </li>
            <li>
              {" "}
              <img src="" />
              Baking Materials
            </li>
            <li>
              {" "}
              <img src="" />
              Fresh Fruits
            </li>
          </ul>

          <ul className="list">
            <li>
              {" "}
              <img src="" />
              Wines & Drinks
            </li>
            <li>
              {" "}
              <img src="" />
              Fresh Seafoods
            </li>
            <li>
              {" "}
              <img src="" />
              Fastfood
            </li>
            <li>
              {" "}
              <img src="" />
              Vegetables
            </li>
            <li>
              {" "}
              <img src="" />
              Bread & Juice
            </li>
          </ul>

          {/* plus icon */}
        </div>
        <div className="plus-icon">
          <img src={plusIcon} alt="plus" />
          Show More...
        </div>
      </div>
    </>
  );
};

export default Dropdown;
