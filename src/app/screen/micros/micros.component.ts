import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { listUsers , User } from 'src/app/Interface/users';
@Component({
  selector: 'app-micros',
  templateUrl: './micros.component.html',
  styleUrls: ['./micros.component.scss'],
})
export class MicrosComponent implements OnInit {

  listUsers:Array<User>;


  constructor(public fb:FormBuilder){
    this.listUsers  =listUsers; 
  }  


  ngOnInit(): void {
  }

}
