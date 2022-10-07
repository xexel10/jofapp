import { AppComponent } from './../../app.component';
import { TokenService } from './../../auth/token/token.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  currentRoute: String;
  containerRota: any;
  @ViewChild('sideBar') sideBar!:  ElementRef;
  @ViewChild('iconeMenu') iconeMenu!:  ElementRef;
  mostrarMenu = true;
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

  mudarNav(){
    let menuLateral = this.sideBar.nativeElement;



    console.log("div rota: ", this.app.divRota)
    if  (menuLateral.style.width == '250px') {
      menuLateral.setAttribute('style', 'width: 0px');
      if (this.app.divRota != undefined)
        this.app.divRota.nativeElement.setAttribute('style', 'margin-left: 5px');
      this.mostrarMenu = true;
    }
    else {
      menuLateral.setAttribute('style', 'width: 250px');
      if (this.app.divRota != undefined)
        this.app.divRota.nativeElement.setAttribute('style', 'margin-left: 260px');
      this.mostrarMenu = false;
    }

  }

}
