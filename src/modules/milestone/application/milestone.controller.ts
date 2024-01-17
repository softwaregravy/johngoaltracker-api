import { Request } from 'express'

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common'
import { EventService } from 'libraries/event'
import {
  Milestone,
  MilestoneDomainFacade,
} from 'modules/milestone/domain'
import { AuthenticationDomainFacade } from 'modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { MilestoneApplicationEvent } from './milestone.application.event'
import {
  MilestoneCreateDto,
  MilestoneUpdateDto,
} from './milestone.dto'

@Controller('/v1/milestones')
export class MilestoneController {
  constructor(
    private eventService: EventService,
    private milestoneDomainFacade: MilestoneDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.milestoneDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: MilestoneCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.milestoneDomainFacade.create(body)

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

  @Get('/:milestoneId')
  async findOne(
    @Param('milestoneId') milestoneId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item =
      await this.milestoneDomainFacade.findOneByIdOrFail(
        milestoneId,
        queryOptions,
      )

    return item
  }

  @Patch('/:milestoneId')
  async update(
    @Param('milestoneId') milestoneId: string,
    @Body() body: MilestoneUpdateDto,
  ) {
    const item =
      await this.milestoneDomainFacade.findOneByIdOrFail(
        milestoneId,
      )

    const itemUpdated = await this.milestoneDomainFacade.update(
      item,
      body as Partial<Milestone>,
    )
    return itemUpdated
  }

  @Delete('/:milestoneId')
  async delete(@Param('milestoneId') milestoneId: string) {
    const item =
      await this.milestoneDomainFacade.findOneByIdOrFail(
        milestoneId,
      )

    await this.milestoneDomainFacade.delete(item)

    return item
  }
}
