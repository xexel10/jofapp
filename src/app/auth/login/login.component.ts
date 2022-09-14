import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";


  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
  }

  fazerLogin(){
    this._authService.fazerLogin(this.email, this.password);
  }

}
