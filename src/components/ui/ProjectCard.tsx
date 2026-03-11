import { memo } from "react";
import { Link } from "react-router-dom";
import type { Project } from "../../types/api";
import { projectPlaceholder } from "../../utils/imagePlaceholders";
import { SafeImage } from "./SafeImage";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = memo(({ project }: ProjectCardProps) => {
  const hasGithub = Boolean(project.githubUrl);
  const hasDemo = Boolean(project.demoUrl);

  return (
    <article className="group ornate-border relative overflow-hidden rounded-2xl bg-amber-950/50 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* decorative corner sparkle */}
      <span
        className="sparkle pointer-events-none absolute right-2 top-2 z-20 text-xl text-amber-400 drop-shadow"
        aria-hidden="true"
      >
        ✧
      </span>

      <div className="relative overflow-hidden">
        <SafeImage
          src={project.imageUrl}
          fallbackSrc={projectPlaceholder}
          alt={project.title}
          loading="lazy"
          className="h-44 w-full object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-amber-950/60 to-transparent" />
      </div>

      <div className="relative p-4">
        <Link
          to={`/projects/${project.id}`}
          className="text-2xl font-bold leading-none text-amber-100 transition hover:text-amber-400"
        >
          {project.title}
        </Link>
        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-amber-200/55">
          {project.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {hasGithub ? (
            <a
              href={project.githubUrl as string}
              target="_blank"
              rel="noreferrer"
              className="sticker border-amber-500/25 bg-amber-500/10 text-amber-300"
            >
              GitHub
            </a>
          ) : null}
          {hasDemo ? (
            <a
              href={project.demoUrl as string}
              target="_blank"
              rel="noreferrer"
              className="sticker border-amber-500/40 bg-amber-500/20 text-amber-200"
            >
              ▶ Live
            </a>
          ) : null}
          <Link
            to={`/projects/${project.id}`}
            className="sticker border-orange-500/25 bg-orange-500/10 text-orange-300"
          >
            Detail →
          </Link>
        </div>
      </div>
    </article>
  );
});

ProjectCard.displayName = "ProjectCard";
