import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})

export class ApiService {

    API_URL  =  'http://localhost:8000/api';

    constructor(private  httpClient:  HttpClient) { }

    getUsers(){
        return this.httpClient.get(`${this.API_URL}/users`);
    }

    getFournisseurs(){
        return this.httpClient.get(`${this.API_URL}/fournisseurs`);
    }

    getPrestations(){
        return this.httpClient.get(`${this.API_URL}/prestations`);
    }

    getProduits(){
        return this.httpClient.get(`${this.API_URL}/produits`);
    }
}
