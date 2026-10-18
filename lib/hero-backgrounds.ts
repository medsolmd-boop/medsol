/**
 * Full-bleed hero photos by route — RCM / business office imagery (not hospital clinical).
 */
export const heroBackgrounds = {
  home: {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=80",
    alt: "Modern professional office representing MedSol revenue cycle partnership",
  },
  "medical-billing": {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=80",
    alt: "Calm professional office for medical billing and revenue cycle work",
  },
  credentialing: {
    src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2400&q=80",
    alt: "Quiet office interior for provider credentialing and enrollment work",
  },
  "virtual-front-desk": {
    src: "https://images.unsplash.com/photo-1560264418-c4445382edbc?auto=format&fit=crop&w=2400&q=80",
    alt: "Virtual front desk specialist with headset supporting practice callers",
  },
  about: {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2400&q=80",
    alt: "MedSol team collaborating in a modern professional workspace",
  },
  contact: {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2400&q=80",
    alt: "Professional consultation meeting for medical billing partnership",
  },
  "webpage-development": {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2400&q=80",
    alt: "Developer workspace for medical practice webpage development",
  },
  "social-media-marketing": {
    src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=2400&q=80",
    alt: "Smartphone social interface for healthcare practice marketing",
  },
  "seo-services": {
    src: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=2400&q=80",
    alt: "Search and analytics workspace for practice SEO services",
  },
  calculator: {
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=2400&q=80",
    alt: "Financial documents and charts for revenue leakage analysis",
  },
} as const;

export type HeroBackgroundKey = keyof typeof heroBackgrounds;
