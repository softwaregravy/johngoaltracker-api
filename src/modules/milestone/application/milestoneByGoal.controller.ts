import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from 'helpers/request'
import { EventService } from 'libraries/event'
import { MilestoneDomainFacade } from 'modules/milestone/domain'
import { AuthenticationDomainFacade } from 'modules/authentication/domain'
import { MilestoneApplicationEvent } from './milestone.application.event'
import { MilestoneCreateDto } from './milestone.dto'

import { GoalDomainFacade } from '../../goal/domain'

@Controller('/v1/goals')
export class MilestoneByGoalController {
  constructor(
    
    private goalDomainFacade: GoalDomainFacade,
    
    private milestoneDomainFacade: MilestoneDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

@Get('/goal/:goalId/milestones')
  async findManyGoalId(
    @Param('goalId') goalId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const goal =
      await this.goalDomainFacade.findOneByIdOrFail(
        goalId,
      )

    const items =
      await this.milestoneDomainFacade.findManyByGoal(
        goal,
        queryOptions,
      )

    return items
  }

  @Post('/goal/:goalId/milestones')
  async createByGoalId(
    @Param('goalId') goalId: string,
    @Body() body: MilestoneCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, goalId }

    const item = await this.milestoneDomainFacade.create(valuesUpdated)

    await this.eventService.emit<MilestoneApplicationEvent.MilestoneCreated.Payload>(
      MilestoneApplicationEvent
        .MilestoneCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
  
}
