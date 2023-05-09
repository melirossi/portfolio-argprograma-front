import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Habblandas } from '../model/habblandas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabblandasService {

  // Llamar backend:
  URL = 'https://melisa-portfolio-service.onrender.com/habblandas/';

  constructor(private httpClient : HttpClient) { }

  // Obtener lista habilidades blandas:
  public lista(): Observable<Habblandas[]>{
    return this.httpClient.get<Habblandas[]>(this.URL + 'lista');
  }

  // Obtener detalle habilidad blanda por ID:
  public detail(id: number): Observable<Habblandas>{
    return this.httpClient.get<Habblandas>(this.URL + `detail/${id}`);
  }

  // Crear habilidad blanda:
  public save(habblandas: Habblandas): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', habblandas);
  }

  // Editar habilidad blanda por ID:
  public update(id: number, habblandas: Habblandas): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, habblandas);
  }

  // Eliminar habilidad blanda por ID:
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }

}

