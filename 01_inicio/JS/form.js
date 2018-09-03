// Las clases, por convenio, se Escribe la primera mayúscula

// Forma moderna de crear Funciones constructoras
// El export es para poder exportar el fichero o la clase
export class Form{
    constructor(){
        this.inpNombre = document.querySelector('#nombre')
        this.btnEnviar = document.querySelector('#btnEnviar')
        this.output = document.querySelector('#output')
        this.btnBorrar = document.querySelector('#btnBorrar')
        console.dir(this)
        this.btnEnviar.addEventListener('click',
            this.enviar.bind(this))
        this.btnBorrar.addEventListener('click',
        this.borrar.bind(this))
    }

    enviar(){
        const nombre = this.inpNombre.value
        this.output.innerHTML = `Hola ${nombre}`
    }

    borrar(){
        this.inpNombre.value = ''
        this.output.innerHTML = ''
    }

}


// Forma tradicional de crear Funciones constructoras
/* function Main(nombre){
    this.nombre = nombre
}

let x = new Main('Pepe') */