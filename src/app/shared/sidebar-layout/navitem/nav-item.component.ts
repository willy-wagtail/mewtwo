import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HeroiconNavIcon,
  LettericonNavIcon,
  NavIcon,
  NavItem,
  NavItemText,
} from '../sidebar-layout.models';
import { HeroiconComponent } from '../../heroicon/heroicon.component';
import { LettericonComponent } from '../../lettericon/lettericon.component';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, HeroiconComponent, LettericonComponent],
})
export class NavitemComponent {
  @Input() item!: NavItem;

  @Input() active!: NavItemText;

  mouseover: NavItem | null = null;

  isHeroicon(icon: NavIcon): icon is HeroiconNavIcon {
    return icon.type === 'hero';
  }

  isLettericon(icon: NavIcon): icon is LettericonNavIcon {
    return icon.type === 'letter';
  }
}
