
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML="player 1 wins -refresh";
}
if (randomNumber2> randomNumber1) {
  document.querySelector("h1").innerHTML="player 2 wins -refresh";
}
if(randomNumber1==randomNumber2) {
  document.querySelector("h1").innerHTML="match draw -refresh";
}
if (randomNumber1==1) {
  document.getElementById("img1").style.width="80%";
  document.getElementById("img6").style.width="0";
}
if (randomNumber1==2) {
  document.getElementById("img2").style.width="80%";
  document.getElementById("img6").style.width="0";
}
if (randomNumber1==3) {
  document.getElementById("img3").style.width="80%";
  document.getElementById("img6").style.width="0";
}
if (randomNumber1==4) {
  document.getElementById("img4").style.width="80%";
  document.getElementById("img6").style.width="0";
}
if (randomNumber1==5) {
  document.getElementById("img5").style.width="80%";
  document.getElementById("img6").style.width="0";
}

if (randomNumber2==1) {
  document.getElementById("image1").style.width="80%";
  document.getElementById("image6").style.width="0";
}
if (randomNumber2==2) {
  document.getElementById("image2").style.width="80%";
  document.getElementById("image6").style.width="0";
}
if (randomNumber2==3) {
  document.getElementById("image3").style.width="80%";
  document.getElementById("image6").style.width="0";
}
if (randomNumber2==4) {
  document.getElementById("image4").style.width="80%";
  document.getElementById("image6").style.width="0";
}
if (randomNumber2==5) {
  document.getElementById("image5").style.width="80%";
  document.getElementById("image6").style.width="0";
}
