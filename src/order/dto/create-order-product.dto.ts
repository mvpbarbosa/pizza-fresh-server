import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsPositive, IsString, IsUUID } from "class-validator";

export class CreateOrderProductDto {
  @IsUUID()
  @ApiProperty({
    description: 'ID do produto',
    example: '8e2bb7ca-9987-4779-a85b-a69f300f2629'
  })
  productId: string

  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'Quantidade de itens no pedido',
    example: 1
  })
  quantity: number

  @IsString()
  @ApiProperty({
    description: 'Observações do produto',
    example: 'Sem cebola'
  })
  description: string
}
