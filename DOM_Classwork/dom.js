// h1 tag

let h1tag = (document.getElementById('title'));
console.log(h1tag.textContent);
h1tag.textContent = 'Hello World';
h1tag.style.textAlign = "center";

// p tag

let ptag = (document.querySelector("p"));
ptag.style.color = '#fff';


// set attribute to a tag
let aEl = document.querySelector("a");
aEl.setAttribute("href", "https://www.google.com");