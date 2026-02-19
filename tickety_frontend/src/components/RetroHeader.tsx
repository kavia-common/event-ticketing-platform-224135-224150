import Link from "next/link";

// PUBLIC_INTERFACE
export default function RetroHeader() {
  /** Top navigation header for the Tickety UI. */
  return (
    <header className="border-b border-white/10">
      <div className="container py-4 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-3 retro-title font-semibold tracking-widest"
          aria-label="Tickety home"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl neon-border retro-panel">
            T
          </span>
          <span className="neon-text">TICKETY</span>
        </Link>

        <nav aria-label="Primary navigation" className="flex items-center gap-2">
          <Link
            href="/events"
            className="px-3 py-2 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition"
          >
            Events
          </Link>
          <Link
            href="/cart"
            className="px-3 py-2 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition"
          >
            Cart
          </Link>
          <Link
            href="/admin"
            className="px-3 py-2 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition"
          >
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
}
