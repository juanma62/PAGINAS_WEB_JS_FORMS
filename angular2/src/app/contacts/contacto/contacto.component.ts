import { Component, OnInit } from '@angular/core';
import { ContactoIf } from '../../models/contacto.model';
import { USERS } from '../../datos/contactos.mock';

@Component({
  selector: 'cas-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contacto: ContactoIf
  fullname: string;
  constructor() { }

  ngOnInit() {
    this.contacto = USERS[0]
    this.fullname = `${this.contacto.name.title}. ${this.contacto.name.first} ${this.contacto.name.last}`
  }

}
