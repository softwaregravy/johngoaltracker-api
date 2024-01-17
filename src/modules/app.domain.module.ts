import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from './authentication/domain'
import { AuthorizationDomainModule } from './authorization/domain'

import { UserDomainModule } from './user/domain'

import { NotificationDomainModule } from './notification/domain'

import { GoalDomainModule } from './goal/domain'

import { MilestoneDomainModule } from './milestone/domain'

import { ProgressDomainModule } from './progress/domain'

import { ResourceDomainModule } from './resource/domain'

@Module({
  imports: [
    AuthenticationDomainModule,
    AuthorizationDomainModule,
    UserDomainModule,
    NotificationDomainModule,

GoalDomainModule,

MilestoneDomainModule,

ProgressDomainModule,

ResourceDomainModule,

],
  controllers: [],
  providers: [],
})
export class AppDomainModule {}
