import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class ResourceCreateDto {

@IsString()

@IsNotEmpty()
  url: string

@IsString()

@IsOptional()
  description?: string

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

export class ResourceUpdateDto {

@IsString()

@IsOptional()
  url?: string

@IsString()

@IsOptional()
  description?: string

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
