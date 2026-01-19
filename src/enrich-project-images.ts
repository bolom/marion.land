import { Project } from './types';
import { PROJECTS } from './constants';
import { IMAGE_DESCRIPTIONS } from './image-descriptions';

// Fonction pour enrichir les projets avec les descriptions d'images
export const getProjectsWithImageDescriptions = (): Project[] => {
  return PROJECTS.map(project => {
    const projectImageDescriptions = IMAGE_DESCRIPTIONS[project.id as keyof typeof IMAGE_DESCRIPTIONS];
    
    if (projectImageDescriptions) {
      // Créer un objet avec les descriptions d'images
      const enhancedImages = project.images.map((imgSrc: string) => {
        const imageDesc = projectImageDescriptions.find(desc => desc.src === imgSrc);
        return {
          src: imgSrc,
          description: imageDesc ? imageDesc.description : `Image du projet ${project.title}`
        };
      });
      
      return {
        ...project,
        images: enhancedImages
      };
    }
    
    // Si aucune description spécifique n'existe, retourner le projet avec des descriptions génériques
    return {
      ...project,
      images: project.images.map((imgSrc: string) => ({
        src: imgSrc,
        description: `Image du projet ${project.title}`
      }))
    };
  });
};