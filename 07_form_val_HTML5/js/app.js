function main(){
    let inputNombre = document.querySelector('#nombre')
    let inputApellido = document.querySelector('#apellido')
    let btnEnviar = document.querySelector('#enviar')

    // Eventos focus / blur

    inputNombre.addEventListener('blur', validaTexto)
    inputNombre.addEventListener('input', validaTexto)
    inputApellido.addEventListener('blur', validaTexto)
    inputApellido.addEventListener('input', validaTexto)

    //console.log(form)
    //console.log(inputNombre)

    function validaTexto(){
        if(!this.value){
            console.log(`${this.id} incorrecto`)
            console.dir(this)
            this.nextElementSibling.innerHTML = `${this.id} incorrecto`
        }else{
           this.nextElementSibling.innerHTML = ''
           validaFormulario()
        }
    }

    function validaFormulario(){
        if(inputNombre.value && inputApellido.value){
            btnEnviar.disabled = false
        }
    }

}

document.addEventListener('DOMContentLoaded', main)