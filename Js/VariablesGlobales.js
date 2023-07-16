//VARIABLES GLOBALES
var terminoJuego = false;
var terminoSecuencia = true;
var terminoRespuestas = true;
var secuencia = [];
var posSecuenciaActual = 0;
//Cuanto esta el boton prendido
var duracionBotonEncendido = 1000;
//Cuanto pasa desde q se prende uno, hasta que se prende el otro, la diferencia entre las 2 es lo q va a pasar apagado, tiene q ser mayor q el tiempo encendido
var duracionIntervaloEncendido = 2000;
var updateActual = null;
var updateTiempo;
var secuenciaRespuestas = [];
var puntaje = 0;
var tiempo = 0;
var nivel = 1; 
var multiplicadorPuntaje = 100; //Si queres cambiar por cuanto se va a multiplicar la puntuacion final