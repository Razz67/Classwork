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

// 5.1.1 Set showingSubMenu to false
let showingSubMenu = false;

let mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";

// set content of mainEl to h1 with text "SEI Rocks!"
let h1 = document.createElement("h1");
h1.textContent = "SEI Rocks!";
mainEl.appendChild(h1);

// add flex-ctr class to mainEl
mainEl.classList.add("flex-ctr");

let topMenuEl = document.getElementById("top-menu");
//set nav height to 100%
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// add class "flex-around" to topMenuEl
topMenuEl.classList.add("flex-around");

for (const link of menuLinks) {
	const a = document.createElement("a");
	a.setAttribute("href", link.href);
	a.textContent = link.text;
	topMenuEl.appendChild(a);
}

// ********** Start Part 2 **********

// 4.0 Assing sub-menu to subMenuEl
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
subMenuEl.style.top = "0";

// 5.1 Select all a tags in topMenuEl and assign to topMenuLinks
let topMenuLinks = topMenuEl.querySelectorAll("a");

// 5.2 Attach a delegated event listener to topMenuEl
topMenuEl.addEventListener("click", (event) => {

// 5.2.1 call preventDefault on event
event.preventDefault();

// 5.2.2 If event target is not an a tag, return
if (event.target.tagName !== "A") return;

// 5.2.3 console log event target
console.log(event.target);
});
