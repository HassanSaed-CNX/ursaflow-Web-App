import { Module } from "@nestjs/common";
import { EventsModule } from "./events/events.module.js";
import { NotificationsModule } from "./notifications/notifications.module.js";

@Module({
  imports: [EventsModule, NotificationsModule]
})
export class AppModule {}
