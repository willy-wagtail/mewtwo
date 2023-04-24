export interface User {
  readonly name: string;
  readonly title: string;
  readonly email: string;
  readonly role: Role;
}

export type Role = 'Member' | 'Admin' | 'Owner';
