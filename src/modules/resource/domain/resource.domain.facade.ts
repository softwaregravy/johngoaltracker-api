import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { DatabaseHelper } from '../../../core/database'
import { RequestHelper } from '../../../helpers/request'
import { Resource } from './resource.model'

import { Goal } from '../../goal/domain'

@Injectable()
export class ResourceDomainFacade {
  constructor(
    @InjectRepository(Resource)
    private repository: Repository<Resource>,
    private databaseHelper: DatabaseHelper,
  ) {}

  async create(
    values: Partial<Resource>,
  ): Promise<Resource> {
    return this.repository.save(values)
  }

  async update(
    item: Resource,
    values: Partial<Resource>,
  ): Promise<Resource> {
    const itemUpdated = { ...item, ...values }

    return this.repository.save(itemUpdated)
  }

  async delete(item: Resource): Promise<void> {
    await this.repository.softDelete(item.id)
  }

  async findMany(
    queryOptions: RequestHelper.QueryOptions<Resource> = {},
  ): Promise<Resource[]> {
    const query = this.databaseHelper.applyQueryOptions(
      this.repository,
      queryOptions,
    )

    return query.getMany()
  }

  async findOneByIdOrFail(
    id: string,
    queryOptions: RequestHelper.QueryOptions<Resource> = {},
  ): Promise<Resource> {
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
    queryOptions: RequestHelper.QueryOptions<Resource> = {},
  ): Promise<Resource[]> {
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
