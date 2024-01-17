import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from 'helpers/request'
import { EventService } from 'libraries/event'
import { ResourceDomainFacade } from 'modules/resource/domain'
import { AuthenticationDomainFacade } from 'modules/authentication/domain'
import { ResourceApplicationEvent } from './resource.application.event'
import { ResourceCreateDto } from './resource.dto'

import { GoalDomainFacade } from '../../goal/domain'

@Controller('/v1/goals')
export class ResourceByGoalController {
  constructor(
    
    private goalDomainFacade: GoalDomainFacade,
    
    private resourceDomainFacade: ResourceDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

@Get('/goal/:goalId/resources')
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
      await this.resourceDomainFacade.findManyByGoal(
        goal,
        queryOptions,
      )

    return items
  }

  @Post('/goal/:goalId/resources')
  async createByGoalId(
    @Param('goalId') goalId: string,
    @Body() body: ResourceCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, goalId }

    const item = await this.resourceDomainFacade.create(valuesUpdated)

    await this.eventService.emit<ResourceApplicationEvent.ResourceCreated.Payload>(
      ResourceApplicationEvent
        .ResourceCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
  
}
