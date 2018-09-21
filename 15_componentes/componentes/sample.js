export class Sample{

    constructor(){

    }

    render(){
        return '<header><h1>Hola mundo</h1></header>'
    }

    renderNodo(){
        let nodo = document.createElement('header')
        nodo.innerHTML = '<h1>Hola mundo</h1>'
        return nodo
    }
}


/////////////////////////////////

document.body.innerHTML = new Sample().render()

document.body.appendChild(new Sample().renderNodo())