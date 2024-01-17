import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class GoalCreateDto {

@IsString()

@IsNotEmpty()
  title: string

@IsString()

@IsOptional()
  description?: string

@IsNumber()

@IsOptional()
  year?: number

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
  userId?: string

}

export class GoalUpdateDto {

@IsString()

@IsOptional()
  title?: string

@IsString()

@IsOptional()
  description?: string

@IsNumber()

@IsOptional()
  year?: number

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
  userId?: string

}
