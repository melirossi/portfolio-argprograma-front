import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habduras } from '../model/habduras';

@Injectable({
  providedIn: 'root'
})
export class HabdurasService {

  // Llamar backend:
  URL = 'https://melisa-portfolio-service.onrender.com/habduras/';

  constructor(private httpClient : HttpClient) { }

  // Obtener lista habilidades duras:
  public lista(): Observable<Habduras[]>{
    return this.httpClient.get<Habduras[]>(this.URL + 'lista');
  }

  // Obtener detalle habilidad dura por ID:
  public detail(id: number): Observable<Habduras>{
    return this.httpClient.get<Habduras>(this.URL + `detail/${id}`);
  }

  // Crear habilidad dura:
  public save(habduras: Habduras): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', habduras);
  }

  // Editar habilidad dura por ID:
  public update(id: number, habduras: Habduras): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, habduras);
  }

  // Eliminar habilidad dura por ID:
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
