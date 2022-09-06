	
	


	// function toggle() {
	// 	let image = document.querySelector("#img");
	// 	if (image.src.match("images/bulb-on.png")) {
	// 		image.src = "images/bulb-off.png";
	// 		document.getElementById("btn").value = "TURN ON";
	// 		document.body.style.background = "#000";
	// 		document.getElementById("btn").style.backgroundColor = "grey";
	// 	} 
	// 	else {
	// 		image.src = "images/bulb-on.png";
	// 		document.getElementById("btn").value = "TURN OFF";
	// 		document.querySelector("#btn").style.backgroundColor = "chartreuse";
	// 		document.body.style.background = "#FFF";
	// 	}
	// }

	

	function toggle() {
		let img = document.querySelector("#img");
		let currentImg = 1;
		let indicator = document.getElementById("indicator");

		if (img.src.match("images/bulb-on.png")) {
			img.src="images/bulb-off.png";
			indicator.classList.remove("on");
			document.body.style.backgroundColor = "chartreuse";

		}
		else {
			indicator.classList.add("on");
			img.src = "images/bulb-on.png";
			document.body.style.backgroundColor = "#000";
		}
		
	}

