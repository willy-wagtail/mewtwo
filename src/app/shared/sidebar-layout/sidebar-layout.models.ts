import { Heroicon } from '../heroicon/heroicon.models';
import { Lettericon } from '../lettericon/lettericon.models';

export type NavItemText = string;

export interface LettericonNavIcon {
  type: 'letter';
  param: Lettericon;
}

export interface HeroiconNavIcon {
  type: 'hero';
  param: Heroicon;
}

export type NavIcon = LettericonNavIcon | HeroiconNavIcon;

export interface NavItem {
  text: NavItemText;
  icon: NavIcon;
}

export interface NavGroup {
  name: string;
  items: NavItem[];
}

export interface NavConfig {
  primary: NavGroup;
  secondary?: NavGroup;
  tertiary?: NavGroup;
}
