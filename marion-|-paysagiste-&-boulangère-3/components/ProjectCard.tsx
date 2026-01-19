
import React, { useState } from 'react';
import { Project } from '../types';
import { ProjectDetails } from './ProjectDetails';

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);

  // Première image pour la couverture
  const coverImage = project.images[0];

  return (
    <>
      <div 
        className="group relative flex flex-col cursor-pointer"
        onClick={() => setShowDetails(true)}
      >
        {/* Conteneur Image avec effet de profondeur */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-clay-light shadow-lg group-hover:shadow-3xl transition-all duration-700">
          <img 
            src={coverImage} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 group-hover:contrast-100 transition-all duration-1000 ease-out"
          />
          
          {/* Badge catégorie flottant */}
          <div className="absolute top-6 left-6 z-10">
             <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-white bg-earth/40 backdrop-blur-md px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
               {project.category}
             </span>
          </div>

          {/* Overlay textuel au survol */}
          <div className="absolute inset-0 bg-earth/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8 backdrop-blur-[2px]">
            <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-out">
               <h3 className="text-3xl font-extrabold text-white tracking-tighter leading-none mb-3">
                 {project.title}
               </h3>
               
               {/* Description courte extraite du projet */}
               {project.description && (
                 <p className="text-white/80 font-serif italic text-sm mb-6 line-clamp-2 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-150">
                   {project.description}
                 </p>
               )}
               
               <div className="flex items-center gap-4">
                  <span className="w-8 h-px bg-accent"></span>
                  <p className="text-white/60 font-mono text-[9px] uppercase tracking-[0.3em]">{project.year} — Découvrir</p>
               </div>
            </div>
          </div>
        </div>
        
        {/* Infos sous la carte (visible par défaut sur mobile) */}
        <div className="mt-6 flex justify-between items-baseline md:hidden">
           <h3 className="text-xl font-bold">{project.title}</h3>
           <span className="font-mono text-[9px] opacity-40">{project.year}</span>
        </div>
      </div>

      {/* Vue Immersive Modal */}
      {showDetails && (
        <ProjectDetails 
          project={project} 
          onClose={() => setShowDetails(false)} 
        />
      )}
    </>
  );
};
