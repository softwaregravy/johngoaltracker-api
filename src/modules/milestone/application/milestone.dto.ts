import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class MilestoneCreateDto {

@IsString()

@IsNotEmpty()
  title: string

@IsString()

@IsOptional()
  description?: string

@IsNumber()

@IsOptional()
  quarter?: number

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
  goalId?: string

}

export class MilestoneUpdateDto {

@IsString()

@IsOptional()
  title?: string

@IsString()

@IsOptional()
  description?: string

@IsNumber()

@IsOptional()
  quarter?: number

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
  goalId?: string

}
