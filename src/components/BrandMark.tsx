export function BrandMark({
  size = 34,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="avancoGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE047" />
          <stop offset="42%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>
      <rect width="512" height="512" rx="130" fill="#080C14" />
      <rect
        x="12"
        y="12"
        width="488"
        height="488"
        rx="118"
        fill="none"
        stroke="#F59E0B"
        strokeOpacity="0.45"
        strokeWidth="12"
      />
      <path
        d="M120 310 L256 174 L392 310"
        fill="none"
        stroke="url(#avancoGoldGrad)"
        strokeWidth="54"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M154 396 L256 294 L358 396"
        fill="none"
        stroke="url(#avancoGoldGrad)"
        strokeWidth="46"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.55"
      />
      <path
        d="M256 70 C256 115 285 130 310 130 C285 130 256 145 256 190 C256 145 227 130 202 130 C227 130 256 115 256 70 Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}
