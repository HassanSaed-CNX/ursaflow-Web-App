import type { ReactNode } from "react";

export const RoleCard = ({ title, children }: { title: string; children: ReactNode }) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
          Live demo
        </span>
      </div>
      <div className="mt-4 space-y-4 text-sm text-slate-600">{children}</div>
    </section>
  );
};
