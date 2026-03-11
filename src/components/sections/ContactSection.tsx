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
            description="Reach out through email or connect on social platforms."
          />

          <a
            href={`mailto:${profile.email}`}
            className="sticker inline-flex border-amber-500/40 bg-amber-500/20 text-amber-200 shadow-lg transition hover:bg-amber-500/30"
          >
            ✉ {profile.email}
          </a>

          <div className="mt-5 flex flex-wrap gap-2">
            {profile.socialLinks.length > 0 ? (
              profile.socialLinks.map((socialLink, i) => (
                <a
                  key={socialLink.platform}
                  href={socialLink.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`sticker ${
                    [
                      "border-amber-500/25 bg-amber-500/10 text-amber-300",
                      "border-orange-500/25 bg-orange-500/10 text-orange-300",
                      "border-yellow-600/25 bg-yellow-600/10 text-yellow-300",
                      "border-amber-400/25 bg-amber-400/10 text-amber-200",
                    ][i % 4]
                  }`}
                >
                  {socialLink.platform}
                </a>
              ))
            ) : (
              <p className="text-xs text-amber-300/50">
                Social links belum tersedia dari API.
              </p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
