import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl, Matches, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({
    description: 'Nome de usuário. Utilizado no login. Deve ser único',
    example: 'marcosbarbosa',
  })
  nickname: string;
  
  @IsString()
  @MinLength(8)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
  @ApiProperty({
    description: 'Senha do usuário para login.',
    example: 'Abcd@1234',
  })
  password: string;

  @ApiProperty({
    description: 'Confirmação da senha. Deve ser igual a senha',
    example: 'Abcd@1234',
  })
  confirmPassword: string;

  @IsUrl()
  @ApiProperty({
    description: 'Imagem de perfil do usuário.',
    example:
      'https://i.pinimg.com/736x/53/06/ce/5306ce49b18bcc4013e97720d1764b88.jpg',
  })
  image: string;
}
