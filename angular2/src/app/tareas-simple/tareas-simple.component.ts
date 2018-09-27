import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-tareas-simple',
  templateUrl: './tareas-simple.component.html',
  styleUrls: ['./tareas-simple.component.css']
})
export class TareasSimpleComponent implements OnInit {

  aTareas: Array<string>
  sTarea: string

  constructor() { }

  ngOnInit() {
    // this.aTareas = []. Otra forma de ponerlo sin else
    let saveTareas = JSON.parse(localStorage.getItem('tareasStorage'))
    if(saveTareas){
      this.aTareas = saveTareas
    } else{
      this.aTareas = []
    }
  }

  addTarea(){
    let stringTareas: string
    if(this.sTarea){
      this.aTareas.push(this.sTarea)
      stringTareas = JSON.stringify(this.aTareas)
      localStorage.setItem('tareasStorage', stringTareas)
      this.sTarea = ''
    }
    console.log(this.aTareas)
  }
}
