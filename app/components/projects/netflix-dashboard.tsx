"use client";

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
  type ChartData,
  type ChartOptions,
} from "chart.js";
import { useEffect, useMemo, useState } from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

type Scenario = "cons" | "base" | "opt";

type ScenarioData = {
  inv: number[];
  rev: number[];
  roi: number;
  pay: string;
  sub: string;
  net: number;
  totalInv: number;
  totalRev: number;
};

const data: Record<Scenario, ScenarioData> = {
  cons: {
    inv: [378, 475, 560, 605, 635],
    rev: [180, 420, 750, 1050, 1280],
    roi: 55,
    pay: "30–36 months",
    sub: "14.5M",
    net: 1050,
    totalInv: 2653,
    totalRev: 3680,
  },
  base: {
    inv: [368, 503, 610, 665, 692],
    rev: [310, 630, 1070, 1450, 1770],
    roi: 84,
    pay: "~24 months",
    sub: "16.5M",
    net: 2392,
    totalInv: 2838,
    totalRev: 5230,
  },
  opt: {
    inv: [358, 520, 640, 705, 745],
    rev: [495, 890, 1450, 1900, 2300],
    roi: 130,
    pay: "12–16 months",
    sub: "18.5M",
    net: 4252,
    totalInv: 2968,
    totalRev: 7035,
  },
};

const scenarios: { id: Scenario; label: string }[] = [
  { id: "cons", label: "Conservative" },
  { id: "base", label: "Base" },
  { id: "opt", label: "Optimistic" },
];

function fmt(n: number) {
  if (Math.abs(n) >= 1000) return "$" + (n / 1000).toFixed(1) + "B";
  return "$" + Math.round(n) + "M";
}

type ThemeColors = {
  accent: string;
  muted: string;
  border: string;
  foreground: string;
  background: string;
};

const FALLBACK_COLORS: ThemeColors = {
  accent: "#D4A574",
  muted: "#8693A0",
  border: "#1E2630",
  foreground: "#E8ECEF",
  background: "#0B0F14",
};

