import Link from "next/link";

export default function CartPage() {
  return (
    <div className="space-y-6">
      <header className="retro-panel p-6">
        <p className="retro-title text-xs text-white/70">Cart</p>
        <h1 className="mt-2 text-2xl font-semibold neon-text">Your tickets</h1>
        <p className="mt-2 text-white/75">
          Cart and checkout flows (Stripe) will be implemented once backend endpoints exist.
        </p>
      </header>

      <section className="retro-panel p-6">
        <p className="text-white/75">Your cart is empty.</p>
        <div className="mt-4 flex gap-2">
          <Link href="/events" className="px-4 py-2 rounded-xl retro-panel neon-border text-sm">
            Browse events
          </Link>
          <button
            type="button"
            disabled
            className="px-4 py-2 rounded-xl border border-white/15 text-white/40 text-sm cursor-not-allowed"
          >
            Checkout (coming soon)
          </button>
        </div>
      </section>
    </div>
  );
}
