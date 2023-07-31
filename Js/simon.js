//BOTONES
function AgregarBotonAlAzarASecuencia() {
    var numeroRandom = Math.floor(Math.random() *4);
    var botonRandom = botonesJugables[numeroRandom];
    secuencia.push(botonRandom);    
}

function ApagarBotones() {
    botonesJugables.forEach(function (boton) {
        boton.ApagarBoton();
    })
}

 //MANEJO DEL UPDATE
//Aca pones todo lo que queres que se ejecute en el update
function UpdateContent() {
    secuencia[posSecuenciaActual].EncenderBoton();
    posSecuenciaActual++;
    setTimeout(ApagarBotones, duracionBotonEncendido);
         
    if(posSecuenciaActual == secuencia.length){
        setTimeout(Detenerupdate, duracionBotonEncendido);
    }
}
//Aca pones todo lo que queres que se ejecute al terminar el update
function UpdateStopContent() {
    ApagarBotones();
    terminoSecuencia = true;
    terminoRespuestas = false; 
    document.querySelector("#" + "botonPlay" + " img").setAttribute("src", "Sprites/botonPlayDesactivado.png"); 
    //Cuando acaba la secuencia arranca el tiempo
    updateTiempo = setInterval( ActualizarTiempo, 1000);
    
}

//Esta es para controlar si queremos detener el update, solo hace falta llamar a la funcon y listo
function Detenerupdate() {
    clearInterval(updateActual);
    UpdateStopContent(); 
}

//La implementacion del update
function IniciarUpdate(intervalo) {
    if(updateActual !== null)
    clearInterval(updateActual);
    updateActual = setInterval( UpdateContent, intervalo);
}

//FUNCIONES FUNDAMENTALES
function IniciarJuego() {
    GenerarSecuencia();
    posSecuenciaActual = 0;
    secuenciaRespuestas = [];
    terminoSecuencia = false;
    document.querySelector("#" + "botonPlay" + " img").setAttribute("src", "Sprites/botonPlay.png"); 
    IniciarUpdate(duracionIntervaloEncendido);
}

function GenerarSecuencia(){
    //Borro la secuencia anterior y genero una nueva
    secuencia = [];
    for (var i = 0; i < nivel; i++) {
        AgregarBotonAlAzarASecuencia();      
    }
}

//ACTUALIZAR CONTADORES
function ActualizarTiempo(){
    tiempo++;
    document.querySelector("#contador .valorPuntosContador").innerHTML = tiempo;
}

function ActualizarPuntaje(){
    puntaje += 1;
    document.querySelector("#puntos" + " .valorPuntosContador").innerHTML = puntaje;
}

function ActualizarNivel(){
    nivel++;
    document.querySelector("#nivel" + " .valornivel").innerHTML = nivel; 
}


//MANEJAR PERDER Y GANAR
function CambiarAPantallaPerder(){    
    //Capo el tiempo por si llegara a tener un valor q no deberia
    if(tiempo < 1)
        tiempo = 1;
    
    var puntajeFinal = Math.round(puntaje * multiplicadorPuntaje/tiempo);
    document.querySelector("main").innerHTML = 
    "<div id = 'puntuacionFinalContenedor'>"+
            "<p id = 'perdiste'>PERDISTE</p>"+
            "<div>"+
                "<span id = 'puntuacionFInal'>TU PUNTUACION FINAL FUE:</span>"+
                "<span id = 'valorPuntuacionFinal'>"+puntajeFinal+"</span>"+
            "</div>"+            
        "</div>"
     ;
}
function Perder(BotonPresionado){
    terminoJuego = true;
    botonesJugables.forEach(function (boton) {
        boton.CambiarImagen(BotonPresionado.spriteBotoEncendido);
        setTimeout(CambiarAPantallaPerder
        , 1500);
    })
}

function GanarNivel(){
    if(updateActual !== null)
        clearInterval(updateTiempo);
        terminoRespuestas = true;    
        ActualizarNivel();
        IniciarJuego();
}

function AniadirRespuestaPlayer(BotonPresionado){
    secuenciaRespuestas.push(BotonPresionado);
    
    //Va comprobando el ultimo si el ultimo boton añadido es valido o no, con la secuencia correcta
    if(secuenciaRespuestas[secuenciaRespuestas.length - 1].elementoId === secuencia[secuenciaRespuestas.length - 1].elementoId){
        ActualizarPuntaje();
    }
    
    //PERDISTE, el BotonPresionado no era el correcto
    else{
        if(updateActual !== null)
        clearInterval(updateTiempo);
        Perder(BotonPresionado);       
        return;
    }
        
    //GANASTE, por que ninguna validacion fallo
    if(secuencia.length == secuenciaRespuestas.length){
        GanarNivel();  
    }

}