export default function NetflixDashboard() {
  const [scenario, setScenario] = useState<Scenario>("base");
  const [colors, setColors] = useState<ThemeColors>(FALLBACK_COLORS);

  useEffect(() => {
    const compute = () => {
      const s = getComputedStyle(document.documentElement);
      const read = (name: string, fallback: string) =>
        s.getPropertyValue(name).trim() || fallback;
      setColors({
        accent: read("--accent", FALLBACK_COLORS.accent),
        muted: read("--muted", FALLBACK_COLORS.muted),
        border: read("--border", FALLBACK_COLORS.border),
        foreground: read("--foreground", FALLBACK_COLORS.foreground),
        background: read("--background", FALLBACK_COLORS.background),
      });
    };
    compute();
    const observer = new MutationObserver(compute);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const d = data[scenario];

  const chartData: ChartData<"bar"> = useMemo(
    () => ({
      labels: ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"],
      datasets: [
        {
          label: "Investment ($M)",
          data: d.inv,
          backgroundColor: colors.muted,
          borderRadius: 4,
        },
        {
          label: "Revenue ($M)",
          data: d.rev,
          backgroundColor: colors.accent,
          borderRadius: 4,
        },
      ],
    }),
    [d, colors],
  );

  const chartOptions: ChartOptions<"bar"> = useMemo(
    () => ({
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 600, easing: "easeOutCubic" },
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            font: { size: 11 },
            color: colors.foreground,
            padding: 16,
            boxWidth: 10,
            boxHeight: 10,
          },
        },
        tooltip: {
          backgroundColor: colors.foreground,
          titleColor: colors.background,
          bodyColor: colors.background,
          padding: 10,
          callbacks: {
            label: (ctx) => `${ctx.dataset.label}: $${ctx.parsed.y}M`,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: (v) => "$" + v + "M",
            font: { size: 11 },
            color: colors.muted,
          },
          grid: { color: colors.border },
          border: { display: false },
        },
        x: {
          ticks: { font: { size: 11 }, color: colors.muted },
          grid: { display: false },
          border: { display: false },
        },
      },
    }),
    [colors],
  );

  let cum = 0;
  const rows = d.inv.map((inv, i) => {
    const rev = d.rev[i];
    const net = rev - inv;
    cum += net;
    return { year: i + 1, inv, rev, net, cum };
  });

  return (
    <div className="overflow-hidden rounded-md border border-border-strong bg-surface text-foreground">
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border p-5 md:p-6">
        <div>
          <h3 className="font-display text-lg font-normal leading-tight tracking-tight text-foreground md:text-xl">
            Netflix Japan ROI dashboard
          </h3>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            Five-year glocalization strategy projection
          </p>
        </div>
        <div
          role="tablist"
          aria-label="Scenario"
          className="inline-flex rounded-full border border-border bg-background p-1"
        >
          {scenarios.map((s) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={scenario === s.id}
              onClick={() => setScenario(s.id)}
              className={`rounded-full px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                scenario === s.id
                  ? "bg-accent-soft text-accent"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-px bg-border md:grid-cols-4">
        <KPI label="5-year investment" value={fmt(d.totalInv)} />
        <KPI label="5-year revenue" value={fmt(d.totalRev)} accent />
        <KPI label="Net profit" value={"+" + fmt(d.net)} good />
        <KPI label="5-year ROI" value={d.roi + "%"} good />
      </div>

      <div className="grid grid-cols-1 gap-px border-t border-border bg-border sm:grid-cols-3">
        <KPI label="Payback period" value={d.pay} compact />
        <KPI label="Year 1 implementation" value="$78M" compact />
        <KPI label="Year 5 subscribers" value={d.sub} compact />
      </div>

      <div className="border-t border-border p-5 md:p-6">
        <h4 className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
          Year-by-year financial position
        </h4>
        <div className="relative h-72 md:h-80">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>

      <div className="border-t border-border p-5 md:p-6">
        <h4 className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
          Annual breakdown
        </h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                <th className="border-b border-border py-2.5 text-left font-normal">
                  Year
                </th>
                <th className="border-b border-border py-2.5 text-right font-normal">
                  Investment
                </th>
                <th className="border-b border-border py-2.5 text-right font-normal">
                  Revenue
                </th>
                <th className="border-b border-border py-2.5 text-right font-normal">
                  Net
                </th>
                <th className="border-b border-border py-2.5 text-right font-normal">
                  Cumulative
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.year} className={i % 2 === 1 ? "bg-surface-2/50" : ""}>
                  <td className="py-3 pl-1 text-foreground">
                    <span className="font-medium">Year {r.year}</span>
                  </td>
                  <td className="py-3 pr-1 text-right font-mono text-foreground">
                    {fmt(r.inv)}
                  </td>
                  <td className="py-3 pr-1 text-right font-mono text-accent">
                    {fmt(r.rev)}
                  </td>
                  <td
                    className={`py-3 pr-1 text-right font-mono ${
                      r.net >= 0 ? "text-emerald-500" : "text-rose-400"
                    }`}
                  >
                    {(r.net >= 0 ? "+" : "") + fmt(r.net)}
                  </td>
                  <td
                    className={`py-3 pr-1 text-right font-mono ${
                      r.cum >= 0 ? "text-emerald-500" : "text-rose-400"
                    }`}
                  >
                    {(r.cum >= 0 ? "+" : "") + fmt(r.cum)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function KPI({
  label,
  value,
  accent,
  good,
  compact,
}: {
  label: string;
  value: string;
  accent?: boolean;
  good?: boolean;
  compact?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2 bg-surface p-5 md:p-6">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
        {label}
      </span>
      <span
        className={`font-mono ${
          compact ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
        } ${good ? "text-emerald-500" : accent ? "text-accent" : "text-foreground"}`}
      >
        {value}
      </span>
    </div>
  );
}
