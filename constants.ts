
import { Project } from './types';
import { ALL_PROJECTS_DATA } from './src/projects-data/all-projects';

// On s'assure que les données respectent bien l'interface Project
// (Conversion nécessaire car all-projects.ts utilise des objets pour les images dans sa structure interne)
export const PROJECTS: Project[] = ALL_PROJECTS_DATA.map(p => ({
  ...p,
  images: p.images.map((img: any) => typeof img === 'string' ? img : img.src)
})) as Project[];
