var nextNumber = 2
var zIndex = 10
let tabsection = document.getElementsByClassName("tabsection")[0]
let body = document.querySelector("body")

function openTab(evt, tabNumber) {
    document.querySelector(".iframe.active").style.display = "none"
    document.querySelector(".iframe.active").classList.remove("active")
    var i, iframe, tab;
    iframe = document.getElementById(tabNumber);
    for (i = 0; i < iframe.length; i++) {
      iframe[i].style.display = "none";
    }
    iframe.classList.add("active");
    iframe.style.zIndex = zIndex
    zIndex = zIndex + 2
    document.querySelector("#urlbartop input").value = __uv$config.decodeUrl(iframe.src).replace(/.*-/g,"")
    tab = document.getElementsByClassName("tab");
    for (i = 0; i < tab.length; i++) {
      tab[i].className = tab[i].className.replace(" active", "");
    }
    if (iframe.src !== ""){
      iframe.style.display = "block"
    }
    document.getElementById(tabNumber.replace("iframe","")).className += " active";
}

function createTabAndIframe(){
    tabdiv = document.createElement("div");
    tabdiv.classList.add("tab");
    tabdiv.id = "tab" + nextNumber
    tabsection.appendChild(tabdiv);
    tabdiv.setAttribute("onclick", "openTab(event, 'tab" + nextNumber + "iframe')")

    tabdivp = document.createElement("p");
    tabdivp.innerHTML = "Tab"
    tabdiv.appendChild(tabdivp)

    tabdivimg = document.createElement("img")
    tabdivimg.src = "closetab.svg"
    tabdiv.appendChild(tabdivimg);

    iframe = document.createElement("iframe");
    iframe.classList.add("iframe");
    iframe.id = "tab" + nextNumber + "iframe"
    body.appendChild(iframe);

    openTab(event, "tab" + nextNumber + "iframe");

    nextNumber = nextNumber + 1
}