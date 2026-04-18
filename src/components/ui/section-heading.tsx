interface SectionHeadingProps {
  title: string;
  eyebrow?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  title,
  eyebrow,
  align = "left",
  className,
}: SectionHeadingProps) {
  const alignClass =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div
      className={`flex flex-col gap-3 ${alignClass} ${className ?? ""}`.trim()}
    >
      {eyebrow ? (
        <p className="text-[11px] font-bold uppercase tracking-[0.32em] text-[#c6ff00] sm:text-xs">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
    </div>
  );
}
