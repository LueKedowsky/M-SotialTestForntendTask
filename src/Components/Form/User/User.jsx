import { useState } from "react";
import "./User.scss";

const User = ({ register, errors }) => {
  const [userName, setUserName] = useState("");
  const [userLastName, setUserLastName] = useState("");

  const userNameChangeHandler = (e) => {
    setUserName(e.target.value);
  };
  const userLastNameChangeHandler = (e) => {
    setUserLastName(e.target.value);
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
        <input
          {...register("name", {
            required: "Введите ваше имя",
            pattern: "[а-яА-Я]{2}",
          })}
          className="user-name__input"
          type="text"
          id="user-name__input"
          onChange={userNameChangeHandler}
          value={userName}
          // pattern="[а-яА-Я]{2}"
        />
        <div className="user-name__errors">{errors?.name && <p>errors?.name.?message</p>}</div>
      </div>
      <div className="user-lastname">
        <label className="user-lastname__label" htmlFor="user-lastname__input">
          Фамилия
          <label className="user-lastname__label_red" htmlFor="user-lastname__input">
            *
          </label>
        </label>
        <input
          className="user-lastname__input"
          type="text"
          id="user-lastname__input"
          onChange={userLastNameChangeHandler}
          value={userLastName}
          pattern="[а-яА-Я]{2}"
          required
        />
      </div>
    </div>
  );
};

export default User;
