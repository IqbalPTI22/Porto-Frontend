import { lazy, Suspense } from "react";
import { Container } from "../components/ui/Container";
import {
  ChipsSkeleton,
  HeroSkeleton,
  PanelSkeleton,
  ProjectsSkeleton,
} from "../components/ui/SectionSkeleton";
import { StatusMessage } from "../components/ui/StatusMessage";
import { useProfile } from "../hooks/useProfile";
import { useProjects } from "../hooks/useProjects";
import { useSkills } from "../hooks/useSkills";

const HeroSection = lazy(() => import("../components/sections/HeroSection"));
const AboutSection = lazy(() => import("../components/sections/AboutSection"));
const SkillsSection = lazy(
  () => import("../components/sections/SkillsSection"),
);
const ProjectsSection = lazy(
  () => import("../components/sections/ProjectsSection"),
);
const ContactSection = lazy(
  () => import("../components/sections/ContactSection"),
);

const HomePage = () => {
  const {
    data: profile,
    isLoading: isProfileLoading,
    errorMessage: profileError,
    refetch: refetchProfile,
  } = useProfile();

  const {
    data: projects,
    isLoading: isProjectsLoading,
    errorMessage: projectsError,
    refetch: refetchProjects,
  } = useProjects();

  const {
    data: skills,
    isLoading: isSkillsLoading,
    errorMessage: skillsError,
    refetch: refetchSkills,
  } = useSkills();

  return (
    <main>
      <Suspense fallback={<HeroSkeleton />}>
        {isProfileLoading ? <HeroSkeleton /> : null}
        {!isProfileLoading && profileError ? (
          <section className="py-16">
            <Container>
              <StatusMessage
                title="Unable to load hero"
                message={profileError}
                actionLabel="Retry"
                onAction={refetchProfile}
              />
            </Container>
          </section>
        ) : null}
        {!isProfileLoading && !profileError && profile ? (
          <HeroSection profile={profile} />
        ) : null}
      </Suspense>

      <Suspense fallback={<PanelSkeleton />}>
        {isProfileLoading ? <PanelSkeleton /> : null}
        {!isProfileLoading && profileError ? (
          <section className="py-14 md:py-16">
            <Container>
              <StatusMessage
                title="Unable to load about"
                message={profileError}
                actionLabel="Retry"
                onAction={refetchProfile}
              />
            </Container>
          </section>
        ) : null}
        {!isProfileLoading && !profileError && profile ? (
          <AboutSection profile={profile} />
        ) : null}
      </Suspense>

      <Suspense fallback={<ChipsSkeleton />}>
        {isSkillsLoading ? <ChipsSkeleton /> : null}
        {!isSkillsLoading && skillsError ? (
          <section className="py-14 md:py-16">
            <Container>
              <StatusMessage
                title="Unable to load skills"
                message={skillsError}
                actionLabel="Retry"
                onAction={refetchSkills}
              />
            </Container>
          </section>
        ) : null}
        {!isSkillsLoading && !skillsError && skills ? (
          <SkillsSection skills={skills} />
        ) : null}
      </Suspense>

      <Suspense fallback={<ProjectsSkeleton />}>
        {isProjectsLoading ? <ProjectsSkeleton /> : null}
        {!isProjectsLoading && projectsError ? (
          <section className="py-14 md:py-16">
            <Container>
              <StatusMessage
                title="Unable to load projects"
                message={projectsError}
                actionLabel="Retry"
                onAction={refetchProjects}
              />
            </Container>
          </section>
        ) : null}
        {!isProjectsLoading && !projectsError && projects ? (
          <ProjectsSection projects={projects} />
        ) : null}
      </Suspense>

      <Suspense fallback={<PanelSkeleton />}>
        {isProfileLoading ? <PanelSkeleton /> : null}
        {!isProfileLoading && profileError ? (
          <section className="py-14 md:py-16">
            <Container>
              <StatusMessage
                title="Unable to load contact"
                message={profileError}
                actionLabel="Retry"
                onAction={refetchProfile}
              />
            </Container>
          </section>
        ) : null}
        {!isProfileLoading && !profileError && profile ? (
          <ContactSection profile={profile} />
        ) : null}
      </Suspense>
    </main>
  );
};

export default HomePage;
