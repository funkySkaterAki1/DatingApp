import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
>>>>>>> 1f2b7cbd01503849d02f4eb688bbfdfc35e263fd

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
<<<<<<< HEAD
  photoUrl: string;

  constructor(
    public authService: AuthService,
    private alertify: AlertifyService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.currentPhotoUrl.subscribe(photoUrl => this.photoUrl = photoUrl);
=======

  constructor(private authService: AuthService, 
    private alertify: AlertifyService) { }

  ngOnInit() {
>>>>>>> 1f2b7cbd01503849d02f4eb688bbfdfc35e263fd
  }

  login() {
    this.authService.login(this.model).subscribe(
      next => {
<<<<<<< HEAD
        this.alertify.success('logged in successfully');
      },
      error => {
        this.alertify.error(error);
      },
      () => {
        this.router.navigate(['/members']);
=======
        console.log('logged in successfully');
      }, error => {
this.alertify.error(error);
>>>>>>> 1f2b7cbd01503849d02f4eb688bbfdfc35e263fd
      }
    );
  }

<<<<<<< HEAD
  loggedIn() {
    return this.authService.loggedIn();
=======
  loggedIn(){
    const token = localStorage.getItem('token');
    return !!token;
>>>>>>> 1f2b7cbd01503849d02f4eb688bbfdfc35e263fd
  }

  logout() {
    localStorage.removeItem('token');
<<<<<<< HEAD
    localStorage.removeItem('user');
    this.authService.decodedToken = null;
    this.authService.currentUser = null;
    this.alertify.message('logged out');
    this.router.navigate(['/home']);
  }
=======
   this.alertify.message('logged out');
  }

>>>>>>> 1f2b7cbd01503849d02f4eb688bbfdfc35e263fd
}
