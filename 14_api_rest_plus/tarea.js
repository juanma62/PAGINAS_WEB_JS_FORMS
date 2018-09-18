export class Tarea {

    constructor(data){
        this.name = data.name
        this.isComplete = data.isComplete
        this.nodoTarea = ""
        this.crearTarea()
        this.nodeCheck = this.nodoTarea.querySelector("#isCompleta")
        this.nodeBorrar = this.nodoTarea.querySelector("#btnBorrar")
        console.log(this.nodeCheck, this.nodeBorrar)
    }

    crearTarea(){
        this.nodoTarea = document.createElement('li')
        this.nodoTarea.innerHTML = 
        `
            <input type="checkbox" name="isCompleta" id="isCompleta"
            ${this.isComplete ? 'checked' : ''}>
            <span class="nombreTarea">${this.name}</span>
            <span id="btnBorrar" class="borrarTarea">🗑️</span>
        `
        console.dir(this.nodoTarea)
    }

    renderTarea(){
        return this.nodoTarea
    }

}