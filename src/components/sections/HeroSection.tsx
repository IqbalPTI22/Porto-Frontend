import type { Profile } from "../../types/api";
import { avatarPlaceholder } from "../../utils/imagePlaceholders";
import { Container } from "../ui/Container";
import { SafeImage } from "../ui/SafeImage";

interface HeroSectionProps {
  profile: Profile;
}

const HeroSection = ({ profile }: HeroSectionProps) => {
  return (
    <section className="anime-pop relative py-10 md:py-16">
      {/* warm ambient glows */}
      <span
        className="glow-pulse pointer-events-none absolute left-4 top-6 h-28 w-28 rounded-full bg-amber-500/20 blur-2xl"
        aria-hidden="true"
      />
      <span
        className="glow-pulse pointer-events-none absolute right-10 top-16 h-20 w-20 rounded-full bg-orange-400/15 blur-2xl"
        aria-hidden="true"
        style={{ animationDelay: "1.2s" }}
      />
      <span
        className="sparkle pointer-events-none absolute left-[15%] top-[70%] text-2xl text-amber-400/50"
        aria-hidden="true"
      >
        ✦
      </span>
      <span
        className="sparkle-slow pointer-events-none absolute right-[20%] top-[25%] text-lg text-amber-300/40"
        aria-hidden="true"
      >
        ★
      </span>
      <span
        className="sparkle pointer-events-none absolute left-[55%] top-[12%] text-sm text-orange-300/40"
        aria-hidden="true"
      >
        ✧
      </span>
      <span className="deco-dots left-[72%] top-[65%]" aria-hidden="true" />

      <Container>
        <div className="relative z-10 grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-4">
          {/* text block */}
          <div className="relative">
            <span className="sticker mb-3 inline-flex">
              <span
                className="sparkle inline-block text-amber-400"
                style={{ animationDelay: "0.5s" }}
              >
                ★
              </span>{" "}
              Portfolio
            </span>
            <h1 className="text-5xl font-bold leading-[0.92] text-amber-100 drop-shadow-[0_2px_16px_rgba(255,184,54,0.3)] sm:text-6xl md:text-7xl">
              {profile.fullName}
            </h1>
            <p className="mt-3 max-w-xl text-base font-medium text-amber-200/60 md:text-lg">
              {profile.headline}
            </p>
            {/* decorative persona chat bubble */}
            <div className="anime-wiggle mt-4 inline-block rounded-2xl rounded-bl-sm border border-amber-500/25 bg-amber-900/30 px-4 py-2 text-xs font-bold text-amber-300 shadow-sm backdrop-blur-sm">
              Welcome to my world~ ✦
            </div>
          </div>

          {/* avatar block with ornate golden frame */}
          <div className="relative justify-self-center lg:justify-self-end">
            {/* background glow ring */}
            <span
              className="glow-pulse absolute inset-[-18px] -z-10 rounded-full bg-gradient-to-br from-amber-500/30 via-orange-400/20 to-yellow-300/15 blur-xl"
              aria-hidden="true"
            />
            {/* golden ornate-border avatar */}
            <div className="ornate-border anime-float rounded-full p-[5px]">
              <SafeImage
                src={profile.avatarUrl}
                fallbackSrc={avatarPlaceholder}
                alt={profile.fullName}
                className="h-48 w-48 rounded-full border-[3px] border-amber-900/60 object-cover shadow-lg sm:h-60 sm:w-60"
                loading="eager"
              />
            </div>
            {/* floating warm accent badges */}
            <span
              className="sparkle absolute -right-2 -top-2 flex h-9 w-9 items-center justify-center rounded-full bg-amber-500 text-sm text-amber-950 shadow-md"
              aria-hidden="true"
            >
              ★
            </span>
            <span
              className="sparkle-slow absolute -bottom-1 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-xs text-white shadow-md"
              style={{ animationDelay: "0.8s" }}
              aria-hidden="true"
            >
              ✦
            </span>
            <span
              className="anime-wiggle absolute -right-4 bottom-8 flex h-7 w-7 items-center justify-center rounded-full bg-yellow-600 text-xs text-white shadow"
              style={{ animationDelay: "1.4s" }}
              aria-hidden="true"
            >
              ◆
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
