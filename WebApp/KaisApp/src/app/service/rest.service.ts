import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RestService {

    endpoint = 'http://localhost:3000/api/v1/';
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json'
        })
    };

    private extractData(res: Response) {
        let body = res;
        return body || { };
    }

    constructor(private http: HttpClient) { }


}
