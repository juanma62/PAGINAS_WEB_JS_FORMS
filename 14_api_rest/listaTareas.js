import { FetchService } from "./fetch-service.js";
import { MENSAJES } from "./mensajes.js"

export class ListaTareas {

    constructor(){
        this.nodoListaTareas = document.querySelector('#lista')
        this.nodoBtnAdd = document.querySelector('#btnAdd')
        this.nodoNewTarea = document.querySelector('#in-tarea')
        this.nodoBorrarMarcados = document.querySelector('#btnBorrar')
        this.nodoBuscar = document.querySelector('#btnBuscar')
        this.nodoBuscarValor = document.querySelector('#in-buscar')
        this.nodoBuscarValor.addEventListener('click', this.buscarTareas.bind(this))
        this.nodoBorrarMarcados.addEventListener('click', this.borrarTareas.bind(this))
        this.nodoBtnAdd.addEventListener('click', this.addTarea.bind(this))
        this.URL = "http://localhost:3000/tareas"
        this.aTareas = []
        this.fetchService = new FetchService()
        this.getTareas()
    }

    getTareas() {
        this.fetchService.send(this.URL, {method: 'GET' })
            .then( data => {
                this.aTareas = data
                //console.dir(this.aTareas)
                this.aTareas = this.aTareas.filter(
                    (item) => {
                        //console.log(item.name.indexOf('Aprender')) 
                        if (item.name.indexOf('e') >= 0 ) { return true} 
                        else { return false }
                    }
                )
                //console.dir(this.aTareas)
                console.log('Ejecutando get tareas')
                this.renderLista()
            },
            error => {console.dir(error)}
            )
    }

    renderLista(){
        this.nodoListaTareas.innerHTML = ''
        let html = ""

        this.nodoBorrarMarcados.disabled = true

        this.aTareas.forEach(
            (item) => {
                if(item.isComplete && this.nodoBorrarMarcados.disabled){
                    this.nodoBorrarMarcados.disabled = false
                }
                html += this.renderTarea(item)
            }
        )
        this.nodoListaTareas.innerHTML = html
        this.aNodosChecks = document.querySelectorAll('[name="is-completa"]')
        this.aNodosBorrar = document.querySelectorAll('.borrar-activo')
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
            <span id="borrarcheck-${data.id}" data-id="${data.id}" class="borrar-tarea ${data.isComplete ? 'borrar-activo' : 'inactivo'}">🗑️</span>  
        </li>
        `
        return htmlView
    }

    checkTarea(oEv){
        //console.log(oEv.target.dataset.id)
        //console.log(oEv.target.checked)
        let datos = {
            isComplete : oEv.target.checked
        }
        let url = this.URL + '/' + oEv.target.dataset.id
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

    borrarTarea(p){
        let id
        if(p.target){
            id = p.target.dataset.id
        if (!window.confirm(MENSAJES.listaTareas.confirmacion)) {return}
        }else{
            id = p.id
        }
        console.log(id)
        let url = this.URL + '/' + id
        this.fetchService.send(url, {method: 'DELETE'}).then(
            data =>  {
                if(p.target || p.isUltima){
                   this.getTareas() 
                }
            }, error => console.log(error),
        )
    }
    
    /* borrarTarea(oEv){
        console.log(oEv.target.dataset.id)
        if (!window.confirm(MENSAJES.listaTareas.confirmacion)) {return}
        let url = this.URL + '/' + oEv.target.dataset.id
        this.fetchService.send(url, {method: 'DELETE'}).then(
            data =>  {
                this.getTareas()
            }, error => console.log(error),
        )
    } */

    borrarTareas(){
        /* for(let i = 0; i < this.aTareas.length; i++){
            if(this.aTareas[i].isComplete){
                let url2 = this.URL + '/' + this.aTareas[i].id
                this.fetchService.send(url2, {method: 'DELETE'})
                .then (
                    data => this.getTareas(),
                    error => console.log(error),
                )
            }  
        } */
        
        let aSeleccionados = this.aTareas.filter(
            (item) => {return item.isComplete}
        )
        // Si no controlamos el disable del botón
        //if(!aSeleccionados.length){return}
        
        if (!window.confirm(MENSAJES.listaTareas.confirmacion)) {return}
        
        aSeleccionados.forEach(
            (item, i, array) => {
                let isUltima = (i+1 === array.length) ? true : false
                this.borrarTarea({id : item.id, isUltima : isUltima})
            }
        )
    }

    buscarTareas(){
        
    }
}