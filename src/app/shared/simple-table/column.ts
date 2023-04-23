export type Column<D> = SingleValueColumn<D> | StackedValuesColumn<D>;

export interface SingleValueColumn<D> {
  readonly heading: string;
  readonly dataProperty: keyof D;
  readonly hideBelowBreakpoint?: 'sm' | 'md';
}

export interface StackedValuesColumn<D> extends SingleValueColumn<D> {
  readonly secondaryValue: StackedSupportValue<D>;
  readonly tertiaryValue?: StackedSupportValue<D>;
}

export interface StackedSupportValue<D> {
  readonly heading: string;
  readonly dataProperty: keyof D;
  readonly showBelowBreakpoint?: 'sm' | 'md';
}
