import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class ChatMessageDto {
  @IsString()
  @IsNotEmpty({ message: "Message must not be empty." })
  @MaxLength(2000, { message: "Message must be 2000 characters or fewer." })
  message: string;
}
