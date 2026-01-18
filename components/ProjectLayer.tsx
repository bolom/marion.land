import React, { useEffect, useRef, useState } from 'react';
import { Project } from '../types';

interface ProjectLayerProps {
  project: Project;
  isOpen: boolean;
  onToggle: () => void;
}

export const ProjectLayer: React.FC<ProjectLayerProps> = ({ project, isOpen, onToggle }) => {
  const [imagesVisible, setImagesVisible] = useState<{ [key: number]: boolean }>({});
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!isOpen) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setImagesVisible((prev) => ({ ...prev, [index]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [isOpen, project.images]);

  return (
    <div className="group border-t border-clay-mid/20 transition-all duration-700">
      <button 
        onClick={onToggle}
        className="w-full text-left py-12 md:py-20 px-0 flex flex-col md:flex-row md:items-center justify-between gap-8 relative overflow-hidden"
      >
        {/* Animated background on hover */}
        <div className={`absolute inset-0 bg-accent/5 -z-10 transition-transform duration-1000 origin-left ${isOpen ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
        
        <div className="flex items-center gap-6 md:w-1/4">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-clay-dark bg-clay-light/30 px-3 py-1 rounded-full">
            {project.category}
          </span>
        </div>
        
        <h3 className={`text-3xl md:text-7xl font-extrabold tracking-tighter flex-1 transition-all duration-700 ${isOpen ? 'translate-x-0' : 'group-hover:translate-x-8'}`}>
          {project.title}
        </h3>
        
        <div className="md:w-32 text-right">
          <span className={`font-mono text-xs transition-opacity duration-700 ${isOpen ? 'opacity-100' : 'opacity-40'}`}>
            {project.year}
          </span>
        </div>

        <div className={`hidden md:block absolute right-0 bottom-12 transition-all duration-700 ${isOpen ? 'rotate-45 text-accent' : 'rotate-0 opacity-20'}`}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M20 5v30M5 20h30" />
          </svg>
        </div>
      </button>

      {/* Expandable Content */}
      <div 
        className={`overflow-hidden transition-all duration-[1.2s] cubic-bezier(0.77, 0, 0.175, 1) ${
          isOpen ? 'max-h-[3500px] opacity-100 pb-32' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-40">
            <div className="space-y-8">
              <p className="text-2xl md:text-3xl font-light text-clay-dark leading-relaxed">
                {project.description}
              </p>
              <div className="pt-8 border-t border-clay-mid/20">
                 {project.externalLink && (
                  <a 
                    href={project.externalLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-accent font-bold hover:underline flex items-center gap-4 text-lg group/link"
                  >
                    Visiter le projet 
                    <span className="transform group-hover/link:translate-x-2 transition-transform">→</span>
                  </a>
                )}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.images.map((img, i) => (
              <div 
                key={i} 
                ref={(el) => { imageRefs.current[i] = el; }}
                data-index={i}
                className={`group/img overflow-hidden rounded-sm bg-clay-light shadow-xl transition-all duration-1000 delay-${i * 100} ${
                  isOpen && imagesVisible[i] ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'
                }`}
              >
                <img 
                  src={img} 
                  alt={`${project.title} ${i}`} 
                  className="w-full h-full object-cover aspect-[4/5] filter saturate-[0.7] group-hover/img:saturate-100 group-hover/img:scale-105 transition-all duration-[1.5s]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};