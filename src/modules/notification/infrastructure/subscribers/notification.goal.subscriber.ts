import { Injectable } from '@nestjs/common'
import { OnEvent } from '@nestjs/event-emitter'
import { SocketService } from 'libraries/socket'
import { GoalApplicationEvent } from 'modules/goal/application'
import { AuthorizationDomainFacade } from 'modules/authorization/domain'
import {
  Notification,
  NotificationDomainFacade,
} from 'modules/notification/domain'

@Injectable()
export class NotificationGoalSubscriber {
  constructor(
    private notificationDomainFacade: NotificationDomainFacade,
    private authorizationDomainFacade: AuthorizationDomainFacade,
    private socketService: SocketService,
  ) {}

  @OnEvent(
    GoalApplicationEvent
      .GoalCreated.key,
  )
  async handleCreation(
    data: GoalApplicationEvent.GoalCreated.Payload,
  ) {
    const values: Partial<Notification> = {
      title: 'Admin',
      message: 'A new goal has been created',
      senderName: 'API',
    }

    const role =
      await this.authorizationDomainFacade.role.findOneByNameOrFail('admin')

    for (const { userId } of role.roleUsers) {
      const isCreator = userId === data.userId

      if (isCreator) {
        continue
      }

      const notification = await this.notificationDomainFacade.create({
        ...values,
        userId,
      })

      this.socketService.send(userId, 'notification.created', notification)
    }
  }
}
