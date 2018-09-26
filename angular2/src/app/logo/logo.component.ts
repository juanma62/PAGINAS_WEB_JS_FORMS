import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  logo: string
  alt: string
  title: string

  constructor() { }

  ngOnInit() {
    this.logo = "../../assets/logo.svg"
    this.alt = "Logotipo Angular"
    this.title = "Este es el logotipo de Angular"
  }

}
