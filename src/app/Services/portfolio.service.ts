import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(private http:HttpClient) { }

<<<<<<< HEAD
  // Obtener datos de archivo data.json: 
=======
  // Obtener datos de archivo data.json:
>>>>>>> experimental
  obtenerDatos():Observable<any> {
    return this.http.get('./assets/data/data.json');
  }

}
