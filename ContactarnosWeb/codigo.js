//VARIABLES
var nombreInput = document.querySelector("input[id = 'nombre']");
var mensajeInput = document.querySelector("input[id = 'mensaje']");
var mailInput = document.querySelector("input[id = 'correo']");

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

function ValidarMail(){
    var mail = document.querySelector("input[id = 'correo']").value;
    var posPunto = 0;
    var posArroba = 0;
    for(var i = 0; i < mail.length ; i++){  
        if(mail[i] === "@")
        posArroba = i;
        if(mail[i] === ".")
        posPunto = i;
    }
    
    if( mail.length >= 5 && mail.includes("@") && mail.includes(".") && mail[0] != " " && mail[nombre.lenght -1] != " " && posPunto > posArroba){
        mailInput.classList.remove('entradaInvalida');
        mailInput.classList.add('entradaValida');
        return true;
    }
    else{   
        mailInput.classList.remove('entradaValida');
        mailInput.classList.add('entradaInvalida');
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
    if(!(ValidarMensaje() & ValidarMail() & ValidarNombre()))
    event.preventDefault();
  });

  document.getElementById('formularioContacto').addEventListener('reset', function(event) {
    mensajeInput.classList.remove('entradaValida');
    mensajeInput.classList.remove('entradaInvalida');
    mailInput.classList.remove('entradaValida');
    mailInput.classList.remove('entradaInvalida');
    nombreInput.classList.remove('entradaValida');
    nombreInput.classList.remove('entradaInvalida');
  });










