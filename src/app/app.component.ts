import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
// import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public auth: AuthService) {}
  // showModal = true;
  // constructor(public modal: ModalService) {}
  // ngOnInit() {
  //   setInterval(() => {
  //     this.showModal = !this.showModal;
  //     console.log(this.modal.modals);
  //   }, 1000);
  // }
}
