// select the modal divs
let modal1 = document.getElementById("myModal1");
let modal2 = document.getElementById("myModal2");
let modal3 = document.getElementById("myModal3");
let modal = document.getElementsByClassName("modal");


// Select the buttons
let btn1 = document.querySelector(".myBtn1");
let btn2 = document.querySelector(".myBtn2");
let btn3 = document.querySelector(".myBtn3");

let span1 = document.getElementsByClassName("close1")[0];
let span2 = document.getElementsByClassName("close2")[0];
let span3 = document.getElementsByClassName("close3")[0];

// display the modal when button is clicked
btn1.onclick = () => {
	modal1.style.display = "block";
    modal1.style.opacity = ".8";
};
btn2.onclick = () => {
	modal2.style.display = "block";
};

btn3.onclick = () => {
	modal3.style.display = "block";
};

// Hide modal when X is clicked
span1.onclick = () => {
    modal1.style.display = "none";
};

span2.onclick = () => {
	modal2.style.display = "none";
};

span3.onclick = () =>{
	modal3.style.display = "none";
};

//  Hide modal when window is clicked
window.onclick = (event) => {
	if (event.target === modal1) {
		modal1.style.display = "none";

    }else if (event.target === modal2) {
		modal2.style.display = "none";

     } else if (event.target === modal3) {
		modal3.style.display = "none";
	} 
}


