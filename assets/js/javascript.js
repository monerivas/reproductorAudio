function play() {
  var audio= document.getElementById("cancion");
  audio.play();
}
function pause() {
  var audio= document.getElementById("cancion");
  audio.pause();
}
function stop() {
  var audio= document.getElementById("cancion");
  audio.pause();
  audio.currentTime= 0;
}

function back() {
  var audio= document.getElementById("cancion");
  audio.currentTime--;
}
function backSegments() {
  var audio= document.getElementById("cancion");
  audio.currentTime-=15;
}

function forward() {
  var audio= document.getElementById("cancion");
  audio.currentTime++;
}
function forwardSegments() {
  var audio= document.getElementById("cancion");
  audio.currentTime+=15;
}
/*las funciones back and forward on segments las hice porque
que flojera irle adelantando o atrazando de poquito en poquito*/

function subirVolumen() {
  var audio= document.getElementById("cancion");
  audio.volume+=0.1;
}

function bajarVolumen() {
  var audio= document.getElementById("cancion");
  audio.volume-=0.1;
}
function mute() {
  var audio= document.getElementById("cancion");
  audio.volume=0.0;
}
/*Aún no logro interocnetcra los botones de audio con la barra de volumenBarra
pero ambas funcionan de manera independiente*/
function volumenBarra() {
  var audio= document.getElementById("cancion");
  audio.volume= document.getElementById("barraVolumen").value/100;/*aqui dice que el volumen
  sera el valor que tenga nuestro elemento input tipo range sobre 100, es decir del 0 al 100
  (que en este caso es su valor maximo), si le pongo sobre 50, será del 0 al 50, los valores
  maximos y minimos se los asigne como atributos en la etiqueta del elemento en HTML*/

}
