import { useState } from "react";

export default function Counter(props) {

    // const countState = useState(0);

    // let count = countState[0];  // equal 0
    // let setCount = countState[1]; // function

    // Array Destructuring Syntax
    let [count, setCount] = useState(0); //initial val=0,  does the same as above 3 lines
    let [number, setNumber] = useState(0);
    
    const handleIncrement = () => {
        setCount(prevState => prevState + parseInt(number))

    }

    const handleDecrement = () => {
        setCount((prevState) => prevState - parseInt(number));
    }

    const handleDivision = () => {
        setCount((prevState) => prevState / parseInt(number));
    }

    const handleMultiplication = () => {
        setCount((prevState) => prevState * parseInt(number));
    }

    const handleChange = (e) => {
        setNumber(e.target.value)
    }

    console.log(count);

    return (
			<>
				<span>Current Count: {count}</span>
				<section>
                <input type="number" 
                name="input" 
                value={number} 
                onChange={handleChange} />
                <br />

					<button onClick={ handleIncrement }>+</button>
					<button onClick={handleDecrement}>-</button><br />
					<button onClick={handleDivision}>/</button>
					<button onClick={handleMultiplication}>*</button>
				</section>
			</>
		);
    
}

// Create two buttons
// One uses the setCount function to divide the number by 2
// The other to  multiply the number by 2

// Use the number input in your various handlers
// to + - * / specified number
// If user inputs 5 and hits + we see 5