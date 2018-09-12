function main() {

    function promesas() {
        return new Promise(
            (resolve) => {
                setTimeout (() => resolve('Ha pasado un rato'), 3000)
            }
        )
    }

    promesas().then(
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