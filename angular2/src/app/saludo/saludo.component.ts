import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  nombre: string

  constructor() { }

  ngOnInit() {
    this.nombre = 'Juan'
  }

  btnSaludar(){
    console.log('Hola')
  }

}
