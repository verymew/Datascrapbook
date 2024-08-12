import { Component } from '@angular/core';
import { SegundaComponent } from "../segunda/segunda.component";

@Component({
  selector: 'app-primeiro',
  standalone: true,
  imports: [SegundaComponent],
  templateUrl: './primeiro.component.html',
  styleUrl: './primeiro.component.css'
})
export class PrimeiroComponent {

}
