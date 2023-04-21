import { memo } from "react";
import "./Input.scss";

const Input = ({ register, errors, itemName, itemClass, itemId, inputType, label, itemPlaceholder, pattern, patternMessage, isRequired }) => {
  return (
    <div>
      <label htmlFor={itemId}>
        {label}
        {isRequired && <label htmlFor={itemId}>*</label>}
      </label>
      <input
        {...register(itemName, {
          required: isRequired,
          pattern: {
            value: pattern,
            message: patternMessage,
          },
        })}
        type={inputType}
        id={itemId}
        className={`${itemClass} form-input`}
        placeholder={itemPlaceholder}
      />
      <div className="error-message">{errors?.[itemName] && <p>{errors?.[itemName]?.message || "Ошибка"}</p>}</div>
    </div>
  );
};

export default memo(Input);
