import React, { useState, useEffect } from "react";
import SearchBar from "./Component/SearchBar";
import Card from "./Component/Card";
import MovieDetails from "./Component/MovieDetails";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const API_KEY = "a3987981";

  useEffect(() => {
    if (query) {
      fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.Search || []);
        });
    }
  }, [query]);

  return (
    <div>
      <h1>Movie Browser</h1>

    
      <SearchBar setQuery={setQuery} />

  
      <div className="movie-grid">
        {movies.map((movie) => (
          <Card
            key={movie.imdbID}
            movie={movie}
            onClick={setSelectedMovie}
          />
        ))}
      </div>

      {selectedMovie && <MovieDetails movie={selectedMovie} />}
    </div>
  );
}

export default App;