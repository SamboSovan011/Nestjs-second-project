import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) {}
  
  @Post('sign_up')
  signUp() {
    return this.authService.signUp();
  }

  @Post('login')
  logIn() {
    return this.authService.login();
  }
}