import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/auth/token/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
  }
  isLoged(){
    return this.tokenService.hasToken();
  }

  logOut(){
    this.tokenService.removeToken();
  }
  logIn(){
    this.tokenService.setToken('LUCAS');
  }

}
