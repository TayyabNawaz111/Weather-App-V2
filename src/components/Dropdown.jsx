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
    <div className="w-full max-w-4xl text-center mx-auto p-4">
      <select
        onChange={handleChange}
        value={selectedCountry}
        className="w-full max-w-sm p-3 mb-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="" disabled>
          Select the country
        </option>
        {countries.map((currCountry) => (
          <option key={currCountry.key} value={currCountry.country}>
            {currCountry.country}
          </option>
        ))}
      </select>
      <div className="flex flex-wrap justify-center gap-4">
        {cities.length > 0 && cities.map((city, index) => (
          <div className="flex-1 min-w-[300px] max-w-xs" key={index}>
            <CityWeather city={city} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
