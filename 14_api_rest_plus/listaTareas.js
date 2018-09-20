import { FetchService } from "./fetch-service.js";
import { Tarea } from "./tarea.js";

export class ListaTareas {

    constructor(){
        this.URL = "http://localhost:3000/tareas"
        this.aTareas = []
        this.nodoListaTareas = document.querySelector('#lista')
        this.fetchService = new FetchService()
        document.addEventListener('borrarTarea', this.borrarTarea.bind(this))
        document.addEventListener('ckeckCompleta', this.checkTarea.bind(this))
        this.getTareas()
    }

    getTareas() {
        this.fetchService.send(this.URL, {method: 'GET' })
            .then( data => {
                this.aTareas = data  
                this.renderLista()
            },
            error => {console.dir(error)}
            )
    }

    renderLista(){
        this.nodoListaTareas.innerHTML = ''
        this.aTareas.forEach(
            item => {
                this.nodoListaTareas.appendChild(new Tarea(item).getTarea())
                //this.nodoListaTareas.appendChild(new Tarea(item).nodoTarea)
            }
        )
    }

    checkTarea(oEv){
        console.log('TODO check tarea')
        console.dir(oEv)
        let datos = {
            isComplete : oEv.target.children[0].checked
        }
        let url = this.URL + '/' + oEv.target.children[0].dataset.id
        let miHeaders = new Headers()
        miHeaders.append("Content-Type", "application/json");
        //console.dir(miHeaders)
        this.fetchService.send(url, {
            method: 'PATCH', 
            headers : miHeaders,
            body : JSON.stringify(datos)
        }).then(
            response => {
                //console.log(response)
                this.getTareas()
            },
            error => console.log(error)
        )
    }

    borrarTarea(){
        console.log('TODO borrar tarea')
    }
}