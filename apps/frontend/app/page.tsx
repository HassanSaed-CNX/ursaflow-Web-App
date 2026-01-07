import { NotificationList } from "@/components/notification-list";
import { RoleCard } from "@/components/role-card";

const Page = () => {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <header className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-slate-500">Hydraulics Production App</p>
            <h1 className="text-3xl font-bold text-slate-900">Role-based Control Tower</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold">
              Clean industrial
            </button>
            <button className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold">
              Dark compact
            </button>
            <button className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold">
              High contrast
            </button>
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { label: "Plant OEE", value: "83%", sub: "steady" },
            { label: "FPY (shop)", value: "98%", sub: "+1.2%" },
            { label: "Energy / unit", value: "2.6 kWh", sub: "on target" }
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-5">
              <p className="text-xs uppercase tracking-wide text-slate-500">{stat.label}</p>
              <p className="mt-2 text-3xl font-semibold text-slate-900">{stat.value}</p>
              <p className="text-xs text-slate-500">{stat.sub}</p>
            </div>
          ))}
        </div>
      </header>

      <section className="mx-auto mt-10 grid max-w-6xl gap-6 lg:grid-cols-2">
        <RoleCard title="Operator / Test Bench">
          <div className="grid gap-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs uppercase text-slate-500">Active WO</p>
              <p className="text-base font-semibold text-slate-900">WO-10241 · Pump Line · Shift B</p>
              <p className="text-xs text-slate-500">Gate: Bench TB-02 calibration valid · Cleanliness ISO 4406 OK</p>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                "Scan to start",
                "Auto verdict",
                "One tap NCR",
                "Retest plan"
              ].map((item) => (
                <div key={item} className="rounded-xl border border-slate-200 bg-white p-4 text-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </RoleCard>

        <RoleCard title="QA Tech / Final QC">
          <div className="grid gap-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs uppercase text-slate-500">Inspection Queue</p>
              <p className="text-base font-semibold text-slate-900">5 lots awaiting Final QC e-sign</p>
              <p className="text-xs text-slate-500">SoD enforced · e-sign trail stored</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm">
              SPC trend: Cleanliness drifting toward limit on Cylinder Line L-03
            </div>
          </div>
        </RoleCard>

        <RoleCard title="Packaging & Serialization">
          <div className="grid gap-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs uppercase text-slate-500">Pack readiness</p>
              <p className="text-base font-semibold text-slate-900">12 units ready · MPN # labels queued</p>
              <p className="text-xs text-slate-500">Label locked until QC release</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm">
              Document bundle: CoC + Test Report + Trace pack list
            </div>
          </div>
        </RoleCard>

        <RoleCard title="Supervisor / Planner">
          <div className="grid gap-3">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs uppercase text-slate-500">Andon</p>
              <p className="text-base font-semibold text-slate-900">2 holds · 1 calibration override request</p>
              <p className="text-xs text-slate-500">Auto re-sequence suggested</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm">
              Crew skills: 94% coverage · 3 cert renewals due this week
            </div>
          </div>
        </RoleCard>
      </section>

      <section className="mx-auto mt-10 max-w-6xl">
        <RoleCard title="Notification Center">
          <NotificationList />
        </RoleCard>
      </section>
    </main>
  );
};

export default Page;
