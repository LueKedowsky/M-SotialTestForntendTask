import "./Form.scss";
import Input from "./Input/Input";
import Cities from "./Cities/Cities";
import Submit from "./Submit/Submit";
import Separator from "../Separator/Separator";
import { sortedCitiesData } from "../../utils/CitiesData";
import { useRef, useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const FormComponent = () => {
  const [isCheckboxAreCheched, setIsCheckboxAreCheched] = useState(false);
  const emailCheckboxHandler = (e) => {
    console.log(e.target.checked ? true : false);
    setIsCheckboxAreCheched(e.target.checked);
  };

  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Имя должно быть длиннее 2 символов")
      .required("Обязательное поле")
      .matches(/[а-яА-Я]/, "Используйте только кирилицу"),
    lastName: Yup.string()
      .min(2, "Фамилия должна быть длиннее 2 символов")
      .required("Обязательное поле")
      .matches(/[а-яА-Я]/, "Используйте только кирилицу"),
    password: Yup.string()
      .min(6, "Минимум 6 символов")
      .required("Обязательное поле")
      .matches(/[a-zA-Z]/, "Используйте только латиницу"),
    repeatPassword: Yup.string()
      .min(6, "Минимум 6 символов")
      .required("Обязательное поле")
      .oneOf([Yup.ref("password"), null], "Пароли не совпадают")
      .matches(/[a-zA-Z]/, "Используйте только латиницу"),
    phoneNumber: Yup.string().matches(/^((\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/, "Неверный формат"),
    emailAdress: isCheckboxAreCheched ? Yup.string().email("Неверный email").required("Введите email") : Yup.string().email("Неверный email").notRequired(),
  });

  return (
    <div className="form-container">
      <Formik
        initialValues={{ firstName: "", lastName: "", cities: sortedCitiesData[0].city, password: "", repeatPassword: "", phoneNumber: "", emailAdress: "" }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          console.log(JSON.stringify(values));
          actions.resetForm();
        }}
      >
        {({ values, errors }) => (
          <Form>
            {console.log(errors)}
            <div className="div">{`Здравствуйте, ${values.firstName || "Человек"}`}</div>
            <Input itemName="firstName" itemClass="firstname" itemId="firstname" inputType="text" label="Имя" itemPlaceholder="Введите имя" isRequired={true} />
            <Input
              itemName="lastName"
              itemClass={`"lastName"${errors ? "error-field" : ""}`}
              itemId="firstname"
              inputType="text"
              label="Фамилия"
              itemPlaceholder="Введите фамилию"
              isRequired={true}
            />
            <Cities itemName="cities" />
            <Separator />
            <Input
              itemName="password"
              itemClass="password"
              itemId="password"
              inputType="password"
              label="Пароль"
              itemPlaceholder="Введите пароль"
              isRequired={true}
            />
            <Input
              itemName="repeatPassword"
              itemClass="repeatPassword"
              itemId="repeatPassword"
              inputType="password"
              label="Пароль ещё раз"
              itemPlaceholder="Повторите пароль"
              isRequired={true}
            />
            <Separator />
            <Input
              itemName="phoneNumber"
              itemClass="phoneNumber"
              itemId="phoneNumber"
              inputType="numeric"
              label="Номер телефона"
              itemPlaceholder="+7 (***) ***-**-**"
            />
            <Input
              itemName="emailAdress"
              itemClass="emailAdress"
              itemId="emailAdress"
              inputType="email"
              label="Электронная почта"
              itemPlaceholder="Введите электронную почту"
              isRequired={isCheckboxAreCheched}
            />
            <label htmlFor="email-checkbox">Я согласен</label>
            <label>
              <input type="checkbox" id="email-checkbox" onChange={emailCheckboxHandler} /> принимать актуальную информацию на email
            </label>
            <Submit />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormComponent;
