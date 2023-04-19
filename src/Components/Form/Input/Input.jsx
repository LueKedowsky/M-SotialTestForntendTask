import React from "react";

const Input = ({ register, errors, name, itemClass, itemId, label, pattern, isRequired }) => {
  return (
    <div>
      <label htmlFor={itemId}>
        {label}
        {isRequired && <label htmlFor={itemId}>*</label>}
      </label>
      <input
        {...register(name, {
          required: isRequired,
          pattern: pattern,
        })}
        type="text"
        id={itemId}
        className={itemClass}
      />
      {errors?.name && <div>{errors?.name?.message || "Error"}</div>}
    </div>
  );
};

export default Input;
