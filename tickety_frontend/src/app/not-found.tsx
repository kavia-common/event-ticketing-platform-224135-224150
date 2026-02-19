import Link from "next/link";

export default function NotFound() {
  return (
    <div className="space-y-6">
      <section className="retro-panel p-8 retro-grid" role="alert" aria-live="assertive">
        <p className="retro-title text-xs text-white/70">404</p>
        <h1 className="mt-2 text-2xl font-semibold neon-text">Page not found</h1>
        <p className="mt-2 text-white/75">
          The page you&apos;re looking for doesn&apos;t exist (or has been moved to another timeline).
        </p>

        <div className="mt-5">
          <Link
            href="/"
            className="px-4 py-2 rounded-xl retro-panel neon-border text-sm inline-flex"
          >
            Return home
          </Link>
        </div>
      </section>
    </div>
  );
}
