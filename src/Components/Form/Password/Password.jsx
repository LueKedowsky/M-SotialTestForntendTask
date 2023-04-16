import React from "react";

const Password = () => {
  return (
    <div className="password-container">
      <div className="password">
        <label className="password__label" htmlFor="password__input">
          Пароль
        </label>
        <input className="password__input" type="password" id="password__input" />
      </div>
      <div className="password-repeat">
        <label className="password__label" htmlFor="password__input-repeat">
          Пароль ещё раз
          <label className="password__label_red" htmlFor="password__input-repeat">
            *
          </label>
        </label>
        <input className="password__input-repeat" type="password" id="password__input-repeat" />
      </div>
    </div>
  );
};

export default Password;
