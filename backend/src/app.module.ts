import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { CareersModule } from "./careers/careers.module";
import { DemoModule } from "./demo/demo.module";
import { ContactModule } from "./contact/contact.module";
import { AuthModule } from "./auth/auth.module";
import { ChatModule } from "./chat/chat.module";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        uri: config.getOrThrow<string>("MONGODB_URI"),
      }),
    }),
    CareersModule,
    DemoModule,
    ContactModule,
    AuthModule,
    ChatModule,
  ],
})
export class AppModule {}
