import { Request } from 'express'

export namespace RequestHelper {
  export function getPath(request: Request): string {
    return request?.path
  }
  export function getMethod(request: Request): string {
    return request?.method
  }

  export function getBody(request: Request): any {
    return request?.body
  }

  export type QueryOptions<Model = any> = {
    filters?: Partial<Record<keyof Model, any>>
    orders?: Partial<Record<keyof Model, 'ASC' | 'DESC'>>
    includes?: string[]
  }

  export function getQueryOptions(request: Request): QueryOptions {
    const queryOptions = request.query.queryOptions as string

    if (queryOptions) {
      try {
        return JSON.parse(queryOptions)
      } catch (error) {
        throw new Error(error)
      }
    }

    return {}
  }
}
