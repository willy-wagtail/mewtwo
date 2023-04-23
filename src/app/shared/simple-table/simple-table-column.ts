export type SimpleTableColumn<D> =
  | BaseColumn<D>
  | TwoStackColumn<D>
  | ThreeStackColumn<D>;

export interface BaseColumn<D> {
  readonly heading: string;
  readonly dataProperty: keyof D;
  readonly hideBelowBreakpoint?: 'sm' | 'md';
}

export interface TwoStackColumn<D> extends BaseColumn<D> {
  readonly secondaryHeading: string;
  readonly secondaryDataProperty: keyof D;
  readonly showSecondaryBelowBreakpoint?: 'sm' | 'md';
}

export interface ThreeStackColumn<D> extends TwoStackColumn<D> {
  readonly tiertiaryHeading: string;
  readonly tiertiaryDataProperty: keyof D;
  readonly showTertiaryBelowBreakpoint?: 'sm' | 'md';
}