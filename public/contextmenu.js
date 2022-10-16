document.oncontextmenu = rightClick;

function rightClick(e){
    e.preventDefault();
}

let morebutton = document.getElementById("morebutton")
let moremenu = document.getElementById("moremenu")

var moremenux = 0

function openMenu(){
	var moremenurect = morebutton.getBoundingClientRect();
	moremenu.style.top = moremenurect.y + 30 + "px"
	moremenu.style.left = moremenurect.x + 15 - 50 + "px"
	moremenu.style.display = "block"
}

function closeMenu(){
	moremenu.style.display = "none"
}

morebutton.addEventListener("click", ()=>{

	if(moremenu.style.display == "block"){
		closeMenu();
	}
	else{

		openMenu();

		// moremenu.style.top = document.getElementById("morebutton").offsetTop + 40 + "px"
		// moremenu.style.left = document.getElementById("morebutton").offsetLeft - 20 + "px"
		// moremenu.style.display = "block"
		// if (tabstyle == "horizontal"){
		// 	moremenu.style.left = "22.5px"
		// 	moremenu.style.top = "52.5px"
		// 	moremenu.style.display = "block"
		// }
		// if (tabstyle == "vertical"){
		// 	moremenu.style.left = "27.5px"
		// 	moremenu.style.top = "97.5px"
		// 	moremenu.style.display = "block"
		// }
	}
})

window.addEventListener('mouseup', function(e) {
    if (!event.target.closest("#moremenu") && !event.target.closest("#morebutton")){
        moremenu.style.display = "none";
    }
});

var screen = document.documentElement;
let fullscreenbutton = document.querySelectorAll(".fullscreenbutton");
let exitfullscreenbutton = document.querySelectorAll(".exitfullscreenbutton");
let fullscreenbuttonimg = document.querySelector(".fullscreenbuttonimg");
let exitfullscreenbuttonimg = document.querySelector(".exitfullscreenbuttonimg");

function openFullscreen() {
	fullscreenbutton.forEach(elmnt => elmnt.style.display = "none");
	exitfullscreenbutton.forEach(elmnt => elmnt.style.display = "block");
	exitfullscreenbuttonimg.style.display = "inline-flex"
	if (screen.requestFullscreen) {
	  screen.requestFullscreen();
	} else if (screen.webkitRequestFullscreen) { /* Safari */
	  screen.webkitRequestFullscreen();
	} else if (screen.msRequestFullscreen) { /* IE11 */
	  screen.msRequestFullscreen();
	}
}
  
function closeFullscreen() {
	exitfullscreenbutton.forEach(elmnt => elmnt.style.display = "none");
	fullscreenbutton.forEach(elmnt => elmnt.style.display = "block");
	fullscreenbuttonimg.style.display = "inline-flex"
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.webkitExitFullscreen) { /* Safari */
		document.webkitExitFullscreen();
	} else if (document.msExitFullscreen) { /* IE11 */
		document.msExitFullscreen();
	}
}