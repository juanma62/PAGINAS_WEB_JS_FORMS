import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'cas-saludoLocal',
  templateUrl: './saludoLocal.component.html',
  styleUrls: ['./saludoLocal.component.css']
})
export class SaludoLocalComponent implements OnInit {

  @ViewChild ('localNombre') nodoLocalNombre: ElementRef
  
  constructor() { }

  ngOnInit() {
    console.log(this.nodoLocalNombre)
  }

}
