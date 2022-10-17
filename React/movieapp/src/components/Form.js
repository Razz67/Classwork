import { useState } from "react"

export default function Form({ getMovie }) {

    let [movieName, setMovieName] = useState("");
    const handleChange = (evt) => {
        setMovieName(evt.target.value);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

        // Call the getMovie function passed in as a prop
        // This function is defined in App.js
        getMovie(movieName);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={movieName} onChange={handleChange} />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
    
}