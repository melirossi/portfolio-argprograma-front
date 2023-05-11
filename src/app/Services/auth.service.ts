import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { NuevoUsuario } from '../model/nuevo-usuario';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    // Llamar backend:
    authURL = 'https://portfolio-melisa-service.onrender.com/auth/';

    constructor(private httpClient: HttpClient) { }

    // Crear nuevo usuario:
    public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
        return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
    }

    // Login usuario:
    public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
        return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario);
    }
}