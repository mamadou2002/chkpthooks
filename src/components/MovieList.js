import React from "react";
import { data } from "./data";
import "../styles/MovieList.css";

// import Card from "./MovieCard";
function MovieList() {
  return (
    <div className="ban">
      {data.map((data) => (
        <div>
          <img src={data.poster} alt="" />
          <div className="rang">
            <h1>{data.movieName}</h1>
            <p>{data.description}</p>
            <p>{data.note}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default MovieList;
