import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Educacion } from '../model/educacion';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EducacionService {

<<<<<<< HEAD
    // Llamado al backend:
=======
    // Llamar backend:
>>>>>>> experimental
    eduURL = 'https://melisa-portfolio-service.onrender.com/educacion/'

    constructor(private httpClient: HttpClient){}

<<<<<<< HEAD
    // Obtener lista de educacion:
=======
    // Obtener lista educacion:
>>>>>>> experimental
    public lista(): Observable<Educacion[]>{
        return this.httpClient.get<Educacion[]>(this.eduURL + 'lista');
    }

<<<<<<< HEAD
    // Obtener detalle de educacion:
=======
    // Obtener detalle educacion por ID:
>>>>>>> experimental
    public detail(id: number): Observable<Educacion>{
        return this.httpClient.get<Educacion>(this.eduURL + `detail/${id}`);
    }

<<<<<<< HEAD
    // Crear nueva educacion:
=======
    // Crear educacion:
>>>>>>> experimental
    public save(educacion: Educacion): Observable<any>{
        return this.httpClient.post<any>(this.eduURL + 'create', educacion);
    }

<<<<<<< HEAD
    // Editar educacion:
=======
    // Editar educacion por ID:
>>>>>>> experimental
    public update(id: number, educacion: Educacion): Observable<any>{
        return this.httpClient.put<any>(this.eduURL + `update/${id}`, educacion);
    }

<<<<<<< HEAD
    // Eliminar educacion:
=======
    // Eliminar educacion por ID:
>>>>>>> experimental
    public delete(id: number): Observable<any>{
        return this.httpClient.delete<any>(this.eduURL + `delete/${id}`);
    }
    
}