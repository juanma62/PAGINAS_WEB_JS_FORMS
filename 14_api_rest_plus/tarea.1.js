export class Tarea {

    constructor(data){
        this.name = data.name
        this.isComplete = data.isComplete
        this.nodeCheck = document.querySelector("#isCompleta")
        this.nodeBorrar = document.querySelector("#btnBorrar")
        console.log(this.nodeCheck, this.nodeBorrar)
    }

    renderTarea(){
        let htmlView = 
        `
        <li>
            <input type="checkbox" name="isCompleta" id="isCompleta"
            ${this.isComplete ? 'checked' : ''}>
            <span class="nombreTarea">${this.name}</span>
            <span id="btnBorrar" class="borrarTarea">🗑️</span>
        </li>
        `
        return htmlView
    }

}