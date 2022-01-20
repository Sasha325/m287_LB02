let block = document.getElementById("block");
let loch = document.getElementById("loch");
let charakter = document.getElementById("charakter");

hole.addEventListener('animationiteration', () => {
    let random = -((Math.random()*300)+150);
    loch.style.top = random + "px";
    counter++;
});
setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(charakter).getPropertyValue("top"));
    if(jumping==0){
        charakter.style.top = (characterTop+3)+"px";
    }
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    let cTop = -(500-charakterTop);
    if((charakterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){
        alert("Game over. Score: "+(counter-1));
        character.style.top = 100 + "px";
        counter=0;
    }
},10);