import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function generateExcuse() {
  let who = ['Mi bebé', 'Mi abuela', 'El gato', 'La lagartija'];
  let action = ['vomitó', 'orinó', 'rompió', 'cortó'];
  let what = ['mi tarea', 'mi ropa', 'mi casa', 'mi cama'];
  let when = ['antes de salir', 'cuando dormía', 'mientras comíamos', 'durante el almuerzo', 'cuando rezabamos'];

  let excuse = randomElement(who) + " " + randomElement(action) + " " + randomElement(what) + " " + randomElement(when);
  return excuse;
}


window.onload = function () {
document.getElementById("excuse").innerHTML = generateExcuse()

  //write your code here
  console.log(generateExcuse());
};
