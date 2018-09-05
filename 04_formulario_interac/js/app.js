import {GENEROS} from './datos.js'

export class App {
    constructor() {
        this.dom = {
            formInicio : document.querySelector('#formInicio'),
            formFinal : document.querySelector('#formFinal'),
            cbMas : document.querySelector('#mas'),
            slGenero : document.querySelector('#genero')
        }
        this.aGeneros = GENEROS
        this.generosFrist = true
        this.defineHandlers()
        this.clearSelect()
    }

    defineHandlers () {
        this.dom.cbMas.addEventListener('change',
            this.setFormFinal.bind(this))
        this.dom.slGenero.addEventListener('change',
            this.changeGenero.bind(this))
    }

    setFormFinal () {
        this.dom.formFinal.classList.toggle('hide')
    }

    clearSelect() {
        let html = ''
        this.aGeneros.forEach((item) => {
            html += `<option value="${item.value}">${item.label}</option>` 
        })
        this.dom.slGenero.innerHTML = html 
    }

    changeGenero(){
        if(this.generosFrist){
            this.aGeneros.shift()
            this.clearSelect()
            this.generosFrist = false
        }
        
    }
}