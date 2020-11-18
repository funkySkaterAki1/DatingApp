<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import { User } from './_models/user';
=======
import { Component } from '@angular/core';
>>>>>>> 1f2b7cbd01503849d02f4eb688bbfdfc35e263fd

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
<<<<<<< HEAD
export class AppComponent implements OnInit {
  jwtHelper = new JwtHelperService();
  constructor(private authService: AuthService) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    const user: User = JSON.parse(localStorage.getItem('user'));
    if (token) {
      this.authService.decodedToken = this.jwtHelper.decodeToken(token);
    }
    if (user) {
      this.authService.currentUser = user;
      this.authService.changeMemberPhoto(user.photoUrl);
    }
  }
=======
export class AppComponent {
  title = 'DatingApp-SPA';
>>>>>>> 1f2b7cbd01503849d02f4eb688bbfdfc35e263fd
}
