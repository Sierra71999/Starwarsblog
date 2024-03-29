import React, { useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/card";
export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("characters")) &&
      JSON.parse(localStorage.getItem("planets")) &&
      JSON.parse(localStorage.getItem("vehicles"))
    ) {
      setCharacters(JSON.parse(localStorage.getItem("characters")));
      setPlanets(JSON.parse(localStorage.getItem("planets")));
      setVehicles(JSON.parse(localStorage.getItem("vehicles")));
    } else {
      fetch("https://swapi.tech/api/people")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setCharacters(data.results);
          localStorage.setItem("characters", JSON.stringify(data.results));
        });
      fetch("https://swapi.tech/api/planets")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setPlanets(data.results);
          localStorage.setItem("planets", JSON.stringify(data.results));
        });
      fetch("https://swapi.tech/api/vehicles")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setVehicles(data.results);
          localStorage.setItem("vehicles", JSON.stringify(data.results));
        });
    }
  }, []);
  return (
    <div className="text-center mt-5">
      <div>
        <h4>Characters</h4>
      </div>
      <div className="container d-flex">
        {characters.length
          ? characters.map((characters) => {
              return <Card character={characters} />;
            })
          : null}
      </div>
      <div>Planets</div>
      <div className="container d-flex">
        {planets.length
          ? planets.map((planets) => {
              return <Card planet={planets} />;
            })
          : null}
      </div>
      <div>Vehicles</div>
      <div className="container d-flex">
        {vehicles.length
          ? vehicles.map((vehicles) => {
              return <Card vehicle={vehicles} />;
            })
          : null}
      </div>
    </div>
  );
};
