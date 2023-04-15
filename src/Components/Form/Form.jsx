import React from "react";
import Cities from "./Cities/Cities";
import User from "./User/User";
import Password from "./Password/Password";
import Phone from "./Phone/Phone";
import Email from "./Email/Email";

const Form = () => {
  const clickHandler = (e) => {
    e.preventDefault();
    console.log("Submited!");
  };
  return (
    <div className="form-container">
      <form action="">
        <User />
        <Cities />
        <Password />
        <Phone />
        <Email />
        <button type="submit" onClick={clickHandler}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
