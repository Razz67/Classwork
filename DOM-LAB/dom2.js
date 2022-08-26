// 4.0 select and assign sub-menu element to subMenuEl
let subMenuEl = document.getElementById("sub-menu");

// 4.1 set sub-menu height to 100%
subMenuEl.style.height = "100%";

// 4.2 set sub-menu background color to var(--sub-menu-bg)
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// 4.3 Add class "flex-around" to subMenuEl
subMenuEl.classList.add("flex-around");

// 4.4 Set subMenuEl position to absolute
subMenuEl.style.position = "absolute";

// 4.5 Set subMenuEl top to top 0
subMenuEl.style.top = "0";

// 5.1 Select all a tags in topMenuEl
let topMenuLinks = topMenuEl.querySelectorAll("a");

// Set showingSubMenu to false
// let showingSubMenu = false;

// 5.2 Add event listener to topMenuEl
topMenuEl.addEventListener("click", (event) => {
	// call preventDefault on event
	event.preventDefault();

	// return if element clicked is not an a tag
	if (event.target.tagName !== "A") return;

	// console.log the content of a tag clicked
	console.log(event.target.textContent);

	// 5.3.1 remove active class from the clicked a tag
	event.target.classList.remove("active");

	// 5.3.2 Set showingSubMenu to false
	showingSubMenu = false;

	// 5.3.3 Set subMenuEl top to top 0
	subMenuEl.style.top = "0";

	// 5.3.4 Exit the function
	// return;

	// 5.4 remove active class from all a tags in topMenuLinks
	for (const topMenuLinks of topMenuLinks) {
		topMenuLinks.classList.remove("active");
	}

	// Add class "active" to the clicked a tag
	topMenuLinks.target.classList.add("active");

	// 5.6 Set showingSubMenu to true if the clicked a elements link object has a subLinks property except the object for about
	if (
		topMenuLinks.target.subLinks.link &&
		topMenuLinks.target.link.text !== "about"
	) {
		showingSubMenu = true;
	} else {
		showingSubMenu = false;
	}

	// save the link object to a variable

	// 5.7.1 If showingSubMenu is true call a buildSubMenu function passing the subLink array for the clicked a element
	if (showingSubMenu) {
		buildSubMenu(linkObj.subLinks);
	} else {
		showingSubMenu = false;
	}

	// Set the top property of subMenuEl to 0
	subMenuEl.style.top = "0";

	// 5.8 buildSubMenu function clears the contents of subMenuEL
	function buildSubMenu(subLinks) {
		// 5.8.1 Clear the contents of subMenuEl
		subMenuEl.innerHTML = "";
		// 5.8.2 For each subLink in subLinks add an a tag to subMenuEl
		for (const subLink of subLinks) {
			const a = document.createElement("a");
			a.setAttribute("href", subLink.href);
			a.textContent = subLink.text;
			subMenuEl.appendChild(a);
		}
	}

	// 6.0 Add event listener to subMenuEl
	subMenuEl.addEventListener("click", function (event) {
		// Prevent default on c
		event.preventDefault();

		// If the clicked element is not an a tag return
		if (event.target.tagName !== "A") return;

		// Log the text content of the clicked element
		console.log(event.target.textContent);

		// 6.1 Set showingSubMenu to false
		showingSubMenu = false;
        
		// Set top property of subMenuEl to 0
		subMenuEl.style.top = "0";

		//6.2 remove active class from all a tags in topMenuLinks
		for (const topMenuLinks of topMenuLinks) {
			topMenuLinks.classList.remove("active");
		}

		// 6.3 update the contents of mainEl to the contents of the a elements clicked in subMenuEl
		subMenuEl.addEventListener("click", function (event) {
			// 6.4 if about is clicked display an h1 with text "About"
			if (event.target.textContent === "about") {
				mainEl.textContent = "";
				let h1 = document.createElement("h1");
				h1.textContent = "About";
				mainEl.appendChild(h1);
			}
		});
	});
});
