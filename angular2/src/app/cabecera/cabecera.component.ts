import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  titulo: string

  constructor() { }

  ngOnInit() {
    this.titulo = "Proyecto Angular"
  }

}
