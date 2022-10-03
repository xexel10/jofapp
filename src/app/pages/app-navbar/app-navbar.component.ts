import { AppComponent } from './../../app.component';
import { TokenService } from './../../auth/token/token.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {
  currentRoute: String;
  constructor(private route: ActivatedRoute, private tokenService: TokenService, private router: Router, private app: AppComponent) {


      this.currentRoute = this.app.currentRoute;
   }

  ngOnInit(): void {
    console.log(this.route.snapshot);


    if (!this.tokenService.hasToken()){
      this.router.navigate(['/login']);
    }
  }

  logOut(){
    window.localStorage.removeItem('USER');
    this.router.navigate(['/']);


  }

}
