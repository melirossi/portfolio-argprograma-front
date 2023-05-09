import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Educacion } from '../model/educacion';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EducacionService {

    // Llamar backend:
    eduURL = 'https://melisa-portfolio-service.onrender.com/educacion/'

    constructor(private httpClient: HttpClient){}

    // Obtener lista educacion:
    public lista(): Observable<Educacion[]>{
        return this.httpClient.get<Educacion[]>(this.eduURL + 'lista');
    }

    // Obtener detalle educacion por ID:
    public detail(id: number): Observable<Educacion>{
        return this.httpClient.get<Educacion>(this.eduURL + `detail/${id}`);
    }

    // Crear educacion:
    public save(educacion: Educacion): Observable<any>{
        return this.httpClient.post<any>(this.eduURL + 'create', educacion);
    }

    // Editar educacion por ID:
    public update(id: number, educacion: Educacion): Observable<any>{
        return this.httpClient.put<any>(this.eduURL + `update/${id}`, educacion);
    }

    // Eliminar educacion por ID:
    public delete(id: number): Observable<any>{
        return this.httpClient.delete<any>(this.eduURL + `delete/${id}`);
    }
    
}