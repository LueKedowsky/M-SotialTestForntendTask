import { useState } from "react";

const Submit = ({ isValid, handleSubmit, errors, reset }) => {
  const [date, setDate] = useState(new Date());

  const monthArr = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

  const clickHandler = (data) => {
    setDate(new Date());
    console.log(JSON.stringify(data));
    reset();
  };

  return (
    <div className="submit-container">
      <button className="submit__button" type="submit" onClick={handleSubmit(clickHandler)} disabled={!isValid}>
        Submit
      </button>
      <div className="submit__change-date">
        последние изменения {date.getDate()} {monthArr[date.getMonth()]} {date.getFullYear()} в {date.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default Submit;
