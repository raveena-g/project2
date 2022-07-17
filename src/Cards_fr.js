import React from 'react';
import locale from "./locale_fr.json";

function Card(props){
  const current = locale;
    return(
      <div className="card">
        <div className="card_body">
          <a href={props.link}><h2 className = "card_title">{props.title}</h2></a>
          <img src={props.img} class="card_image"/>
          <h3> {current.rating}: {props.rating}/5 | {current.time}: {props.time} min</h3>
        </div>
      </div>
      )
  }

export default Card;