import { useEffect } from "react";
import { useForm } from "react-hook-form";
import "./Form.scss";
import Input from "./Input/Input";
import Cities from "./Cities/Cities";
import Submit from "./Submit/Submit";
import Separator from "../Separator/Separator";
import { useState } from "react";

const Form = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    watch,
    setError,
    clearErrors,
  } = useForm({
    mode: "onBlur",
  });

  const [isCheckboxAreCheched, setIsCheckboxAreCheched] = useState(false);
  const emailCheckboxHandler = (e) => {
    console.log(e.target.checked ? "Введите email" : false);
    setIsCheckboxAreCheched(e.target.checked ? "Введите email" : false);
  };

  // useEffect(() => {
  //   const watchSubscription = watch((value) => value);
  //   console.log(watch("password"));

  //   return () => watchSubscription.unsubscribe();
  // }, [watch]);

  // const [passwordState, setPasswordState] = useState();
  // const [repeatPasswordState, setRepeatPasswordState] = useState();

  // useEffect(() => {
  //   if (passwordState === repeatPasswordState) {
  //     clearErrors("passAreNotEqual.repeatPassword");
  //   } else {
  //     setError("repeatPassword", { type: "passAreNotEqual", message: "Пароли не совпадают" }, { shouldFocus: false });
  //   }
  //   console.log(passwordState, repeatPasswordState);
  // }, [passwordState, repeatPasswordState]);

  // password comparition

  return (
    <div className="form-container">
      <form>
        <div className="div">{`Здравствуйте, ${watch("firstName") || "Человек"}`}</div>
        <Input
          register={register}
          errors={errors}
          itemName="firstName"
          itemClass="firstname"
          itemId="firstname"
          inputType="text"
          label="Имя"
          itemPlaceholder="Введите имя"
          pattern={/[а-яА-Я]{2}/}
          patternMessage="Должно содержать не менее 2 символов и только кирилицу"
          isRequired="Введите ваше имя"
        />
        <Input
          register={register}
          errors={errors}
          itemName="lastName"
          itemClass="lastName"
          itemId="firstname"
          inputType="text"
          label="Фамилия"
          itemPlaceholder="Введите фамилию"
          pattern={/[а-яА-Я]{2}/}
          patternMessage="Должно содержать не менее 2 символов и только кирилицу"
          isRequired="Введите вашу фамилию"
        />
        <Cities register={register} errors={errors} name="cities" />
        <Separator />
        <Input
          register={register}
          errors={errors}
          itemName="password"
          itemClass="password"
          itemId="password"
          inputType="password"
          label="Пароль"
          itemPlaceholder="Введите пароль"
          pattern={/[a-zA-Z]{6}/}
          patternMessage="Должно содержать не менее 6 символов и только латиницу"
          isRequired="Введите пароль"
        />
        <Input
          register={register}
          errors={errors}
          itemName="repeatPassword"
          itemClass="repeatPassword"
          itemId="repeatPassword"
          inputType="password"
          label="Пароль ещё раз"
          itemPlaceholder="Повторите пароль"
          pattern={/[a-zA-Z]{6}/}
          patternMessage={"Должно содержать не менее 6 символов и только латиницу"}
          isRequired="Повторите пароль"
        />
        <Separator />
        <Input
          register={register}
          errors={errors}
          itemName="phoneNumber"
          itemClass="phoneNumber"
          itemId="phoneNumber"
          inputType="numeric"
          label="Номер телефона"
          itemPlaceholder="+7 (***) ***-**-**"
          pattern={/^((\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/}
          patternMessage="Неверный номер телефона"
          isRequired={false}
        />
        <Input
          register={register}
          errors={errors}
          itemName="emailAdress"
          itemClass="emailAdress"
          itemId="emailAdress"
          inputType="email"
          label="Электронная почта"
          itemPlaceholder="Введите электронную почту"
          pattern={/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i}
          patternMessage="Неверный email адрес"
          isRequired={isCheckboxAreCheched}
        />
        <label htmlFor="email-checkbox">Я согласен</label>
        <label>
          <input type="checkbox" id="email-checkbox" onChange={emailCheckboxHandler} /> принимать актуальную информацию на email
        </label>
        <Submit isValid={isValid} handleSubmit={handleSubmit} errors={errors} reset={reset} />
      </form>
    </div>
  );
};

export default Form;
