import SearchForm from "../components/SearchForm";
import MovieDisplay from "../components/MovieDisplay";

export default function Home({ movie, getMovie, addToFavorites, favorites }) {
	return (
		<div>
			<MovieDisplay
				movie={movie}
				addToFavorites={addToFavorites}
				favorites={favorites}
			/>
			<SearchForm getMovie={getMovie} />
		</div>
	);
}
