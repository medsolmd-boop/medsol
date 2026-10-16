export function HealthcareHeroIllustration({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 560 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
        role="img"
        aria-label="Revenue cycle management illustration showing billing dashboards and practice operations"
      >
        <defs>
          <linearGradient id="hg1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3d6f99" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#3aa89c" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="hg2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1b3a57" />
            <stop offset="100%" stopColor="#3d6f99" />
          </linearGradient>
          <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="18"
              stdDeviation="18"
              floodColor="#1b3a57"
              floodOpacity="0.1"
            />
          </filter>
        </defs>

        <circle cx="280" cy="240" r="210" fill="url(#hg1)" />
        <circle cx="420" cy="110" r="48" fill="#3aa89c" fillOpacity="0.14" />
        <circle cx="120" cy="360" r="36" fill="#3d6f99" fillOpacity="0.12" />

        <g filter="url(#soft)">
          <rect
            x="86"
            y="96"
            width="300"
            height="220"
            rx="28"
            fill="white"
            stroke="#E5E7EB"
          />
          <rect x="112" y="128" width="120" height="14" rx="7" fill="#1b3a57" />
          <rect
            x="112"
            y="156"
            width="180"
            height="10"
            rx="5"
            fill="#E5E7EB"
          />
          <rect
            x="112"
            y="178"
            width="150"
            height="10"
            rx="5"
            fill="#E5E7EB"
          />
          <rect x="112" y="220" width="72" height="56" rx="16" fill="#EEF2F6" />
          <rect x="196" y="220" width="72" height="56" rx="16" fill="#EAF7F5" />
          <rect x="280" y="220" width="72" height="56" rx="16" fill="#F3F1EC" />
          <text
            x="128"
            y="254"
            fill="#1b3a57"
            fontSize="16"
            fontFamily="system-ui,sans-serif"
            fontWeight="700"
          >
            98%
          </text>
          <text
            x="212"
            y="254"
            fill="#1b3a57"
            fontSize="16"
            fontFamily="system-ui,sans-serif"
            fontWeight="700"
          >
            +28%
          </text>
          <text
            x="296"
            y="254"
            fill="#1b3a57"
            fontSize="16"
            fontFamily="system-ui,sans-serif"
            fontWeight="700"
          >
            -40%
          </text>
        </g>

        <g className="animate-float" filter="url(#soft)">
          <rect
            x="318"
            y="250"
            width="180"
            height="130"
            rx="24"
            fill="white"
            stroke="#E5E7EB"
          />
          <circle cx="352" cy="292" r="18" fill="url(#hg2)" />
          <path
            d="M344 292l5 5 11-12"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="384"
            y="280"
            width="90"
            height="10"
            rx="5"
            fill="#1b3a57"
          />
          <rect
            x="384"
            y="300"
            width="70"
            height="8"
            rx="4"
            fill="#E5E7EB"
          />
          <rect
            x="338"
            y="330"
            width="140"
            height="28"
            rx="14"
            fill="#3aa89c"
          />
          <text
            x="364"
            y="349"
            fill="white"
            fontSize="11"
            fontFamily="system-ui,sans-serif"
            fontWeight="700"
          >
            Claim Approved
          </text>
        </g>

        <g className="animate-float-delayed" filter="url(#soft)">
          <rect
            x="70"
            y="300"
            width="160"
            height="92"
            rx="22"
            fill="white"
            stroke="#E5E7EB"
          />
          <rect x="92" y="324" width="48" height="8" rx="4" fill="#3d6f99" />
          <rect x="92" y="344" width="116" height="6" rx="3" fill="#E5E7EB" />
          <rect x="92" y="360" width="90" height="6" rx="3" fill="#E5E7EB" />
        </g>
      </svg>
    </div>
  );
}
