import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from 'modules/authentication/domain'
import { ResourceDomainModule } from '../domain'
import { ResourceController } from './resource.controller'

import { GoalDomainModule } from '../../../modules/goal/domain'

import { ResourceByGoalController } from './resourceByGoal.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    ResourceDomainModule,

GoalDomainModule,

],
  controllers: [
    ResourceController,
    
    ResourceByGoalController,
    
  ],
  providers: [],
})
export class ResourceApplicationModule {}
