import { useState } from "react";

export default function NotesForm(addMoreToFavorite, movieID) {


    let [form, setForm] = useState({
        rating: "",
        critique: "",
    })


    const handleChanges = (e) => {
        // if(e.target.id === "rating") {
        //     // setForm(prevState => {
        //         //     return {...prevState, rating: e.target.value)
        // setForm({...form, rating: e.target.value})
        // } else {
        //     setForm({...form, critique: e.target.value})
        // } 
        
        // computed property name (Same as above if/else)
        setForm({...form, [e.target.id]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        addMoreToFavorite(form, movieID);

    }


    return (
        <form onSubmit={handleSubmit}>
            {/* // Keep track of the notes in state, input own rating, critque, etc. */}
            <label htmlFor="rating">My Rating:</label>
            <br />
            <input 
            type="text" 
            value={form.rating} 
            id="rating" 
            onChange={handleChanges}/>
            <br /><br />
            
            <label htmlFor="notes">My Critique:</label>
            <br />

            <textarea 
            value={form.critique} 
            onChange={handleChanges} 
            cols="25" 
            rows="10" 
            id="critique" 
            placeholder={"Critique"} />
            <br /><br />

            <button>Submit</button>
        </form>
    );
}