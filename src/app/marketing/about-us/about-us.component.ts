import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeroiconComponent } from 'src/app/shared/heroicon/heroicon.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroiconComponent],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {}
