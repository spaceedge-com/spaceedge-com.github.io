if (document.getElementById) { window.onload = swap };
function swap() {
var numimages=10;
rndimg = new Array("/images/slider/astronomy1.jpg", "/images/slider/astronomy2.jpg","/images/slider/astronomy3.jpg", "/images/slider/astronomy4.jpg", "/images/slider/astronomy5.jpg", "/images/slider/astronomy6.jpg", "/images/slider/astronomy7.jpg" ,"/images/slider/astronomy8.jpg", "/images/slider/astronomy9.jpg");
x=(Math.floor(Math.random()*numimages));
randomimage=(rndimg[x]);
document.getElementById("body").style.backgroundImage = "url("+ randomimage +")";
}
