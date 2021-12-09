import { SetMetadata } from '@nestjs/common';
import { Roles } from 'src/auth/guard/role.guard';

export const ROLES_KEY = 'roles';
export const HasRoles = (...roles: Roles[]) => SetMetadata(ROLES_KEY, roles);
