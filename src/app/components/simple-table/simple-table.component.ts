import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SimpleTableColumn<Data> {
  readonly heading: string;
  readonly dataProperty: keyof Data;
  readonly hideOnMobile?: boolean;
}

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss'],
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SimpleTableComponent<Data> {
  @Input() columns!: SimpleTableColumn<Data>[];

  @Input() uppercaseHeadings = false;

  @Input() rowData: Data[] | null = null;

  @Input() rowIdentifier!: keyof Data;

  @Input() stripedRows = false;
}
