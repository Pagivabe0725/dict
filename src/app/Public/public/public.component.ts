import { Component } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrl: './public.component.scss',
})
export class PublicComponent {
  registerPage: boolean = false;

  changePageFunction(value: boolean){
    this.registerPage=value;
  }

}
