import {Component, OnInit} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
// @ts-ignore
import {count, resset} from "../../funcions.js"
import {FormsModule} from "@angular/forms";
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-comp-a',
  standalone: true,
  imports: [
    NgClass,
    FormsModule,
    ProgressSpinnerModule,
    NgIf,
    CheckboxModule
  ],
  templateUrl: './comp-a.component.html',
  styleUrl: './comp-a.component.css'
})
export class CompAComponent implements OnInit{
  currentColor: string = 'green' //Ex 1
  email = "";   //Ex 6
  telefon = ""; //Ex 6
  emTel ="";    //Ex 6
  checked= false; //Ex 7


  constructor() {
  }
  ngOnInit (){
  }
  changeColor (color: string){
    this.currentColor = color;
  }

  concatenar (){
    this.emTel = this.email + this.telefon
  }
  alerta(){
    // let checkbox = document.getElementById("checkbox")!;
    alert("¡¡¡¡¡NO CLICKIS!!!!!")
  }


  protected readonly count = count;
  protected readonly resset = resset;

}

