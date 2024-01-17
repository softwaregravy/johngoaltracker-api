import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DatabaseHelperModule } from '../../../core/database'
import { ResourceDomainFacade } from './resource.domain.facade'
import { Resource } from './resource.model'

@Module({
  imports: [
    TypeOrmModule.forFeature([Resource]),
    DatabaseHelperModule,
  ],
  providers: [
    ResourceDomainFacade,
    ResourceDomainFacade,
  ],
  exports: [ResourceDomainFacade],
})
export class ResourceDomainModule {}
