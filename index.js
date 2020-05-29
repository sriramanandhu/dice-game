var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1; //1 - 6
console.log("R no 1: " + randomNumber1);

var randomDiceImage = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelector(".img1");
image1.setAttribute("src", randomDiceImage);
// document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");

var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.floor(randomNumber2) + 1; //1 - 6
console.log("R no 2: " + randomNumber2);

document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");

// Change the title to Wim state
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
