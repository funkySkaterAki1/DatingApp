import { Component, OnInit, Output } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { EventEmitter } from 'protractor';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-roles-modal',
  templateUrl: './roles-modal.component.html',
  styleUrls: ['./roles-modal.component.css']
})
export class RolesModalComponent implements OnInit {
user: User;
 roles: any[];

 @Output() updateSelectedRoles = new EventEmitter();

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit() {
  }

updateRoles() {
  this.updateSelectedRoles.emit(this.roles);
  this.bsModalRef.hide();
}

}
