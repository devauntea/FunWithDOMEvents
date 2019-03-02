//chalange0
let playBtn = document.getElementById("play-button");

playBtn.addEventListener("click", move);

function move() {
	playBtn.style.top = Math.random()*100 + "%";
	playBtn.style.left = Math.random()*100 + "%";

}

let text = document.getElementById("challenge-one");

text.addEventListener("dbclick", dis);
 function dis()
 {
 	text.style.remove(text)
 }

 let playBtn2 = document.getElementById("play-button");

 playBtn2.addEventListener("mouseover",back)

 function back() {
 	playBtn2.style.background = "black";

 }

 let copy = document.getElementById("page-title");

 copy.addEventListener("copy", warn);

 function warn (){
 	copy.innerHTML = "DO NOT COPY!";
 }

 let right = document.getElementByTagName("BODY");
 let rightClick = right[0]

 rightClick.addEvenListener("contextmenu", img)

 function img () {
 	rightClick.style.background = url("images/pokemonBG2.png");
 }




