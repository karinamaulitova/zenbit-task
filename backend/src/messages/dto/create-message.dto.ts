import { IsString, IsEmail } from 'class-validator';

export class CreateMessageDto {
  @IsString()
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly message: string;
}
