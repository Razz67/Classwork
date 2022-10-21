import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NotesForm from "../components/NotesForm";

export default function MovieDetails({ favorites, addMoreToFavorite }) {
	let params = useParams();
	let navigate = useNavigate();

	let [movieDetails, setMovieDetails] = useState({});

	useEffect(() => {
		const movie = favorites.filter((m) => params.id === m.imdbID); // filter returns an array with the matching movie

		if (movie.length) {
			setMovieDetails(movie[0]);
		} else {
			navigate("/");
		}
	}, []);

	return (
		<div>
			<h2>Movie Details</h2>
			<h3>
				{movieDetails.Title} ({movieDetails.Year})
			</h3>
			<img src={movieDetails.Poster} alt={movieDetails.Title} />
			<p>Genre: {movieDetails.Genre}</p>
			<p>Director: {movieDetails.Director}</p>
			<p>Runtime: {movieDetails.Runtime}</p>
			<p>Rating: {movieDetails.imdbRating}</p>
			<p>Plot: {movieDetails.Plot}</p>

			{/* {
				movieDetails.critique ? 
				<p>Rating: {movieDetails.rating}</p>
				<p>Critique: {movieDetails.critique}</p>
			} */}

			<NotesForm 
			addMoreToFavorite={addMoreToFavorite}
			movieID={movieDetails.imdbID}
			/>
		</div>
	);
}
