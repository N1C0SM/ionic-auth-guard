
import { Component, inject } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.page.html',
  styleUrls: ['./analytics.page.scss'],
  imports: [IonContent]
})
export class AnalyticsPage {
  private router = inject(Router);
  logout() {
    this.router.navigate(['/']);
  }
}
