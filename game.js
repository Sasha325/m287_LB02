let block = document.getElementById("block");
let loch = document.getElementById("loch");
let charakter = document.getElementById("charakter");

loch.addEventListener("animationiteration", () => {
    let random = -((Math.random()*300)+150);
    let top = (random*100)+150;
    loch.style.top = random + "px";
    counter++;
});
setInterval(function (){
    let charakterTop = window.getComputedStyle(charakter).getPropertyValue("top")


},10);