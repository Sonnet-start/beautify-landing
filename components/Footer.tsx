import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-border bg-white/50 text-center">
      <p className="font-serif text-text-secondary text-sm">
        © {new Date().getFullYear()} Мой личный косметолог. Презентация проекта.
      </p>
    </footer>
  );
};

export default Footer;
