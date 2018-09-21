import { App } from '../app.js '
import { AboutComponent } from '../components/about.js'

export class About extends App {
    constructor () {
        super(undefined, 'About')
        this.nodeMain = document.querySelector('main')
        this.renderMain()
    }

    renderMain () {
        this.about = new AboutComponent('Acerca de')
        this.nodeMain.innerHTML = this.about.renderString()
    }
}