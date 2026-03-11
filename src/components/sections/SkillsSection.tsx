import type { Skill } from "../../types/api";
import { Container } from "../ui/Container";
import { SectionTitle } from "../ui/SectionTitle";

interface SkillsSectionProps {
  skills: Skill[];
}

const warmColors = [
  "border-amber-500/30 bg-amber-500/10 text-amber-300",
  "border-orange-500/30 bg-orange-500/10 text-orange-300",
  "border-yellow-600/30 bg-yellow-600/10 text-yellow-300",
  "border-amber-400/30 bg-amber-400/10 text-amber-200",
  "border-orange-400/30 bg-orange-400/10 text-orange-200",
  "border-yellow-500/30 bg-yellow-500/10 text-yellow-200",
];

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  return (
    <section className="anime-rise relative py-8 md:py-12">
      <span
        className="sparkle pointer-events-none absolute right-[12%] top-2 text-xl text-amber-400/40"
        aria-hidden="true"
      >
        ★
      </span>
      <span
        className="sparkle-slow pointer-events-none absolute left-[6%] bottom-6 text-lg text-orange-400/30"
        aria-hidden="true"
      >
        ✦
      </span>
      <Container>
        <SectionTitle
          eyebrow="Skills"
          title="Tools I Use"
          description="A focused stack for shipping maintainable products with great performance."
        />
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <span
              key={skill.id}
              className={`sticker ${warmColors[i % warmColors.length]}`}
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              {skill.name}
              {skill.level ? (
                <em className="ml-1 not-italic opacity-70">{skill.level}</em>
              ) : null}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SkillsSection;
