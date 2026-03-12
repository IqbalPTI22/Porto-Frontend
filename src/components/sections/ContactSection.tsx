import type { Profile } from "../../types/api";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";

interface ContactSectionProps {
  profile: Profile;
}

const ContactSection = ({ profile }: ContactSectionProps) => {
  return (
    <section className="anime-rise relative py-8 pb-16 md:py-12 md:pb-20">
      <span
        className="sparkle pointer-events-none absolute left-[10%] top-4 text-xl text-amber-400/40"
        aria-hidden="true"
      >
        ★
      </span>
      <span
        className="glow-pulse pointer-events-none absolute right-[6%] bottom-8 h-20 w-20 rounded-full bg-amber-500/15 blur-xl"
        aria-hidden="true"
      />
      <Container>
        <div className="glass-card-strong corner-deco relative rounded-3xl p-6 md:p-8">
          <span className="deco-dots -left-2 -top-2" aria-hidden="true" />
          <SectionTitle
            eyebrow="Contact"
            title="Let's Build Something"
            description="Reach out directly via email or find me at the location below."
          />

          <a
            href={`mailto:${profile.email}`}
            className="sticker inline-flex border-amber-500/40 bg-amber-500/20 text-amber-200 shadow-lg transition hover:bg-amber-500/30"
          >
            ✉ {profile.email}
          </a>

          {profile.location ? (
            <p className="mt-4 text-sm text-amber-300/65">
              📍 {profile.location}
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
