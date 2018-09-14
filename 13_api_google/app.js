export class App {
    constructor(){
        this.URLBase = 'https://www.googleapis.com/books/v1/volumes?q='
        this.noDispo = 'http://www.ellibrotecnico.com/imagenes/9788401/978840101752.GIF'
        this.nClave = document.querySelector('#clave')
        this.nBtnBuscar = document.querySelector('#btnBuscar')
        this.nOutput = document.querySelector('#output')
        this.clave = ''

        this.buscar = this.buscar.bind(this)
        this.nBtnBuscar.addEventListener('click', this.buscar)
    }

    buscar(){
        let url
        this.clave = this.nClave.value
        if(this.clave){
            url = this.URLBase + this.clave
            fetch(url, {method:'GET'}).then(
                response => response.json()
            ).then(data => this.mostrar(data)
            )
        }
    }

    mostrar(data){
        let aLibros
        let html = '<dl>'
        console.log(data.items)
        aLibros = data.items.map(
            item => {
                return {
                    autores: item.volumeInfo.authors,
                    titulo: item.volumeInfo.title,
                    icon: item.volumeInfo.imageLinks ?
                        item.volumeInfo.imageLinks.smallThumbnail: this.noDispo
                }  
            }
        )
        
        console.log(aLibros)

        aLibros.forEach(item => {
            let autor = ''
            if(item.autores){
                autor = item.autores.join(', ')
            }
            html += `<dd>${item.titulo}</dd>`
            html += `<dt>${autor}</dt>`
            html += `<img src="${item.icon}">`
        })
        html += '</dl>'
        this.nOutput.innerHTML = html
        this.nClave.value = ''
    }
}