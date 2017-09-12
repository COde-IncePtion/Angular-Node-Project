import { Response } from '@angular/http';
import { Http, Headers } from '@angular/http';
import { User } from './user.model';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthService{

    constructor(private http: Http ){
    }

    userSignup(user: User){
        const body = JSON.stringify(user);
        var headers = new Headers({"Content-Type":"application/json"});

        return this.http.post("http://localhost:3000/user", body, {headers: headers})
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw(error.json()));   
    }

    userSignin(){
        
    }

    userSignout(){
        
    }
}