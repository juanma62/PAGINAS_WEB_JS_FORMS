function main(){

    function promesas(){
        return new Promise(
            (resolve) => {setTimeout(resolve, 3000)}
        )
    }

    function pintar(msg){
        console.log(msg)
    }

    promesas().then(
        pintar('Ha pasado un rato')
    )
    console.log('Última linea')

}

document.addEventListener('DOMContentLoaded', main)