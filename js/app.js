var elh1 = document.querySelector("[data-heading]");
var elButton = document.querySelector("[data-button]");
var elInput = document.querySelector("[data-input]");
var elForm = document.querySelector("[data-form]");
var elp1 = document.querySelector("[data-pharagraf1]")
var elp2 = document.querySelector("[data-pharagraf2]")
var elp3 = document.querySelector("[data-pharagraf3]")
var elp4 = document.querySelector("[data-pharagraf4]")
var elp5 = document.querySelector("[data-pharagraf5]")
var elp6 = document.querySelector("[data-pharagraf6]")
// var num = +prompt("yoshingiz")
// const yosh = 12
// function aka(a) {
//   return a<=yosh ? "uka" : "aka"
// }
// console.log(aka(num))
elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
    elp1.textContent = `${piyoda(elInput.value)}`;
    elp2.textContent = `${velosiped(elInput.value)}`;
    elp3.textContent = `${mashina(elInput.value)}`;
    elp4.textContent = `${samo(elInput.value)}`;
    elp5.textContent = `${boat(elInput.value)}`;
    elp6.textContent = `${bus(elInput.value)}`;
});
var zero = 0

function piyoda(a) {
  var piyodatez = 3.6
    if (
  (a%piyodatez - Math.trunc(a/piyodatez)) == zero
  ){
    return `siz ${Math.trunc(a/piyodatez)} soatda borasiz`;
}
else {
  return `siz ${Math.trunc(a/piyodatez)} soat va ${((a/piyodatez - Math.trunc(a/piyodatez)).toFixed(0))} minutda borasiz`;
}
}


function velosiped(a) {
  var velo = 20.1
  if (
    (a%velo - Math.trunc(a/velo)) == zero
    ){
    return `siz ${Math.trunc(a/velo)} soatda borasiz`;
  }
else {
  return `siz ${Math.trunc(a/velo)} soat va ${(a/velo - Math.trunc(a/velo)).toFixed(0)} minutda borasiz`;
}
}
function mashina(a) {
  var car = 70
  if (
  (a%car - Math.trunc(a/car)) == zero
){
return `siz ${Math.trunc(a/car)} soatda borasiz`;
}
else {
  return `siz ${Math.trunc(a/car)} soat va ${(a/car - Math.trunc(a/car)).toFixed(0)} minutda borasiz`;
}
}

function samo(a) {
  var air = 800
  if (
  (a%air - Math.trunc(a/air)) == zero
){
return `siz ${Math.trunc(a/air)} soatda borasiz`;
}
else {
  return `siz ${Math.trunc(a/air)} soat va ${(a/air - Math.trunc(a/air)).toFixed(0)} minutda borasiz`;
}
}

function boat(a) {
  var boat = 55
  if (
    a%boat == zero)
  {
  return `siz ${a/boat - Math.trunc(a/boat)} minutda borasiz`;
  }
  if (
  (a%boat - Math.trunc(a/boat)) == zero
  ){
return `siz ${Math.trunc(a/boat)} soatda borasiz`;
}
else {
  return `siz ${Math.trunc(a/boat)} soat va ${(a/boat - Math.trunc(a/boat)).toFixed(0)} minutda borasiz`;
}
}

function bus(a) {
  var bus = 50
  if (
    a%bus == zero)
  {
  return `siz ${a/bus - Math.trunc(a/bus)} minutda borasiz`;
  }
  if (
  (a%bus - Math.trunc(a/bus)) == zero
){
  return `siz ${Math.trunc(a/bus)} soatda borasiz`;
}
else {
  return `siz ${Math.trunc(a/bus)} soat va ${(a/bus - Math.trunc(a/bus)).toFixed(0)} minutda borasiz`;
}
}