import React from "react";
import { useForm } from "react-hook-form";
import "./Form.scss";
import Input from "./Input/Input";
import Cities from "./Cities/Cities";
import Submit from "./Submit/Submit";
import Separator from "../Separator/Separator";

const Form = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm();

  return (
    <div className="form-container">
      <form>
        <Input
          register={register}
          errors={errors}
          name="firstName"
          itemClass="firstname"
          itemId="firstname"
          label="Имя"
          pattern="[а-яА-Я]{2}"
          isRequired="Введите ваше имя"
        />
        <Input
          register={register}
          errors={errors}
          name="lastName"
          itemClass="lastName"
          itemId="firstname"
          label="Фамилия"
          pattern="[а-яА-Я]{2}"
          isRequired="Введите ваше имя"
        />
        <Cities register={register} errors={errors} name="cities" />
        <Separator />
        <Input
          register={register}
          errors={errors}
          name="password"
          itemClass="password"
          itemId="password"
          label="Пароль"
          pattern="[a-zA-Z]{6}"
          isRequired="Введите пароль"
        />
        <Input
          register={register}
          errors={errors}
          name="repeatPassword"
          itemClass="repeatPassword"
          itemId="repeatPassword"
          label="Пароль ещё раз"
          pattern="[a-zA-Z]{6}"
          isRequired="Повторите пароль"
        />
        <Separator />
        <Input
          register={register}
          errors={errors}
          name="phoneNumber"
          itemClass="phoneNumber"
          itemId="phoneNumber"
          label="Номер телефона"
          pattern=""
          isRequired={false}
        />
        <Input
          register={register}
          errors={errors}
          name="emailAdress"
          itemClass="emailAdress"
          itemId="emailAdress"
          label="Электронная почта"
          pattern="[a-zA-Z]{6}"
          isRequired={false}
        />
        <Submit isValid={isValid} handleSubmit={handleSubmit} errors={errors} reset={reset} />
      </form>
    </div>
  );
};

export default Form;
