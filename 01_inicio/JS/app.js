// Importar una clase
import{Form} from './form.js'
import{ interactivo } from './interactivo.js'

document.addEventListener('DOMContentLoaded', 
                            () => {
            new Form()
            new interactivo()    
    }
)

// 1ª Forma de iniciar. Forma antigua
/* function iniciar(){
    console.log('Iniciado JS')
}

document.addEventListener('DOMContentLoaded', iniciar) */


// 2ª Forma de iniciar. Función anónima antigua
/* document.addEventListener('DOMContentLoaded', function(){
    console.log('Iniciado JS, funcion anonima')
}) */


// 3ª Forma de iniciar. Función arrow
/* document.addEventListener('DOMContentLoaded', () =>
    console.log('Iniciado JS, funcion anonima')
) */


