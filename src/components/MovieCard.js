import React from "react";

function Card(props) {
      return (
        <div >
        <img src={props.poster} alt="" />
        <h1>{props.movieName}</h1>
        <h2>{props.description}</h2>
        <p>{props.note}</p>
        </div>      
      );
  
    }
  
  export default Card