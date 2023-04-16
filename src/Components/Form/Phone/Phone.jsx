import React from "react";

const Phone = () => {
  return (
    <div className="phone-container">
      <div className="phone">
        <label className="phone__label" htmlFor="phone__input">
          Номер телефона
        </label>
        <input className="phone__input" type="text" id="phone__input" />
      </div>
    </div>
  );
};

export default Phone;
