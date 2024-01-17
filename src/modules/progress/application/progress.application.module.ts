import { Module } from '@nestjs/common'
import { AuthenticationDomainModule } from 'modules/authentication/domain'
import { ProgressDomainModule } from '../domain'
import { ProgressController } from './progress.controller'

import { MilestoneDomainModule } from '../../../modules/milestone/domain'

import { ProgressByMilestoneController } from './progressByMilestone.controller'

@Module({
  imports: [
    AuthenticationDomainModule,
    ProgressDomainModule,

MilestoneDomainModule,

],
  controllers: [
    ProgressController,
    
    ProgressByMilestoneController,
    
  ],
  providers: [],
})
export class ProgressApplicationModule {}
