
import { Project } from './types';
import { ALL_PROJECTS_DATA } from './src/projects-data/all-projects';

// On s'assure que les données respectent bien l'interface Project
// (Utilisation de la structure complète avec les descriptions d'images)
export const PROJECTS: Project[] = ALL_PROJECTS_DATA as Project[];
