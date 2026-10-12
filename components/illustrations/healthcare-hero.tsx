export function HealthcareHeroIllustration({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 560 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
        role="img"
        aria-label="Medical billing dashboard showing a claims queue, posted payments, and days in accounts receivable"
      >
        <defs>
          <linearGradient id="billBars" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#16324F" />
            <stop offset="100%" stopColor="#1F6B4A" />
          </linearGradient>
          <filter id="billSoft" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="16"
              stdDeviation="16"
              floodColor="#16324F"
              floodOpacity="0.14"
            />
          </filter>
        </defs>

        <circle cx="300" cy="250" r="210" fill="#16324F" fillOpacity="0.05" />
        <circle cx="450" cy="88" r="42" fill="#1F6B4A" fillOpacity="0.12" />
        <circle cx="96" cy="400" r="34" fill="#8C6A32" fillOpacity="0.14" />

        <g filter="url(#billSoft)">
          <rect
            x="78"
            y="78"
            width="318"
            height="332"
            rx="32"
            fill="white"
            stroke="#E6E0D4"
          />
          <text
            x="102"
            y="116"
            fill="#16324F"
            fontSize="16"
            fontFamily="Georgia, serif"
            fontWeight="600"
          >
            Claims queue
          </text>
          <text
            x="102"
            y="138"
            fill="#44403C"
            fontSize="11"
            fontFamily="system-ui, sans-serif"
          >
            This week · 42 claims
          </text>

          <rect x="102" y="160" width="270" height="36" rx="8" fill="#F7F4EE" />
          <circle cx="122" cy="178" r="5" fill="#1F6B4A" />
          <text
            x="136"
            y="182"
            fill="#1C1917"
            fontSize="12"
            fontFamily="system-ui, sans-serif"
            fontWeight="600"
          >
            #10482
          </text>
          <text
            x="196"
            y="182"
            fill="#1F6B4A"
            fontSize="12"
            fontFamily="system-ui, sans-serif"
            fontWeight="600"
          >
            Paid
          </text>
          <text
            x="312"
            y="182"
            fill="#16324F"
            fontSize="12"
            fontFamily="Georgia, serif"
          >
            $1,240
          </text>

          <rect x="102" y="204" width="270" height="36" rx="8" fill="#F7F4EE" />
          <circle cx="122" cy="222" r="5" fill="#8C6A32" className="hero-pulse" />
          <text
            x="136"
            y="226"
            fill="#1C1917"
            fontSize="12"
            fontFamily="system-ui, sans-serif"
            fontWeight="600"
          >
            #10491
          </text>
          <text
            x="196"
            y="226"
            fill="#8C6A32"
            fontSize="12"
            fontFamily="system-ui, sans-serif"
            fontWeight="600"
          >
            In review
          </text>
          <text
            x="322"
            y="226"
            fill="#16324F"
            fontSize="12"
            fontFamily="Georgia, serif"
          >
            $860
          </text>

          <rect x="102" y="248" width="270" height="36" rx="8" fill="#F7F4EE" />
          <circle cx="122" cy="266" r="5" fill="#16324F" />
          <text
            x="136"
            y="270"
            fill="#1C1917"
            fontSize="12"
            fontFamily="system-ui, sans-serif"
            fontWeight="600"
          >
            #10503
          </text>
          <text
            x="196"
            y="270"
            fill="#16324F"
            fontSize="12"
            fontFamily="system-ui, sans-serif"
            fontWeight="600"
          >
            Appealed
          </text>
          <text
            x="322"
            y="270"
            fill="#16324F"
            fontSize="12"
            fontFamily="Georgia, serif"
          >
            $420
          </text>

          <text
            x="102"
            y="312"
            fill="#44403C"
            fontSize="11"
            fontFamily="system-ui, sans-serif"
          >
            Collections, last 4 weeks
          </text>
          <g>
            <rect
              className="hero-bar"
              x="112"
              y="356"
              width="36"
              height="28"
              rx="4"
              fill="url(#billBars)"
            />
            <rect
              className="hero-bar hero-bar-2"
              x="168"
              y="340"
              width="36"
              height="44"
              rx="4"
              fill="url(#billBars)"
            />
            <rect
              className="hero-bar hero-bar-3"
              x="224"
              y="328"
              width="36"
              height="56"
              rx="4"
              fill="url(#billBars)"
            />
            <rect
              className="hero-bar hero-bar-4"
              x="280"
              y="316"
              width="36"
              height="68"
              rx="4"
              fill="#1F6B4A"
            />
          </g>
        </g>

        <g className="animate-float">
          <rect
            x="348"
            y="46"
            width="176"
            height="132"
            rx="28"
            fill="white"
            stroke="#E6E0D4"
          />
          <circle cx="384" cy="92" r="16" fill="#1F6B4A" />
          <path
            d="M376 92l6 6 11-12"
            stroke="white"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="410"
            y="88"
            fill="#44403C"
            fontSize="11"
            fontFamily="system-ui, sans-serif"
          >
            Posted today
          </text>
          <text
            x="410"
            y="110"
            fill="#16324F"
            fontSize="20"
            fontFamily="Georgia, serif"
          >
            $4,280
          </text>
          <text
            x="372"
            y="150"
            fill="#1F6B4A"
            fontSize="11"
            fontFamily="system-ui, sans-serif"
            fontWeight="600"
          >
            EOB matched to claim
          </text>
        </g>

        <g className="animate-float-delayed">
          <rect
            x="40"
            y="318"
            width="168"
            height="112"
            rx="28"
            fill="white"
            stroke="#E6E0D4"
          />
          <text
            x="60"
            y="348"
            fill="#44403C"
            fontSize="11"
            fontFamily="system-ui, sans-serif"
          >
            Days in A/R
          </text>
          <text
            x="60"
            y="386"
            fill="#16324F"
            fontSize="28"
            fontFamily="Georgia, serif"
          >
            28
          </text>
          <path
            d="M118 392l18-14 16 8 22-20"
            stroke="#1F6B4A"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </div>
  );
}
