import { Field } from "formik";
import "./Cities.scss";
import { sortedCitiesData } from "../../../utils/CitiesData";

const Cities = ({ itemName }) => {
  return (
    <div className="cities-container">
      <label className="cities-label" htmlFor="cities-input">
        Ваш город
      </label>
      <Field as="select" name={itemName} id="cities-input">
        {sortedCitiesData.map((item) => (
          <option key={item.city} value={item.city}>
            {item.city}
          </option>
        ))}
      </Field>
    </div>
  );
};

export default Cities;
