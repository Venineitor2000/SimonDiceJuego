"use strict";
//VARIABLES
var nombreInput = document.querySelector("input[id = 'nombre']");
var mensajeInput = document.querySelector("input[id = 'mensaje']");
var correoInput = document.querySelector("input[id = 'correo']");

//FUNCIONES
function ValidarNombre(){
    var nombre = document.querySelector("input[id = 'nombre']").value;
    if(nombre != " " && nombre.length > 0){
        nombreInput.classList.remove('entradaInvalida');
        nombreInput.classList.add('entradaValida');
        return true;
    }
    else{  
        nombreInput.classList.remove('entradaValida');
        nombreInput.classList.add('entradaInvalida');
        return false;   
    }
}

function ValidarCorreo(){
    var correo = document.querySelector("input[id = 'correo']").value;
    var posPunto = 0;
    var posArroba = 0;
    for(var i = 0; i < correo.length ; i++){  
        if(correo[i] === "@")
        posArroba = i;
        if(correo[i] === ".")
        posPunto = i;
    }
    
    if( correo.length >= 5 && correo.includes("@") && correo.includes(".") && correo[0] != " " && correo[nombre.lenght -1] != " " && posPunto > posArroba){
        correoInput.classList.remove('entradaInvalida');
        correoInput.classList.add('entradaValida');
        return true;
    }
    else{   
        correoInput.classList.remove('entradaValida');
        correoInput.classList.add('entradaInvalida');
        return false; 
    }
}

function ValidarMensaje(){ 
    var mensaje = document.querySelector("input[id = 'mensaje']").value;
    if( mensaje.length >= 5){  
        mensajeInput.classList.remove('entradaInvalida');
        mensajeInput.classList.add('entradaValida');
        return true;
    }
    else{        
        mensajeInput.classList.remove('entradaValida');
        mensajeInput.classList.add('entradaInvalida');
        return false;
    }
    
    
}

//MODIFICAR EVENTOS DE BOTON RESTABELCER Y ENVIAR      
    document.getElementById('formularioContacto').addEventListener('submit', function(event) {
    if(!(ValidarMensaje() & ValidarCorreo() & ValidarNombre()))
    event.preventDefault();
  });

    document.getElementById('formularioContacto').addEventListener('reset', function(event) {
    mensajeInput.classList.remove('entradaValida');
    mensajeInput.classList.remove('entradaInvalida');
    correoInput.classList.remove('entradaValida');
    correoInput.classList.remove('entradaInvalida');
    nombreInput.classList.remove('entradaValida');
    nombreInput.classList.remove('entradaInvalida');
  });










