// exercici 2
document.onkeydown = function(e){
  let value = document.getElementById("char")
  value.innerHTML= e.key;
};
document.onkeyup = function(e){
  let value = document.getElementById("char")
  value.innerHTML= " ";
};


// Exercici 3
let cadena = "";
  document.body.onkeypress = function(e){
  cadena = cadena + e.key;
  document.getElementById("string").innerHTML = cadena;
    if(cadena==="qwerty"){
    window.open("https://www.youtube.com/watch?v=RCA3EfKUJMw")}
};


// exercici 4
let countNum = 0;
export function count () {
  countNum++
  document.getElementById("count").innerHTML = "comptador: "+ countNum;
}
export function resset () {
  countNum = 0;
  document.getElementById("count").innerHTML = "comptador: " + countNum;
  cadena = "";
  document.getElementById("string").innerHTML = cadena;

}
