export class Form{
    constructor(){
        this.domForm = document.querySelector('form')
        this.data = {
            user : {
                name : '',
                apellidos : ''
            },
            email : '',
            passw : '',
            coments : '',
            aficiones : [],
            opciones : {
                condiciones : '',
                turno : '',
                curso : ''
            }
        }
        this.domForm.addEventListener('submit',
            this.enviar.bind(this)
        )
    }
    enviar(oEv){
        oEv.preventDefault()
        this.data.user.name = document.querySelector('#nombre').value
        this.data.user.apellidos = document.querySelector('#apellidos').value
        this.data.email = document.querySelector('#correo').value
        this.data.passw = document.querySelector('#passw').value
        this.data.coments = document.querySelector('#comentarios').value
        this.data.opciones.condiciones = document.querySelector('#condiciones').checked
        this.data.opciones.turno = this.verTurno()
        this.data.opciones.curso = this.setCurso() 
        this.data.aficiones = this.setAficiones()
        
        console.dir(this.data)
        console.dir(document.querySelector('#curso'))
    }

    verTurno(){
        let aTurnos = document.getElementsByName('turno')
        //let aTurnos = document.querySelectorAll('[name="turno"]')
        /* for (let i = 0; i < aTurnos.length; i++) {
            const item = aTurnos[i];
            if(item.checked){
                return item.value
            }      
        } */

        /* let resultado = ''

        aTurnos.forEach(
            item => {
                if(item.checked){
                    resultado = item.value
                    return true
                }
            }
        )
        return resultado */
        let r = ''

        let aDatos = []
        aTurnos.forEach(
            item => aDatos.push(item)
        )
        aDatos.some(    
            (item, i) => {
                console.log("Vuelta", i+1)
                if (item.checked) {
                    r = item.value
                    return true
                }
            })
        return r
    }

    setCurso() {
        const curso = document.querySelector('#curso')
        console.dir(curso.selectedIndex)
        console.dir(curso[curso.selectedIndex])
        const oDato = {
            value :  curso[curso.selectedIndex].value,
            text :  curso[curso.selectedIndex].textContent
        }
        return oDato
    }

    setAficiones() {
        let aDatos = []
        let aAficiones = document.querySelectorAll('.aficiones')
        aAficiones.forEach(item => {
            if (item.checked) {
                aDatos.push(item.id)
            }
        })
        return aDatos
    }
}