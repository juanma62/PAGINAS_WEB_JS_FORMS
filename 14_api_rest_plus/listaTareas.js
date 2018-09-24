import { FetchService } from "./fetch-service.js";
import { MENSAJES } from "./mensajes.js";
import { Tarea } from "./tarea.js";

export class ListaTareas {

    constructor(){
        this.URL = "http://localhost:3000/tareas"
        this.aTareas = []
        this.nodoListaTareas = document.querySelector('#lista')

        this.nodoBtnAdd = document.querySelector('#btnAdd')
        this.nodoNewTarea = document.querySelector('#in-tarea')
        this.nodoBtnBorrarSelect = document.querySelector('#btnBorrar')
        this.nodoBtnAdd.addEventListener('click', this.addTarea.bind(this))
        this.nodoBtnBorrarSelect.addEventListener('click', this.borrarSelect.bind(this))

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

    addTarea(){
        if(!this.nodoNewTarea.value) {return}
        let newTarea = {
            name : this.nodoNewTarea.value,
            isComplete : false
        }
        this.nodoNewTarea.value = ''
        let miHeaders = new Headers()
        miHeaders.append("Content-Type", "application/json");
        //console.dir(miHeaders)
        this.fetchService.send(this.URL, {
            method: 'POST', 
            headers : miHeaders,
            body : JSON.stringify(newTarea)
        }).then(
            response => {
                console.log(response)
                this.getTareas()
            },
            error => console.log(error)
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

    borrarTarea(p) {
        let  id
        if (p.target) {
            id = p.target.children[2].dataset.id
            if (!window.confirm( MENSAJES.listaTareas.confirmacion)) {return}
        }
        else { 
            id =  p.id
        }
        console.log(id)
        // TODO Borar en Servicio Web
        let url = this.URL + '/' + id
        this.fetchService.send(url, {method: 'DELETE' })
            .then(
                data => { 
                    console.log(data)
                    if (p.target || p.isUltima) {
                        this.getTareas() 
                    }
                },
                error => console.log(error)
            )
    }

    borrarSelect() {
        
        let aSeleccionados = this.aTareas.filter(
            (item) => { return item.isComplete}
        )
        // Si no controlamos el disabled del boton
        // if(!aSeleccionados.length) {return}
        if (!window.confirm( MENSAJES.listaTareas.confirmacion)) {return}

        aSeleccionados.forEach(
            (item, i, array) => {
                let isUltima = (i+1 === array.length) ? true : false
                this.borrarTarea( {id: item.id, isUltima: isUltima} )
            }
        ) 
    }
}