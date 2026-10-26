
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonItem,
  IonInput, IonButton
} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
  FormsModule,
  IonContent,
  IonItem,
  IonInput,
  IonButton
]
})
export class HomePage {
  private router = inject(Router);

  username = '';
  password = '';
  errorMessage = '';

  handleLogin() {
    if (this.username === 'admin' && this.password === '123') {
      this.router.navigate(['/admin']);
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }
}
