document.addEventListener("DOMContentLoaded", function(){
    var botonesJugables = [];
    var boton1 = new BotonJugable("botonJuego1", "imagenApretada1.png", "imagenApagada1.png", "imagenEncendida1.png");
    var boton2 = new BotonJugable("botonJuego2", "imagenApretada2.png", "imagenApagada2.png", "imagenEncendida2.png");
    var boton3 = new BotonJugable("botonJuego3", "imagenApretada3.png", "imagenApagada3.png", "imagenEncendida3.png");
    var boton4 = new BotonJugable("botonJuego4", "imagenApretada4.png", "imagenApagada4.png", "imagenEncendida4.png");
    
    botonesJugables.push(boton1, boton2, boton3, boton4);
});