import { HeaderComponent } from "./components/header.js";
import { FooterComponent } from "./components/footer.js";
import { MenuComponent } from "./components/menu.js";
import { BASE, ITEMS } from './menuItems.js'
import { HeadComponent } from "./components/head.js";

export class App {
    constructor (title = 'Componentes', page = '') {
        this.nodeHead = document.head
        this.head = new HeadComponent(title  + ((page) ? ` - ${page}`: ''))
        this.nodeApp = document.body
        this.header = new HeaderComponent(title)
        this.menu = new MenuComponent(BASE, ITEMS)
        this.main = '<main></main>'
        this.footer = new FooterComponent(
            {
                autor: 'Alejandro Cerezo',
                empresa: 'CAS Training',
                lugar: 'Getafe - 2018'
            }
        )
        this.render()
    }

    render() {
        // crea el head desde un string
        this.nodeHead.insertAdjacentHTML('afterbegin', this.head.renderString())

        // crea un header desde un string
        this.nodeApp.innerHTML += this.header.renderString()
        // crea un header desde un nodo
        this.nodeApp.appendChild(this.header.renderNode())
        this.nodeApp.appendChild(this.menu.renderNode())
        this.nodeApp.innerHTML += this.main
        // crea un footer desde un string
        this.nodeApp.innerHTML += this.footer.renderString()
        // crea un footer desde un nodo
        this.nodeApp.appendChild(this.footer.renderNode())
    }
}