import { ConflictException, Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { Model } from "mongoose";
import * as bcrypt from "bcryptjs";
import { User, UserDocument } from "./schemas/user.schema";
import { SignupDto } from "./dto/signup.dto";
import { LoginDto } from "./dto/login.dto";

const SALT_ROUNDS = 12;

export interface PublicUser {
  id: string;
  email: string;
  name: string;
  role: "user" | "employee" | "admin";
}

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  private emailAllowlist(envKey: string): Set<string> {
    const raw = this.configService.get<string>(envKey) ?? "";
    return new Set(
      raw
        .split(",")
        .map((email) => email.trim().toLowerCase())
        .filter(Boolean),
    );
  }

  private resolveRole(email: string): "user" | "employee" | "admin" {
    if (this.emailAllowlist("ADMIN_EMAILS").has(email)) return "admin";
    if (this.emailAllowlist("EMPLOYEE_EMAILS").has(email)) return "employee";
    return "user";
  }

  private toPublicUser(user: UserDocument): PublicUser {
    return {
      id: user.id as string,
      email: user.email,
      name: user.name,
      role: user.role,
    };
  }

  private signToken(user: UserDocument): string {
    return this.jwtService.sign({
      sub: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    });
  }

  async signup(dto: SignupDto): Promise<{ token: string; user: PublicUser }> {
    const email = dto.email.trim().toLowerCase();
    const existing = await this.userModel.findOne({ email });
    if (existing) {
      throw new ConflictException("An account with this email already exists.");
    }

    const passwordHash = await bcrypt.hash(dto.password, SALT_ROUNDS);
    const role = this.resolveRole(email);

    const user = await this.userModel.create({
      email,
      passwordHash,
      name: dto.name.trim(),
      role,
    });

    return { token: this.signToken(user), user: this.toPublicUser(user) };
  }

  async login(dto: LoginDto): Promise<{ token: string; user: PublicUser }> {
    const email = dto.email.trim().toLowerCase();
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException("Invalid email or password.");
    }

    const passwordMatches = await bcrypt.compare(dto.password, user.passwordHash);
    if (!passwordMatches) {
      throw new UnauthorizedException("Invalid email or password.");
    }

    return { token: this.signToken(user), user: this.toPublicUser(user) };
  }

  async findPublicUserById(userId: string): Promise<PublicUser> {
    const user = await this.userModel.findById(userId);
    if (!user) {
      throw new UnauthorizedException("Account no longer exists.");
    }
    return this.toPublicUser(user);
  }

  async countUsers(): Promise<number> {
    return this.userModel.countDocuments();
  }
}
