import { useEffect, useMemo, useState } from "react";

interface SafeImageProps {
  src?: string | null;
  alt: string;
  fallbackSrc: string;
  className?: string;
  loading?: "eager" | "lazy";
}

export const SafeImage = ({
  src,
  alt,
  fallbackSrc,
  className,
  loading = "lazy",
}: SafeImageProps) => {
  const safeSource = useMemo(
    () => (src && src.trim().length > 0 ? src : fallbackSrc),
    [fallbackSrc, src],
  );
  const [currentSource, setCurrentSource] = useState<string>(safeSource);

  useEffect(() => {
    setCurrentSource(safeSource);
  }, [safeSource]);

  return (
    <img
      src={currentSource}
      alt={alt}
      loading={loading}
      className={className}
      onError={() => {
        if (currentSource !== fallbackSrc) {
          setCurrentSource(fallbackSrc);
        }
      }}
    />
  );
};
