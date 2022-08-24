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

//  
//classlist: classList.add, classList.remove, classList.toggle

// console.log(ptag.classList);
// ptag.classList.add("special"); // add clase special to p tag

// ptag.classList.remove("special"); // remove class special from p tag

// ptag.classList.toggle("special"); // toggle class special from p tag

// ptag.classList.contains("special"); // check if p tag has class special

// ptag.classList.replace("special", "special2"); // replace class special with special2
//

// ****** selectiing multiple elements ******

// By tag name
// let liTags = document.getElementsByTagName("li");
// console.log("By tag name method: ", liTags);

// By class name
// let liTags2 = document.getElementsByClassName("comment");
// console.log("By class name: ", liTags2);

// // by querySelectorAll
// let liTags3 = document.querySelectorAll(".comment");

// // for of loop change size of comment elements to 30px
// for(let li of liTags3) {
//     li.style.fontSize = "30px"
// }

