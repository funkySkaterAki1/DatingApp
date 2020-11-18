import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
<<<<<<< HEAD
=======
  values: any;
>>>>>>> 1f2b7cbd01503849d02f4eb688bbfdfc35e263fd

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  registerToggle() {
    this.registerMode = true;
  }

<<<<<<< HEAD
=======

>>>>>>> 1f2b7cbd01503849d02f4eb688bbfdfc35e263fd
  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }

}
