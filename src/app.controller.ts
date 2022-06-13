import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/jwt.auth.guard';
import { User } from './users/user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('users')
  getallusers(){
    return this.appService.allusers();
  }

  @Post('/signup')
  signup(@Body() user: User) {
    return this.appService.signup(user);
  }

  @Post('/login')
  login(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    return this.appService.login({ email, password });
  }

  @UseGuards(JwtAuthGuard)
  @Get('protected')
  async active(@Request() req) {
    return req.user;
  }

}
