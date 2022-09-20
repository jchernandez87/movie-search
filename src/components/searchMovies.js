import "../styles/searchMovies.css"

const SearchMovies = () => (
  <form className="form">
    <label htmlFor="query" className="label">
      Movie Name
    </label>
    <input className="input" type="text" name="query" placeholder="my input" />
    <button className="button" type="submit">
      Search
    </button>
  </form>
);

export default SearchMovies;
