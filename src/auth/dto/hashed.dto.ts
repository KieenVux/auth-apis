import { Roles } from '../guard/role.guard';

export class HashedPayload {
  email: string;
  id: string;
  name: string;
  role: Roles[];
}
