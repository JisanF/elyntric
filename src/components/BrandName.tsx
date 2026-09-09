import React from 'react';

interface BrandNameProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses: Record<NonNullable<BrandNameProps['size']>, string> = {
  sm: 'text-lg',
  md: 'text-2xl',
  lg: 'text-4xl md:text-5xl lg:text-6xl',
  xl: 'text-4xl md:text-5xl',
};

const BrandName: React.FC<BrandNameProps> = ({ className = '', size = 'md' }) => {
  return (
    <span
      className={`font-bold bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-500 to-cyan-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-brand-glow ${sizeClasses[size]} ${className}`}
    >
      elyntric
    </span>
  );
};

export default BrandName;
