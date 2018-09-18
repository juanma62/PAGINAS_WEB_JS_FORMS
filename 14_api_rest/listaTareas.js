import { FetchService } from "./fetch-service.js";
import { Tarea } from "./tarea.js";

export class ListaTareas {

    constructor(){
        this.URL = "http://localhost:3000/tareas"
        this.aTareas = []
        this.nodoListaTareas = document.querySelector('#lista')
        this.getTareas()
    }

    getTareas(){
        new FetchService({url: this.URL, method: 'GET'})
        .get()
        .then(data => {
            this.aTareas = data
            this.renderLista()
        },
        (error) => {console.dir(error)}
        )
    }

    renderLista(){
        this.aTareas.forEach(
            item => {
                this.nodoListaTareas.appendChild(new Tarea(item).renderTarea())
            }
        )
    }
}