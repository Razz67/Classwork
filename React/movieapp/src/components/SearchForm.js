import { useState } from "react";

export default function Form({ getMovie }) {
	let [movieName, setMovieName] = useState("");

	const handleChange = (e) => {
		setMovieName(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		getMovie(movieName);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="search">Search:</label>
				<br />
				<input
					id="search"
					type="text"
					value={movieName}
					onChange={handleChange}
				/>
				<input type="submit" value="submit" />
			</form>
		</div>
	);
}
