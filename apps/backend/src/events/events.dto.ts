import { IsISO8601, IsNotEmpty, IsObject, IsString } from "class-validator";

export class AppendEventDto {
  @IsString()
  @IsNotEmpty()
  aggregateId!: string;

  @IsString()
  @IsNotEmpty()
  eventType!: string;

  @IsISO8601()
  eventTs!: string;

  @IsObject()
  payload!: Record<string, unknown>;
}
