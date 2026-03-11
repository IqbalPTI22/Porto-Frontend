import type { Project } from "../../types/api";
import { Container } from "../ui/Container";
import { ProjectCard } from "../ui/ProjectCard";
import { SectionTitle } from "../ui/SectionTitle";

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <section className="anime-rise relative py-8 md:py-12">
      <span
        className="glow-pulse pointer-events-none absolute left-[3%] top-[40%] h-24 w-24 rounded-full bg-amber-500/12 blur-2xl"
        aria-hidden="true"
      />
      <span
        className="sparkle pointer-events-none absolute right-[8%] top-6 text-xl text-amber-400/40"
        aria-hidden="true"
      >
        ✧
      </span>
      <Container>
        <SectionTitle
          eyebrow="Projects"
          title="Selected Work"
          description="A mix of product engineering, frontend architecture, and API integration work."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="anime-rise"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProjectsSection;
