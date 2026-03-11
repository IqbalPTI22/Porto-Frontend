import type { Profile } from "../../types/api";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";

interface AboutSectionProps {
  profile: Profile;
}

const AboutSection = ({ profile }: AboutSectionProps) => {
  return (
    <section className="anime-rise relative py-8 md:py-12">
      <span
        className="sparkle pointer-events-none absolute left-[8%] top-4 text-xl text-amber-400/40"
        aria-hidden="true"
      >
        ✧
      </span>
      <span
        className="glow-pulse pointer-events-none absolute right-[5%] top-[50%] h-16 w-16 rounded-full bg-amber-500/15 blur-xl"
        aria-hidden="true"
      />
      <Container>
        <div className="glass-card-strong corner-deco relative rounded-3xl p-6 md:p-8">
          <span className="deco-dots -right-2 -top-2" aria-hidden="true" />
          <SectionTitle eyebrow="About" title="Who I Am" />
          <p className="max-w-3xl text-sm leading-relaxed text-amber-200/60 md:text-base">
            {profile.bio}
          </p>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
