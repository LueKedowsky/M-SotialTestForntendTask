import { memo, useRef } from "react";
import "./Input.scss";
import { ErrorMessage, Field } from "formik";

const Input = ({ itemName, itemClass, itemId, inputType, label, itemPlaceholder, isRequired }) => {
  const errorRef = useRef();
  let errorClass = "";
  // if (errorRef.current.value) {
  //   errorClass = "border: 1ps solid red";
  // }
  return (
    <div>
      <label htmlFor={itemId}>
        {label}
        {isRequired && <label htmlFor={itemId}>*</label>}
      </label>
      <Field name={itemName} type={inputType} id={itemId} className={`${itemClass} form-input`} placeholder={itemPlaceholder} style={errorClass || null} />
      <div ref={errorRef}>
        <ErrorMessage name={itemName} component="div" className="error-message" />
      </div>
    </div>
  );
};

export default memo(Input);
