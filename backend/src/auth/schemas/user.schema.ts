import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserRole = "user" | "employee" | "admin";
export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true, lowercase: true, trim: true })
  email!: string;

  @Prop({ required: true })
  passwordHash!: string;

  @Prop({ required: true, trim: true })
  name!: string;

  @Prop({ required: true, enum: ["user", "employee", "admin"], default: "user" })
  role!: UserRole;
}

export const UserSchema = SchemaFactory.createForClass(User);
