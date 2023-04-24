import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroiconComponent } from '../heroicon/heroicon.component';
import { NavItem, NavItemText } from './sidebar-layout.models';

@Component({
  selector: 'app-sidebar-layout',
  templateUrl: './sidebar-layout.component.html',
  styleUrls: ['./sidebar-layout.component.scss'],
  standalone: true,
  imports: [CommonModule, HeroiconComponent],
})
export class SidebarLayoutComponent {
  @Input() navItems: NavItem[] = [
    { text: 'Dashboard', icon: 'home' },
    { text: 'Team', icon: 'users' },
    { text: 'Projects', icon: 'folder' },
    { text: 'Calendar', icon: 'calendar' },
    { text: 'Documents', icon: 'document-duplicate' },
    { text: 'Reports', icon: 'chart-pie' },
  ];

  activeNav: NavItemText = 'Dashboard';

  mouseoverNav: NavItem | null = null;
}
