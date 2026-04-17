import React, { useEffect, useState } from "react";

export default function MovieDetails({ movie, onBack }) {
  const [details, setDetails] = useState(null);

  const API_KEY = "YOUR_API_KEY_HERE";

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [movie]);

  if (!details) return <p>Loading...</p>;

  return (
    <div className="details">
      <button onClick={onBack}>⬅ Back</button>

      <h2>{details.Title}</h2>
      <img src={details.Poster} alt={details.Title} />

      <p><b>Year:</b> {details.Year}</p>
      <p><b>Genre:</b> {details.Genre}</p>
      <p><b>Plot:</b> {details.Plot}</p>
      <p><b>IMDB Rating:</b> {details.imdbRating}</p>
    </div>
  );
}

