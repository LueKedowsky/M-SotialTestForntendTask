import React from "react";

const Email = () => {
  return (
    <div className="email-container">
      <div className="email">
        <label className="email__label" htmlFor="email__input">
          Электронная почта
        </label>
        <input className="email__input" type="text" id="email__input" />
      </div>
      <div className="email-subscribe">
        <input className="email-subscribe__checkbox" type="checkbox" id="email-subscribe__checkbox" />
        <label className="email-subscribe__label" htmlFor="email-subscribe__checkbox">
          принимать актуальную информацию на емейл
        </label>
      </div>
    </div>
  );
};

export default Email;
