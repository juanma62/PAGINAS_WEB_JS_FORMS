function main(){
    let url = 'datos.json'
    url = 'datosmal.json'

    document.querySelector('#btnEnviar').addEventListener('click', enviar)

    function enviar(){
        // Fetch con control de errores
        fetch(url, {method: 'GET'} )
        .then( response => {
            if (response.ok) {
                return response.json() 
            } else {
                let msg = response.status + ' : ' + response.statusText 
                throw msg
            }
        })
        .then( data => mostrarDatos(data) )
        .catch ( error => {
             mostrarError(error)
        }) 
    }
    function mostrarError(error){
        //document.querySelector('#error').innerHTML = error
        location.assign('error.html?e='+error)
    }

    function mostrarDatos(data){
        console.log(data)
        document.querySelector('#output').innerHTML += JSON.stringify(data)
    }
}

// Fetch basico
/* fetch(url, {method:'GET'}).then(
    (response) => {return response.json()}
).then(
    // Se puede o no poner return
    data => mostrarDatos(data)
    ) */






document.addEventListener('DOMContentLoaded', main)