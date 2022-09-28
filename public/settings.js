let pageIcon = getCookie("pageIcon")
if(pageIcon !== ""){
    changePageIcon(pageIcon)
}
else{
    void 0;
}

let pageTitle = getCookie("pageTitle")
if(pageTitle !== ""){
    changePageTitle(pageTitle)
}
else{
    void 0;
}

function changePageIcon(iconurl){
    var pageicon = document.querySelector("link[rel~='icon']");
    setCookie("pageIcon", iconurl, "365");
    pageicon.href = iconurl
}

function changePageTitle(newtitle){
    setCookie("pageTitle", newtitle, "365");
    document.title = newtitle
}

let settingsbackground = document.getElementById("settingsbackground")
let settings = document.getElementById("settings")
let settingsbutton = document.getElementById("settingsbutton")

settingsbutton.addEventListener("click", ()=>{
    moremenu.style.display = "none"
    settingsbackground.style.display = "flex"
})

window.addEventListener('mouseup', function(e) {
    if (event.target.closest("#settingsbackground") && !event.target.closest("#settings")){
        settingsbackground.style.display = "none";
    }
});

let newpageicon = document.getElementById("newpageicon")
let newpagetitle = document.getElementById("newpagetitle")

newpageicon.onkeydown = function (event){
     if (event.key === 'Enter'){
        changePageIcon(newpageicon.value);
    } 
}

newpagetitle.onkeydown = function (event){
    if (event.key === 'Enter'){
       changePageTitle(newpagetitle.value);
   } 
}