import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsUUID } from 'class-validator';

export class CreateOrderDto {
  @IsUUID()
  @ApiProperty({
    description: 'ID do usuário que está criando o pedido',
    example: 'f54adc73-1dd3-432e-857e-4052d5fc8ec8',
  })
  userId: string;

  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'Número da mesa que está realizando o pedido',
    example: 1,
  })
  tableNumber: number;

  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: 'Lista com todos os IDs dos produtos que estão no pedido',
    example:
      '["691b6010-e982-48dc-a934-ccd6edf351fc", "beca3ca2-4ad7-4686-8748-f900ba08d1df"]',
  })
  products: string[];
}
