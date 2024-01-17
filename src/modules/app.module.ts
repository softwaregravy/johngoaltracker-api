import { Module } from '@nestjs/common'
import { AccessControlModule } from 'core/accessControl'
import { CookieModule } from 'core/cookie'
import { ExceptionModule } from 'core/exception'
import { LoggingModule } from 'core/logging'
import { SocketModule } from 'libraries/socket'
import { ConfigurationModule } from '../core/configuration/configuration.module'
import { CorsModule } from '../core/cors/cors.module'
import {
  DatabaseConfigurationModule,
  DatabaseSetupModule,
} from '../core/database'
import { EmailModule } from '../libraries/email/email.module'
import { EventModule } from '../libraries/event'
import { LoggerModule } from '../libraries/logger'
import { AppApplicationModule } from './app.application.module'
import { AppDomainModule } from './app.domain.module'
import { AppInfrastructureModule } from './app.infrastructure.module'
import { AppOrchestratorModule } from './app.orchestrator.module'
import { AuthenticationInfrastructureModule } from './authentication/infrastructure'
import { AuthorizationAccessControlModule } from './authorization/accessControl'

@Module({
  imports: [
    ConfigurationModule,
    LoggerModule,
    ExceptionModule,
    DatabaseConfigurationModule,
    DatabaseSetupModule,
    CorsModule,
    EventModule,
    EmailModule,
    CookieModule,
    SocketModule,
    AccessControlModule,
    AppDomainModule,
    AppApplicationModule,
    AppInfrastructureModule,
    AppOrchestratorModule,
    LoggingModule,
  ],
  controllers: [],
  providers: [
    ...LoggingModule.getInterceptors(),
    ...AuthenticationInfrastructureModule.getGuards(),
    ...AuthorizationAccessControlModule.getGuards(),
    ...ExceptionModule.getFilters(),
  ],
  exports: [],
})
export class AppModule {}
