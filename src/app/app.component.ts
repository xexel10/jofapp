import { AuthService } from './auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jofapp';


  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  isLoggedIn(){
    if (this.authService.userIsAuth()){
      return true;
    } else{
      return false;
    }
  }


}
