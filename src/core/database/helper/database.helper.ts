import { HttpStatus, Injectable } from '@nestjs/common'
import { ExceptionService } from 'core/exception'
import { Repository, SelectQueryBuilder } from 'typeorm'
import { RequestHelper } from '../../../helpers/request'

@Injectable()
export class DatabaseHelper {
  constructor(private exception: ExceptionService) {}

  applyQueryOptions<Type>(
    repository: Repository<Type>,
    queryOptions: RequestHelper.QueryOptions<Type> = {},
  ): SelectQueryBuilder<Type> {
    const query = repository.createQueryBuilder('entity')

    this.applyIncludes(query, queryOptions)
    this.applyFilters(query, queryOptions)
    this.applyOrders(query, queryOptions)

    return query
  }

  notFoundByQuery(where: Record<string, any>) {
    const keyValues = Object.entries(where)
      .map(([key, value]) => `"${key}"="${value}"`)
      .join(', ')

    return this.exception.throw({
      status: HttpStatus.NOT_FOUND,
      code: 101,
      publicMessage: 'Resource was not found',
      privateMessage: `Resource with ${keyValues} was not found.`,
    })
  }

  invalidQueryWhere(...keys: string[]) {
    const keysString = keys.map(key => `"${key}"`).join(', ')

    return this.exception.throw({
      status: HttpStatus.BAD_REQUEST,
      code: 100,
      publicMessage: 'Resource was not found',
      privateMessage: `Resource where conditions for keys ${keysString} are invalid.`,
    })
  }

  /* --------------------------------- PRIVATE -------------------------------- */

  private applyIncludes<Type>(
    query: SelectQueryBuilder<Type>,
    queryOptions: RequestHelper.QueryOptions<Type>,
  ): void {
    const includes = (queryOptions.includes ?? []) as string[]

    includes.forEach((relation, relationIndex) => {
      const keys = relation.split('.')

      keys.forEach((key, keyIndex) => {
        const suffix = `${relationIndex}_${keyIndex}`
        const keyUnique = `${key}_${suffix}`

        const isRoot = keyIndex === 0

        if (isRoot) {
          query.leftJoinAndSelect(`entity.${key}`, `${keyUnique}`)
        } else {
          const suffixParent = `${relationIndex}_${keyIndex - 1}`
          const keyUniqueParent = `${keys[keyIndex - 1]}_${suffixParent}`

          query.leftJoinAndSelect(`${keyUniqueParent}.${key}`, `${keyUnique}`)
        }
      })
    })
  }

  private applyFilters<Type>(
    query: SelectQueryBuilder<Type>,
    queryOptions: RequestHelper.QueryOptions<Type>,
  ): void {
    const filters: Partial<Type> = queryOptions.filters ?? {}

    const conditions = []

    for (const [key, value] of Object.entries(filters)) {
      const isArray = Array.isArray(value)

      if (isArray) {
        conditions.push(`entity.${key} IN (:...${key})`)
      } else {
        conditions.push(`entity.${key} = :${key}`)
      }
    }

    query.where(conditions.join(' AND '), filters)
  }

  private applyOrders<Type>(
    query: SelectQueryBuilder<Type>,
    queryOptions: RequestHelper.QueryOptions<Type>,
  ): void {
    const orders: Record<string, 'ASC' | 'DESC'> = queryOptions.orders ?? {}

    let isFirst = true

    for (const [key, value] of Object.entries(orders)) {
      if (!isFirst) {
        query.orderBy(`entity.${key}`, value)

        isFirst = false
      }

      query.addOrderBy(`entity.${key}`, value)
    }
  }
}
