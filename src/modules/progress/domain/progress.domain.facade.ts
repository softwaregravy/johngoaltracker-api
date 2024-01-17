import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Progress } from './progress.model'

import { Milestone } from '../../milestone/domain'

@Injectable()
export class ProgressDomainFacade {
  constructor(
    @InjectRepository(Progress)
    private repository: Repository<Progress>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(
    values: Partial<Progress>,
  ): Promise<Progress> {
    return this.repository.save(values)
  }

  async update(
    item: Progress,
    values: Partial<Progress>,
  ): Promise<Progress> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Progress): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Progress> = {},
  ): Promise<Progress[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Progress> = {},
  ): Promise<Progress> {
    if (!id) {
      this.databaseHelper.invalidQueryWhere('id')
    }

    const queryOptionsEnsured = {
      includes: queryOptions?.includes,
      filters: {
        id: id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    const item = await query.getOne()

    if (!item) {
      this.databaseHelper.notFoundByQuery(queryOptionsEnsured.filters)
    }

    return item
  }

async findManyByMilestone(
    milestone: Milestone,
    queryOptions: RequestHelper.QueryOptions<Progress> = {},
  ): Promise<Progress[]> {
    if (!milestone) {
      this.databaseHelper.invalidQueryWhere('milestone')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        milestoneId: milestone.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

}
