import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  empresa:string
  cliente:object;

  constructor() { }

  ngOnInit() {
    this.empresa = "J&M Artes gráficas"
    this.cliente = {nombre:"Pepe"}
  }
}