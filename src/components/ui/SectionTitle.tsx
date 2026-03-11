interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export const SectionTitle = ({
  eyebrow,
  title,
  description,
}: SectionTitleProps) => {
  return (
    <header className="relative mb-6 md:mb-8">
      <span className="sticker mb-2 inline-flex">
        <span
          className="sparkle mr-1 text-amber-400"
          style={{ animationDelay: "0.3s" }}
        >
          ✦
        </span>
        {eyebrow}
      </span>
      <h2 className="text-4xl font-bold leading-none text-amber-100 drop-shadow-[0_2px_12px_rgba(255,184,54,0.25)] md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-2 max-w-2xl text-sm font-medium text-amber-200/60 md:text-base">
          {description}
        </p>
      ) : null}
      <span
        className="sparkle-slow pointer-events-none absolute -right-3 -top-3 text-lg text-amber-400/60"
        aria-hidden="true"
      >
        ★
      </span>
    </header>
  );
};
