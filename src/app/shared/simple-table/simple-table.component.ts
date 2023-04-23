import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SimpleTableColumn,
  BaseColumn,
  TwoStackColumn,
  ThreeStackColumn,
} from './simple-table-column';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss'],
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SimpleTableComponent<D> {
  @Input() columns!: SimpleTableColumn<D>[];

  @Input() rowData: D[] | null = null;

  @Input() rowIdentifier!: keyof D;

  @Input() stripedRows = false;

  @Input() uppercaseHeadings = false;

  @Input() verticalLines = false;

  /** Reduces padding around heading and row cells */
  @Input() condense = false;

  isBaseColumn(column: SimpleTableColumn<D>): column is BaseColumn<D> {
    return !(this.isTwoStackColumn(column) || this.isThreeStackColumn(column));
  }

  isTwoStackColumn(column: SimpleTableColumn<D>): column is TwoStackColumn<D> {
    return !!(column as TwoStackColumn<D>).secondaryDataProperty;
  }

  isThreeStackColumn(
    column: SimpleTableColumn<D>
  ): column is ThreeStackColumn<D> {
    return !!(column as ThreeStackColumn<D>).tiertiaryDataProperty;
  }
}
