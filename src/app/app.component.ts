import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ingresa tu cuenta';
  resultado!:string;

  public formLogin !: FormGroup
  constructor(private formBuilder: FormBuilder){}
  ngOnInit(): void{
    this.formLogin = this.formBuilder.group({
      username:['',
      [Validators.required,Validators.minLength(5), Validators.email],
      
    ],
      password:['',
      [Validators.required,Validators.minLength(5)]
    ],
    })
  }

  enviar(){
    if(this.formLogin.valid){
      this.resultado = "Estoy logeado" 
    }
    else{
      this.resultado = "No estoy logeado"
    }
   
  }
}
