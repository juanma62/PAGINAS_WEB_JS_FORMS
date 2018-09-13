function main() {

    function promesas() {
        return new Promise(
            (resolve) => {
                setTimeout (() => resolve('Ha pasado un rato'), 3000)
            }
        )
    }

    function promesas2(){
        return new Promise(
            (resolve) => {
                setTimeout(() => resolve('Han pasado dos ratos'), 5000)
            }
        )
    }

    promesas().then(
        // Se pueden quitar los paréntesis y las llaves a las funciones arrow si van en un línea
        response => console.log(response)
    )
    promesas2().then(
        (response) => {console.log(response)}
    )

/*     function pintar(msg) {
        console.log(msg)
    }
    
    promesas()
    .then(pintar) */

    console.log('Ultima linea')

}

document.addEventListener('DOMContentLoaded', main)