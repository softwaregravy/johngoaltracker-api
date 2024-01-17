import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { MilestoneDomainFacade } from './milestone.domain.facade'
import { Milestone } from './milestone.model'

@Module({
  imports: [
    TypeOrmModule.forFeature([Milestone]),
    DatabaseHelperModule,
  ],
  providers: [
    MilestoneDomainFacade,
    MilestoneDomainFacade,
  ],
  exports: [MilestoneDomainFacade],
})
export class MilestoneDomainModule {}
