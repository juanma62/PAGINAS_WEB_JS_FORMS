export class HeaderComponent{
    constructor(title){
        this.title = title
    }

    render(){
        const header = document.createElement('header')
        header.innerHTML = '<h1 class="title">Página de componentes</h1>'
        return header
    }
}