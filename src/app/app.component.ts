import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {CompAComponent} from "./comp-a/comp-a.component";
import {CalculadoraComponent} from "./calculadora/calculadora.component";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CompAComponent, CalculadoraComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JSEsdevenimentsDavidAlcarazEstrague';
}
