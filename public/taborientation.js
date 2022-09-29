var tabdirection = "horizontal"
let verticaltabsbutton = document.querySelectorAll(".verticaltabsbutton")
let horizontaltabsbutton = document.querySelectorAll(".horizontaltabsbutton")
let verticaltabsbuttonimg = document.querySelector(".verticaltabsbuttonimg")
let horizontaltabsbuttonimg = document.querySelector(".horizontaltabsbuttonimg")

let tabOrientation = getCookie("tabOrientation")
if(tabOrientation == "vertical"){
    verticalTabs()
}
else if(tabOrientation == "horizontal"){
    horizontalTabs()
}
else{
    horizontalTabs()
}

function verticalTabs(){
    setCookie("tabOrientation", "vertical", "365");

    verticaltabsbutton.forEach(elmnt => elmnt.style.display = "none");
    horizontaltabsbutton.forEach(elmnt => elmnt.style.display = "block");
    horizontaltabsbuttonimg.style.display = "inline-flex"

    moremenu.style.left = "27.5px"
    moremenu.style.top = "97.5px"

    let body = document.querySelector("body")
    let tabsandmore = document.getElementsByClassName("tabsandmore")[0]
    let topbar = document.getElementsByClassName("topbar")[0]
    let urlbartop = document.getElementById("urlbartop")
    body.insertBefore(tabsandmore, topbar)
    tabsandmore.style.position = "absolute"
    tabsandmore.style.top = "45px"
    tabsandmore.style.width = "100px"
    tabsandmore.style.height = "calc(100% - 55px)"
    tabsandmore.style.flexDirection = "column"
    tabsandmore.style.borderRadius = "0rem 0rem 0rem 15px"
    tabsandmore.style.padding = "20px 0px"
    tabsandmore.style.zIndex = "100"

    let tabsection = document.querySelector(".tabsection")
    tabsection.style.flexDirection = "column"

    let newtabandsettings = document.getElementsByClassName("newtabandsettings")[0]
    newtabandsettings.style.margin = "0 auto"
    newtabandsettings.style.marginBottom = "5px"

    let homepage = document.getElementById("homepage")
    homepage.style.marginLeft = "100px"
    homepage.style.height = "calc(100% - 45px)"
    homepage.style.width = "calc(100% - 100px)"
    homepage.style.borderRadius = "0rem 0rem 15px 0rem"

    function fixVerticalElements(){
        tabdirection = "vertical"
        let iframes = document.querySelectorAll(".iframe")

        iframes.forEach(elmnt => {
            elmnt.style.height = "calc(100% - 65px)"
            elmnt.style.width = "calc(100% - 120px)"
            elmnt.style.left = "110px"
            elmnt.style.top = "55px"
            elmnt.style.borderRadius = "0rem 0rem 15px 0rem"
        })
    }

    fixVerticalElements();

    var observer = new MutationObserver(function(mutations){
        mutations.forEach(function(mutation){
            if(tabdirection == "vertical"){
                for(var i = 0;i < mutation.addedNodes.length;i++){
                        fixVerticalElements();
                }
            }
        });
    });
    observer.observe(tabsection, {childList: true, subtree: true});
    observer.observe(document.querySelector("body"), {childList: true, subtree: true});

}

function horizontalTabs(){
    setCookie("tabOrientation", "horizontal", "365");

    horizontaltabsbutton.forEach(elmnt => elmnt.style.display = "none");
    verticaltabsbutton.forEach(elmnt => elmnt.style.display = "block");
    verticaltabsbuttonimg.style.display = "inline-flex"

    moremenu.style.left = "22.5px"
    moremenu.style.top = "52.5px"

    let body = document.querySelector("body")
    let tabsandmore = document.getElementsByClassName("tabsandmore")[0]
    let topbar = document.getElementsByClassName("topbar")[0]
    let urlbartop = document.getElementById("urlbartop")
    topbar.insertBefore(tabsandmore, urlbartop)
    tabsandmore.style.position = ""
    tabsandmore.style.top = ""
    tabsandmore.style.width = ""
    tabsandmore.style.height = ""
    tabsandmore.style.flexDirection = ""
    tabsandmore.style.borderRadius = ""
    tabsandmore.style.padding = ""
    tabsandmore.style.zIndex = ""

    let tabsection = document.querySelector(".tabsection")
    tabsection.style.flexDirection = ""

    let newtabandsettings = document.getElementsByClassName("newtabandsettings")[0]
    newtabandsettings.style.margin = ""
    newtabandsettings.style.marginBottom = ""

    let homepage = document.getElementById("homepage")
    homepage.style.marginLeft = ""
    homepage.style.height = ""
    homepage.style.width = ""
    homepage.style.borderRadius = ""

    function fixHorizontalElements(){
        tabdirection = "horizontal"
        let iframes = document.querySelectorAll(".iframe")

        iframes.forEach(elmnt => {
            elmnt.style.height = ""
            elmnt.style.width = ""
            elmnt.style.left = ""
            elmnt.style.top = ""
            elmnt.style.borderRadius = ""
        })
    }

    fixHorizontalElements();

    var observer = new MutationObserver(function(mutations){
        mutations.forEach(function(mutation){
            if(tabdirection == "horizontal"){
                for(var i = 0;i < mutation.addedNodes.length;i++){
                        fixHorizontalElements();
                }
            }
        });
    });
    observer.observe(tabsection, {childList: true, subtree: true});
    observer.observe(document.querySelector("body"), {childList: true, subtree: true});

}

