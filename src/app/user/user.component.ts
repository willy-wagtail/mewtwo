import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { User } from 'src/app/user/user';
import { SimpleTableColumn } from '../shared/simple-table/simple-table-column';
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

  tableColumns: SimpleTableColumn<User>[] = [
    {
      heading: 'Name',
      dataProperty: 'name',
    },
    {
      heading: 'Title',
      dataProperty: 'title',
      hideBelowBreakpoint: 'sm',
    },
    {
      heading: 'Email',
      dataProperty: 'email',
      hideBelowBreakpoint: 'md',
    },
    {
      heading: 'Role',
      dataProperty: 'role',
    },
  ];
}
