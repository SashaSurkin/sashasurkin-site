type IconProps = { size?: number };

function base(size: number) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
}

export function MapPinIcon({ size = 16 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
    </svg>
  );
}

export function CompassIcon({ size = 15 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M8 16l2 -6l6 -2l-2 6z" />
      <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" />
    </svg>
  );
}

export function GlobeIcon({ size = 16 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
      <path d="M3.6 9h16.8" />
      <path d="M3.6 15h16.8" />
      <path d="M11.5 3a17 17 0 0 0 0 18" />
      <path d="M12.5 3a17 17 0 0 1 0 18" />
    </svg>
  );
}

export function ChevronLeftIcon({ size = 16 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M15 6l-6 6l6 6" />
    </svg>
  );
}

export function ChevronRightIcon({ size = 16 }: IconProps) {
  return (
    <svg {...base(size)}>
      <path d="M9 6l6 6l-6 6" />
    </svg>
  );
}
