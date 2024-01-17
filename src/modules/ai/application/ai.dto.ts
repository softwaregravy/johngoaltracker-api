import { IsNotEmpty, IsString } from 'class-validator'

export class AiQueryBody {
  @IsNotEmpty()
  @IsString()
  question: string
}
