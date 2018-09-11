import {FILE} from './config.js'

function main(){
    // Forma normal de pedir datos
    document.querySelector('#btnDatos').addEventListener('click', pedirDatos)

    // Otra forma de pedir datos tradicional
    // document.querySelector('#btnDatos').onclick = pedirDatos

    function pedirDatos(){
        console.dir(FILE)

        const ajax = new XMLHttpRequest()
        console.dir(ajax)
        ajax.onreadystatechange = mostrarDatos

        ajax.open('GET', FILE)
        ajax.send(null)

        function mostrarDatos(){
            console.log(ajax.readyState)

            if(ajax.readyState === 4){
                console.log(ajax.status)
                if(ajax.status == 200){
                    console.log(ajax.responseText)
                    document.querySelector('#output').innerHTML = ajax.responseText
                }
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', main)