import Link from "next/link";

const DEMO_EVENT_IDS = ["neon-synthwave-night", "pixel-jazz-festival", "retro-gaming-expo"] as const;

// PUBLIC_INTERFACE
export function generateStaticParams() {
  /** Required for `output: "export"`; pre-renders known demo event IDs. */
  return DEMO_EVENT_IDS.map((eventId) => ({ eventId }));
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ eventId: string }>;
}) {
  const { eventId } = await params;

  return (
    <div className="space-y-6">
      <header className="retro-panel p-6 retro-grid">
        <p className="retro-title text-xs text-white/70">Event detail</p>
        <h1 className="mt-2 text-2xl font-semibold neon-text">{eventId}</h1>
        <p className="mt-2 text-white/75">
          This is a placeholder detail page. Once backend event APIs exist, this route can fetch and
          render real event info.
        </p>
        <div className="mt-4 flex gap-2">
          <Link
            href="/events"
            className="px-4 py-2 rounded-xl border border-white/15 hover:bg-white/5 transition text-sm"
          >
            Back to events
          </Link>
          <Link href="/cart" className="px-4 py-2 rounded-xl retro-panel neon-border text-sm">
            Add to cart
          </Link>
        </div>
      </header>

      <section className="retro-panel p-6">
        <h2 className="retro-title text-xs text-white/70">Ticket types</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            { name: "General Admission", price: "$25" },
            { name: "VIP", price: "$60" },
          ].map((t) => (
            <div key={t.name} className="p-4 rounded-xl border border-white/10 bg-white/5">
              <p className="font-medium">{t.name}</p>
              <p className="text-sm text-white/70 mt-1">{t.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
