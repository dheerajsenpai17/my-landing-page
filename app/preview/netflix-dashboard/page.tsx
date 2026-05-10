import NetflixDashboard from "@/app/components/projects/netflix-dashboard";

export const metadata = {
  title: "Preview · Netflix Japan ROI Dashboard",
};

export default function PreviewPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 md:px-10 md:py-20">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
          Preview · Isolated component
        </p>
        <a
          href="/"
          className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted transition-colors hover:text-accent"
        >
          ← back to site
        </a>
      </div>
      <NetflixDashboard />
      <p className="mt-6 max-w-prose font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
        Toggle the scenario buttons to verify all values, the chart, and the
        table update. Theme toggle in the nav also retints the chart.
      </p>
    </main>
  );
}
