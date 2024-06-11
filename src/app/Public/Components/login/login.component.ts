import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  @Output() changePageLogin: EventEmitter<boolean> = new EventEmitter();

  changePageFunction(value: boolean) {
    this.changePageLogin.emit(true);
  }
}
