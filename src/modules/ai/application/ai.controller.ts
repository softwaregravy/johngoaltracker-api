import { Body, Controller, Post } from '@nestjs/common'
import { OpenaiService } from 'libraries/openai'
import { AiQueryBody } from './ai.dto'

@Controller('/v1/ai')
export class AiController {
  constructor(private openaiService: OpenaiService) {}

  @Post('/query')
  async query(@Body() body: AiQueryBody) {
    const { question } = body

    const answer = await this.openaiService.query(question)

    return { answer }
  }
}
