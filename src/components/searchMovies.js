import { useState } from "react";
import MovieCard from "./movieCard";
import "../styles/searchMovies.css";

const SearchMovies = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovie = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=87919f386ab96ad193018d6c91f59bcf&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      const { results } = data;
      setMovies(results);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
  };

  const movieList = movies
    .filter((movie) => movie.poster_path)
    .map((movie) => <MovieCard key={movie.id} movie={movie} />);

  const myMovies = movies.length === 0 ? <h2>No Movies Found</h2> : movieList;

  return (
    <>
      <form className="form" onSubmit={searchMovie}>
        <label htmlFor="query" className="label">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e Jurassic Park"
          value={query}
          onChange={handleChange}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">{myMovies}</div>
    </>
  );
};

export default SearchMovies;
