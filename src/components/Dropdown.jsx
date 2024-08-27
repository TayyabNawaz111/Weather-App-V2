import React, { useState } from "react";
import CityWeather from "./CityWeather";

function Dropdown({ countries }) {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [cities, setCities] = useState([]);

  function handleChange(e) {
    const country = e.target.value;
    setSelectedCountry(country);
    const selectedCountryData = countries.find((c) => c.country === country);
    setCities(selectedCountryData ? selectedCountryData.cities : []);
  }

  return (
    <div>
      <select onChange={handleChange} value={selectedCountry}>
        <option value="" disabled>
          Select the country
        </option>
        {countries.map((currCountry) => (
          <option key={currCountry.key} value={currCountry.country}>
            {currCountry.country}
          </option>
        ))}
      </select>
      {cities.length > 0 && cities.map((city,index) => <CityWeather city={city} key={index}  />)}
    </div>
  );
}

export default Dropdown;
