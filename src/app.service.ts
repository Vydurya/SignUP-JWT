import { Injectable } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { User } from './users/user.dto';
import { UsersService } from './users/users.service';

@Injectable()
export class AppService {
  constructor(
    private readonly userService: UsersService,
    private readonly authService: AuthService,
  ) {}

  signup(user: User) {
    return this.userService.createaccount(user);
  }

  login({ email, password }) {
    const user = this.authService.uservalidate(email, password);
    return this.authService.login(user);
  }

  allusers(){
    return this.userService.everyusers();
  }

}
