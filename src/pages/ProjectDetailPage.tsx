import { Link, useParams } from "react-router-dom";
import { Container } from "../components/ui/Container";
import { SafeImage } from "../components/ui/SafeImage";
import { StatusMessage } from "../components/ui/StatusMessage";
import { useProjectDetail } from "../hooks/useProjectDetail";
import { projectPlaceholder } from "../utils/imagePlaceholders";

const ProjectDetailPage = () => {
  const params = useParams();
  const projectId = Number(params.id);
  const parsedProjectId =
    Number.isFinite(projectId) && projectId > 0 ? projectId : null;

  const {
    data: project,
    isLoading,
    errorMessage,
    refetch,
  } = useProjectDetail(parsedProjectId);

  if (parsedProjectId === null) {
    return (
      <main className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6">
        <StatusMessage
          title="Invalid project"
          message="Project id is not valid."
        />
      </main>
    );
  }

  if (isLoading) {
    return (
      <main className="py-10 md:py-16">
        <Container>
          <div className="space-y-5">
            <div className="h-4 w-24 animate-pulse rounded-full bg-amber-800/30" />
            <div className="h-14 w-2/3 animate-pulse rounded-full bg-amber-800/25" />
            <div className="h-80 w-full animate-pulse rounded-3xl bg-amber-800/20" />
          </div>
        </Container>
      </main>
    );
  }

  if (errorMessage) {
    return (
      <main className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6">
        <StatusMessage
          title="Failed to load project"
          message={errorMessage}
          actionLabel="Try again"
          onAction={refetch}
        />
      </main>
    );
  }

  if (!project) {
    return (
      <main className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6">
        <StatusMessage
          title="Project not found"
          message="No data returned for this project."
        />
      </main>
    );
  }

  const hasGithub = Boolean(project.githubUrl);
  const hasDemo = Boolean(project.demoUrl);

  return (
    <main className="anime-pop relative py-10 md:py-16">
      <span
        className="glow-pulse pointer-events-none absolute left-[5%] top-[30%] h-28 w-28 rounded-full bg-amber-500/15 blur-2xl"
        aria-hidden="true"
      />
      <span
        className="sparkle pointer-events-none absolute right-[10%] top-10 text-xl text-amber-400/40"
        aria-hidden="true"
      >
        ✧
      </span>
      <Container>
        <Link
          to="/"
          className="sticker mb-4 inline-flex border-amber-500/30 bg-amber-500/10 text-amber-300"
        >
          ← Back to Portfolio
        </Link>

        <div className="glass-card-strong corner-deco relative rounded-3xl p-5 md:p-8">
          <span className="deco-dots -right-2 -top-2" aria-hidden="true" />
          <span
            className="sparkle pointer-events-none absolute left-4 top-4 text-lg text-amber-400/50"
            aria-hidden="true"
          >
            ★
          </span>

          <h1 className="text-4xl font-bold leading-none text-amber-100 drop-shadow-[0_2px_12px_rgba(255,184,54,0.25)] md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-amber-200/60 md:text-base">
            {project.description}
          </p>

          <div className="film-frame mt-6">
            <SafeImage
              src={project.imageUrl}
              fallbackSrc={projectPlaceholder}
              alt={project.title}
              className="h-auto max-h-[520px] w-full object-cover"
              loading="eager"
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
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
                ▶ Live Demo
              </a>
            ) : null}
          </div>
        </div>
      </Container>
    </main>
  );
};

export default ProjectDetailPage;
