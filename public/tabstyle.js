var tabstyle = "horizontal"
let verticaltabsbutton = document.querySelectorAll(".verticaltabsbutton")
let horizontaltabsbutton = document.querySelectorAll(".horizontaltabsbutton")
let verticaltabsbuttonimg = document.querySelector(".verticaltabsbuttonimg")
let horizontaltabsbuttonimg = document.querySelector(".horizontaltabsbuttonimg")

let tabStyle = getCookie("tabStyle")
if(tabStyle == "vertical"){
    verticalTabs()
}
else if(tabStyle == "horizontal"){
    horizontalTabs()
}
else{
    horizontalTabs()
}

function horizontalTabs(){
    setCookie("tabStyle", "horizontal", "365");

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
    tabsandmore.style.background = ""

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
        tabstyle = "horizontal"
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
            if(tabstyle == "horizontal"){
                for(var i = 0;i < mutation.addedNodes.length;i++){
                        fixHorizontalElements();
                }
            }
        });
    });
    observer.observe(tabsection, {childList: true, subtree: true});
    observer.observe(document.querySelector("body"), {childList: true, subtree: true});

}

function verticalTabs(){
    horizontalTabs();
    setCookie("tabStyle", "vertical", "365");

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
    tabsandmore.style.top = "55px"
    tabsandmore.style.width = "100px"
    tabsandmore.style.height = "calc(100% - 65px)"
    tabsandmore.style.flexDirection = "column"
    tabsandmore.style.borderRadius = "0rem 0rem 0rem 10px"
    tabsandmore.style.padding = "20px 0px"
    tabsandmore.style.zIndex = "100"
    tabsandmore.style.background = "var(--background-color)"

    let tabsection = document.querySelector(".tabsection")
    tabsection.style.flexDirection = "column"

    let newtabandsettings = document.getElementsByClassName("newtabandsettings")[0]
    newtabandsettings.style.margin = "0 auto"
    newtabandsettings.style.marginBottom = "5px"

    let homepage = document.getElementById("homepage")
    homepage.style.marginLeft = "100px"
    homepage.style.height = "calc(100% - 45px)"
    homepage.style.width = "calc(100% - 100px)"
    homepage.style.borderRadius = "0rem 0rem 10px 0rem"

    function fixVerticalElements(){
        tabstyle = "vertical"
        let iframes = document.querySelectorAll(".iframe")

        iframes.forEach(elmnt => {
            elmnt.style.height = "calc(100% - 65px)"
            elmnt.style.width = "calc(100% - 120px)"
            elmnt.style.left = "110px"
            elmnt.style.top = "55px"
            elmnt.style.borderRadius = "0rem 0rem 10px 0rem"
        })
    }

    fixVerticalElements();

    var observer = new MutationObserver(function(mutations){
        mutations.forEach(function(mutation){
            if(tabstyle == "vertical"){
                for(var i = 0;i < mutation.addedNodes.length;i++){
                        fixVerticalElements();
                }
            }
        });
    });
    observer.observe(tabsection, {childList: true, subtree: true});
    observer.observe(document.querySelector("body"), {childList: true, subtree: true});

}

function floatingTabs(){
    horizontalTabs();
    setCookie("tabStyle", "floating", "365")

    let body = document.querySelector("body")
    let tabsandmore = document.getElementsByClassName("tabsandmore")[0]
    let topbar = document.getElementsByClassName("topbar")[0]
    let urlbartop = document.getElementById("urlbartop")
    body.insertBefore(topbar, topbar)
    topbar.style.position = "absolute"
    topbar.style.top = "-150px"
    topbar.style.height = "120px"
    topbar.style.padding = "20px"
    topbar.style.flexDirection = "column"
    topbar.style.borderRadius = "10px"
    topbar.style.zIndex = "100"
    topbar.style.left = "50%"
    topbar.style.right = "50%"
    topbar.style.transform = "translate(-50%, -50%)"

    // Postitioning

    let newtabandsettings = document.getElementsByClassName("newtabandsettings")[0]

    let homepage = document.getElementById("homepage")
    homepage.style.height = "100%"
    homepage.style.width = "100%"
    homepage.style.borderRadius = "10px"

    function fixFloatingElements(){
        tabstyle = "floating"
        var newwidth = 0
        document.querySelectorAll(".tab").forEach(elmnt => {
            newwidth = newwidth + elmnt.offsetWidth + 10
        })
        newwidth = newwidth + newtabandsettings.offsetWidth
        newwidth = newwidth + 90 + "px"
        document.getElementsByClassName("topbar")[0].style.width = newwidth

        let iframes = document.querySelectorAll(".iframe")
        iframes.forEach(elmnt => {
            elmnt.style.height = "calc(100% - 20px)"
            elmnt.style.width = "calc(100% - 20px)"
            elmnt.style.left = "10px"
            elmnt.style.top = "10px"
            elmnt.style.borderRadius = "10px"
        })
    }

    fixFloatingElements();
    
    var observer = new MutationObserver(function(mutations){
        mutations.forEach(function(mutation){
            if(tabstyle == "floating"){
                    fixFloatingElements();
            }
        });
    });
    observer.observe(tabsection, {childList: true, subtree: true});

    // Blur effects
    topbar.style.background = getComputedStyle(root).getPropertyValue("--background-color") + "cc"

    //Enabling

    function closeFloatingTabs(){
        topbar.style.top = "-150px"
        closeMenu();
    }

    onmousemove = function(e){
        if(e.clientY < 10){
            topbar.style.top = "95px"
        }
        if(moremenu.style.display == "block" && e.clientX > moremenux && e.clientX < moremenux + 101){
            void 0;
        }
        if(e.clientX < topbar.getBoundingClientRect().x){
            closeFloatingTabs();
        }
        if(e.clientX > topbar.getBoundingClientRect().x+ topbar.offsetWidth){
            closeFloatingTabs();
        }
        if(e.clientY > 215){
            closeFloatingTabs();
        }
        // if(e.clientY < topbar.getBoundingClientRect().y){
        //     closeFloatingTabs();
        // }
        // if(e.clientY > topbar.getBoundingClientRect().y+ topbar.offsetHeight){
        //     closeFloatingTabs();
        // }

    }

}