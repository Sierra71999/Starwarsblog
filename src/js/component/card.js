import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export default function Card(props) {
  // false so it doesnt start with something favorited
  const [liked, setLiked] = useState(false);
  const { store, actions } = useContext(Context);
  //line 10 helps it move
  const history = useNavigate();

  const goToDescription = () => {
    if (props.character) {
      actions.setItem(props.characters.url);
      history(`/description/${props.character.uid}`);
    } else if (props.planet) {
      actions.setItem(props.planet.url);
      history(`/description/${props.planet.uid}`);
    } else if (props.character) {
      actions.setItem(props.vehicle.url);
      history(`/description/${props.vehicle.uid}`);
    }
  };
  return (
    <div className="card-container">
      {props.character ? (
        <div>
          <h4 className="card-name">{props.character.name}</h4>
          <img
            src={`https://starwars-visualguide.com/#/characters/${
              props.id + 1
            }.jpg`}
            onError={(e) => {
              e.target.src =
                "https://starwars-visualguide.com/assets/img/placeholder.jpg";
            }}
            className="card-img-top"
            style={{ maxHeight: "300px", objectFit: "cover" }}
            alt="Images of Star Wars Characters"
          />
        </div>
      ) : props.planet ? (
        <div>
          <h4 className="card-name">{props.planet.name}</h4>
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${
              props.id + 1
            }.jpg`}
            onError={(e) => {
              e.target.src =
                "https://starwars-visualguide.com/assets/img/placeholder.jpg";
            }}
            className="card-img-top"
            style={{ height: "300px", objectFit: "cover" }}
            alt="Images of Planets in Star Wars"
          />
        </div>
      ) : props.vehicle ? (
        <div>
          <h4 className="card-name">{props.vehicle.name}</h4>
          <img
            src={`https://starwars-visualguide.com/assets/img/starships/${
              props.id + 1
            }.jpg`}
            onError={(e) => {
              e.target.src =
                "https://starwars-visualguide.com/assets/img/placeholder.jpg";
            }}
            className="card-img-top"
            style={{ height: "300px", objectFit: "cover" }}
            alt="Images of Planets in Star Wars"
          />
        </div>
      ) : null}
      {/* if its not any of these reture nothing */}
      <div>
        <button className="btn btn-primary" onClick={goToDescription}>
          Click
        </button>
        {/* put favorites button here */}
      </div>
    </div>
  );
}
