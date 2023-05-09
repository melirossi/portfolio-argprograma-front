import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {

  // Llamar backend:
  URL = 'https://melisa-portfolio-service.onrender.com/personas/';

  constructor(private httpClient: HttpClient) { }

  // Obtener lista de personas:
  public lista(): Observable<persona[]>{
      return this.httpClient.get<persona[]>(this.URL + 'lista');
  }

  // Obtener detalle de persona:
  public detail(id: number): Observable<persona>{
      return this.httpClient.get<persona>(this.URL + `detail/${id}`);
  }

  // Editar persona:
  public update(id: number, Persona: persona): Observable<any>{
      return this.httpClient.put<any>(this.URL + `update/${id}`, Persona);
  }

}
