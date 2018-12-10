import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../api.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    private  users:  Array<object> = [];

    constructor(private  apiService:  ApiService) { }

    ngOnInit() {
        this.getUsers();
    }

    public getUsers(){
        this.apiService.getUsers().subscribe((data:  Array<object>) => {
            this.users  =  data;
            console.log(data);
        });
    }

}
