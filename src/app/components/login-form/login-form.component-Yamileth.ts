import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../login/login.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RecuperarCorreoComponent } from './../../recuperar-correo/recuperar-correo.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // FORMULARIO REACTIVO
import { Subscription } from 'rxjs'; // se usa para despues desuscribirme de una suscripcion.

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit, OnDestroy {
  formulario!: FormGroup;
  errorMensaje!: string;
  private subscription: Subscription | undefined;



  email: string = '';
  clave: string = '';
  rememberMe: boolean = false;

  constructor(private loginService: LoginService,
    private router: Router,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,

  ) { }


  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      clave: ['', Validators.required]
    });
  }



  onLogin(): void {

    this.subscription = this.loginService.login(this.email, this.clave).subscribe(
      (response => {
        console.log(response);
        // this.authService.setIsLoggedInVar = true;
        localStorage.setItem("accessToken", response.accessToken); // Almacena un token simulado
        localStorage.setItem("userRole", response.role); // Almacena el rol del usuario

        const role = response.role;

        if (role === 'administrador') {
          this.router.navigate(['administrador']);
        } else if (role === 'alumno') {
          this.router.navigate(['alumno']);

        } else if (role === 'profesor') {
          this.router.navigate(['profesor']);

        } else {
          this.router.navigate(['registro']);
        }
      }),
      (error: any) => {
        console.error('Error de autenticación:', error);

        if (error && error.error) {
          this.errorMensaje = error.error;
          console.log("este es el error", this.errorMensaje)
        } else {
          this.errorMensaje = 'Error de autenticación';
        }

        console.log('Valor de errorMensaje:', this.errorMensaje);
      }
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }



  openRecuperarCorreo(): void {
    this.dialog.open(RecuperarCorreoComponent, {
      width: '300px',
    });

  }



}
