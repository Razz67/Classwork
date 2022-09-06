let menuLinks = [
	{ text: "about", href: "/about" },
	{
		text: "catalog",
		href: "#",
		subLinks: [
			{ text: "all", href: "/catalog/all" },
			{ text: "top selling", href: "/catalog/top" },
			{ text: "search", href: "/catalog/search" },
		],
	},
	{
		text: "orders",
		href: "#",
		subLinks: [
			{ text: "new", href: "/orders/new" },
			{ text: "pending", href: "/orders/pending" },
			{ text: "history", href: "/orders/history" },
		],
	},
	{
		text: "account",
		href: "#",
		subLinks: [
			{ text: "profile", href: "/account/profile" },
			{ text: "sign out", href: "/account/signout" },
		],
	},
];

/* ************************************** Selecting and styling the <main> section ***********************/

// 1.0 Creat a variable name mainEl and set it to the element with the id of main
let mainEl = document.querySelector("main");

// 1.1 Set the background color of mainEl to --main-bg
mainEl.style.backgroundColor = "var(--main-bg)";

// 1.2 set content of mainEl to h1 with text "SEI Rocks!"
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

// 1.3 add flex-ctr class to mainEl
mainEl.classList.add("flex-ctr");

/* ****************************** Selecting and styling the top-menu id in the nav section ***********************/

// 2.0 Create a variable called topMenuEl and set it to the top-menu element
let topMenuEl = document.getElementById("top-menu");

// 2.1 Set height of topMenuEl to 100%
topMenuEl.style.height = "100%";

// 2.2 Set background color of topMenuEl to var(--top-menu-bg)
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// 2.3 add class "flex-around" to topMenuEl
topMenuEl.classList.add("flex-around");

/* ************************** Traversing through menuLinks, adding href corresponding to link text ***********************/

// 3.1 Iterate over menuLinks array
menuLinks.forEach((element) => {
	// 3.2 Create a new a tag
	let links = document.createElement("a");

	// 3.3 Add an href attribute to the a tag and set it to the href property of the element
	links.setAttribute("href", element.href);

	// 3.4 Set the new <a> elements content to the value of the text property of the link object
	links.textContent = element.text;

	// 3.4 Append the new tag to the top-menu element
	topMenuEl.appendChild(links);
});

// ********** Start Part 2 **********

/* ************************** Building and styling the subMenu ***********************/

// 4.0 Assign sub-menu to subMenuEl
let subMenuEl = document.getElementById("sub-menu");

// 4.1 Set height of subMenuEl to 100%
subMenuEl.style.height = "100%";

// 4.2 Set subMenuEl background color to var(--sub-menu-bg)
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// 4.3 Add class "flex-around" to subMenuEl
subMenuEl.classList.add("flex-around");

// 4.4 Set subMenuEl position to absolute
subMenuEl.style.position = "absolute";

// 4.5 Set sumMenuEl top property to top 0
subMenuEl.style.top = 0;

// 5.1 Select all <a> tags in topMenuEl and assign to topMenuLinks
let topMenuLinks = topMenuEl.querySelectorAll("a");

/* ************************** Hiding the subMenu and adding event listener to topMenuLinks **********************	*/

// Set showingSubMenu to false
let showingSubMenu = false;

// 5.2 Attach a delegated event listener to topMenuEl
topMenuEl.addEventListener("click", handleClick);

function handleClick(event) {
	// 5.2.1 call preventDefault on event
	event.preventDefault();

	// 5.2.2 If event target is not an a tag, return
	if (event.target.tagName !== "A") {
		return;
	}

	// 5.2.3 console log event target
	console.log(event.target.text);

	// 5.3.1 if clicked link has class "active" remove it
	if (event.target.classList.contains("active")) {
		event.target.classList.remove("active");

		// 5.3.2 Set showingSubMenu to false
		showingSubMenu = false;

		// 5.3.3 Set subMenuEl top property to top 0
		subMenuEl.style.top = "0";
		return;
	}

	// 5.4 Remove class "active" from all a tags in topMenuLinks
	for (let i = 0; i < topMenuLinks.length; i++) {
		topMenuLinks[i].classList.remove("active");
	}

	// 5.5 Add class "active" to topMenuLink that was clicked
	event.target.classList.add("active");

	// 5.6 set showingSubMenu to true if the clicked a elements link object within menuLinks has a subLinks property except for the link object for the about link
	const linkName = event.target.textContent;
	const menuLink = menuLinks.find((link) => {
		return link.text === linkName;
	});

	if (menuLink.subLinks) {
		showingSubMenu = true;
	} else {
		showingSubMenu = false;
	}

	/* ****************************** Build subMenu ************************************/
	
	// 5.7 if showingSubMenu is true, call buildSubMenu function passing it to the subLinks array of the clicked a elements
	if (showingSubMenu) {
		buildSubMenu(menuLink.subLinks);

		// 5.7.2 Set subMenuEl top property to top 0 otherwise showingSubMenu is false
		subMenuEl.style.top = "100%";
	} else {
		subMenuEl.style.top = "0";
	}

	// 6.4  Change h1 to about when about link is clicked. had to put this here because it was not working anywhere else
	if (linkFiname === "about") {
		mainEl.innerHTML = "<h1>about</h1>";
	}
}

// 5.8 create buildSubMenu function
let buildSubMenu = (subLinks) => {
	// 5.8.1 Clear subMenuEl innerHTML
	subMenuEl.textContent = "";

	// 5.8.2 Iterate over subLinks array passed as an argument
	for (let i = 0; i < subLinks.length; i++) {
		// 5.8.2/1 Create a new a tag
		let newA = document.createElement("a");

		// 5.8.2/2 Add an href attribute to the a tag and set it to the href property of the element
		newA.setAttribute("href", subLinks[i].href);

		// 5.8.2/3 Set text content of a tag to the text property of the element
		newA.innerHTML = subLinks[i].text;

		// 5.8.2/4 Append the new tag to the subMenuEl
		subMenuEl.appendChild(newA);
	}
};

// 6.0 Add a delegate click event listener to subMenuEl
subMenuEl.addEventListener("click", (event) => {
	// 6.0/1 Call preventDefault on event
	event.preventDefault();

	// 6.0/2 If event target is not an a tag, return
	if (event.target.tagName !== "A") {
		return;
	}

	// 6.0/3 console log event target
	// console.log(event.target.textContent);

	// 6.1.1 Set showingSubMenu to false
	showingSubMenu = false;

	// 6.1.2 Set subMenuEl top property to top 0
	subMenuEl.style.top = "0";

	// 6.2 Remove class "active" from all a tags in topMenuLinks
	for (let i = 0; i < topMenuLinks.length; i++) {
		topMenuLinks[i].classList.remove("active");
	}

	// 6.3 update mainEl h1 content to the content of the <a> (that was clicked)
	mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
});
