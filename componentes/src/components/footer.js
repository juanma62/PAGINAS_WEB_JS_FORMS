export class FooterComponent {

    constructor (data) {
        this.autor = data.autor
        this.empresa = data.empresa
        this.lugar = data.lugar
    }
    renderNode () {
        const footer = document.createElement('footer')
        footer.innerHTML = `<address>
                <p>${this.autor} - ${this.empresa}</p>
                <p>${this.lugar}</p>
            </adddress>
            `
        return footer
    }
    renderString() {
        const footer = 
        `<footer>
            <address>
                <p>${this.autor} - ${this.empresa}</p>
                <p>${this.lugar}</p>
            </adddress>
        </footer>
        `
        return footer
    }
}