import { Controller, Get, Req } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
@ApiTags('status')
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Recebe uma requisição Get e retorna um objeto de status
   * da aplicação com a URL de documentação
   * @param req Objeto de Request do Express
   * @returns {status: string, docs: string} Objeto de status da aplicação
   */
  @Get()
  @ApiOperation({
    summary: 'Visualizar status da aplicação',
  })
  getAppStatus(@Req() req: Request) {
    const baseUrl = req.protocol + '://' + req.get('host');
    return this.appService.getAppStatus(baseUrl);
  }
}
