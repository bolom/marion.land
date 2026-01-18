
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { PROJECTS } from './constants';
import { ProjectLayer } from './components/ProjectLayer';
import { Category } from './types';

const App: React.FC = () => {
  const [openProject, setOpenProject] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | 'Tous'>('Tous');
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const heroImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (heroImageRef.current) {
        heroImageRef.current.style.transform = `translateY(${window.scrollY * 0.1}px) rotate(${3 + window.scrollY * 0.01}deg)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = useMemo(() => {
    const uniqueCats = Array.from(new Set(PROJECTS.map(p => p.category)));
    return ['Tous', ...uniqueCats] as (Category | 'Tous')[];
  }, []);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'Tous') return PROJECTS;
    return PROJECTS.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 4000);
    }, 1500);
  };


  return (
    <div className="min-h-screen font-sans bg-paper selection:bg-accent selection:text-white overflow-x-hidden">
      
      {/* Navbar Storytelling */}
      <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-6 transition-all duration-700 ${scrolled ? 'bg-paper/95 backdrop-blur-md border-b border-earth/5 py-4' : 'bg-transparent'}`}>
        <div className="max-w-[1800px] mx-auto flex justify-between items-center">
          <div 
            className="flex items-baseline gap-4 cursor-pointer group" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <span className="font-extrabold text-xl tracking-tighter uppercase group-hover:text-accent transition-colors">Marion.</span>
            <span className="hidden md:block font-mono text-[10px] uppercase tracking-widest opacity-50">
              Paysagiste & Boulangère
            </span>
          </div>
          <div className="flex items-center gap-6 md:gap-10 font-mono text-[10px] uppercase tracking-widest">
            <a href="#projets" className="hover:text-accent transition-colors hidden md:block">I. Observer</a>
            <a href="#parcours" className="hover:text-accent transition-colors hidden md:block">II. Incarner</a>
            <a href="#contact" className="hover:text-accent transition-colors hidden md:block">III. Partager</a>
          </div>
        </div>
      </nav>

      {/* Intro: Plus d'image, moins de texte, plus d'air */}
      <header className="relative min-h-[110vh] flex flex-col justify-center px-6 md:px-12">
        <div className="max-w-[1800px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-8 z-10">
            <h1 className="text-[14vw] lg:text-[12rem] font-extrabold tracking-tighter leading-[0.8] text-earth mb-8">
              DE LA<br/>
              <span className="text-outline text-transparent stroke-current italic font-serif">GRAINE</span><br/>
              AU SOL.
            </h1>
            <p className="text-2xl md:text-4xl font-light text-clay-dark leading-snug max-w-xl">
              Architecture du paysage <br/>& Boulangerie artisanale.
            </p>
          </div>

          <div className="lg:col-span-4 relative">
            <div className="relative aspect-[3/4] w-full max-w-xs md:max-w-sm ml-auto overflow-hidden rounded-sm bg-clay-light shadow-2xl transition-transform duration-1000">
              <img
                ref={heroImageRef}
                src="/src/assets/images/marion-godiard/marion-portrait.png"
                alt="Marion Portrait"
                className="w-full h-full object-cover grayscale brightness-110 contrast-105 rotate-3 scale-110"
              />
              <div className="absolute inset-0 border-[20px] border-paper/10 pointer-events-none"></div>
            </div>
            {/* Décoratif discret */}
            <div className="absolute -bottom-8 -left-8 font-mono text-[10px] uppercase tracking-[0.5em] vertical-rl opacity-20 hidden md:block">
              Incarner le vivant
            </div>
          </div>

        </div>
        
        <div className="absolute bottom-12 left-6 flex items-center gap-4 opacity-30">
          <div className="w-12 h-px bg-earth"></div>
          <span className="font-mono text-[9px] uppercase tracking-[0.3em]">Dérouler l'histoire</span>
        </div>
      </header>

      <main className="max-w-[1800px] mx-auto px-6 md:px-12">
        
        {/* Chapitre I: Projets */}
        <section className="py-32" id="projets">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 border-b border-earth/5 pb-16">
            <div className="lg:col-span-4">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent mb-4 block">Chapitre I</span>
              <h2 className="text-5xl font-extrabold tracking-tighter leading-none">
                Observer.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="flex flex-wrap gap-x-8 gap-y-4 font-mono text-[10px] uppercase tracking-widest">
                {categories.map(cat => (
                  <button 
                    key={cat} 
                    onClick={() => setSelectedCategory(cat)}
                    className={`transition-all duration-300 ${
                      selectedCategory === cat 
                        ? 'text-accent' 
                        : 'text-clay-dark/40 hover:text-earth'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col">
            {filteredProjects.map(project => (
              <ProjectLayer 
                key={project.id} 
                project={project} 
                isOpen={openProject === project.id}
                onToggle={() => setOpenProject(openProject === project.id ? null : project.id)}
              />
            ))}
          </div>
        </section>

        {/* Chapitre II: Parcours - Narratif resserré */}
        <section className="py-40 grid grid-cols-1 lg:grid-cols-12 gap-20 border-t border-earth/5" id="parcours">
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent mb-6 block">Chapitre II</span>
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none mb-10">
                Incarner.
              </h2>
              <p className="text-lg text-clay-dark leading-relaxed font-serif italic pl-6 border-l border-accent/20">
                "Du dessin d'un paysage à la cuisson du pain, c'est une seule et même écologie du soin."
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-20">
             <div className="group">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent mb-4 block">Aujourd'hui</span>
                <h3 className="text-3xl font-bold text-earth mb-2">Puisaye Forterre</h3>
                <p className="text-xl text-clay-dark font-light leading-relaxed">
                  Pilotage de stratégies de résorption de l'habitat indigne. Revitaliser le cœur des villages.
                </p>
             </div>

             <div className="group">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent mb-4 block">Depuis 2017</span>
                <h3 className="text-3xl font-bold text-earth mb-2">La Boulenc' Cheminotte</h3>
                <p className="text-xl text-clay-dark font-light leading-relaxed">
                  Boulangerie itinérante. Faire du pain un outil de lien social et de pédagogie du sol.
                </p>
             </div>

             <div className="group">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent mb-4 block">Racines</span>
                <h3 className="text-3xl font-bold text-earth mb-2">École du Paysage</h3>
                <p className="text-xl text-clay-dark font-light leading-relaxed">
                  Formation d'Architecte DPLG à Blois. Apprendre à lire la terre pour mieux la projeter.
                </p>
             </div>
          </div>
        </section>

        {/* Chapitre III: Contact */}
        <section className="py-40 border-t border-earth/5" id="contact">
          <div className="max-w-4xl mx-auto text-center">
             <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-accent mb-6 block">Chapitre III</span>
             <h2 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-12">
               Partager.
             </h2>
             
             <div className="bg-white p-8 md:p-16 shadow-2xl rounded-sm">
                <form onSubmit={handleFormSubmit} className="space-y-12 text-left">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="group relative">
                         <label className="block font-mono text-[9px] uppercase tracking-widest mb-2 text-clay-dark/60">Nom</label>
                         <input type="text" className="w-full bg-transparent border-b border-earth/10 py-2 outline-none focus:border-accent text-xl transition-colors" required />
                      </div>
                      <div className="group relative">
                         <label className="block font-mono text-[9px] uppercase tracking-widest mb-2 text-clay-dark/60">Email</label>
                         <input type="email" className="w-full bg-transparent border-b border-earth/10 py-2 outline-none focus:border-accent text-xl transition-colors" required />
                      </div>
                   </div>
                   <div className="group relative">
                      <label className="block font-mono text-[9px] uppercase tracking-widest mb-2 text-clay-dark/60">Message</label>
                      <textarea rows={2} className="w-full bg-transparent border-b border-earth/10 py-2 outline-none focus:border-accent text-xl resize-none transition-colors" required></textarea>
                   </div>
                   
                   <div className="flex justify-between items-center pt-8">
                      <a href="mailto:hello@marion.land" className="text-xs font-mono uppercase tracking-widest opacity-40 hover:opacity-100 transition-all">hello@marion.land</a>
                      <button 
                        type="submit" 
                        disabled={formStatus !== 'idle'}
                        className="px-10 py-4 bg-earth text-white rounded-sm font-mono text-[10px] uppercase tracking-[0.2em] hover:bg-accent transition-all disabled:opacity-50"
                      >
                        {formStatus === 'idle' ? 'Envoyer' : formStatus === 'success' ? 'Merci' : '...'}
                      </button>
                   </div>
                </form>
             </div>
          </div>
        </section>

        {/* Footer Minimal */}
        <footer className="py-12 border-t border-earth/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono uppercase tracking-widest text-clay-dark/40">
          <div>&copy; 2024 Marion Land</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-accent transition-colors">Instagram</a>
            <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
          </div>
        </footer>

      </main>

    </div>
  );
};

export default App;
