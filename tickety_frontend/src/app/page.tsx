import Link from "next/link";
import ApiStatus from "@/components/ApiStatus";

export default function Home() {
  return (
    <div className="space-y-6">
      <section className="retro-panel p-6 retro-grid">
        <div className="flex flex-col gap-4">
          <p className="retro-title text-xs text-white/70">Welcome</p>
          <h1 className="text-3xl sm:text-4xl font-semibold neon-text">
            Book tickets like it&apos;s 1999
          </h1>
          <p className="text-white/75 max-w-2xl">
            Tickety is an end-to-end ticketing platform. This frontend includes a retro-themed UI
            shell, routing, and a minimal API client wired to the backend health endpoint.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/events"
              className="retro-panel neon-border px-5 py-3 rounded-xl inline-flex items-center justify-center font-medium hover:brightness-110 transition"
            >
              Browse events
            </Link>
            <Link
              href="/cart"
              className="px-5 py-3 rounded-xl inline-flex items-center justify-center font-medium border border-white/15 hover:bg-white/5 transition"
            >
              View cart
            </Link>
            <Link
              href="/admin"
              className="px-5 py-3 rounded-xl inline-flex items-center justify-center font-medium border border-white/15 hover:bg-white/5 transition"
            >
              Admin console
            </Link>
          </div>
        </div>
      </section>

      <ApiStatus />

      <section className="grid gap-4 md:grid-cols-3">
        <div className="retro-panel p-5">
          <h2 className="retro-title text-xs text-white/70">Step 1</h2>
          <p className="mt-2 font-semibold">Discover</p>
          <p className="mt-1 text-sm text-white/70">
            Browse events, filter by date and category, then open details.
          </p>
        </div>
        <div className="retro-panel p-5">
          <h2 className="retro-title text-xs text-white/70">Step 2</h2>
          <p className="mt-2 font-semibold">Reserve</p>
          <p className="mt-1 text-sm text-white/70">
            Choose ticket types (and later seats) and add to your cart.
          </p>
        </div>
        <div className="retro-panel p-5">
          <h2 className="retro-title text-xs text-white/70">Step 3</h2>
          <p className="mt-2 font-semibold">Checkout</p>
          <p className="mt-1 text-sm text-white/70">
            Pay via Stripe and receive a QR code e-ticket (to be implemented).
          </p>
        </div>
      </section>
    </div>
  );
}
