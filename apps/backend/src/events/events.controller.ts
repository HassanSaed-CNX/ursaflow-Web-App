import { Body, Controller, Post } from "@nestjs/common";
import { AppendEventDto } from "./events.dto.js";

@Controller("events")
export class EventsController {
  @Post()
  appendEvent(@Body() dto: AppendEventDto) {
    return {
      status: "accepted",
      aggregateId: dto.aggregateId,
      eventType: dto.eventType
    };
  }
}
