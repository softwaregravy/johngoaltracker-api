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
  Resource,
  ResourceDomainFacade,
} from 'modules/resource/domain'
import { AuthenticationDomainFacade } from 'modules/authentication/domain'
import { RequestHelper } from '../../../helpers/request'
import { ResourceApplicationEvent } from './resource.application.event'
import {
  ResourceCreateDto,
  ResourceUpdateDto,
} from './resource.dto'

@Controller('/v1/resources')
export class ResourceController {
  constructor(
    private eventService: EventService,
    private resourceDomainFacade: ResourceDomainFacade,
    private authenticationDomainFacade: AuthenticationDomainFacade,
  ) {}

  @Get('/')
  async findMany(@Req() request: Request) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const items = await this.resourceDomainFacade.findMany(queryOptions)

    return items
  }

  @Post('/')
  async create(
    @Body() body: ResourceCreateDto,
    @Req() request: Request,
  ) {
    const { user } = this.authenticationDomainFacade.getRequestPayload(request)

    const item = await this.resourceDomainFacade.create(body)

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

  @Get('/:resourceId')
  async findOne(
    @Param('resourceId') resourceId: string,
    @Req() request: Request,
  ) {
    const queryOptions = RequestHelper.getQueryOptions(request)

    const item =
      await this.resourceDomainFacade.findOneByIdOrFail(
        resourceId,
        queryOptions,
      )

    return item
  }

  @Patch('/:resourceId')
  async update(
    @Param('resourceId') resourceId: string,
    @Body() body: ResourceUpdateDto,
  ) {
    const item =
      await this.resourceDomainFacade.findOneByIdOrFail(
        resourceId,
      )

    const itemUpdated = await this.resourceDomainFacade.update(
      item,
      body as Partial<Resource>,
    )
    return itemUpdated
  }

  @Delete('/:resourceId')
  async delete(@Param('resourceId') resourceId: string) {
    const item =
      await this.resourceDomainFacade.findOneByIdOrFail(
        resourceId,
      )

    await this.resourceDomainFacade.delete(item)

    return item
  }
}
