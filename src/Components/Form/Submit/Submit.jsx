import { useState } from "react";

const Submit = () => {
  const [date, setDate] = useState(new Date());

  // const getMounthName = (month) => {
  //   switch (month) {
  //     case 0:
  //       return "января";
  //     case 1:
  //       return "февраля";
  //     case 2:
  //       return "марта";
  //     case 3:
  //       return "апреля";
  //     case 4:
  //       return "мая";
  //     case 5:
  //       return "июня";
  //     case 6:
  //       return "июля";
  //     case 7:
  //       return "августа";
  //     case 8:
  //       return "сентября";
  //     case 9:
  //       return "октября";
  //     case 10:
  //       return "ноября";
  //     case 11:
  //       return "декабря";

  //     default:
  //       return "";
  //   }
  // };
  const monthArr = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

  const clickHandler = (e) => {
    e.preventDefault();
    setDate(new Date());
    console.log("Submited!");
  };

  return (
    <div className="submit-container">
      <button className="submit__button" type="submit" onClick={clickHandler}>
        Submit
      </button>
      <div className="submit__change-date">
        последние изменения {date.getDate()} {monthArr[date.getMonth()]} {date.getFullYear()} в {date.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default Submit;
