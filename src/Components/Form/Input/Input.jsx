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
    <div className="form-input-container">
      <div className="form-input__label-container">
        <label htmlFor={itemId} className="form-input__label">
          {label}
          {isRequired && (
            <label htmlFor={itemId} className="form-input__label--required">
              *
            </label>
          )}
        </label>
      </div>
      <div className="form-input__field-error-container">
        <Field
          name={itemName}
          type={inputType}
          id={itemId}
          className={`${itemClass} form-input-field`}
          placeholder={itemPlaceholder}
          style={errorClass || null}
        />
        <div ref={errorRef}>
          <ErrorMessage name={itemName} component="div" className="error-message" />
        </div>
      </div>
    </div>
  );
};

export default memo(Input);
