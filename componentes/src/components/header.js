export class HeaderComponent {
    constructor (title) {
        this.title = title
    }
    renderNode () {
        const header = document.createElement('header')
        header.innerHTML = `<h1 class="title">${this.title}</h1>`
        return header
    }
    renderString() {
        const header = 
        `<header>
            <h1 class="title">${this.title}</h1>
        </header>
        `
        return header
    }
}





  