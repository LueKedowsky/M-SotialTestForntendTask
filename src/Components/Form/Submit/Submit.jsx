import { useState } from "react";
import "./Submit.scss";

const Submit = () => {
  const [date, setDate] = useState(new Date());

  const monthArr = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

  const clickHandler = (e) => {
    setDate(new Date());
    // console.log("Submited");
  };

  return (
    <div className="submit-container">
      <button className="submit-button" type="submit" onClick={clickHandler}>
        Изменить
      </button>
      <div className="submit-change-date">
        последние изменения {date.getDate()} {monthArr[date.getMonth()]} {date.getFullYear()} в {date.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default Submit;
