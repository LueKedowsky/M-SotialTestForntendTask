import React from "react";
import Cities from "./Cities/Cities";
import User from "./User/User";
import Password from "./Password/Password";
import Phone from "./Phone/Phone";
import Email from "./Email/Email";
import Separator from "../Separator/Separator";
import Submit from "./Submit/Submit";

const Form = () => {
  return (
    <div className="form-container">
      <form action="">
        <User />
        <Cities />
        <Separator />
        <Password />
        <Separator />
        <Phone />
        <Email />
        <Submit />
      </form>
    </div>
  );
};

export default Form;
