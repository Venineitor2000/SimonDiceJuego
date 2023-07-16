class BotonJugable {

    constructor(elementoId, spriteBotonPresionado, spriteBotonApagado, spriteBotoEncendido) {
        this.elementoId = elementoId;
        this.buttonComponente = document.querySelector("#" + elementoId);
       
        this.imgComponente = document.querySelector("#" + elementoId + " img");
        
        this.spriteBotonPresionado = spriteBotonPresionado;
        this.spriteBotonApagado = spriteBotonApagado;
        this.spriteBotoEncendido = spriteBotoEncendido;
        this.botonSeleccionado = false;

        this.AsignarEventos();
    }

    AsignarEventos() {
        //El .bind(this) es para que la funcion ande, si no lo pones, add eventListener no tiene idea de que es this
        //Por que pensa que lo estas ejecutando desde el html y no desde la clase BotonJugable, .bind le pasa el contexto 
        //Para que justamente entienda a que nos referimos con this
        this.buttonComponente.addEventListener("mousedown", this.PresionarBoton.bind(this));
        this.buttonComponente.addEventListener("mouseup", this.SoltarBoton.bind(this));
        this.buttonComponente.addEventListener("mouseleave", this.Deseleccionarboton.bind(this));

    }

    PresionarBoton() {
        if (terminoSecuencia && !terminoRespuestas && !terminoJuego) {
            this.imgComponente.setAttribute("src", this.spriteBotonPresionado);
            this.botonSeleccionado = true;
        }
        
        
    }

    Deseleccionarboton() {
        
        if (terminoSecuencia  && !terminoRespuestas && !terminoJuego) {
            this.botonSeleccionado = false;
            this.ApagarBoton();
        }
            
    }

    SoltarBoton() {
        if (terminoSecuencia && !terminoRespuestas && !terminoJuego) {
            this.ApagarBoton();
        }

        if (this.botonSeleccionado && terminoSecuencia && !terminoRespuestas && !terminoJuego) {
            //ejecutar lo que pasa si soltaste el boton intencionalmente, osea si lo apretaste bien
            AniadirRespuestaPlayer(this);
        }
    }

    EncenderBoton() {
        //console.log("Se prendio el boton ", this.elementoId);
        this.imgComponente.setAttribute("src", this.spriteBotoEncendido);
    }

    ApagarBoton() {
        
        this.imgComponente.setAttribute("src", this.spriteBotonApagado);
    }

    CambiarImagen(imagen){
        this.imgComponente.setAttribute("src", imagen);
    }
}