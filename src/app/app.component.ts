import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../parts/navbar/navbar.component';
import { PrimeiroComponent } from '../parts/primeiro/primeiro.component';
import { SegundaComponent } from "../parts/segunda/segunda.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, PrimeiroComponent, SegundaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'datascrapbook';
}
