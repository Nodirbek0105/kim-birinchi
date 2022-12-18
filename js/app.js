var elh1 = document.querySelector("[data-heading]");
var elButton = document.querySelector("[data-button]");
var elInput = document.querySelector("[data-input]");
var elForm = document.querySelector("[data-form]");
var elp1 = document.querySelector("[data-pharagraf1]")
var elp2 = document.querySelector("[data-pharagraf2]")
var elp3 = document.querySelector("[data-pharagraf3]")
var elp4 = document.querySelector("[data-pharagraf4]")
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
});
var zero = 0
var piyodatez = 3.6
var velo = 20.1
var car = 70
var air = 800

function piyoda(a) {
  if (
    0<a%piyodatez<1)
  {
  return ` siz ${a/piyodatez - Math.trunc(a/piyodatez)} minutda borasiz`;
  }
  if (
  (a%piyodatez - Math.trunc(a/piyodatez)) == zero
){
return ` siz ${Math.trunc(a/piyodatez)} soatda borasiz`;
}
else {
  return ` siz ${Math.trunc(a/piyodatez)} soat va ${((a/piyodatez - Math.trunc(a/piyodatez)).toFixed(0))} minutda borasiz`;
}
}


function velosiped(a) {
  if (
    a%velo == zero)
  {
  return ` siz ${a/velo - Math.trunc(a/velo)} minutda borasiz`;
  }
  if (
  (a%velo - Math.trunc(a/velo)) == zero
){
return ` siz ${Math.trunc(a/velo)} soatda borasiz`;
}
else {
  return ` siz ${Math.trunc(a/velo)} soat va ${(a/velo - Math.trunc(a/velo)).toFixed(0)} minutda borasiz`;
}
}
function mashina(a) {
  if (
    a%car == zero)
  {
  return ` siz ${a/car - Math.trunc(a/car)} minutda borasiz`;
  }
  if (
  (a%car - Math.trunc(a/car)) == zero
){
return ` siz ${Math.trunc(a/car)} soatda borasiz`;
}
else {
  return ` siz ${Math.trunc(a/car)} soat va ${(a/car - Math.trunc(a/car)).toFixed(0)} minutda borasiz`;
}
}

function samo(a) {
  if (
    a%air == zero)
  {
  return ` siz ${a/air - Math.trunc(a/air)} minutda borasiz`;
  }
  if (
  (a%air - Math.trunc(a/air)) == zero
){
return ` siz ${Math.trunc(a/air)} soatda borasiz`;
}
else {
  return ` siz ${Math.trunc(a/air)} soat va ${(a/air - Math.trunc(a/air)).toFixed(0)} minutda borasiz`;
}
}