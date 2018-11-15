export class Security {
  name: string;
  canSeeUsers: boolean;
  canEditUsers: boolean;
  canChat: boolean;
}

export const SECURITIES: Security[] = [
  { name: 'Admin', canSeeUsers: true, canEditUsers: true, canChat: true },
  { name: 'Moderator', canSeeUsers: true, canEditUsers: false, canChat: true},
  { name: 'Member', canSeeUsers: false, canEditUsers: false, canChat: true}
];

