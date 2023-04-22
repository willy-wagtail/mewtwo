import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import {
  SimpleTableColumn,
  SimpleTableComponent,
} from 'src/app/components/simple-table/simple-table.component';
import { User } from 'src/app/user/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  imports: [CommonModule, SimpleTableComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class UserComponent {
  rowIdentifier: keyof User = 'name';

  tableColumns: SimpleTableColumn<User>[] = [
    {
      heading: 'Name',
      dataProperty: 'name',
    },
    {
      heading: 'Title',
      dataProperty: 'title',
    },
    {
      heading: 'Email',
      dataProperty: 'email',
      hideOnMobile: true,
    },
    {
      heading: 'Role',
      dataProperty: 'role',
    },
  ];

  users: User[] = [
    {
      name: 'Lindsay Walton',
      title: 'Front-end Developer',
      email: 'lindsay.walton@example.com',
      role: 'Member',
    },
    {
      name: 'Courtney Henry',
      title: 'Designer',
      email: 'courtney.henry@example.com',
      role: 'Admin',
    },
    {
      name: 'Tom Cook',
      title: 'Director of Product',
      email: 'tom.cook@example.com',
      role: 'Member',
    },
    {
      name: 'Whitney Francis',
      title: 'Copywriter',
      email: 'whitney.francis@example.com',
      role: 'Admin',
    },
    {
      name: 'Leonard Krasner',
      title: 'Senior Designer',
      email: 'leonard.krasner@example.com',
      role: 'Owner',
    },
    {
      name: 'Floyd Miles',
      title: 'Principal Designer',
      email: 'floyd.miles@example.com',
      role: 'Member',
    },
  ];
}
