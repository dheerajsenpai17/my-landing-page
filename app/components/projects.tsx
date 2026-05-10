import CaseNetflix from "./projects/case-netflix";
import CaseNissan from "./projects/case-nissan";
import CaseSafran from "./projects/case-safran";
import SectionDivider from "./section-divider";
import SectionHeading from "./section-heading";

export default function Projects() {
  return (
    <section id="projects" className="relative">
      <SectionDivider />
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <SectionHeading
          index="04"
          eyebrow="Selected work"
          heading="Selected *work*"
          className="max-w-4xl"
        />
        <div className="mt-12 flex flex-col gap-20 md:mt-16 md:gap-28">
          <CaseNetflix />
          <CaseSafran />
          <CaseNissan />
        </div>
      </div>
    </section>
  );
}
