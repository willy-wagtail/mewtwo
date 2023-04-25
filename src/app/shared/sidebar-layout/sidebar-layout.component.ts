import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroiconComponent } from '../heroicon/heroicon.component';
import {
  HeroiconNavIcon,
  LettericonNavIcon,
  NavConfig,
  NavIcon,
  NavItem,
  NavItemText,
} from './sidebar-layout.models';
import { LettericonComponent } from '../lettericon/lettericon.component';
import { NavitemComponent } from './navitem/nav-item.component';

const NAV_CONFIG: NavConfig = {
  primary: {
    name: 'Main nav',
    items: [
      { text: 'Dashboard', icon: { type: 'hero', param: 'home' } },
      { text: 'Team', icon: { type: 'hero', param: 'users' } },
      { text: 'Projects', icon: { type: 'hero', param: 'folder' } },
      { text: 'Calendar', icon: { type: 'hero', param: 'calendar' } },
      {
        text: 'Documents',
        icon: { type: 'hero', param: 'document-duplicate' },
      },
      { text: 'Reports', icon: { type: 'hero', param: 'chart-pie' } },
    ],
  },
  secondary: {
    name: 'Your teams',
    items: [
      { text: 'Heroicons', icon: { type: 'letter', param: 'H' } },
      { text: 'Tailwind Labs', icon: { type: 'letter', param: 'T' } },
      { text: 'Workcation', icon: { type: 'letter', param: 'W' } },
    ],
  },
};

@Component({
  selector: 'app-sidebar-layout',
  templateUrl: './sidebar-layout.component.html',
  styleUrls: ['./sidebar-layout.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, NavitemComponent, HeroiconComponent],
})
export class SidebarLayoutComponent {
  @Input() navConfig: NavConfig = NAV_CONFIG;

  activeNav: NavItemText = 'Dashboard';

  mouseoverNav: NavItem | null = null;

  isHeroicon(icon: NavIcon): icon is HeroiconNavIcon {
    return icon.type === 'hero';
  }

  isLettericon(icon: NavIcon): icon is LettericonNavIcon {
    return icon.type === 'letter';
  }
}
