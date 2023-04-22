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
  readonly secondaryDataProperty: keyof D;
}

export interface ThreeStackColumn<D> extends BaseColumn<D> {
  readonly tiertiaryDataProperty: keyof D;
}
