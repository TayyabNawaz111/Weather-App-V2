import React from "react";
import "./index.css";
import Logo from "./components/Logo";
import Dropdown from "./components/Dropdown";

function App() {
  const countries = [
    {
      key: 1,
      country: "United States",
      cities: ["New York City", "Los Angeles", "Chicago", "San Francisco"],
    },
    {
      key: 2,
      country: "United Kingdom",
      cities: ["London", "Manchester", "Birmingham", "Edinburgh"],
    },
    {
      key: 3,
      country: "Canada",
      cities: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
    },
    {
      key: 4,
      country: "Australia",
      cities: ["Sydney", "Melbourne", "Brisbane", "Perth"],
    },
    {
      key: 5,
      country: "India",
      cities: ["Mumbai", "New Delhi", "Bangalore", "Kolkata"],
    },
    {
      key: 6,
      country: "Germany",
      cities: ["Berlin", "Munich", "Frankfurt", "Hamburg"],
    },
    {
      key: 7,
      country: "France",
      cities: ["Paris", "Marseille", "Lyon", "Nice"],
    },
    {
      key: 8,
      country: "Japan",
      cities: ["Tokyo", "Osaka", "Kyoto", "Yokohama"],
    },
    {
      key: 9,
      country: "Brazil",
      cities: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
    },
    {
      key: 10,
      country: "China",
      cities: ["Beijing", "Shanghai", "Guangzhou", "Shenzhen"],
    },
  ];

  return (
    <>
      <Logo />
      <Dropdown countries={countries} />
    </>
  );
}

export default App;
