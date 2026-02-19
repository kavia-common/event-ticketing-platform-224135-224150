import type { Metadata } from "next";
import "./globals.css";
import RetroHeader from "@/components/RetroHeader";
import RetroFooter from "@/components/RetroFooter";

export const metadata: Metadata = {
  title: "Tickety",
  description: "Retro-themed ticket booking UI (prototype)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className="app-shell">
          <RetroHeader />
          <main className="container py-8">{children}</main>
          <RetroFooter />
        </div>
      </body>
    </html>
  );
}
