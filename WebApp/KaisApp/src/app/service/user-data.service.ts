import { Injectable } from '@angular/core';
import { User } from './../_models/user';

@Injectable({
    providedIn: 'root'
})
export class UserDataService {

    lastId: number = 0;
    users: User[] = [];

    constructor() { }

    addUser(user: User): UserDataService{
        if(!user.id){
            user.id = ++this.lastId;
        }

        this.users.push(user);
        return this
    }

    deleteUser(id: number): UserDataService{
        this.users = this.users.filter(todo=> todo.id !== id);
        return this;
    }

    updateUser(id: number, values: Object = {}): User{
        let user = this.getUserById(id);

        if(!user){ return null;}
        Object.assign(user, values);

        return user;
    }

    getAllUsers(): User[] {
        return this.users;
    }

    getUserById(id: number): User {
        return this.users.filter(user => user.id === id).pop();
    }

    toggleUserToken(user: User){
        let updatedUser = this.updateUser(user.id,{
            token: !user.token
        });

        return updatedUser;
    }

}
