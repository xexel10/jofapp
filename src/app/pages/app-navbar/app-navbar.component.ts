import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.css']
})
export class AppNavbarComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot);
  }

  logOut(){
    window.localStorage.removeItem('USER');

  }

}
