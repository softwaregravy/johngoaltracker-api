import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Milestone } from './milestone.model'

import { Goal } from '../../goal/domain'

@Injectable()
export class MilestoneDomainFacade {
  constructor(
    @InjectRepository(Milestone)
    private repository: Repository<Milestone>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(
    values: Partial<Milestone>,
  ): Promise<Milestone> {
    return this.repository.save(values)
  }

  async update(
    item: Milestone,
    values: Partial<Milestone>,
  ): Promise<Milestone> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Milestone): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Milestone> = {},
  ): Promise<Milestone[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Milestone> = {},
  ): Promise<Milestone> {
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

async findManyByGoal(
    goal: Goal,
    queryOptions: RequestHelper.QueryOptions<Milestone> = {},
  ): Promise<Milestone[]> {
    if (!goal) {
      this.databaseHelper.invalidQueryWhere('goal')
    }

    const queryOptionsEnsured = {
      includes: queryOptions.includes,
      orders: queryOptions.orders,
      filters: {
        ...queryOptions.filters,
        goalId: goal.id,
      },
    }

    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptionsEnsured,
    )

    return query.getMany()
  }

}
