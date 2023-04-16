import { useState, useEffect } from "react";
import cities from "../../data/cities.json";
import "./Cities.scss";

const Icon = () => {
  return (
    <svg height="20" width="20" viewBox="0 0 20 20">
      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
    </svg>
  );
};

const Cities = () => {
  const citiesData = JSON.parse(JSON.stringify(cities));
  const sortedCitiesData = citiesSorter(citiesData, 50000);

  function citiesSorter([...arr], populationRange) {
    const deleteLessPopulation = arr.filter((item) => item.population > populationRange);
    const max = deleteLessPopulation.reduce((acc, curr) => (+acc.population > +curr.population ? acc : curr));
    return deleteLessPopulation.sort((a, b) => (a === max ? -1 : b === max ? 1 : a.city.localeCompare(b.city)));
  }

  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  useEffect(() => {
    const handler = () => setShowMenu(false);

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });
  const handleInputClick = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
  };

  const getDisplay = () => {
    if (selectedValue) {
      return selectedValue.city;
    }
    return sortedCitiesData[0].city;
  };

  const onItemClick = (item) => {
    setSelectedValue(item);
  };

  const isSelected = (item) => {
    if (!selectedValue) {
      return false;
    }

    return selectedValue.value === item.city;
  };

  return (
    <div className="cities-container">
      <label className="cities-label" htmlFor="cities-input">
        Ваш город
      </label>
      <div className="cities-input" id="cities-input" onClick={handleInputClick}>
        <div className="cities-selected-value">{getDisplay()}</div>
        <div className="cities-tools">
          <div className="cities-tool">
            <Icon />
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="cities-menu">
          {sortedCitiesData.map((item) => (
            <div className={`cities-menu__item ${isSelected(item) && "selected"}`} key={item.city} onClick={() => onItemClick(item)}>
              {item.city}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cities;
