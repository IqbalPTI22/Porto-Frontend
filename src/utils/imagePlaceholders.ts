const encodeSvg = (svg: string): string => {
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};

export const avatarPlaceholder = encodeSvg(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 240'>
    <defs>
      <linearGradient id='g' x1='0%' y1='0%' x2='100%' y2='100%'>
        <stop offset='0%' stop-color='#67e8f9' />
        <stop offset='100%' stop-color='#0e7490' />
      </linearGradient>
    </defs>
    <rect width='240' height='240' fill='url(#g)' />
    <circle cx='120' cy='92' r='42' fill='#ecfeff' fill-opacity='0.95' />
    <path d='M52 214c8-36 34-54 68-54s60 18 68 54z' fill='#ecfeff' fill-opacity='0.95' />
  </svg>`,
);

export const projectPlaceholder = encodeSvg(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 960 540'>
    <defs>
      <linearGradient id='p' x1='0%' y1='0%' x2='100%' y2='100%'>
        <stop offset='0%' stop-color='#a5f3fc' />
        <stop offset='100%' stop-color='#155e75' />
      </linearGradient>
    </defs>
    <rect width='960' height='540' fill='url(#p)' />
    <rect x='92' y='112' width='776' height='316' rx='20' fill='#ecfeff' fill-opacity='0.8' />
    <rect x='132' y='152' width='516' height='36' rx='12' fill='#0e7490' fill-opacity='0.85' />
    <rect x='132' y='206' width='696' height='24' rx='10' fill='#0f172a' fill-opacity='0.35' />
    <rect x='132' y='244' width='620' height='24' rx='10' fill='#0f172a' fill-opacity='0.25' />
  </svg>`,
);
