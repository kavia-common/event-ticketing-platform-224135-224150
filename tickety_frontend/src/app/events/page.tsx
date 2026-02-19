import Link from "next/link";

type EventStub = {
  id: string;
  title: string;
  date: string;
  venue: string;
  priceFrom: string;
};

const demoEvents: EventStub[] = [
  {
    id: "neon-synthwave-night",
    title: "Neon Synthwave Night",
    date: "Fri • 8:00 PM",
    venue: "Arcade Dome",
    priceFrom: "$25",
  },
  {
    id: "pixel-jazz-festival",
    title: "Pixel Jazz Festival",
    date: "Sat • 6:30 PM",
    venue: "The Grid Theater",
    priceFrom: "$40",
  },
  {
    id: "retro-gaming-expo",
    title: "Retro Gaming Expo",
    date: "Sun • 11:00 AM",
    venue: "8-Bit Hall",
    priceFrom: "$15",
  },
];

export default function EventsPage() {
  return (
    <div className="space-y-6">
      <header className="retro-panel p-6">
        <p className="retro-title text-xs text-white/70">Events</p>
        <h1 className="mt-2 text-2xl font-semibold neon-text">Browse events</h1>
        <p className="mt-2 text-white/75">
          Backend event APIs aren&apos;t implemented yet, so this list is a styled placeholder.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {demoEvents.map((e) => (
          <article key={e.id} className="retro-panel p-5 hover:brightness-110 transition">
            <h2 className="font-semibold">{e.title}</h2>
            <p className="mt-1 text-sm text-white/70">
              {e.date} • {e.venue}
            </p>
            <p className="mt-3 text-sm text-white/80">
              From <span className="text-white">{e.priceFrom}</span>
            </p>
            <div className="mt-4 flex gap-2">
              <Link
                href={`/events/${e.id}`}
                className="px-4 py-2 rounded-xl border border-white/15 hover:bg-white/5 transition text-sm"
              >
                Details
              </Link>
              <Link
                href="/cart"
                className="px-4 py-2 rounded-xl retro-panel neon-border text-sm"
              >
                Add to cart
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
