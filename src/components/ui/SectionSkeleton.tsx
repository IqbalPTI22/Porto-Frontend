import { Container } from "./Container";

const SkeletonLine = ({ className }: { className: string }) => {
  return (
    <div
      className={`animate-pulse rounded-full bg-amber-800/30 ${className}`}
    />
  );
};

export const HeroSkeleton = () => {
  return (
    <section className="py-10 md:py-16">
      <Container>
        <div className="grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <SkeletonLine className="h-3 w-28" />
            <SkeletonLine className="h-14 w-full max-w-lg" />
            <SkeletonLine className="h-5 w-full max-w-xl" />
          </div>
          <div className="justify-self-center lg:justify-self-end">
            <div className="h-48 w-48 animate-pulse rounded-full bg-amber-800/25 sm:h-60 sm:w-60" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export const PanelSkeleton = () => {
  return (
    <section className="py-8 md:py-12">
      <Container>
        <div className="glass-card rounded-3xl p-6 md:p-8">
          <div className="space-y-4">
            <SkeletonLine className="h-3 w-20" />
            <SkeletonLine className="h-10 w-56" />
            <SkeletonLine className="h-4 w-full max-w-3xl" />
            <SkeletonLine className="h-4 w-full max-w-2xl" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export const ChipsSkeleton = () => {
  return (
    <section className="py-8 md:py-12">
      <Container>
        <div className="mb-6 space-y-4 md:mb-8">
          <SkeletonLine className="h-3 w-20" />
          <SkeletonLine className="h-10 w-56" />
        </div>
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="h-9 w-24 animate-pulse rounded-full bg-amber-700/20"
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export const ProjectsSkeleton = () => {
  return (
    <section className="py-8 md:py-12">
      <Container>
        <div className="mb-6 space-y-4 md:mb-8">
          <SkeletonLine className="h-3 w-24" />
          <SkeletonLine className="h-10 w-64" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-2xl bg-amber-950/30 shadow-sm"
            >
              <div className="h-44 animate-pulse bg-amber-800/20" />
              <div className="space-y-3 p-4">
                <SkeletonLine className="h-6 w-3/4" />
                <SkeletonLine className="h-4 w-full" />
                <SkeletonLine className="h-4 w-5/6" />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
