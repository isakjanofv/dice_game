// img1 uchun tasvirlar

var img1 = document.querySelector(".img1");
img1.src = "images/dice1.png";

var img2 = document.querySelector(".img1");
img2.src = "images/dice2.png";

var img3 = document.querySelector(".img1");
img3.src = "images/dice3.png";

var img4 = document.querySelector(".img1");
img4.src = "images/dice4.png";

var img5 = document.querySelector(".img1");
img5.src = "images/dice5.png";

var img6 = document.querySelector(".img1");
img6.src = "images/dice6.png";

// img2 uchun tasvirlar

var img111 = document.querySelector(".img2");
img111.src = "images/dice1.png";

var img222 = document.querySelector(".img2");
img222.src = "images/dice2.png";

var img333 = document.querySelector(".img2");
img333.src = "images/dice3.png";

var img444 = document.querySelector(".img2");
img444.src = "images/dice4.png";

var img555 = document.querySelector(".img2");
img555.src = "images/dice5.png";

var img666 = document.querySelector(".img2");
img666.src = "images/dice6.png";


var classDices1 = document.querySelector(".img1")
var arrayImgPlayer1 = [img1, img2, img3, img4, img5, img6];
var randomImg1 = Math.floor(Math.random() * arrayImgPlayer1.length + 1);

var classDices2 = document.querySelector(".img2")
var arrayImgPlayer2 = [img111, img222, img333, img444, img555, img666];
var randomImg2 = Math.floor(Math.random() * arrayImgPlayer2.length + 1);

if(randomImg1 == randomImg2){
    var dices = document.querySelector("h1");
    dices.innerHTML = "draw Game!";
    arrayImgPlayer1[randomImg1].src = "images/dice" + randomImg1 + ".png";
    arrayImgPlayer2[randomImg2].src = "images/dice" + randomImg2 + ".png";
}else if(randomImg1 > randomImg2){
    var player1 = document.querySelector("h1");
    player1.innerHTML = "🚩 Player 1 Wins!";
    arrayImgPlayer1[randomImg1].src = "images/dice" + randomImg1 + ".png";
    arrayImgPlayer2[randomImg2].src = "images/dice" + randomImg2 + ".png";
}else if(randomImg1 < randomImg2){
    var player1 = document.querySelector("h1");
    player1.innerHTML = "Player 2 Wins! 🚩";
    arrayImgPlayer1[randomImg1].src = "images/dice" + randomImg1 + ".png";
    arrayImgPlayer2[randomImg2].src = "images/dice" + randomImg2 + ".png";
}else if(randomImg1 === 0 || randomImg2 === 0){

}