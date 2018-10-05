import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cas-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  @Input()autor:string
  @Input()titulo:string
  @Input()contenido:string
  id = 23

  constructor() { }

  ngOnInit() {
  }

}
