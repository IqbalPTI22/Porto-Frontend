interface StatusMessageProps {
  title: string;
  message: string;
  actionLabel?: string;
  onAction?: () => void;
}

export const StatusMessage = ({
  title,
  message,
  actionLabel,
  onAction,
}: StatusMessageProps) => {
  return (
    <div className="glass-card-strong corner-deco relative w-full rounded-2xl p-6 text-center">
      <span
        className="sparkle pointer-events-none absolute -right-2 -top-2 text-lg text-amber-400/70"
        aria-hidden="true"
      >
        ✦
      </span>
      <h3 className="text-3xl font-bold leading-none text-amber-100">
        {title}
      </h3>
      <p className="mt-2 text-sm text-amber-200/60">{message}</p>
      {actionLabel && onAction ? (
        <button
          type="button"
          onClick={onAction}
          className="sticker mt-5 border-amber-500/40 bg-amber-500/20 text-amber-200 transition hover:bg-amber-500/30"
        >
          {actionLabel}
        </button>
      ) : null}
    </div>
  );
};
