import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { ROLES_KEY } from 'src/decorators/role.decorator';
import { HashedPayload } from '../dto/hashed.dto';

export enum Roles {
  ADMIN = 'admin',
  USER = 'user',
}

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requireRoles = this.reflector.getAllAndOverride<Roles[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requireRoles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user: HashedPayload = request.user.user;
    return requireRoles.some((role) => user.role?.includes(role));
  }
}
