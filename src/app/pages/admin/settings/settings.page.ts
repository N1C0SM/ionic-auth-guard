
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  imports: [FormsModule, IonContent]
})
export class SettingsPage {
  private router = inject(Router);

  animations = true;
  notifications = true;
  autoRefresh = false;
  saved = false;

  saveSettings() {
    // Solo confirma el estado actual en memoria.
    // No se guarda permanentemente ni se envía a un servidor.
    this.saved = true;
  }
    logout() {
    this.router.navigate(['/']);
  }
}
