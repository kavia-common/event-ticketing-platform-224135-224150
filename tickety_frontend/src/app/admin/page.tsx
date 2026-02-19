export default function AdminPage() {
  return (
    <div className="space-y-6">
      <header className="retro-panel p-6 retro-grid">
        <p className="retro-title text-xs text-white/70">Admin</p>
        <h1 className="mt-2 text-2xl font-semibold neon-text">Control room</h1>
        <p className="mt-2 text-white/75">
          Admin features (event creation, venues, pricing tiers, refunds, analytics) will be added
          when backend APIs and auth are implemented.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          { title: "Events", desc: "Create and manage events" },
          { title: "Venues", desc: "Seat maps and capacity" },
          { title: "Orders", desc: "Refunds and status" },
        ].map((c) => (
          <div key={c.title} className="retro-panel p-5">
            <p className="font-semibold">{c.title}</p>
            <p className="mt-1 text-sm text-white/70">{c.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
