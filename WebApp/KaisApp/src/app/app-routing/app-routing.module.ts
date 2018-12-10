import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './../login/login.component';
import { HomeComponent } from './../home/home.component';
import { ProfileComponent } from './../profile/profile.component';
import { UserComponent } from './../user/user.component';
import { FournisseurListComponent } from './../fournisseur-list/fournisseur-list.component';
import { ClientListComponent } from './../client-list/client-list.component';


const routes: Routes = [
        { path: '', redirectTo:'login', pathMatch:'full' },
        { path: 'login', component: LoginComponent },
        { path: 'home', component: HomeComponent },
        { path: 'profile', component: ProfileComponent },
        { path: 'clients', component: ClientListComponent },
        { path: 'fournisseurs', component: FournisseurListComponent },
        { path: 'users', component: UserComponent }

];

@NgModule({
  declarations: [
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
