import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'adriana';
  nombreUpper: string = 'ADRIANA';
  nombreCompleto: string = 'aDriAna marTin';

  fecha: Date = new Date(); // el día de hoy

}
