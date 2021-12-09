import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { HashedPayload } from '../dto/hashed.dto';
import { Roles } from '../guard/role.guard';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      ignoreExpiration: false,
      secretOrKey: 'sosecretthatyouwillneverfindout',
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          const data = request?.cookies['auth-token'];
          return data;
        },
      ]),
    });
  }

  async validate(payload: { payload: HashedPayload; iat: Date; exp: Date }) {
    Object.assign(payload.payload, { role: [Roles.ADMIN] });
    return { user: payload.payload };
  }
}
