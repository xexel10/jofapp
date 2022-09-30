import { Router } from '@angular/router';
import { TokenService } from './../../auth/token/token.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  constructor(private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {

    if (!this.tokenService.hasToken()){
      this.router.navigate(['/login']);
    }
  }

}
