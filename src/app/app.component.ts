import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeiroComponent } from '../parts/primeiro/primeiro.component';
import { SegundaComponent } from "../parts/segunda/segunda.component";
import { TerceiraComponent } from "../parts/terceira/terceira.component";
import { QuartaComponent } from "../parts/quarta/quarta.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimeiroComponent, SegundaComponent, TerceiraComponent, QuartaComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'datascrapbook';
}
