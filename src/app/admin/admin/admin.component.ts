import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private AuthService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.AuthService.logout();
    this.router.navigate(['./']);
  }

}
