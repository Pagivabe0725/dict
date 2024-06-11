import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  @Output() changePage: EventEmitter<boolean> = new EventEmitter();

  changePageFunction(value : boolean) {
    this.changePage.emit(value);
  }
}
