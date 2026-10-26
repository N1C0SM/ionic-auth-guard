
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {
  IonContent
} from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    IonContent
  ]
})
export class AdminPage {
  private router = inject(Router);

  metrics = {
    users: 128,
    sessions: 24,
    status: 'Activo',
    activePercent: 62,
    engagement: 76,
    retention: 64,
    completion: 88
  };

  activities: {
    id: number;
    icon: string;
    title: string;
    description: string;
    time: string;
  }[] = [
    {
      id: 1,
      icon: '↗',
      title: 'Panel de administración',
      description: 'Vista de demostración cargada',
      time: 'Ahora'
    },
    {
      id: 2,
      icon: '✓',
      title: 'Interfaz disponible',
      description: 'Dashboard preparado para conectar datos',
      time: 'Ahora'
    }
  ];

  logout() {
    this.router.navigate(['/']);
  }
}
