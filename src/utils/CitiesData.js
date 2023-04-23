import cities from "../data/cities.json";

const citiesData = JSON.parse(JSON.stringify(cities));
export const sortedCitiesData = citiesSorter(citiesData, 50000);

// remove cities with less population then range, move city with highest population on 1st pos and sorting alphabetically rest cities
function citiesSorter([...arr], populationRange) {
  const deleteLessPopulation = arr.filter((item) => item.population > populationRange);
  const max = deleteLessPopulation.reduce((acc, curr) => (+acc.population > +curr.population ? acc : curr));
  return deleteLessPopulation.sort((a, b) => (a === max ? -1 : b === max ? 1 : a.city.localeCompare(b.city)));
}
