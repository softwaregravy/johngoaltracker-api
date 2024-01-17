import { Injectable } from '@nestjs/common'
import { Openai } from './internal/openai'

@Injectable()
export class OpenaiService {
  constructor(private openai: Openai) {}

  async query(question: string): Promise<string> {
    return this.openai.send(question)
  }
}
