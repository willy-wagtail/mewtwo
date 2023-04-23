import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Column, StackedValuesColumn } from './column';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss'],
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SimpleTableComponent<D> {
  @Input() columns!: Column<D>[];

  @Input() rowData: D[] | null = null;

  @Input() rowIdentifier!: keyof D;

  @Input() stripedRows = false;

  @Input() uppercaseHeadings = false;

  @Input() verticalLines = false;

  /** Reduces padding around heading and row cells */
  @Input() condense = false;

  isStackedColumn(column: Column<D>): column is StackedValuesColumn<D> {
    return !!(column as StackedValuesColumn<D>).secondaryValue;
  }
}
