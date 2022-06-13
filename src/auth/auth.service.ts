import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private userservice:UsersService, private jwtservice: JwtService) {}
    
   async login(user:any){
    const payload = { email: user.email, sub: user.id };

    return {   access_token: this.jwtservice.sign(payload)   }; 
   }

    uservalidate(email: string, pass: string) {
        const user = this.userservice.findOne(email);
        if (!user) {
          throw new UnauthorizedException(`Invalid Credentials`);
        }
        if (user.password !== pass) {
          throw new UnauthorizedException(`Password does'nt match`);
        }
        const { password, ...restinfo } = user;
        return restinfo;
    }
}
