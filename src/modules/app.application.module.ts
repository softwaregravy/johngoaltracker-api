import { Module } from '@nestjs/common'
import { AuthenticationApplicationModule } from './authentication/application'
import { AuthorizationApplicationModule } from './authorization/application'
import { UserApplicationModule } from './user/application'

import { GoalApplicationModule } from './goal/application'

import { MilestoneApplicationModule } from './milestone/application'

import { ProgressApplicationModule } from './progress/application'

import { ResourceApplicationModule } from './resource/application'

import { AiApplicationModule } from './ai/application/ai.application.module'
import { NotificationApplicationModule } from './notification/application/notification.application.module'

@Module({
  imports: [
    AuthenticationApplicationModule,
    UserApplicationModule,
    AuthorizationApplicationModule,
    NotificationApplicationModule,
    AiApplicationModule,

GoalApplicationModule,

MilestoneApplicationModule,

ProgressApplicationModule,

ResourceApplicationModule,

],
  controllers: [],
  providers: [],
})
export class AppApplicationModule {}
