import { useState } from "react";
import "./User.scss";

const User = () => {
  const [userName, setUserName] = useState("");
  const [userSurName, setUserSurName] = useState("");

  const userNameChangeHandler = (e) => {
    setUserName(e.target.value);
  };
  const userSurNameChangeHandler = (e) => {
    setUserSurName(e.target.value);
  };

  return (
    <div className="user-container">
      <div className="user-greetings">Здравствуйте, {userName || "Человек"}</div>
      <div className="user-name">
        <label className="user-name__label" htmlFor="user-name__input">
          Имя
          <label className="user-name__label_red" htmlFor="user-name__input">
            *
          </label>
        </label>
        <input className="user-name__input" type="text" id="user-name__input" onChange={userNameChangeHandler} value={userName} />
      </div>
      <div className="user-surname">
        <label className="user-surname__label" htmlFor="user-surname__input">
          Фамилия
          <label className="user-surname__label_red" htmlFor="user-surname__input">
            *
          </label>
        </label>
        <input className="user-surname__input" type="text" id="user-surname__input" onChange={userSurNameChangeHandler} value={userSurName} />
      </div>
    </div>
  );
};

export default User;
