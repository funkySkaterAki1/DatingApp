import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

<<<<<<< HEAD
=======

>>>>>>> 1f2b7cbd01503849d02f4eb688bbfdfc35e263fd
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {
<<<<<<< HEAD
  constructor() {}

  confirm(message: string, okCallback: () => any) {
    alertify.confirm(message, (e: any) => {
      if (e) {
        okCallback();
      } else {
=======

constructor() { }
  confirm(message: string, okCallback: () => any){
    alertify.confirm(message, (e: any) => {
      if (e) {
        okCallback();
      }else{

>>>>>>> 1f2b7cbd01503849d02f4eb688bbfdfc35e263fd
      }
    });
  }

  success(message: string) {
    alertify.success(message);
  }
<<<<<<< HEAD

  error(message: string) {
    alertify.error(message);
  }

  warning(message: string) {
    alertify.warning(message);
  }

=======
  error(message: string) {
    alertify.error(message);
  }
  warning(message: string) {
    alertify.warning(message);
  }
>>>>>>> 1f2b7cbd01503849d02f4eb688bbfdfc35e263fd
  message(message: string) {
    alertify.message(message);
  }
}
