import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';

export class LoginResponseDto {
  @ApiProperty({
    description: 'JWT gerado pelo login',
    example: '"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrbmFtZSI6Im1hcmNvc2JhcmJvc2EiLCJpYXQiOjE2NTgyNDUxMDYsImV4cCI6MTY1ODMzMTUwNn0.qG6kykrrlzPIrfam9vZOZJ9QufO4Fpnqna7UUUqv61s',
  })
  token: string;

  @ApiProperty({
    description: 'Dados do usuário autenticado',
  })
  user: User;
}
