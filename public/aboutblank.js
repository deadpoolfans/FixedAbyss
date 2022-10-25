function openAB() {
var win = window.open()
var url = "https://fuzzypoodle.com"
var iframe = win.document.createElement('iframe')
var body = document.getElementById('body')
iframe.style.width = "100%";
iframe.style.height = "100%";
iframe.style.border = "none";
iframe.src = url
win.document.body.appendChild(iframe)
}
