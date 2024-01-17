import { Module } from '@nestjs/common'
import { SocketModule } from 'libraries/socket'
import { AuthorizationDomainModule } from 'modules/authorization/domain'
import { NotificationDomainModule } from '../domain'

import { NotificationGoalSubscriber } from './subscribers/notification.goal.subscriber'

import { NotificationMilestoneSubscriber } from './subscribers/notification.milestone.subscriber'

import { NotificationProgressSubscriber } from './subscribers/notification.progress.subscriber'

import { NotificationResourceSubscriber } from './subscribers/notification.resource.subscriber'

@Module({
  imports: [AuthorizationDomainModule, NotificationDomainModule, SocketModule],
  providers: [

NotificationGoalSubscriber,

NotificationMilestoneSubscriber,

NotificationProgressSubscriber,

NotificationResourceSubscriber,

],
  exports: [],
})
export class NotificationInfrastructureModule {}
