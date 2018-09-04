export class Form{
    constructor(){
        this.domForm = document.querySelector('form')
        this.domPassw = document.querySelector('#passw')
        this.data = {
            user : {
                name : '',
                apellidos : ''
            },
            email : '',
            passw : '',
            coments : '',
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
        /* this.data.opciones.curso = document.querySelector('#condiciones').value */
        
        console.dir(this.data)
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

        let resultado = ''

        aTurnos.forEach(
            item => {
                if(item.checked){
                    resultado = item.value
                    return true
                }
            }
        )
        return resultado
    }
}