// Taken from:Nirmani WaraKaulla (https://enlear.academy/how-to-create-a-animated-bulb-with-javascript-css-4fa96eaf40bc/)

let btn = document.querySelector(".btn");

let body = document.querySelector("body");

let audio = document.querySelector("#audio");

btn.onclick = function() {
	body.classList.toggle("on");
	audio.play();
}
