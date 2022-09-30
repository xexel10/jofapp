import { AuthService } from './auth/auth.service';
import { Component, Input } from '@angular/core';
import { TokenService } from './auth/token/token.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jofapp';

  name = 'Get Current Url Route Demo';
  currentRoute: string = "";

  constructor(
    private authService: AuthService, 
    private tokenService: TokenService,
    public router : Router

  ) {


  }
  ngOnInit(): void {
    this.tokenService.setToken('LUCAS');

  }

    isLogged(){
      console.log('Retorno: ',this.tokenService.hasToken());
        return this.tokenService.hasToken();
    }

}
