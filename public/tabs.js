var nextNumber = 1
var zIndex = 10
let tabsection = document.getElementsByClassName("tabsection")[0]
let body = document.querySelector("body")
var tabOrder = new Array();
var goOrNot = 1

createTabAndIframe();

function openTab(tabNumber) {
  var tab = document.querySelector("#" + tabNumber.replace("iframe", ""))
  var tabimg = document.querySelector("#" + tabNumber.replace("iframe", "") + " .tabclose")

  if (tabimg.getAttribute("listener") !== "true") {
    tabimg.addEventListener("click", () => {
      document.querySelector("#" + tabNumber).outerHTML = ""
      tab.outerHTML = ""
      tabOrder.splice(tabOrder.indexOf(tabNumber), 1);
      openTab(tabOrder.slice(-1)[0])
    })
  }

  tabimg.setAttribute("listener", "true")

  if (tabOrder.indexOf(tabNumber) > -1) {
    tabOrder.splice(tabOrder.indexOf(tabNumber), 1);
  }
  tabOrder[tabOrder.length] = tabNumber;

  if (typeof (document.querySelector(".iframe.active")) != "undefined" && document.querySelector(".iframe.active") != null) {
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
  if (iframe.src !== "") {
    iframe.style.display = "block"
  } else {
    document.querySelector("#urlbarhomepage input").value = ""
  }
  tab.className += " active";
}

function createTabAndIframe() {
  tabdiv = document.createElement("div");
  tabdiv.classList.add("tab");
  tabdiv.id = "tab" + nextNumber
  tabsection.appendChild(tabdiv);
  tabdiv.setAttribute("onclick", "openTab('tab" + nextNumber + "iframe')")

  tabdivfavicon = document.createElement("img")
  tabdivfavicon.src = "tabfavicon.png"
  tabdivfavicon.classList.add("tabfavicon");
  tabdiv.appendChild(tabdivfavicon);

  tabdivp = document.createElement("p");
  tabdivp.innerHTML = "Tab"
  tabdiv.appendChild(tabdivp)

  tabdivclose = document.createElement("img");
  tabdivclose.src = "closetab.png"
  tabdivclose.classList.add("invert");
  tabdiv.appendChild(tabdivclose);
  tabdivclose.classList.add("tabclose");
  tabdivclose.setAttribute("listener", "false");

  iframe = document.createElement("iframe");
  iframe.classList.add("iframe");
  iframe.id = "tab" + nextNumber + "iframe"
  body.appendChild(iframe);

  tabdiv.style.width = "100%"

  openTab("tab" + nextNumber + "iframe");

  nextNumber = nextNumber + 1
}