import { Body, Controller, Post, Res } from '@nestjs/common'
import { Authentication } from 'core/authentication'
import { Response } from 'express'
import { EventService } from 'libraries/event'
import { GoogleService } from 'libraries/google'
import { Logger, LoggerService } from 'libraries/logger'
import { UserDomainFacade } from 'modules/user/domain'
import { CookieService } from '../../../core/cookie'
import { AuthenticationDomainFacade } from '../domain'
import { AuthenticationApplicationEvent } from './authentication.application.event'
import { AuthenticationApplicationException } from './authentication.application.exception'
import { GoogleByAuthenticationCallbackDto } from './authentication.dto'

@Controller('/v1/authentication/google')
export class GoogleByAuthenticationController {
  private logger: Logger

  constructor(
    private authenticationDomainFacade: AuthenticationDomainFacade,
    private userDomainFacade: UserDomainFacade,
    private googleService: GoogleService,
    private loggerService: LoggerService,
    private eventService: EventService,
    private exception: AuthenticationApplicationException,
    private cookieService: CookieService,
  ) {
    this.logger = this.loggerService.create({
      name: 'GoogleByAuthenticationController',
    })
  }

  @Post('/callback')
  @Authentication.Public()
  async callback(
    @Body() body: GoogleByAuthenticationCallbackDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { name, email } = await this.googleService
      .verifyToken(body.token)
      .catch(error => this.exception.invalidGoogleToken(error))

    let token: string

    try {
      const user = await this.userDomainFacade.findOneByEmailOrFail(email)

      token = this.authenticationDomainFacade.buildToken(user.id)
    } catch (error) {
      const registerData = await this.register(email, name)

      token = registerData.token
    }

    this.cookieService.setAccessToken(response, token)

    return {}
  }

  private async register(
    email: string,
    name: string,
  ): Promise<{ token: string }> {
    await this.userDomainFacade.create({
      email,
      name,
    })

    const user = await this.userDomainFacade.findOneByEmailOrFail(email)

    await this.userDomainFacade.setVerified(user)

    const token = this.authenticationDomainFacade.buildToken(user.id)

    await this.eventService.emit<AuthenticationApplicationEvent.UserRegistered.Payload>(
      AuthenticationApplicationEvent.UserRegistered.key,
      { userId: user.id },
    )

    this.logger.log(`User ${email} registered with google`)

    return { token }
  }
}
