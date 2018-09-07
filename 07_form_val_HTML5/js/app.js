function main() {
    let inNombre = document.querySelector('#nombre')
    let inApellido = document.querySelector('#apellido')
    let btnEnviar = document.querySelector('#enviar')
    let formForm1 = document.querySelector('#form1')

    formForm1.addEventListener('submit', enviar)
    inNombre.addEventListener('input', validaNombre)

    function validaNombre(){
        let validControl = true
        if(!inNombre.checkValidity()){
            inNombre.nextElementSibling.innerHTML = 'El nombre es necesario'//inNombre.validationMessage
            validControl = false
        }else{
            inNombre.nextElementSibling.innerHTML = ''
            validControl = true
        }
        return validControl
    }

    function enviar(oEv) {
        console.log("Enviando")
        if(!validaNombre()){
            oEv.preventDefault()
        }else{
            // Esto sobraria para enviar realmente
            oEv.preventDefault()
            console.log("Enviando") 
        }
    }
}

document.addEventListener('DOMContentLoaded', main)

