import { Module } from '@nestjs/common'
import { AccessControlModule } from 'core/accessControl'
import { AuthenticationDomainModule } from 'modules/authentication/domain'
import { AuthorizationDomainModule } from '../domain'
import { AuthorizationAccessControlException } from './authorization.accessControl.exception'
import { AuthorizationAccessControlService } from './authorization.accessControl.service'

@Module({
  imports: [AuthenticationDomainModule, AuthorizationDomainModule],
  providers: [
    AuthorizationAccessControlService,
    AuthorizationAccessControlException,
  ],
  exports: [AuthorizationAccessControlService],
})
export class AuthorizationAccessControlModule {
  static getGuards() {
    return [...AccessControlModule.getGuards()]
  }
}
