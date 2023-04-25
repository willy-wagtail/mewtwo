import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Heroicon } from './heroicon.models';

@Component({
  selector: 'app-heroicon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heroicon.component.html',
  styleUrls: ['./heroicon.component.scss'],
})
export class HeroiconComponent {
  @Input() name!: Heroicon;

  @Input() classNames = 'w-6 h-6';
}
