import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

import { Injectable } from  '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
    providedIn:  'root'
})

export  class  APIService {

    constructor(private  httpClient:  HttpClient) {}

}
