var nextNumber = 1
var zIndex = 10
let tabsection = document.getElementsByClassName("tabsection")[0]
let body = document.querySelector("body")

createTabAndIframe();

function openTab(evt, tabNumber) {
  document.querySelector("#" + tabNumber.replace("iframe","") + " img").addEventListener("click", ()=>{
    document.querySelector("#" + tabNumber).outerHTML = ""
    document.querySelector("#" + tabNumber.replace("iframe","")).outerHTML = ""
    return;
  })

  if (typeof(document.querySelector(".iframe.active")) != 'undefined' && document.querySelector(".iframe.active") != null)
  {
    document.querySelector(".iframe.active").style.display = "none"
    document.querySelector(".iframe.active").classList.remove("active")
  }

    var iframes = document.querySelectorAll(".iframe")
    iframes.forEach(elmnt => elmnt.style.display = "none")
    var iframe = document.getElementById(tabNumber);
    iframe.classList.add("active");
    iframe.style.zIndex = zIndex
    zIndex = zIndex + 2
    var url = __uv$config.decodeUrl(iframe.src)
    document.querySelector("#urlbartop input").value = url.substring(url.indexOf("https://") + 0);
    var tabs = document.querySelectorAll(".tab");
    tabs.forEach(elmnt => elmnt.className = "tab");
    if (iframe.src !== ""){
      iframe.style.display = "block"
    }else{
      document.querySelector("#urlbarhomepage input").value = ""
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

    tabdivimg = document.createElement("img");
    tabdivimg.src = "closetab.png"
    tabdivimg.classList.add("invert");
    tabdiv.appendChild(tabdivimg);

    iframe = document.createElement("iframe");
    iframe.classList.add("iframe");
    iframe.id = "tab" + nextNumber + "iframe"
    body.appendChild(iframe);

    openTab(event, "tab" + nextNumber + "iframe");

    nextNumber = nextNumber + 1
}