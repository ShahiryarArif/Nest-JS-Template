import { JwtModuleOptions, JwtSignOptions } from "@nestjs/jwt";
import { registerAs } from "@nestjs/config";

export default registerAs('jwt', (): JwtSignOptions => ({
  secret: process.env.REFRESH_JWT_SECRET,

  expiresIn: process.env.REFRESH_JWT_EXPIRES_IN,
}));

