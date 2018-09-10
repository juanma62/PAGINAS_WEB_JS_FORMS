function main () {

    form = document.querySelector('form')
    inDni = document.querySelector('#dni')
    btnEnviar = document.querySelector('#btnEnviar')

    inDni.setCustomValidity('DNI Incorrecto')

    form.addEventListener('submit', enviar)
    inDni.addEventListener('input', validaDNI)

    function enviar(oE) {
        oE.preventDefault()
        /**
         * TODO: Codigo real de envio
         */
        console.log('Enviando')
    }

    function validaDNI() {
        inDni.setCustomValidity('DNI Incorrecto')
        console.log('Validando DNI')
        const LETRAS = 'TRWAGMYFPDXBNJZSQVHLCKET'
        let num = inDni.value.substring(0, inDni.value.length-1)
        let letra =  inDni.value.substring(inDni.value.length-1)

        if (isNaN(num *1) || num < 1 || num > 99999999 ) {
            return false
        } else if(LETRAS[num%23] !== letra) {
            return false
        }else{
            inDni.setCustomValidity('')
        }
    }
}




document.addEventListener('DOMContentLoaded', main)