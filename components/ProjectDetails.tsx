
import React, { useEffect } from 'react';
import { Project } from '../types';

interface ProjectDetailsProps {
  project: Project;
  onClose: () => void;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col md:flex-row bg-paper animate-in fade-in zoom-in duration-500 overflow-hidden">
      {/* Bouton Fermer Mobile (Visible uniquement sur petit écran en haut) */}
      <button 
        onClick={onClose}
        className="md:hidden absolute top-6 right-6 z-[110] w-12 h-12 flex items-center justify-center bg-earth text-white rounded-full shadow-xl"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      {/* Galerie d'images - Défilante */}
      <div className="w-full md:w-3/5 h-[50vh] md:h-full overflow-y-auto bg-clay-light/20 scrollbar-hide space-y-4 p-4 md:p-8">
        {project.images.map((img, idx) => (
          <div key={idx} className="relative w-full overflow-hidden rounded-sm shadow-sm hover:shadow-md transition-shadow">
            <img 
              src={img} 
              alt={`${project.title} - ${idx}`} 
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Contenu Texte - Fixe sur desktop */}
      <div className="w-full md:w-2/5 h-[50vh] md:h-full overflow-y-auto p-8 md:p-16 flex flex-col justify-between border-t md:border-t-0 md:border-l border-earth/5">
        <div>
          <div className="flex justify-between items-start mb-12 hidden md:flex">
             <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent">Détails du projet</span>
             <button onClick={onClose} className="group flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest hover:text-accent transition-colors">
               Fermer <span className="text-lg">✕</span>
             </button>
          </div>

          <div className="mb-8">
            <span className="font-mono text-[9px] uppercase tracking-widest text-accent/60 mb-2 block">{project.category} — {project.year}</span>
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-earth leading-none mb-8">{project.title}</h2>
          </div>

          <div className="prose prose-earth max-w-none">
            <p className="text-xl md:text-2xl font-light text-clay-dark leading-relaxed mb-12">
              {project.description}
            </p>
          </div>

          {project.externalLink && (
            <a 
              href={project.externalLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 group"
            >
              <span className="w-12 h-px bg-accent group-hover:w-20 transition-all"></span>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Explorer le site</span>
            </a>
          )}
        </div>

        <div className="mt-16 pt-8 border-t border-earth/5 hidden md:block">
           <p className="font-mono text-[9px] uppercase tracking-[0.2em] opacity-30 italic">
             Appuyez sur Échap pour quitter la vue immersive
           </p>
        </div>
      </div>
    </div>
  );
};
