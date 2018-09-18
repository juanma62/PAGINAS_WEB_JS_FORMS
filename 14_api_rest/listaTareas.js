import { FetchService } from "./fetch-service.js";

export class ListaTareas {

    constructor(){
        this.nodoListaTareas = document.querySelector('#lista')
        this.URL = "http://localhost:3000/tareas"
        this.aTareas = []
        this.fetchService = new FetchService()
        this.getTareas()
    }

    getTareas(){
        this.fetchService.send(this.URL, {method: 'GET'})
            .then(data => {
                this.aTareas = data
                this.renderLista()
            },
        (error) => {console.dir(error)}
        )
    }

    renderLista(){
        let html = ""
        this.aTareas.forEach(
            item => html += this.renderTarea(item)
        )
        this.nodoListaTareas.innerHTML = html
        this.aNodosChecks = document.querySelectorAll('[name="is-completa"]')
        this.aNodosBorrar = document.querySelectorAll('.borrar-tarea')
        this.aNodosChecks.forEach(
            item => item.addEventListener('change', this.checkTarea.bind(this))
        )
        this.aNodosBorrar.forEach(
            item => item.addEventListener('click', this.borrarTarea.bind(this))
        )
    }

    renderTarea(data){
        let htmlView = 
        `
        <li>
            <input type="checkbox" name="is-completa" id="check-${data.id}"
            data-id="${data.id}" ${data.isComplete ? 'checked' : ''}>
            <span class="nombre-tarea ${data.isComplete ? 'hecho' : ''}">${data.name}</span>
            <span id="borrarcheck-${data.id}" data-id="${data.id}" class="borrar-tarea">🗑️</span>
        </li>
        `
        return htmlView
    }

    checkTarea(oEv){
        console.log(oEv.target.dataset.id)
    }

    borrarTarea(oEv){
        console.log(oEv.target.dataset.id)
        let url = this.URL + '/' + oEv.target.dataset.id
        this.fetchService.send(url, {method: 'DELETE'}).then(
            data =>  this.getTareas(),
            error => console.log(error),
        )
    }    
}