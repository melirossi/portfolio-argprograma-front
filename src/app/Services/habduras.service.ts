import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habduras } from '../model/habduras';

@Injectable({
  providedIn: 'root'
})
export class HabdurasService {

<<<<<<< HEAD
  // Llamar al backend:
=======
  // Llamar backend:
>>>>>>> experimental
  URL = 'https://melisa-portfolio-service.onrender.com/habduras/';

  constructor(private httpClient : HttpClient) { }

<<<<<<< HEAD
  // Obtener lista de habilidades duras:
=======
  // Obtener lista habilidades duras:
>>>>>>> experimental
  public lista(): Observable<Habduras[]>{
    return this.httpClient.get<Habduras[]>(this.URL + 'lista');
  }

<<<<<<< HEAD
  // Obtener detalle de habilidad dura:
=======
  // Obtener detalle habilidad dura por ID:
>>>>>>> experimental
  public detail(id: number): Observable<Habduras>{
    return this.httpClient.get<Habduras>(this.URL + `detail/${id}`);
  }

  // Crear habilidad dura:
  public save(habduras: Habduras): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', habduras);
  }

<<<<<<< HEAD
  // Editar habilidad dura:
=======
  // Editar habilidad dura por ID:
>>>>>>> experimental
  public update(id: number, habduras: Habduras): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, habduras);
  }

<<<<<<< HEAD
  // Eliminar habilidad dura:
=======
  // Eliminar habilidad dura por ID:
>>>>>>> experimental
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
