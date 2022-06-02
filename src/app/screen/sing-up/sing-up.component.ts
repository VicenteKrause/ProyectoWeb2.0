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
  listUsers:Array<User> = [];


  constructor(public fb:FormBuilder){

    this.formulario=this.fb.group({
     password:['',[Validators.required]],
    });

    this.password = this.formulario.controls["password"];
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
    }
    this.listUsers.push(usuario);
    
    console.log(this.listUsers);
    
  }
  
}
