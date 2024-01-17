import { User } from 'modules/user/domain'

export type UserData = {
  user: User
  roles: string[]
}

export type Constraints = {
  roles: string[]
}
