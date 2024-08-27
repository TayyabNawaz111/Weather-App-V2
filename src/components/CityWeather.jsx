import React, { useEffect, useState } from "react";

function CityWeather({ city }) {
  const [weather, setWeather] = useState("");
  useEffect(() => {
    setWeather(`Here data will be populated for the ${city}`);
  });
  return (
    <div>
      <div>{weather}</div>
    </div>
  );
}

export default CityWeather;
