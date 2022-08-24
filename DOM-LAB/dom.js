var menuLinks = [
	{ text: "about", href: "/about" },
	{ text: "catalog", href: "/catalog" },
	{ text: "orders", href: "/orders" },
	{ text: "account", href: "/account" },
];


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
