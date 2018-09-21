import { HeadComponent } from './componentes/head-component.js'
import { HeaderComponent } from './componentes/header-component.js'

class Index{
    constructor(){
        this.head = new HeadComponent('Componentes')
        this.header = new HeaderComponent('Página de componentes')

        this.render()
    }

    render(){
        document.head.insertAdjacentHTML('afterbegin', this.head.render())
        document.header.
    }
}

document.addEventListener('DOMContentLoaded', () => {new Index()})