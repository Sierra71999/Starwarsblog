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
      actions.setItem(props.character.uid);
      history(`/description/${props.character.url}`);
    } else if (props.planet) {
      actions.setItem(props.planet.uid);
      history(`/description/${props.planet.url}`);
    } else if (props.vehicle) {
      actions.setItem(props.vehicle.uid);
      history(`/description/${props.vehicle.url}`);
    }
  };
  return (
    <div className="card-container">
      {props.character ? (
        <h4 className="card-name">{props.character.name}</h4>
      ) : props.planet ? (
        <h4 className="card-name">{props.planet.name}</h4>
      ) : props.vehicle ? (
        <h4 className="card-name">{props.vehicle.name}</h4>
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
