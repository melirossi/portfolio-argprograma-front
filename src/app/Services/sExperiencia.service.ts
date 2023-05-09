import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Experiencia } from '../model/experiencia';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class SExperienciaService {

<<<<<<< HEAD
    // Llamado al backend:
    expURL = 'https://melisa-portfolio-service.onrender.com/explab/'
    
    constructor(private httpClient: HttpClient) { }

    // Obtener lista de experiencias:
=======
    // Llamar backend:
    expURL = 'https://melisa-portfolio-service.onrender.com/explab/'

    constructor(private httpClient: HttpClient) { }

    // Obtener lista experiencias:
>>>>>>> experimental
    public lista(): Observable<Experiencia[]>{
      return this.httpClient.get<Experiencia[]>(this.expURL + 'lista');
    }
  
<<<<<<< HEAD
    // Obtener detalles de experiencias:
=======
    // Obtener detalle experiencia por ID:
>>>>>>> experimental
    public detail(id: number): Observable<Experiencia>{
      return this.httpClient.get<Experiencia>(this.expURL + `detail/${id}`);
    } 
  
    // Crear experiencia:
    public save(experiencia: Experiencia): Observable<any>{
      return this.httpClient.post<any>(this.expURL + 'create', experiencia);
    }
  
<<<<<<< HEAD
    // Modificar experiencia:
=======
    // Editar experiencia por ID:
>>>>>>> experimental
    public update(id: number, experiencia: Experiencia): Observable<any>{
      return this.httpClient.put<any>(this.expURL + `update/${id}`, experiencia);
    }
  
<<<<<<< HEAD
    // Eliminar experiencia: 
=======
    // Eliminar experiencia por ID: 
>>>>>>> experimental
    public delete(id: number): Observable<any>{
      return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
    }
}