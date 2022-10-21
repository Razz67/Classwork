import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/NavBar";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";


let init = false;

export default function App() {
	// must have REACT_APP_ at the start
	const apiKey = process.env.REACT_APP_API_KEY;

	let [movie, setMovie] = useState(null);
	let [favorites, setFavorites] = useState([]);

	let navigate = useNavigate();

	const addToFavorites = (movie) => {
		setFavorites([...favorites, movie]);
		alert(`Added ${movie.Title} to favorites!`);
		navigate("/favorites");
	};

	const removeFromFavorites = (movie) => {
		// movie.favorited = false;
		let filteredArr = favorites.filter((m) => m.imdbID !== movie.imdbID);
		setFavorites(filteredArr);
	};

	const addMoreToFavorite = (more, id) => {

		let newUpdatedToFavorites = favorites.map((m => {
			if(m.imdbID === id) {
				return {...m, rating: more.rating, critique: more.critique}
			} else {
				return m;
			}
		}))

			// Alternative to above
	// favorites.map(m => m.imdbID === id ? {...m, ...more } : m)

		setFavorites(newUpdatedToFavorites);
	};





	//  async / await
	const getMovie = async (movieName) => {
		// method chaining with .then to handle asynchronous requests
		// fetch(`http://www.omdbapi.com/?apikey=${apiKey}&t=godfather`)
		//   .then((res) => res.json())
		//   .then((data) => console.log(data))
		//   .catch(e => console.log(e))

		try {
			const response = await fetch(
				`http://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`
			);
			const data = await response.json();
			console.log(data);
			setMovie(data);
		} catch (err) {
			console.log("ERROR! OH NO!!");
			console.log(err);
		}
	};


	useEffect(() => {
		console.log("movie data has changed!", movie);
	}, [movie]);

	useEffect(() => {
		if (!init) {
			const randomMovie = [
				"The Matrix",
				"Star Wars",
				"The Godfather",
				"The Shawshank Redemption",
				"The Dark Knight",
				"The Lord of the Rings: The Return of the King",
				"Pulp Fiction",
				"Schindler's List",
				"The Good, the Bad and the Ugly",
				"Fight Club",
				"The Lord of the Rings: The Fellowship of the Ring",
				"Forrest Gump",
				"Inception",
				"The Lord of the Rings: The Two Towers",
				"The Matrix",
				"Star Wars",
				"The Godfather",
				"The Shawshank Redemption",
				"The Dark Knight",
				"The Lord of the Rings: The Return of the King",
				"Pulp Fiction",
				"Schindler's List",
				"The Good the Bad and the Ugly",
				"Fight Club",
			];

			const randomMovieIndex = Math.floor(Math.random() * randomMovie.length);
			getMovie(randomMovie[randomMovieIndex]);
			init = true;
		}
	}, []);

	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={
						<Home
							addToFavorites={addToFavorites}
							movie={movie}
							getMovie={getMovie}
							favorites={favorites}
						/>
					}
				/>
				<Route
					path="/favorites"
					element={
						<Favorites
							removeFromFavorites={removeFromFavorites}
							favorites={favorites}
						/>
					}
				/>
				<Route
					path="/favorites/:id"
					element={<MovieDetails addMoreToFavorite={addMoreToFavorite} favorites={favorites} />}
				/>
			</Routes>
		</div>
	);
}

/*

TODO List:

1. Implement Router and have a Home, Favorites, and
a MovieDetails page
2. Be able to add a movie to our favorites list
3. Be able to remove a movie from our favorites list
4. Have our movie images in the Favorites page be
clickable and take us to the MovieDetails page
5. Create a Navbar to navigate to different pages

Maybe... (if time allows)

5. Have a form where I can add notes and my own personal 
rating for my favorited movies

*/

// Use our components in apps returned JSX
// We pass the getMovie function to the Form component

/* 
		TODO:

1. Implement Router and have a Home, morites, MovieDetails page
2. Be able to add a movie to morites
3. Be able to remove a movie from morites
4. Have our moveie images in morites page be clickable and take us to the MovieDetails page
5. Have a form where I can add notes and own rating to morite movie
6. Create navbars

*/
