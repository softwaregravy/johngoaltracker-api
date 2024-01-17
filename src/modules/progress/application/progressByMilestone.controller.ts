import { Request } from 'express'

import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common'
import { RequestHelper } from 'helpers/request'
import { EventService } from 'libraries/event'
import { ProgressDomainFacade } from 'modules/progress/domain'
import { AuthenticationDomainFacade } from 'modules/authentication/domain'
import { ProgressApplicationEvent } from './progress.application.event'
import { ProgressCreateDto } from './progress.dto'

import { MilestoneDomainFacade } from '../../milestone/domain'

@Controller('/v1/milestones')
export class ProgressByMilestoneController {
  constructor(
    
    private milestoneDomainFacade: MilestoneDomainFacade,
    
    private progressDomainFacade: ProgressDomainFacade,
    private eventService: EventService,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

@Get('/milestone/:milestoneId/progresss')
  async findManyMilestoneId(
    @Param('milestoneId') milestoneId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const milestone =
      await this.milestoneDomainFacade.findOneByIdOrFail(
        milestoneId,
      )

    const items =
      await this.progressDomainFacade.findManyByMilestone(
        milestone,
        queryOptions,
      )

    return items
  }

  @Post('/milestone/:milestoneId/progresss')
  async createByMilestoneId(
    @Param('milestoneId') milestoneId: string,
    @Body() body: ProgressCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const valuesUpdated = { ...body, milestoneId }

    const item = await this.progressDomainFacade.create(valuesUpdated)

    await this.eventService.emit<ProgressApplicationEvent.ProgressCreated.Payload>(
      ProgressApplicationEvent
        .ProgressCreated.key,
      {
        id: item.id,
        userId: user.id,
      },
    )

    return item
  }
  
}
