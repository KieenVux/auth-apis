import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { HashedPayload } from '../dto/hashed.dto';

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
    return { user: payload.payload };
  }
}
