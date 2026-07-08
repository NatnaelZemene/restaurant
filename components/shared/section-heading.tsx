import { Reveal } from "./reveal";
import { ArchDivider } from "./arch-divider";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  withDivider?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  withDivider = true,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "text-center" : "text-left"}>
      <Reveal>
        <p className="eyebrow mb-4">{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="heading-display text-3xl md:text-5xl font-medium leading-[1.1]">
          {title}
        </h2>
      </Reveal>
      {withDivider && (
        <Reveal delay={0.14}>
          <ArchDivider className="mt-6" />
        </Reveal>
      )}
      {description && (
        <Reveal delay={0.18}>
          <p
            className={
              "mt-6 text-white/60 text-base md:text-lg leading-relaxed font-body " +
              (isCenter ? "mx-auto max-w-2xl" : "max-w-2xl")
            }
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
