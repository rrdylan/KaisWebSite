import { Component, OnInit } from '@angular/core';
import { ApiService } from  './../api.service';

@Component({
    selector: 'app-fournisseur-list',
    templateUrl: './fournisseur-list.component.html',
    styleUrls: ['./fournisseur-list.component.css']
})
export class FournisseurListComponent implements OnInit {
    private  fournisseurs:  Array<object> = [];

    constructor(private  apiService:  ApiService) { }

    ngOnInit(){
        this.getFournisseurs();
    }

    public getFournisseurs(){
        this.apiService.getFournisseurs().subscribe((data: Array<object>) => {
            this.fournisseurs = data;
            console.log(data);
        })
    }
}
