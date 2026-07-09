import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import type { Response } from "express";

@Catch()
export class ParseErrorFilter implements ExceptionFilter {
  catch(_exception: unknown, host: ArgumentsHost) {
    const response = host.switchToHttp().getResponse<Response>();
    response.status(400).json({ error: "Invalid form submission." });
  }
}
