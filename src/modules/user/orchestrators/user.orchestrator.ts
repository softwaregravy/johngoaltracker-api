import { Injectable } from '@nestjs/common'
import { EventService } from 'libraries/event'
import { User, UserDomainFacade } from 'modules/user/domain'
import { UserOrchestratorEvent } from './user.orchestrator.event'

@Injectable()
export class UserOrchestrator {
  constructor(
    private userDomainFacade: UserDomainFacade,
    private event: EventService,
  ) {}

  getCodeValues(): {
    durationMinutes: number
  } {
    return {
      durationMinutes: 60,
    }
  }

  async onSuccess(user: User): Promise<void> {
    await this.userDomainFacade.setVerified(user)

    this.event.emit<UserOrchestratorEvent.Verified.Payload>(
      UserOrchestratorEvent.Verified.key,
      { userId: user.id },
    )
  }
}
