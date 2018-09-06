function main(){
    let input = document.querySelector('#nombre')

    input.addEventListener('change', () => {
        console.log('Evento change', input.value)
    })

    input.addEventListener('input', () => {
        console.log('Evento input', input.value)
    })
}

document.addEventListener('DOMContentLoaded', main)