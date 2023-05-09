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

<<<<<<< HEAD
    // Llamar al backend:
=======
    // Llamar backend:
>>>>>>> experimental
    authURL = 'https://melisa-portfolio-service.onrender.com/auth/';

    constructor(private httpClient: HttpClient) { }

    // Crear nuevo usuario:
    public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
        return this.httpClient.post<any>(this.authURL + 'nuevo', nuevoUsuario);
    }

<<<<<<< HEAD
    // Login de usuario:
=======
    // Login usuario:
>>>>>>> experimental
    public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
        return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUsuario);
    }
}