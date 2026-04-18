interface MarqueeProps {
  message: string;
}

export default function Marquee({ message }: MarqueeProps) {
  const items = Array.from({ length: 6 }, () => message);

  return (
    <div className="flex h-full min-w-max items-center gap-10 px-4 text-[10px] font-bold uppercase tracking-[0.28em] text-gray-300 sm:px-8 sm:text-xs">
      <div className="marquee-track flex items-center gap-10 whitespace-nowrap">
        {items.map((item, index) => (
          <span key={`first-${index}`}>{item}</span>
        ))}
      </div>
      <div
        className="marquee-track flex items-center gap-10 whitespace-nowrap"
        aria-hidden="true"
      >
        {items.map((item, index) => (
          <span key={`second-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}
