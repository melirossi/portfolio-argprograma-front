import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
    providedIn: 'root'
})

export class TokenService {
    roles: Array<string> = [];

    constructor() {}

<<<<<<< HEAD
    // Crear token:
=======
    // Generar token:
>>>>>>> experimental
    public setToken(token: string): void {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }

    // Obtener token:
    public getToken():string {
        return sessionStorage.getItem(TOKEN_KEY)!
    }

<<<<<<< HEAD
    // Crear nombre de usuario:
=======
    // Generar usuario:
>>>>>>> experimental
    public setUserName(userName: string): void {
        window.sessionStorage.removeItem(USERNAME_KEY);
        window.sessionStorage.setItem(USERNAME_KEY, userName);
    }

<<<<<<< HEAD
    // Obtener nombre de usuario:
=======
    // Obtener usuario:
>>>>>>> experimental
    public getUserName():string {
        return sessionStorage.getItem(USERNAME_KEY)!
    }

<<<<<<< HEAD
    // Crear autoridades (user o admin):
=======
    // Generar autoridades (user - admin):
>>>>>>> experimental
    public setAuthorities(authorities: string[]): void {
        window.sessionStorage.removeItem(AUTHORITIES_KEY);
        window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
    }

<<<<<<< HEAD
    // Obtener autoridades (usero o admin):
=======
    // Obtener autoridades (user - admin):
>>>>>>> experimental
    public getAuthorities(): string[]{
        this.roles = [];
        if(sessionStorage.getItem(AUTHORITIES_KEY)!){
            JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)!).forEach((authority:any) => {
                this.roles.push(authority.authority);
            });
        }        
        return this.roles;
    }

    // Cerrar sesion:
    public logOut():void {
        window.sessionStorage.clear();
    }
}
