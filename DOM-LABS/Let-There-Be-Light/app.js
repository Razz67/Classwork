// if light is on, turn it off
// let lightOn = true;
// function toggle() {
// 	if (lightOn) {
// 		document.getElementById("img").src =
// 			"https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940208oq66nq8jew.png";
// 		document.getElementById("btn").innerHTML = "TURN ON";
// 		lightOn = false;
// 		img.style.background = "black";
// 	} else {
// 		document.getElementById("img").src =
// 			"https://toppng.com/uploads/preview/light-bulb-png-transparent-light-bulb-115628766421gdl0skp2k.png";
// 		document.getElementById("btn").innerHTML = "TURN OFF";
// 		img.style.background = "yellow";
// 		lightOn = true;
// 	}
// }


	function toggle() {
		let image = document.getElementById("img");
		if (image.src.match("images/bulb-on.png")) {
			image.src = "images/bulb-off.png";
		} else {
			image.src = "images/bulb-on.png";
		}
	}
// let img = document.getElementById("img");
// let btn = document.getElementById("btn");
// btn.addEventListener("click", toggle); 