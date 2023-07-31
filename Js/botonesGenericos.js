//BOTONES EN GENERAL
function Boton(elementoId, spriteBotonPresionado, condicionBoton = function(){return true}){
    if(condicionBoton())
        document.querySelector("#" + elementoId + " img").setAttribute("src", "Sprites/"+spriteBotonPresionado);
}

//BOTON PLAY
function ValidarBotonPlayInteractauble(){
    //Secuencia no termino? Entonces no podes suar boton termino, sino si
    if(terminoSecuencia && terminoRespuestas && !terminoJuego)           
        return true;
    return false;    
}

function BotonPlay(){
    if(ValidarBotonPlayInteractauble()){
        IniciarJuego();
    }   
}

//BOTON RESET
function BotonReset(){
    location.reload();
}

//BOTON CONTACTO
function BotonContacto(){
    window.open("ContactarnosWeb/contactarnos.html", "_blank");
}

//BOTON ACEPTAR
function BotonAceptar(){
    var valorNombre = document.querySelector("input").value;
    if(valorNombre.length >= 3){
        document.querySelector("div#ingresarNombreContenedor").style.display = "none";
        nombrePlayer = valorNombre;
    }
}
