// PUBLIC_INTERFACE
export default function RetroFooter() {
  /** Footer for Tickety UI with basic environment hints. */
  return (
    <footer className="mt-auto border-t border-white/10">
      <div className="container py-6 text-sm text-white/60 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
        <p>
          Tickety • Retro UI shell •{" "}
          <span className="text-white/70">frontend-only prototype</span>
        </p>
        <p className="text-white/50">
          API:{" "}
          <span className="text-white/70">
            {process.env.NEXT_PUBLIC_TICKETY_API_BASE_URL?.trim() || "(not set)"}
          </span>
        </p>
      </div>
    </footer>
  );
}
