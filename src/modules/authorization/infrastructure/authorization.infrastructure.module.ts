import { Module } from '@nestjs/common'
import { EmailModule } from 'libraries/email/email.module'
import { AuthenticationDomainModule } from 'modules/authentication/domain'
import { UserDomainModule } from 'modules/user/domain'
import { AuthorizationDomainModule } from '../domain'
import { AuthorizationCommunicationSubscriber } from './subscribers/authorization.communication.subscriber'

@Module({
  imports: [
    UserDomainModule,
    AuthorizationDomainModule,
    AuthenticationDomainModule,
    EmailModule,
  ],
  providers: [AuthorizationCommunicationSubscriber],
  exports: [],
})
export class AuthorizationInfrastructureModule {}
