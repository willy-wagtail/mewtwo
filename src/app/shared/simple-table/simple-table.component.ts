import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ActionColumn,
  ActionEvent,
  Column,
  StackedValuesColumn,
} from './simple-table.model';

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

  @Output() action = new EventEmitter<ActionEvent<D>>();

  isStackedColumn(column: Column<D>): column is StackedValuesColumn<D> {
    return !!(column as StackedValuesColumn<D>).secondaryValue;
  }

  isActionColumn(column: Column<D>): column is ActionColumn {
    return (column as ActionColumn).kind === 'Action';
  }

  onAction(heading: string, row: D): void {
    this.action.emit({ heading, row });
  }
}
