import React from "react";

export default function Card({ movie, onClick }) {
  return (
    <div className="movie-card" onClick={onClick}>
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </div>
  );
}
