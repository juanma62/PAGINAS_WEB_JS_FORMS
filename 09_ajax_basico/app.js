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

        ajax.open('GET', 'datos.json')
        ajax.send(null)

        function mostrarDatos(){
            console.log(ajax.readyState)

            let oDatos
            let html

            if(ajax.readyState === 4){
                console.log(ajax.status)
                if(ajax.status == 200){
                    console.dir(ajax.responseText)
                    oDatos = JSON.parse(ajax.responseText)
                    console.dir(oDatos)

                    html = '<ul>'

                    for (const clave in oDatos) {
                        if (oDatos.hasOwnProperty(clave)) {
                            const value = oDatos[clave];
                            html += `<li><strong class='mayusculas'>${clave}:</strong> ${value}</li>`
                        }
                    }

                    html += '</hl>'

                    document.querySelector('#output').innerHTML = html
                }else{
                    document.querySelector('#output').innerHTML = ajax.status + ' : ' + ajax.statusText
                }
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', main)