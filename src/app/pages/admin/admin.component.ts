import { AppComponent } from './../../app.component';
import { TokenService } from './../../auth/token/token.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  currentRoute: String;
  constructor(private route: ActivatedRoute, private tokenService: TokenService, private router: Router, private app: AppComponent) {


      this.currentRoute = this.app.currentRoute;
   }

  ngOnInit(): void {
    console.log(this.route.snapshot);


    //if (!this.tokenService.hasToken()){
    //  console.log('redirect do appnavbar')
    //  this.router.navigate(['/login']);
   // }
  }

  logOut(){
    window.localStorage.removeItem('USER');
    this.router.navigate(['/']);


  }

  categorias(){
    this.router.navigate(['/admin/categoria'])
  }

}
