import React, { useState, useEffect } from 'react';

const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'О проекте', id: 'intro' },
    { label: 'Ход работы', id: 'workflow' },
    { label: 'План', id: 'roadmap' },
    { label: 'Итоги', id: 'conclusion' },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-[1100px] mx-auto px-6 flex justify-between items-center">
        <div className="font-serif font-bold text-xl text-text-primary tracking-tight">
          Мой <span className="text-accent-pink">косметолог</span>
        </div>
        
        <div className="hidden md:flex gap-8">
          {links.map(link => (
            <button 
              key={link.id} 
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium text-text-secondary hover:text-accent-peach transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
