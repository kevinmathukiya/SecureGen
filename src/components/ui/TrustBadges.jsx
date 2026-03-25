/**
 * Trust Badges Component
 * Displays security, privacy, and trust indicators
 */

import { Shield, Lock, Eye, Github, CheckCircle2 } from 'lucide-react';

export const TrustBadges = ({ variant = 'default' }) => {
  const badges = [
    {
      icon: Lock,
      label: "100% Private",
      description: "Client-side generation, no data collection",
    },
    {
      icon: Shield,
      label: "Cryptographically Secure",
      description: "Uses Web Crypto API for true randomness",
    },
    {
      icon: Eye,
      label: "No Tracking",
      description: "Your passwords are never logged or monitored",
    },
    {
      icon: Github,
      label: "Open Source",
      description: "Transparent code, auditable on GitHub",
    },
    {
      icon: CheckCircle2,
      label: "Zero Cost",
      description: "100% free forever, no premium features",
    },
  ];

  if (variant === 'compact') {
    return (
      <div className="flex flex-wrap gap-2 justify-center">
        {badges.map((badge, idx) => (
          <div key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <badge.icon className="h-4 w-4 text-primary" />
            <span className="text-xs font-medium text-primary">{badge.label}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {badges.map((badge, idx) => (
        <div
          key={idx}
          className="p-4 rounded-lg border bg-card/50 hover:border-primary/50 transition-colors"
        >
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <badge.icon className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-sm">{badge.label}</h4>
              <p className="text-xs text-muted-foreground mt-1">{badge.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Compact variant for inline use
export const TrustBadgesCompact = () => <TrustBadges variant="compact" />;
