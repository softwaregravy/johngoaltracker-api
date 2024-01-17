import { Module } from '@nestjs/common'
import { OpenaiModule } from 'libraries/openai/openai.module'
import { AiController } from './ai.controller'

@Module({
  imports: [OpenaiModule],
  controllers: [AiController],
  providers: [],
})
export class AiApplicationModule {}
