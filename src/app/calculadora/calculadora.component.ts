import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
//@ts-ignore
import * as events from "events";

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [
    FormsModule,
    NgOptimizedImage
  ],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;

  sumar() {
    this.resultado = this.num1 + this.num2;
    console.log("event sumar")
  }

  restar() {
    this.resultado = this.num1 - this.num2;
    console.log("event restar")

  }

  multiplicar() {
    this.resultado = this.num1 * this.num2;
    console.log("event multiplicar")

  }

  dividir() {
    console.log("event dividir")

    if (this.num2 !== 0) {
      this.resultado = this.num1 / this.num2;
    } else {
      this.resultado = NaN; // NO es pot dividir entre zero
    }
  }
  rotate(){
    let image = document.getElementById("transform");
    if(image){
      image.classList.add("rotate");
      console.log("event rotar")
    }
  }
  show (s:string){
   console.log(s)
    let value = document.getElementById("showDiv")!;
   value.innerHTML = s;
  }

  protected readonly events = events;
}
