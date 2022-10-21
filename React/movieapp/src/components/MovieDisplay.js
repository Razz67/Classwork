import { useLocation, Link } from "react-router-dom";

function MovieDisplay({
	movie,
	addToFavorites,
	removeFromFavorites,
	favorites,

}) {
	let location = useLocation();

	const alreadyFavorited = () => {
	    let check = favorites?.find((m) => m.imdbID === movie.imdbID)
	    if (check) {
	        return true
	    } else {
	        return false
	    }
	}

	const loaded = () => {
		if (location.pathname === "/favorites") {
			return (
				<div>
					<Link to={`/favorites/${movie.imdbID}`}>
						<img src={movie.Poster} alt={movie.Title} />
					</Link>
					<br />
					<button onClick={() => removeFromFavorites(movie)}>
						Remove from Favorites
					</button>
				</div>
			);
		} else {
			return (
				<div>
					<h1>
						{movie.Title} ({movie.Year})</h1>
					<h2>{movie.Genre}</h2>
					<img src={movie.Poster} alt={movie.Title} />
					<br />
					{
						alreadyFavorited() ? "favorited" : 

						<button onClick={() => addToFavorites(movie)}>
							Add to Favorites
						</button>
					}
					<br />
					<br />
				</div>
			);
		}
	};

	//   console.log(favorites.find((m) => m.imdbID === "tt0112697"))

	const loading = () => {
		return <div>No movie data to display... :(</div>;
	};

	return movie ? loaded() : loading();
}

export default MovieDisplay;
