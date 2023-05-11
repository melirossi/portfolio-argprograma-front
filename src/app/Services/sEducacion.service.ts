import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Educacion } from '../model/educacion';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EducacionService {

    // Llamado al backend:
    eduURL = 'https://portfolio-melisa-service.onrender.com/educacion/'

    constructor(private httpClient: HttpClient){}

    // Obtener lista de educacion:
    public lista(): Observable<Educacion[]>{
        return this.httpClient.get<Educacion[]>(this.eduURL + 'lista');
    }

    // Obtener detalle de educacion:
    public detail(id: number): Observable<Educacion>{
        return this.httpClient.get<Educacion>(this.eduURL + `detail/${id}`);
    }

    // Crear nueva educacion:
    public save(educacion: Educacion): Observable<any>{
        return this.httpClient.post<any>(this.eduURL + 'create', educacion);
    }

    // Editar educacion:
    public update(id: number, educacion: Educacion): Observable<any>{
        return this.httpClient.put<any>(this.eduURL + `update/${id}`, educacion);
    }

    // Eliminar educacion:
    public delete(id: number): Observable<any>{
        return this.httpClient.delete<any>(this.eduURL + `delete/${id}`);
    }
    
}