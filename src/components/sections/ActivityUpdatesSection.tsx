import type { ActivityUpdate } from "../../types/api";
import { projectPlaceholder } from "../../utils/imagePlaceholders";
import { Container } from "../ui/Container";
import { SafeImage } from "../ui/SafeImage";
import { SectionTitle } from "../ui/SectionTitle";

interface ActivityUpdatesSectionProps {
  updates: ActivityUpdate[];
}

const toReadableDate = (isoValue: string): string => {
  const date = new Date(isoValue);
  if (Number.isNaN(date.getTime())) {
    return "Unknown date";
  }

  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
};

const ActivityUpdatesSection = ({ updates }: ActivityUpdatesSectionProps) => {
  return (
    <section className="anime-rise relative py-8 md:py-12">
      <span
        className="sparkle-slow pointer-events-none absolute left-[8%] top-4 text-xl text-amber-400/40"
        aria-hidden="true"
      >
        ★
      </span>
      <span
        className="glow-pulse pointer-events-none absolute right-[6%] bottom-8 h-20 w-20 rounded-full bg-amber-500/15 blur-xl"
        aria-hidden="true"
      />
      <Container>
        <SectionTitle
          eyebrow="Activity"
          title="Latest Updates"
          description="Dokumentasi progres terbaru langsung dari API activity updates."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {updates.map((update, index) => (
            <article
              key={`${update.id}-${update.createdAt}`}
              className="glass-card-strong corner-deco anime-rise overflow-hidden rounded-2xl"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="relative bg-amber-950/40">
                {update.mediaType === "video" ? (
                  <video
                    className="h-44 w-full object-cover"
                    src={update.mediaUrl}
                    controls
                    preload="metadata"
                  />
                ) : (
                  <SafeImage
                    src={update.mediaUrl}
                    fallbackSrc={projectPlaceholder}
                    alt={update.title}
                    loading="lazy"
                    className="h-44 w-full object-cover"
                  />
                )}
              </div>

              <div className="space-y-2 p-4">
                <h3 className="text-2xl font-bold leading-none text-amber-100">
                  {update.title}
                </h3>
                <p className="line-clamp-3 text-sm text-amber-200/65">
                  {update.caption}
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.06em] text-amber-300/70">
                  {toReadableDate(update.activityTime)}
                </p>
                <p className="text-xs text-amber-300/60">
                  Uploaded by {update.uploadedBy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ActivityUpdatesSection;
