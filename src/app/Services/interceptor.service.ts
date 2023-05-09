import { HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TokenService } from "./token.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class InterceptorService {
    constructor(private tokenService: TokenService){}

<<<<<<< HEAD
    // Interceptor:
=======
    // Interceptor token:
>>>>>>> experimental
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        let intReq = req;
        const token = this.tokenService.getToken();
        if(token != null){
            intReq = req.clone({
                headers: req.headers.set('Authorization', 'Bearer'+token)
            });
        }
        return next.handle(intReq);
    }
}

export const intercpetorProvider = [{
    provide: HTTP_INTERCEPTORS, 
    useClass: InterceptorService,
    multi: true
}];