import { TokenService } from './token/token.service';
import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable()
export class AuthService implements OnInit {

  private userAutenticado: boolean = false;
  private acessToken : any = '';

  showMenuEmmiter = new EventEmitter<boolean>();

  showHeaderPublic = new EventEmitter<boolean>();

  constructor(private router: Router, private tokenService: TokenService, private http : HttpClient) { }
  ngOnInit(): void {
    this.showHeaderPublic.emit(false);
  }

  fazerLogin(email: string, password:string){
      let record= {username:email, password: password}
      this.http.post(environment.TOKEN_URL, record).subscribe({
        next: (token) => {
          this.acessToken = token['access'];
          console.log('ACESS TOKEN GERADO: ',this.acessToken)
          console.log("Dentro do observable ", token['access']);
          this.tokenService.setToken(this.acessToken);
          this.userAutenticado = true;
          this.router.navigate(['/admin']);

        },
        error: (erro) => {
           console.log("deu pau no login")
           this.userAutenticado = false;
        }
      });

    //if (email === 'admin' && password === 'admin'){
      //  this.userAutenticado = true;

       // this.showMenuEmmiter.emit(true); // emite para o appcomponent que estã logado
       // this.tokenService.setToken('LUCAS');
       // this.router.navigate(['/admin']);

    //}else{
     // this.userAutenticado = false;
     // this.showMenuEmmiter.emit(false);
    //}
  }
  userIsAuth(){
    return this.userAutenticado;
  }
}
