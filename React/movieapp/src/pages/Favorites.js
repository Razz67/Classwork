import MovieDisplay from "../components/MovieDisplay";

export default function Favorites({ favorites, removeFromFavorites }) {
	return (
		<div>
			<h2>Favorites</h2>
			{favorites.map((movie) => {
				return (
					<MovieDisplay
						removeFromFavorites={removeFromFavorites}
						key={movie.imdbID}
						movie={movie}
					/>
				);
			})}
		</div>
	);
}
