import { Injectable } from '@nestjs/common';
import { User } from './user.dto';

@Injectable()
export class UsersService {

    private users : User[] = [];
     
    createaccount(user: User) {
        this.users.push(user);
        return 'User Account Created';
    }

    findOne(email: string) {
        return this.users.find(user => user.email === email);
    }

    everyusers(){
        return this.users;
    }
}
