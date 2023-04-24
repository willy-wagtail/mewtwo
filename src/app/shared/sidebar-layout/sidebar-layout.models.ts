import { Heroicon } from '../heroicon/heroicon.model';

export type NavItemText = string;

export interface NavItem {
  text: NavItemText;
  icon: Heroicon;
}
