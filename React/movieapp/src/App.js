import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";

export default function App() {
	const apiKey = "e2e9285e";

	let [movie, setMovie] = useState({});

	// async / await
	const getMovie = async (movieName) => {
		

		// Method chaining with then()
		// fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=star+wars`)
		//   .then((response) => response.json())
		//   .then((data) => console.log(data))
		//     .catch(e => console.log(e));

		try {
			const response = await fetch(
				`http://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`
			);
			const data = await response.json();
			console.log(data);
			setMovie(data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getMovie("Snakes on a Plane");
	}, []);

  useEffect(() => {
     const randomMovie = [ "The Matrix", "Star Wars", "The Godfather", "The Shawshank Redemption", "The Dark Knight", "The Lord of the Rings: The Return of the King", "Pulp Fiction", "Schindler's List", "The Good, the Bad and the Ugly", "Fight Club", "The Lord of the Rings: The Fellowship of the Ring", "Forrest Gump", "Inception", "The Lord of the Rings: The Two Towers", "The Matrix", "Star Wars", "The Godfather", "The Shawshank Redemption", "The Dark Knight", "The Lord of the Rings: The Return of the King", "Pulp Fiction", "Schindler's List", "The Good the Bad and the Ugly", "Fight Club"];

    const randomMovieIndex = Math.floor(Math.random() * randomMovie.length);
    getMovie(randomMovie[randomMovieIndex]);
  }, []);


	

	// Use our components in apps returned JSX
	// We pass the getMovie function to the Form component

	return (
		<div className="App">
			<Form getMovie={getMovie} />
			<MovieDisplay movie={movie} />
		</div>
	);
}
