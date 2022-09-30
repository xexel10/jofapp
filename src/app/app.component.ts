import { AuthService } from './auth/auth.service';
import { Component, Input } from '@angular/core';
import { TokenService } from './auth/token/token.service';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';




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
    public router : Router){
      this.currentRoute = "Demo";
      this.router.events.subscribe((event: Event) => {
          if (event instanceof NavigationEnd) {
              this.currentRoute = event.url;
                console.log('Event URL: ',event.url);
          }


      });

  }
  ngOnInit(): void {
   // this.tokenService.setToken('LUCAS');
    console.log('HREF: ',window.location.href)

  }

    isLogged(){
      console.log('Retorno: ',this.tokenService.hasToken());
        return this.tokenService.hasToken();
    }

}
