import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';

import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [UserComponent, HeaderComponent],
})
export class AppComponent {
  title = 'first-angular-app';
  users = DUMMY_USERS;

  onSelectUser(id: string) {
    console.log(id);
  }
}
