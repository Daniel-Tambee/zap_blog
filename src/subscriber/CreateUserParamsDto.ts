import { ApiProperty } from "@nestjs/swagger";


export class CreateUserParamsDto {
  @ApiProperty({
    description: 'The name of the user',
    example: 'John Doe',
    type: String,
  })
  name: string;

  @ApiProperty({
    description: 'The email of the user',
    example: 'johndoe@example.com',
    type: String,
  })
  email: string;

  @ApiProperty({
    description: 'Whether the user is on a weekly plan',
    example: true,
    type: Boolean,
  })
  weekly: boolean;

  @ApiProperty({
    description: 'Whether the user is a beginner',
    example: false,
    type: Boolean,
  })
  beginner: boolean;
}
