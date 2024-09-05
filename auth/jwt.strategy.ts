import { Injectable } from '@nestjs/common';
import { JwtStrategy as PassportJwtStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.entity';

@Injectable()
export class JwtStrategy extends PassportJwtStrategy {
  constructor(private usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secretKey', // Замените на более надежный ключ
    });
  }

  async validate(payload: any): Promise<User> {
    return this.usersService.findOneByEmail(payload.email);
  }
}
