import { Component, OnInit } from '@angular/core';
import { ContactoIf } from '../../models/contacto.model';
import { USERS } from '../../datos/contactos.mock';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'cas-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit {

  aContactos: Array<ContactoIf>

  constructor() { }

  // Servicio Http -> Angular antiguo
  // Servicio HttpClient -> Angular actual

  ngOnInit() {
    this.aContactos = []
    //this.aContactos = USERS
    this.http.get(environment.api_users).toPromise()
    .then((response: any) => {
      console.dir(response)
      this.aContactos = response.results
    })
  }

  borrarContacto(badEmail){
    this.aContactos = this.aContactos.filter(
      (item) => (item.email !=badEmail))
  }
}
