let quotes = [
	`I live my life a quarter mile at a time`,
	`I said a ten-second car, not a ten-minute car`,
	`You can have any brew you want... as long as it's a Corona.`,
	`You almost had me? You never had me - you never had your car!`,
	`I don't have friends. I have family.`,
	`It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener("DOMContentLoaded", function (event) {
	// Random quote of the day generator
	const randomQuote = () => {
		document.querySelector("#quote-of-the-day").textContent = `"${
			quotes[Math.floor(Math.random() * quotes.length)]
		}"`;
	};
	randomQuote();


	// Do all of your work inside the document.addEventListener

	// Part 1 Change Text

	document.getElementById("main-title").innerHTML =
		"Welcome to the DOM... Lab 3";
	// Part 2 Change background color

	document.getElementsByTagName("body")[0].style.backgroundColor = "lightblue";

	// Part 3 Remove the last list item from the unordered list

	let menu = document.getElementById("favorite-things");
	menu.removeChild(menu.lastElementChild);

	// Part 4 change all elements with class special-title  font-size: to 2em;

	let specialTitle = document.getElementsByClassName("special-title");
	for (let title of specialTitle) {
		title.style.fontSize = "2rem";
	}

	// Part 5 remove third index item from the list

	let lists = document.querySelectorAll("#past-races li");
	for (let city of lists) {
		if (city.textContent === "Chicago") {
			city.remove();
		}
	}

	// Part 6 add an item to past-races list

	let addCity = document.createElement("li");
	const listText = document.createTextNode("Mayberry");
	addCity.appendChild(listText);
	document.getElementById("past-races").appendChild(addCity);

	// Part 7 Add a new blog post
	
	let mainClass = document.querySelector(".main");
	
	let newDiv = document.createElement("div")
	newDiv.classList.add("blog-post", "purple");
	let h1 = document.createElement("h1");
	h1.innerHTML = "Mayberry";

	newDiv.append(h1);
	let newP = document.createElement("p");
	newP.innerHTML = "Me and Andy chilled on the porch";
	newDiv.append(newP);
	mainClass.append(newDiv)

	// Part 8 Randomize the qoutes when the button is clicked
	let quoteBtn = document.querySelector("#quote-title");
	quoteBtn.addEventListener("click", randomQuote);
	

	// Part 9 on mouseover, change the background colore of the blog-post to red on mouseout, change the background color to purple on mouseout

	let blogPost = document.getElementsByClassName("blog-post");
	for (let post of blogPost) {
		post.addEventListener("mouseover", () => {
			post.style.backgroundColor = "red";
		});

		post.addEventListener("mouseout", () => {
			post.style.backgroundColor = "purple";
		});
	}
});
