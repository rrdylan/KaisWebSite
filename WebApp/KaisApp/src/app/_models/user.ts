export class User {
    id: number;
    username: string;
    password: string;

    firstName: string;
    lastName: string;

    token: boolean;

    constructor(values: Object = {}){
        Object.assign(this, values);
    }
}
