function Boton(elementoId, imagenPresionadoUrl, condicionBoton = function(){return true}) {
    
    if(condicionBoton())
    document.querySelector("#" + elementoId + " img").setAttribute("src", imagenPresionadoUrl);
}

//BOTON PLAY COMPORTAMIENTO

function ValidarBotonPlayInteractauble()

{
    
    //Secuencia no termino? Entonces no podes suar boton termino, sino si
    if(terminoSecuencia && terminoRespuestas && !terminoJuego)           
        return true;
    return false;
    


        
}

function BotonPlayIniciarJuego()
{
    
    if(ValidarBotonPlayInteractauble())
    {
        IniciarJuego();
    }
    
}

//BOTON RESET
function BotonReiniciarJuego()
{
    location.reload();
}