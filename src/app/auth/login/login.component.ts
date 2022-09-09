<<<<<<< HEAD
=======
import { AuthService } from './../auth.service';
>>>>>>> configurar-rotas-fabiano
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  email: string = "";
  password: string = "";

  
  constructor(private _authService: AuthService) { }
>>>>>>> configurar-rotas-fabiano

  ngOnInit(): void {
  }

<<<<<<< HEAD
=======
  fazerLogin(){
    this._authService.fazerLogin(this.email, this.password);
  }

>>>>>>> configurar-rotas-fabiano
}
