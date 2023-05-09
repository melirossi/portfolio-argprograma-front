import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Idiomas } from '../model/idiomas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdiomasService {

<<<<<<< HEAD
  // Llamar al backend:
=======
  // Llamar backend:
>>>>>>> experimental
  URL = 'https://melisa-portfolio-service.onrender.com/idiomas/';

  constructor(private httpClient : HttpClient) { }

<<<<<<< HEAD
  // Obtener lista de idiomas:
=======
  // Obtener lista idiomas:
>>>>>>> experimental
  public lista(): Observable<Idiomas[]>{
    return this.httpClient.get<Idiomas[]>(this.URL + 'lista');
  }

<<<<<<< HEAD
  // Obtener detalle de idiomas:
  public detail(id: number): Observable<Idiomas>{
    return this.httpClient.get<Idiomas>(this.URL + `detail/${id}`);
  }
  
=======
  // Obtener idioma experiencia por ID:
  public detail(id: number): Observable<Idiomas>{
    return this.httpClient.get<Idiomas>(this.URL + `detail/${id}`);
  }

>>>>>>> experimental
  // Crear idioma:
  public save(idiomas: Idiomas): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', idiomas);
  }

<<<<<<< HEAD
  // Editar idioma:
=======
  // Editar idioma por ID:
>>>>>>> experimental
  public update(id: number, idiomas: Idiomas): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, idiomas);
  }

<<<<<<< HEAD
  // Eliminar idioma:
=======
  // Eliminar idioma por ID:
>>>>>>> experimental
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
