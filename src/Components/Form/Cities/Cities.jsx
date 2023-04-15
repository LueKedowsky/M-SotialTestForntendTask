import React from "react";
import cities from "../../data/cities.json";

const Cities = () => {
  const citiesData = JSON.parse(JSON.stringify(cities));
  // console.log(citiesData);

  return (
    <div className="cities-container">
      {citiesData.map((item) => {
        return (
          <div className="cities-inner-container" key={item.city}>
            <div className="cities-name">{item.city}</div>
            <div className="cities-population">{item.population}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Cities;
