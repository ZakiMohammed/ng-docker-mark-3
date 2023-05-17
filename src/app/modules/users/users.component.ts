import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CoreService } from 'src/app/core/services/core.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  users$?: Observable<any[]>;

  constructor(private coreService: CoreService) {
    this.users$ = coreService.getUsers();
  }

  getImage(user: any) {
    return `https://i.pravatar.cc/100?img=${user.id}`;
  }

  getDefaultImage(element: any) {
    element.target.onerror = null;
    element.target.src = 'https://i.pravatar.cc/100?img=1';
  }

  get randomDate() {
    const start = new Date(2022, 0, 1);
    const end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }
}
