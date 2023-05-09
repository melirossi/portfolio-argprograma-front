import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

<<<<<<< HEAD
  // Llamado al backend:
=======
  // Llamar backend:
>>>>>>> experimental
  URL = 'https://melisa-portfolio-service.onrender.com/proyectos/';

  constructor(private httpClient : HttpClient) { }

<<<<<<< HEAD
  // Obtener lista de proyectos:
=======
  // Obtener lista proyectos:
>>>>>>> experimental
  public lista(): Observable<Proyectos[]>{
    return this.httpClient.get<Proyectos[]>(this.URL + 'lista');
  }

<<<<<<< HEAD
  // Obtener detalle de proyectos:
=======
  // Obtener detalle proyecto por ID:
>>>>>>> experimental
  public detail(id: number): Observable<Proyectos>{
    return this.httpClient.get<Proyectos>(this.URL + `detail/${id}`);
  }

<<<<<<< HEAD
  // Crear nuevo proyecto:
=======
  // Crear proyecto:
>>>>>>> experimental
  public save(proyectos: Proyectos): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', proyectos);
  }

<<<<<<< HEAD
  // Editar proyecto:
=======
  // Editar proyecto por ID:
>>>>>>> experimental
  public update(id: number, proyectos: Proyectos): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, proyectos);
  }

<<<<<<< HEAD
  // Eliminar proyecto:
=======
  // Eliminar proyecto por ID:
>>>>>>> experimental
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
