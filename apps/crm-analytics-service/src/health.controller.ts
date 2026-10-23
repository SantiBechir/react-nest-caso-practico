import { Controller, Get } from '@nestjs/common';
import type { HealthResponse } from '@activation/contracts';

@Controller('health')
export class HealthController {
  @Get()
  getHealth(): HealthResponse {
    return { service: 'crm-analytics-service', status: 'ok' };
  }
}
