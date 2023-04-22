import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface SimpleTableColumn<Data> {
  readonly heading: string;
  readonly dataProperty: keyof Data;
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
  /** This array contains heading labels and the data property to pick out the value from rowData */
  @Input() columns!: SimpleTableColumn<Data>[];

  /** Heading labels capitalised or not. */
  @Input() uppercaseHeadings = false;

  /** Data to be displayed in rows. A column will define which property to select from this data. */
  @Input() rowData: Data[] | null = null;

  /** This is the property of a row that identifies that row. */
  @Input() rowIdentifier!: keyof Data;
}
