import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Idiomas } from '../model/idiomas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdiomasService {

  // Llamar backend:
  URL = 'https://melisa-portfolio-service.onrender.com/idiomas/';

  constructor(private httpClient : HttpClient) { }

  // Obtener lista idiomas:
  public lista(): Observable<Idiomas[]>{
    return this.httpClient.get<Idiomas[]>(this.URL + 'lista');
  }

  // Obtener idioma experiencia por ID:
  public detail(id: number): Observable<Idiomas>{
    return this.httpClient.get<Idiomas>(this.URL + `detail/${id}`);
  }

  // Crear idioma:
  public save(idiomas: Idiomas): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', idiomas);
  }

  // Editar idioma por ID:
  public update(id: number, idiomas: Idiomas): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, idiomas);
  }

  // Eliminar idioma por ID:
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
