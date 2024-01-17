import { Injectable } from '@nestjs/common'
import { ConfigurationService } from 'core/configuration'
import { Logger, LoggerService } from 'libraries/logger'
import OpenaiSDK from 'openai'
import { ChatCompletionMessageParam } from 'openai/resources'

enum OpenaiModel {
  DEFAULT = 'gpt-3.5-turbo-16k',
}

@Injectable()
export class Openai {
  private api: OpenaiSDK

  private logger: Logger

  constructor(
    private configurationService: ConfigurationService,
    private loggerService: LoggerService,
  ) {
    this.logger = this.loggerService.create({ name: 'Openai' })

    this.initialize()
  }

  private initialize(): void {
    try {
      const apiKey = this.configurationService.get('OPENAI_API_KEY')

      this.api = new OpenaiSDK({ apiKey })

      this.logger.success(`Openai is active`)
    } catch (error) {
      this.logger.error(`Openai failed to start`)
    }
  }

  async send(question: string): Promise<string> {
    const messages = this.buildMessages(question)

    const response = await this.api.chat.completions.create({
      model: OpenaiModel.DEFAULT,
      messages,
    })

    const content = this.parseResponseContent(response)

    return content
  }

  private buildMessages(content: string): ChatCompletionMessageParam[] {
    return [
      {
        role: 'user',
        content,
      },
    ]
  }

  private parseResponseContent(
    response: OpenaiSDK.Chat.Completions.ChatCompletion,
  ): string {
    return response.choices[0].message.content
  }
}
