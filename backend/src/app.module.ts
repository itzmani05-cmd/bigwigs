import { Module } from "@nestjs/common";
import { CareersModule } from "./careers/careers.module";

@Module({
  imports: [CareersModule],
})
export class AppModule {}
