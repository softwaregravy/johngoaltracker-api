import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class ProgressCreateDto {

@IsString()

@IsOptional()
  progressDate?: string

@IsString()

@IsOptional()
  note?: string

@IsString()

@IsOptional()
  dateCreated?: string

@IsString()

@IsOptional()
  dateUpdated?: string

@IsString()

@IsOptional()
  dateDeleted?: string

@IsString()

@IsOptional()
  milestoneId?: string

}

export class ProgressUpdateDto {

@IsString()

@IsOptional()
  progressDate?: string

@IsString()

@IsOptional()
  note?: string

@IsString()

@IsOptional()
  dateCreated?: string

@IsString()

@IsOptional()
  dateUpdated?: string

@IsString()

@IsOptional()
  dateDeleted?: string

@IsString()

@IsOptional()
  milestoneId?: string

}
