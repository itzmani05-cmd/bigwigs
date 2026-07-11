import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import type { Request } from "express";
import { ROLES_KEY } from "./roles.decorator";
import type { UserRole } from "./schemas/user.schema";
import type { JwtPayload } from "./jwt.strategy";

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<UserRole[] | undefined>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles || requiredRoles.length === 0) return true;

    const request = context.switchToHttp().getRequest<Request & { user?: JwtPayload }>();
    const role = request.user?.role;
    if (!role || !requiredRoles.includes(role)) {
      throw new ForbiddenException("You do not have permission to access this resource.");
    }
    return true;
  }
}
