import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ContactoIf } from '../models/contacto.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  aContactos: Array<ContactoIf>
  url: string

  constructor(public http: HttpClient) {
    this.aContactos = []
    this.url = environment.api_users
   }

  getLista(){
    return new Promise(
      (resolve, reject) => {if(resolve){
        this.http.get(this.url).toPromise()
        .then((response: any) => {
          this.aContactos = response.results
          resolve(this.aContactos)
        }).catch(function() {
            console.log('Esto es un error')
        })
      }    
    })
  }
}
