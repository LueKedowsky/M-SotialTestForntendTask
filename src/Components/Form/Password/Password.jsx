import React, { useState } from "react";

const Password = () => {
  const [password, setPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const repeatPasswordChangeHandler = (e) => {
    setRepeatPassword(e.target.value);
    if (isPasswordValig) {
      console.log("passwords are valid");
    }
  };

  const isPasswordValig = (pass1, pass2) => {
    if (pass1 === pass2) {
      return true;
    }
    return false;
  };

  return (
    <div className="password-container">
      <div className="password">
        <label className="password__label" htmlFor="password__input">
          Пароль
        </label>
        <input
          className="password__input"
          type="password"
          id="password__input"
          pattern="[a-zA-Z]{6}"
          value={password}
          onChange={passwordChangeHandler}
          required
        />
      </div>
      <div className="password-repeat">
        <label className="password__label" htmlFor="password__input-repeat">
          Пароль ещё раз
          <label className="password__label_red" htmlFor="password__input-repeat">
            *
          </label>
        </label>
        <input
          className="password__input-repeat"
          type="password"
          id="password__input-repeat"
          value={repeatPassword}
          onChange={repeatPasswordChangeHandler}
          required
        />
      </div>
    </div>
  );
};

export default Password;
