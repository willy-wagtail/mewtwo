import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarLayoutComponent } from '../shared/sidebar-layout/sidebar-layout.component';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SidebarLayoutComponent, UserComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {}
