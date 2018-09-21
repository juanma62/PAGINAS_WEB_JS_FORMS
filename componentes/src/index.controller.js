import { App } from './app.js '
import { InicioComponent } from './components/inicio.js';

export class Index extends App {
    constructor () {
        super()
        this.nodeMain = document.querySelector('main')
        this.renderMain()
    }

    renderMain() {
        this.inicio = new InicioComponent('Inicio')
        this.nodeMain.innerHTML = this.inicio.renderString()
    }
}