import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home-admin-sidebar',
  templateUrl: './home-admin-sidebar.component.html',
  styleUrls: ['./home-admin-sidebar.component.css']
})
export class HomeAdminSidebarComponent implements OnInit {

  @ViewChild('sideBar') sideBar!:  ElementRef;
  @ViewChild('iconeMenu') iconeMenu!:  ElementRef;
  mostrarMenu = true;

  constructor() { }

  ngOnInit(): void {
    console.log("onineit ",this.sideBar);
  }

  ngAfterInit(){
    console.log(this.sideBar);

  }
  mudarNav(){
    let el = this.sideBar.nativeElement;

    if  (el.style.width == '250px') {
      el.setAttribute('style', 'width: 0px');
      this.mostrarMenu = true;
    }
    else {
      el.setAttribute('style', 'width: 250px');
      this.mostrarMenu = false;
    }

  }


}
