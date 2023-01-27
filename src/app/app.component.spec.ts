import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
      ],
      declarations: [
        AppComponent
      ],
      schemas:[
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Ingresa tu cuenta'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Ingresa tu cuenta');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Ingresa tu cuenta');
  });
 
  /*INICIO*/
  it('Debe retornar formulario valido', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance
    fixture.detectChanges()

    let username = app.formLogin.controls['username']
    let password = app.formLogin.controls['password']

    username.setValue('gris@gmail.com')
    password.setValue('123456')

    expect(app.formLogin.valid).toBeTruthy();

 
  });
  it('Debe retornar formulario invalido', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance
    fixture.detectChanges()

    let username = app.formLogin.controls['username']
    let password = app.formLogin.controls['password']

    username.setValue('grisgmail.com')
    password.setValue('123456')

    //if(app.login == true ) else ()
    expect(app.formLogin.valid).toBeFalsy();

 
  });
  /*FIN*/ 
  it('Debe retornar formulario invalido', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance
    fixture.detectChanges()

    let username = app.formLogin.controls['username']
    let password = app.formLogin.controls['password']

    username.setValue('gris@gmail.com')
    password.setValue('123456')

    const miBoton = fixture.debugElement.query(By.css('.boton'));
    miBoton.nativeElement.click();/*Hara un click*/ 
    const mensaje = {resultado:"Estoy logeado"}
    expect(app.resultado).toEqual(mensaje.resultado);
  });

  
});
