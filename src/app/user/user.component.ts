import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { User } from 'src/app/user/user';
import { ActionEvent, Column } from '../shared/simple-table/simple-table.model';
import { SimpleTableComponent } from '../shared/simple-table/simple-table.component';
import { getUserMocks } from './user.mocks';

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

  users: User[] = getUserMocks();

  tableColumns: Column<User>[] = [
    {
      heading: 'Name',
      dataProperty: 'name',
      secondaryValue: {
        heading: 'Title',
        dataProperty: 'title',
        showBelowBreakpoint: 'md',
      },
      tertiaryValue: {
        heading: 'Email',
        dataProperty: 'email',
        showBelowBreakpoint: 'sm',
      },
    },
    {
      heading: 'Title',
      dataProperty: 'title',
      hideBelowBreakpoint: 'md',
    },
    {
      heading: 'Email',
      dataProperty: 'email',
      hideBelowBreakpoint: 'sm',
    },
    {
      heading: 'Role',
      dataProperty: 'role',
    },
    {
      heading: 'Edit',
      kind: 'Action',
    },
  ];

  onAction(event: ActionEvent<User>): void {
    console.log('Action recieved for event: ', event);
  }
}
