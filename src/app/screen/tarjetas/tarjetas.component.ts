import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss']
})
export class TarjetasComponent implements OnInit {
  
  exampleNum = 150;

  constructor() {

   }
  // fetch(){
  //   let get = Document.getElementById("customRange1").value;
  //   Document.getElementById("put").value = get;
  // }
  ngOnInit(): void {
  }

  suma(){
    if(this.exampleNum<10000){
      this.exampleNum = this.exampleNum+50;
    }else{
      window.alert("No puede exceder los $10.000 pesitos");
    }
   
  }
  resta(){
    if(this.exampleNum>150){
      this.exampleNum = this.exampleNum-50;
    }else{
      window.alert("No puede ser inferior a $150 pesitos");
    }
  }
  home(){
    window.location.href="/home";
    window.alert("Recarga exitosa");
  }
}
