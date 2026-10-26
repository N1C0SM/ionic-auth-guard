
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
  imports: [CommonModule, FormsModule, IonContent]
})
export class ActivityPage {
  private router = inject(Router);

  search = '';
  filter = 'Todos';

  events = [
    { id: 1, icon: '↗', title: 'Inicio de sesión', description: 'Evento de ejemplo', category: 'Acceso', time: 'Ahora' },
    { id: 2, icon: '✓', title: 'Servicio disponible', description: 'Evento de ejemplo', category: 'Sistema', time: 'Hoy' },
    { id: 3, icon: '♙', title: 'Usuario registrado', description: 'Evento de ejemplo', category: 'Acceso', time: 'Hoy' },
    { id: 4, icon: '⚙', title: 'Configuración actualizada', description: 'Evento de ejemplo', category: 'Sistema', time: 'Ayer' }
  ];

  get filteredEvents() {
    const term = this.search.trim().toLowerCase();

    return this.events.filter(event => {
      const matchesSearch =
        event.title.toLowerCase().includes(term) ||
        event.description.toLowerCase().includes(term);

      const matchesFilter =
        this.filter === 'Todos' || event.category === this.filter;

      return matchesSearch && matchesFilter;
    });
  }
    logout() {
    this.router.navigate(['/']);
  }
}
