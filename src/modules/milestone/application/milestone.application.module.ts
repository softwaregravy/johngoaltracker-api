import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from 'modules/authentication/domain'
import { MilestoneDomainModule } from '../domain'
import { MilestoneController } from './milestone.controller'

import { GoalDomainModule } from '../../../modules/goal/domain'

import { MilestoneByGoalController } from './milestoneByGoal.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    MilestoneDomainModule,

GoalDomainModule,

],
  controllers: [
    MilestoneController,
    
    MilestoneByGoalController,
    
  ],
  providers: [],
})
export class MilestoneApplicationModule {}
