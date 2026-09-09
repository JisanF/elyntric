import React from 'react';

interface SkullLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses: Record<NonNullable<SkullLogoProps['size']>, string> = {
  sm: 'text-xl',
  md: 'text-2xl',
  lg: 'text-3xl',
  xl: 'text-4xl',
};

const SkullLogo: React.FC<SkullLogoProps> = ({ className = '', size = 'md' }) => {
  return (
    <span className={`relative inline-flex items-center justify-center ${className}`}>
      {/* Outer rotating ring */}
      <span
        className="absolute inset-0 rounded-full border-2 border-cyan-400/30 border-t-cyan-500 border-b-blue-500 animate-spiral-rotate"
        style={{ filter: 'drop-shadow(0 0 4px rgba(6,182,212,0.4))' }}
      />
      {/* Inner counter-rotating ring */}
      <span
        className="absolute inset-[15%] rounded-full border-2 border-blue-400/20 border-t-transparent border-b-purple-500 animate-spiral-rotate"
        style={{ animationDirection: 'reverse', animationDuration: '2s', filter: 'drop-shadow(0 0 3px rgba(139,92,246,0.3))' }}
      />
      {/* Glow halo */}
      <span className="absolute inset-0 rounded-full bg-cyan-400/15 blur-md animate-pulse" />
      <span className="absolute -inset-2 rounded-full bg-cyan-500/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {/* Skull emoji */}
      <span className={`relative z-10 ${sizeClasses[size]}`}>☠️</span>
    </span>
  );
};

export default SkullLogo;
