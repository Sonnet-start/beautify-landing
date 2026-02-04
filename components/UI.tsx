import React from 'react';

// Container
export const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`max-w-[1100px] mx-auto px-6 md:px-8 ${className}`}>
    {children}
  </div>
);

// Section Wrapper
export const Section: React.FC<{ id: string; children: React.ReactNode; className?: string }> = ({ id, children, className = '' }) => (
  <section id={id} className={`py-20 md:py-32 ${className}`}>
    {children}
  </section>
);

// Typography
export const Heading: React.FC<{ children: React.ReactNode; level?: 1 | 2 | 3; className?: string }> = ({ children, level = 2, className = '' }) => {
  const baseStyles = "font-serif text-text-primary mb-6";
  const sizes = {
    1: "text-5xl md:text-7xl font-bold leading-tight",
    2: "text-3xl md:text-5xl font-semibold",
    3: "text-2xl md:text-3xl font-medium",
  };

  const Tag = `h${level}` as React.ElementType;

  return <Tag className={`${baseStyles} ${sizes[level]} ${className}`}>{children}</Tag>;
};

export const Text: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <p className={`font-sans text-text-secondary text-lg leading-relaxed ${className}`}>
    {children}
  </p>
);

// Card
export const Card: React.FC<{ children: React.ReactNode; className?: string; hover?: boolean }> = ({ children, className = '', hover = true }) => (
  <div className={`
    bg-surface rounded-3xl p-8 border border-border/50
    shadow-[0_4px_20px_-10px_rgba(242,198,194,0.3)]
    ${hover ? 'transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(242,198,194,0.5)] hover:-translate-y-1' : ''}
    ${className}
  `}>
    {children}
  </div>
);

// Button
export const Button: React.FC<{ 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary'; 
  onClick?: () => void;
  className?: string;
}> = ({ children, variant = 'primary', onClick, className = '' }) => {
  const base = "px-8 py-3 rounded-full font-sans font-medium transition-all duration-300 inline-flex items-center gap-2";
  const styles = {
    primary: "bg-gradient-to-r from-accent-pink to-accent-peach text-text-primary shadow-lg shadow-accent-pink/30 hover:shadow-accent-pink/50 hover:scale-105",
    secondary: "bg-transparent border border-accent-peach text-text-primary hover:bg-surface hover:border-accent-pink"
  };

  return (
    <button onClick={onClick} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </button>
  );
};

// Badge
export const Badge: React.FC<{ children: React.ReactNode; color?: 'pink' | 'blue' | 'green' }> = ({ children, color = 'pink' }) => {
  const colors = {
    pink: "bg-accent-pink/20 text-text-primary",
    blue: "bg-accent-blue/20 text-text-primary",
    green: "bg-state-success/20 text-text-primary",
  };
  return (
    <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${colors[color]}`}>
      {children}
    </span>
  );
};