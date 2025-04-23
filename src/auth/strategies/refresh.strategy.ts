import { ConfigType } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import jwtConfig from "../config/jwt.config";
import { AuthJwtPayload } from "../types/auth-jwtPayload";
import { Inject } from "@nestjs/common";
import refreshJwtConfig from "../config/refresh-jwt.config";

export class JwtStrategy extends PassportStrategy(Strategy, 'refresh-kwt') {
  constructor(@Inject(refreshJwtConfig.KEY) private refreshJwtConfiguration: ConfigType<typeof refreshJwtConfig>) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: refreshJwtConfiguration.secret,
    });
  }

  async validate(payload: AuthJwtPayload) {
    return { id: payload.sub, type: 'refresh' };
  }
}