import cities from "../../data/cities.json";
import "./Cities.scss";

const Cities = ({ register, errors, name }) => {
  const citiesData = JSON.parse(JSON.stringify(cities));
  const sortedCitiesData = citiesSorter(citiesData, 50000);

  // remove cities with less population then range, move city with highest population on 1st pos and sorting alphabetically rest cities
  function citiesSorter([...arr], populationRange) {
    const deleteLessPopulation = arr.filter((item) => item.population > populationRange);
    const max = deleteLessPopulation.reduce((acc, curr) => (+acc.population > +curr.population ? acc : curr));
    return deleteLessPopulation.sort((a, b) => (a === max ? -1 : b === max ? 1 : a.city.localeCompare(b.city)));
  }

  return (
    <div className="cities-container">
      <label className="cities-label" htmlFor="cities-input">
        Ваш город
      </label>
      <select {...register(name)} id="cities-input">
        {sortedCitiesData.map((item) => (
          <option key={item.city} value={item.city}>
            {item.city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Cities;
