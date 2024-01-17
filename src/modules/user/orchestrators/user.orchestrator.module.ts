import { Module } from '@nestjs/common'
import { UserDomainModule } from 'modules/user/domain'
import { UserOrchestrator } from './user.orchestrator'

@Module({
  imports: [UserDomainModule],
  controllers: [],
  providers: [UserOrchestrator],
  exports: [UserOrchestrator],
})
export class UserOrchestratorModule {}
