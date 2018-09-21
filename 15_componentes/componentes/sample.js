export class Sample{

    constructor(){

    }

    render(){
        return '<header><h1>Hola mundo</h1></header>'
    }

    renderNodo(){
        let nombreNodo = document.createElement('header')
        nombreNodo.innerHTML = '<h1>Hola mundo</h1>'
        return nombreNodo
    }
}


/////////////////////////////////

document.body.innerHTML = new Sample().render()

document.body.appendChild(new Sample().renderNodo())