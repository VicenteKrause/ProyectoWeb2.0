import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { listUsers, User} from 'src/app/Interface/users';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent implements OnInit {
  formulario:FormGroup;
  password:AbstractControl;
  mail:AbstractControl;
  listUsers:Array<User> = [];


  constructor(public fb:FormBuilder){

    this.formulario=this.fb.group({
     password:['',[Validators.required]],
     mail:['',[Validators.required]],
    });

    this.password = this.formulario.controls["password"];
    this.mail = this.formulario.controls["mail"];
    this.listUsers = listUsers;
  }  
  

 

  ngOnInit(): void {
  }

  login(){
   console.log();
  }
  crear() {
    
    let usuario:User={
      password:this.password.value,
      mail:this.mail.value
    }
    this.listUsers.push(usuario);
    
    console.log(this.listUsers);
    
  }
  
}
