import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lettericon } from './lettericon.models';

@Component({
  selector: 'app-lettericon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lettericon.component.html',
  styleUrls: ['./lettericon.component.scss'],
})
export class LettericonComponent {
  @Input() letter!: Lettericon;

  @Input() classNames = 'w-6 h-6';
}
