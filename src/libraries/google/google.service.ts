import { Injectable } from '@nestjs/common'
import { OAuth2Client } from 'google-auth-library'
import { ConfigurationService } from '../../core/configuration'
import { Logger, LoggerService } from '../logger'

@Injectable()
export class GoogleService {
  private logger: Logger

  client: OAuth2Client

  private clientId: string

  constructor(
    private configurationService: ConfigurationService,
    private loggerService: LoggerService,
  ) {
    this.logger = this.loggerService.create({ name: 'GoogleService' })

    try {
      this.clientId = this.configurationService.get('GOOGLE_CLIENT_ID')

      if (!this.clientId) {
        throw new Error(`Client ID is required`)
      }

      this.client = new OAuth2Client(this.clientId)

      this.logger.success(`Google Oauth active`)
    } catch (error) {
      this.logger.error(`Could not start Google Oauth`)
      this.logger.error(error)
    }
  }

  async verifyToken(token: string): Promise<any> {
    const ticket = await this.client.verifyIdToken({
      idToken: token,
      audience: this.clientId,
    })
    const { name, email } = ticket.getPayload()

    return {
      name,
      email,
    }
  }
}
