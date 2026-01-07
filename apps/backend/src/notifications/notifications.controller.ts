import { Controller, Get } from "@nestjs/common";

@Controller("notifications")
export class NotificationsController {
  @Get()
  list() {
    return [
      {
        id: "notif-1",
        title: "Cleanliness ISO 4406 target not met",
        severity: "critical",
        role: "QA Tech",
        action: "Rework",
        woId: "WO-10239"
      }
    ];
  }
}
