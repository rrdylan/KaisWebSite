import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService, TokenPayload } from './../service/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass']
})
export class LoginComponent {

    credentials: TokenPayload = {
        username: "",
        password: ""
    };

    constructor(private auth: AuthenticationService, private router: Router) { }

    login() {
        this.auth.login(this.credentials).subscribe(() => {
            this.router.navigateByUrl('/home');
        }, (err) => {
            console.error(err);
        });
    }
}
