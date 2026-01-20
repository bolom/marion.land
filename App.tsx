
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { PROJECTS } from './constants';
import { ProjectCard } from './components/ProjectCard';
import { CV_DATA } from './assets/cv-data';
import { Category } from './types';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | 'Tous'>('Tous');

  const heroImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (heroImageRef.current) {
        const speed = -0.04;
        heroImageRef.current.style.transform = `translateY(${window.scrollY * speed}px) rotate(${3 + window.scrollY * 0.005}deg)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = useMemo(() => {
    if (!PROJECTS) return ['Tous'] as (Category | 'Tous')[];
    const uniqueCats = Array.from(new Set(PROJECTS.map(p => p.category)));
    return ['Tous', ...uniqueCats] as (Category | 'Tous')[];
  }, []);

  const filteredProjects = useMemo(() => {
    if (!PROJECTS) return [];
    if (selectedCategory === 'Tous') return PROJECTS;
    return PROJECTS.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen font-sans bg-paper selection:bg-accent selection:text-white overflow-x-hidden scroll-smooth">
      
      {/* Fil Rouge Vertical (Côté Gauche) */}
      <div className="fixed left-4 md:left-8 top-0 bottom-0 w-px bg-earth/5 z-[60] pointer-events-none hidden lg:block">
        <div 
          className="w-full bg-accent transition-all duration-300 origin-top"
          style={{ height: `${Math.min(100, (scrolled ? 100 : 20))}%` }}
        ></div>
      </div>

      {/* Navigation Prioritaire (Z-100) */}
      <nav className={`fixed top-0 left-0 w-full z-[100] px-6 py-6 transition-all duration-500 ${scrolled ? 'bg-paper/95 backdrop-blur-xl border-b border-earth/5 py-4 shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-[1800px] mx-auto flex justify-between items-center">
          <div 
            className="flex items-baseline gap-4 cursor-pointer group" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <span className="font-extrabold text-xl tracking-tighter uppercase group-hover:text-accent transition-colors">Marion.</span>
            <span className="hidden md:block font-mono text-[9px] uppercase tracking-[0.3em] opacity-30">
              Arpenteuse & Boulangère
            </span>
          </div>
          <div className="flex items-center gap-8 font-mono text-[10px] uppercase tracking-widest">
            <a href="#portfolio" className="hover:text-accent transition-all hover:tracking-[0.2em]">Portfolio</a>
            <a href="#parcours" className="hover:text-accent transition-all hover:tracking-[0.2em]">Parcours</a>
            <a href="#contact" className="hover:text-accent transition-all hover:tracking-[0.2em]">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section Raffinée */}
      <header className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 bg-paper overflow-hidden pt-20">
        <div className="max-w-[1800px] mx-auto w-full relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <h1 className="text-[12vw] lg:text-[10rem] font-extrabold tracking-tighter leading-[0.8] text-earth">
                PÉTRIR LE<br/>
                <span className="text-outline text-transparent stroke-current italic font-serif relative">
                  TERRITOIRE.
                  <span className="absolute left-0 right-0 h-px bg-accent/30 top-1/2 -translate-y-1/2 -z-10"></span>
                </span>
              </h1>
              
              <div className="mt-16 flex flex-col md:flex-row md:items-start gap-12">
                <div className="w-12 h-px bg-accent mt-4 hidden md:block"></div>
                <p className="text-xl md:text-2xl font-light text-clay-dark max-w-xl leading-relaxed uppercase tracking-wider">
                  De la lecture des strates paysagères <br/>
                  à la conduite du levain, <br/>
                  <span className="text-accent font-serif italic lowercase font-normal">habiter le paysage par le geste.</span>
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div 
                ref={heroImageRef}
                className="relative photo-frame w-[260px] md:w-[300px] shadow-2xl transition-transform duration-300 ease-out"
                style={{ transform: 'rotate(3deg)' }}
              >
                <div className="aspect-[4/5] overflow-hidden bg-clay-light mb-6">
                  <img
                    src="/assets/images/marion-portrait.png"
                    alt="Portrait de Marion"
                    className="w-full h-full object-cover grayscale sepia-[0.1] contrast-105"
                  />
                </div>
                <div className="text-center">
                   <span className="font-serif italic text-sm text-clay-dark/60 block mb-1">Marion Godiard</span>
                   <span className="font-mono text-[8px] uppercase tracking-[0.4em] opacity-30">89 — Puisaye</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filigrane discret */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] pointer-events-none opacity-[0.02] select-none z-0">
             <span className="text-[35vw] font-extrabold leading-none tracking-tighter">SILLON</span>
        </div>
      </header>

      <main className="max-w-[1800px] mx-auto px-6 md:px-12 bg-paper relative z-20">
        
        {/* Section Portfolio */}
        <section className="py-32 scroll-mt-24" id="portfolio">
          <div className="flex flex-col md:flex-row justify-between items-baseline gap-12 mb-20 border-b border-earth/5 pb-10">
            <div>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent mb-2 block">I. Tracés & Récoltes</span>
              <h2 className="text-5xl font-extrabold tracking-tighter">Portfolio.</h2>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-[10px] uppercase tracking-widest">
              {categories.map(cat => (
                <button 
                  key={cat} 
                  onClick={() => setSelectedCategory(cat as Category | 'Tous')}
                  className={`transition-all duration-300 pb-1 ${selectedCategory === cat ? 'text-accent border-b border-accent' : 'text-clay-dark/40 hover:text-earth'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} priority={idx < 6} />
            ))}
          </div>
        </section>

        {/* Section Parcours */}
        <section className="py-40 border-t border-earth/5 scroll-mt-24" id="parcours">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent mb-6 block">II. Itinéraire Fertile</span>
                <h2 className="text-5xl font-extrabold tracking-tighter mb-8">Parcours.</h2>
                <p className="font-serif italic text-2xl text-clay-dark/80 border-l-2 border-accent/20 pl-6 leading-relaxed">
                  "On n'apprend pas à faire du pain sans comprendre d'abord d'où vient le vent."
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-8 space-y-32">
              {CV_DATA?.sections?.map((section, idx) => (
                <div key={idx} className="group">
                  <h3 className="font-mono text-[10px] uppercase tracking-[0.5em] text-accent mb-12 border-b border-earth/5 pb-4 flex justify-between items-center group-hover:border-accent/40 transition-colors">
                    {section.title}
                    <span className="opacity-10">0{idx + 1}</span>
                  </h3>
                  <div className="space-y-16">
                    {section.items?.map((item, i) => (
                      <div key={i} className="group/item relative pl-8 border-l border-earth/5 hover:border-accent/20 transition-colors">
                        <div className="absolute -left-1 top-2 w-2 h-2 rounded-full bg-paper border border-accent/40 group-hover/item:bg-accent transition-colors"></div>
                        <div className="font-mono text-[9px] text-accent/50 mb-3 uppercase tracking-widest">
                          {item.year || '—'}
                        </div>
                        <h4 className="text-2xl font-bold text-earth mb-4 group-hover/item:text-accent transition-colors leading-tight">
                          {item.description}
                        </h4>
                        {item.details && item.details.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {item.details.map((detail, dIdx) => (
                              <span key={dIdx} className="text-[10px] font-mono opacity-50 bg-clay-light/20 px-2 py-1 rounded-sm">
                                {detail}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Contact */}
        <section className="py-40 border-t border-earth/5 scroll-mt-24" id="contact">
          <div className="max-w-4xl mx-auto">
             <div className="text-center mb-20">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent mb-8 block">III. Semer ensemble</span>
                <h2 className="text-7xl md:text-9xl font-extrabold tracking-tighter">Contact.</h2>
             </div>
             <div className="bg-white p-12 md:p-20 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] rounded-sm text-left">
                <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="relative">
                         <label className="block font-mono text-[9px] uppercase tracking-widest mb-4 opacity-40">Identité</label>
                         <input type="text" className="w-full bg-transparent border-b border-earth/10 py-3 outline-none focus:border-accent text-lg font-light transition-all" placeholder="Votre nom" />
                      </div>
                      <div className="relative">
                         <label className="block font-mono text-[9px] uppercase tracking-widest mb-4 opacity-40">Email</label>
                         <input type="email" className="w-full bg-transparent border-b border-earth/10 py-3 outline-none focus:border-accent text-lg font-light transition-all" placeholder="votre@email.com" />
                      </div>
                   </div>
                   <div className="relative">
                      <label className="block font-mono text-[9px] uppercase tracking-widest mb-4 opacity-40">Votre projet / intention</label>
                      <textarea rows={3} className="w-full bg-transparent border-b border-earth/10 py-3 outline-none focus:border-accent text-lg font-light resize-none transition-all" placeholder="Décrivez votre idée..."></textarea>
                   </div>
                   <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                      <p className="text-[10px] font-mono opacity-30 uppercase tracking-tighter leading-relaxed">
                         Basée en Bourgogne (89) <br/>
                         Itinérante sur demande
                      </p>
                      <button className="group relative overflow-hidden px-20 py-6 bg-earth text-white font-mono text-[10px] uppercase tracking-[0.4em] transition-all hover:bg-accent shadow-2xl active:scale-95">
                        Lancer le grain
                      </button>
                   </div>
                </form>
             </div>
          </div>
        </section>

        <footer className="py-16 border-t border-earth/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-mono uppercase tracking-[0.4em] text-clay-dark/40 bg-paper">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-accent"></div>
            <span>&copy; 2024 — Marion Godiard — Architecturer le vivant</span>
          </div>
          <div className="flex gap-12">
            <a href="#" className="hover:text-accent transition-colors underline decoration-earth/10 underline-offset-4">Instagram</a>
            <a href="#" className="hover:text-accent transition-colors underline decoration-earth/10 underline-offset-4">LinkedIn</a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
