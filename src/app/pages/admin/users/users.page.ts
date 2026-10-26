
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
  imports: [CommonModule, FormsModule, IonContent]
})
export class UsersPage {
  search = '';
  private router = inject(Router);


  users = [
    { id: 1, name: 'Alex Morgan', email: 'alex@example.com', active: true, plan: 'Free' },
    { id: 2, name: 'Sam Taylor', email: 'sam@example.com', active: true, plan: 'Plus' },
    { id: 3, name: 'Jordan Lee', email: 'jordan@example.com', active: false, plan: 'Free' },
    { id: 4, name: 'Casey Smith', email: 'casey@example.com', active: true, plan: 'Plus' }
  ];

  get filteredUsers() {
    const term = this.search.trim().toLowerCase();
    return this.users.filter(user =>
      user.name.toLowerCase().includes(term) ||
      user.email.toLowerCase().includes(term)
    );
  }

  get activeCount() {
    return this.users.filter(user => user.active).length;
  }
   logout() {
    this.router.navigate(['/']);
  }
}
