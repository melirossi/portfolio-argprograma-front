import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Habblandas } from '../model/habblandas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabblandasService {

<<<<<<< HEAD
  // Llamar al backend:
=======
  // Llamar backend:
>>>>>>> experimental
  URL = 'https://melisa-portfolio-service.onrender.com/habblandas/';

  constructor(private httpClient : HttpClient) { }

<<<<<<< HEAD
  // Obtener lista de habilidades blandas:
=======
  // Obtener lista habilidades blandas:
>>>>>>> experimental
  public lista(): Observable<Habblandas[]>{
    return this.httpClient.get<Habblandas[]>(this.URL + 'lista');
  }

<<<<<<< HEAD
  // Obtener detalle de habilidad blanda:
=======
  // Obtener detalle habilidad blanda por ID:
>>>>>>> experimental
  public detail(id: number): Observable<Habblandas>{
    return this.httpClient.get<Habblandas>(this.URL + `detail/${id}`);
  }

  // Crear habilidad blanda:
  public save(habblandas: Habblandas): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', habblandas);
  }

<<<<<<< HEAD
  // Editar habilidad blanda:
=======
  // Editar habilidad blanda por ID:
>>>>>>> experimental
  public update(id: number, habblandas: Habblandas): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, habblandas);
  }

<<<<<<< HEAD
  // Eliminar habilidad blanda:
=======
  // Eliminar habilidad blanda por ID:
>>>>>>> experimental
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }

}

