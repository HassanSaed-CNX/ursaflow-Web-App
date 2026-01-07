import { notificationSchema, type NotificationItem } from "@ursaflow/schemas";

const sampleNotifications: NotificationItem[] = [
  {
    id: "notif-1",
    title: "Cleanliness ISO 4406 target not met",
    severity: "critical",
    role: "QA Tech",
    action: "Rework",
    woId: "WO-10239"
  },
  {
    id: "notif-2",
    title: "Calibration due in 6 hours for Bench TB-02",
    severity: "warning",
    role: "Maintenance",
    action: "Acknowledge",
    woId: "WO-10241"
  },
  {
    id: "notif-3",
    title: "Final QC e-sign pending",
    severity: "info",
    role: "Supervisor",
    action: "Approve",
    woId: "WO-10233"
  }
].map((item) => notificationSchema.parse(item));

const severityStyles: Record<NotificationItem["severity"], string> = {
  info: "bg-blue-50 text-blue-700",
  warning: "bg-amber-50 text-amber-700",
  critical: "bg-rose-50 text-rose-700"
};

export const NotificationList = () => {
  return (
    <div className="space-y-3">
      {sampleNotifications.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-4"
        >
          <div>
            <p className="text-sm font-medium text-slate-900">{item.title}</p>
            <p className="text-xs text-slate-500">
              {item.woId} • {item.role}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className={`rounded-full px-3 py-1 text-xs font-semibold ${severityStyles[item.severity]}`}>
              {item.severity.toUpperCase()}
            </span>
            <button className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
              {item.action}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
