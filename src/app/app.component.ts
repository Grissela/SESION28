import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
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
      Swal.fire({
        title: '¡Estas logeado!',
        text: 'Has accedido',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Check_green_icon.svg/2048px-Check_green_icon.svg.png',
        imageWidth: 400,
        imageHeight: 300,
        imageAlt: 'Custom image',
      })
    }
    else{
      this.resultado = "No estoy logeado"
      Swal.fire({
        title: '¡No estas logeado!',
        text: 'Credenciales incorrectas',
        imageUrl: 'https://www.freeiconspng.com/thumbs/error-icon/sign-error-icon-10.png',
        imageWidth: 400,
        imageHeight: 300,
        imageAlt: 'Custom image',
      })
    }
   
  }
}
