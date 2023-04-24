import { Field } from "formik";
import "./Cities.scss";

const Cities = ({ itemName, sortedCitiesData }) => {
  return (
    <div className="cities-container">
      <label className="cities-label" htmlFor="cities-input">
        Ваш город
      </label>
      <Field as="select" name={itemName} id="cities-input" className="cities-input">
        {sortedCitiesData.map((item) => (
          <option key={item.city} value={item.city} className="cities-input__option">
            {item.city}
          </option>
        ))}
      </Field>
    </div>
  );
};

export default Cities;
