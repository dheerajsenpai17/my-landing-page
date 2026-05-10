type Item = { text: string; italic?: boolean };

const items: Item[] = [
  { text: "I-O Psychology" },
  { text: "behavior", italic: true },
  { text: "Mixed-Methods Research" },
  { text: "$648K+ projected savings" },
  { text: "Python" },
  { text: "SPSS" },
  { text: "Tableau" },
  { text: "AI-augmented", italic: true },
  { text: "Consumer Behavior" },
  { text: "evidence", italic: true },
  { text: "Workforce Analytics" },
  { text: "Market Analysis" },
];

function Token({ item }: { item: Item }) {
  if (item.italic) {
    return (
      <span className="font-display italic font-normal text-accent">
        {item.text}
      </span>
    );
  }
  return (
    <span className="font-sans uppercase tracking-[0.14em] text-foreground">
      {item.text}
    </span>
  );
}

function Row({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-12 pr-12"
      aria-hidden={ariaHidden ? true : undefined}
    >
      {items.map((item, i) => (
        <li key={i} className="flex items-center gap-12">
          <Token item={item} />
          <span aria-hidden="true" className="text-border-strong">
            ●
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function Marquee() {
  return (
    <section
      aria-label="Capabilities and skills marquee"
      className="group/marquee relative overflow-hidden border-y border-border bg-surface-2/40 py-7 text-[clamp(1.25rem,2.6vw,2rem)]"
    >
      <div className="dk-marquee flex w-max gap-12 group-hover/marquee:[animation-play-state:paused]">
        <Row />
        <Row ariaHidden />
      </div>
    </section>
  );
}
