import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'J', 'Q', 'K'];
let randomCard = cards[Math.floor(Math.random() * cards.length)];
console.log(randomCard);

const figure = ['♠', '♥', '♦', '♣'];
let randomFigure = figure[Math.floor(Math.random() * figure.length)];
console.log(randomFigure);

let randomFigure2 = randomFigure
console.log(randomFigure2);

const color = (randomFigure  === '♥' ||randomFigure  === '♦') ? "red" : "black"
const color1 = (randomFigure2 === '♥' ||randomFigure2 === '♦') ? "red" : "black"

document.getElementById('cards').innerHTML = randomCard
document.getElementById('figure').innerHTML = randomFigure
document.getElementById('figure2').innerHTML = randomFigure2
document.getElementById('figure').style.color =color
document.getElementById('figure2').style.color =color1


function newCard (){
    console.log('newCard')
}

document.getElementById('boton').addEventListener("click" , newCard)