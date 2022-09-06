function query(events) {
	// use this variable to store the value of the current borough (as a string)
	// EXAMPLE: let borough = "BRONX"
	let borough = events.target.id;

	// use this variable to store the number of results the user requested (as a string or number)
	// EXAMPLE: let numOfResults = 5
	let numOfResults = document.getElementById("input-box").value;
	if (numOfResults === "") {
		numOfResults = 10;
	}

	// leave the next four lines alone
	// in a nutshell, we make a request to a free and public api that handles NYPD data
	// and it eventually gives us back an object (JSON) to deal with

	let api = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=${borough.toUpperCase()}&$limit=${numOfResults}`;

	fetch(api)
		.then((data) => data.json())
		.then((json) => showResults(json))
}

// you'll do most of your DOM Manipulation in this function
document.getElementById("brooklyn").addEventListener("click", query);
document.getElementById("manhattan").addEventListener("click", query);
document.getElementById("queens").addEventListener("click", query);
document.getElementById("statenIsland").addEventListener("click", query);
document.getElementById("bronx").addEventListener("click", query);

function showResults(complaints) {
        document.getElementById("div1").innerHTML = "";
        document.getElementById("div2").innerHTML = "";

        for (let i = 0; i < complaints.length; i++) {
        document.getElementById("div1").innerHTML += `<p>${complaints[i].descriptor}</p>`;        
        document.getElementById("div2").innerHTML += `<details> <summary> POLICE RESPONSE </summary> ${complaints[i].resolution_description} </details>`;
        }
}
