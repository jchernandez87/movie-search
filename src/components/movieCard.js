import "../styles/movieCard.css";

const MovieCard = (props) => (
  <div className="card">
    <img
      className="card--image"
      src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.poster_path}`}
      alt={props.title + " poster"}
    />
    <div className="card--content">
      <h3 className="card--title">{props.title}</h3>
      <p>
        <small>RELEASE DATE: {props.release_date}</small>
      </p>
      <p>
        <small>RATING: {props.vote_average}</small>
      </p>
      <p className="card--desc">{props.overview}</p>
    </div>
  </div>
);

export default MovieCard;
