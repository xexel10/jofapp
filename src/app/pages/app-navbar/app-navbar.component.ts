import { TokenService } from './../../auth/token/token.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  constructor(private route: ActivatedRoute, private tokenService: TokenService, private router: Router) { }

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
