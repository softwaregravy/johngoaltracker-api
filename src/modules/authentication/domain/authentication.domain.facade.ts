import { Injectable } from '@nestjs/common'
import { ConfigurationService } from 'core/configuration'
import { Request } from 'express'
import * as Jwt from 'jsonwebtoken'
import { User } from 'modules/user/domain'

const TIME_24_HOURS = 60 * 60 * 24

@Injectable()
export class AuthenticationDomainFacade {
  constructor(private configurationService: ConfigurationService) {}

  /* ---------------------------------- TOKEN --------------------------------- */
  buildToken(userId: string): string {
    const payload = { userId }
    const secret = this.getSecret()

    const token = Jwt.sign(payload, secret, { expiresIn: TIME_24_HOURS })

    return token
  }

  buildTokenResetPassword(user: User): string {
    const payload = { userId: user.id }
    const secret = this.getSecret()

    const token = Jwt.sign(payload, secret, { expiresIn: TIME_24_HOURS })

    return token
  }

  verifyTokenOrFail(token: string): { userId: string } {
    const isError = typeof token !== 'string'
    if (isError) {
      throw new Error('Token must be defined')
    }

    const secret = this.getSecret()
    const payload = Jwt.verify(token, secret)

    return payload as { userId: string }
  }

  async verifyTokenResetPasswordOrFail(
    token: string,
  ): Promise<{ userId: string }> {
    const isError = typeof token !== 'string'
    if (isError) {
      throw new Error('Token must be defined')
    }

    const secret = this.getSecret()
    const payload = Jwt.verify(token, secret)

    return payload as { userId: string }
  }

  assignRequestPayload(request: Request, payload: { user: User }): void {
    const store = { ...(request['store'] ?? {}) }

    store.authentication = {
      ...(store.authentication ?? {}),
      user: {
        id: payload.user.id,
        name: payload.user.name,
        email: payload.user.email,
      },
    }

    request['store'] = store
  }

  getRequestPayload(request: Request): {
    user: { id: string; name: string; email: string }
  } {
    return request['store']?.authentication ?? {}
  }

  private getSecret(): string {
    return this.configurationService.get('AUTHENTICATION_SECRET')
  }
}
