/** This code works only for PWAs **/

var beforeInstallPrompt = null;

//document.getElementById('installBtn').style.visibility= 'hidden';

window.addEventListener("beforeinstallprompt", eventHandler, errorHandler);

function eventHandler(event) {
  beforeInstallPrompt = event;
  document.getElementById("installBtn").removeAttribute("disabled");
  
  //document.getElementById('btn').style.visibility= 'visible';
  
}

function errorHandler(event) {
  console.log("error: " + event);
}

function install() {
  if (beforeInstallPrompt) beforeInstallPrompt.prompt();
}
