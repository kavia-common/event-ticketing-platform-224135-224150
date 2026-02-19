"use client";

import { useEffect, useMemo, useState } from "react";
import { getHealth } from "@/lib/api";

type Status = "idle" | "loading" | "ok" | "error";

// PUBLIC_INTERFACE
export default function ApiStatus() {
  /** Client-side widget showing backend connectivity status. */
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  const baseUrl = useMemo(
    () => process.env.NEXT_PUBLIC_TICKETY_API_BASE_URL?.trim() || "",
    [],
  );

  useEffect(() => {
    let cancelled = false;

    async function run() {
      setStatus("loading");
      setMessage("");
      try {
        await getHealth();
        if (!cancelled) {
          setStatus("ok");
          setMessage("Backend reachable");
        }
      } catch (e) {
        if (!cancelled) {
          setStatus("error");
          setMessage(e instanceof Error ? e.message : "Unknown error");
        }
      }
    }

    void run();
    return () => {
      cancelled = true;
    };
  }, []);

  const badge =
    status === "ok"
      ? "bg-emerald-400/10 text-emerald-200 border-emerald-400/30"
      : status === "error"
        ? "bg-red-400/10 text-red-200 border-red-400/30"
        : "bg-white/5 text-white/70 border-white/15";

  return (
    <section className="retro-panel p-4 retro-grid">
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <div>
          <h2 className="retro-title text-xs text-white/70">API Status</h2>
          <p className="mt-1 text-sm text-white/80">
            {baseUrl ? (
              <>
                Using <span className="text-white">{baseUrl}</span>
              </>
            ) : (
              <>
                <span className="text-white">NEXT_PUBLIC_TICKETY_API_BASE_URL</span> not set
                (will call relative path)
              </>
            )}
          </p>
        </div>

        <div className={`px-3 py-2 rounded-xl border text-sm ${badge}`}>
          {status === "loading" ? "Checking…" : message || "Not checked"}
        </div>
      </div>
    </section>
  );
}
