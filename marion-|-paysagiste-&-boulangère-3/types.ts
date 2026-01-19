
export enum Category {
  PROJET = 'Projet',
  BOTANIQUE = 'Botanique',
  VOYAGE = 'Voyage',
  ILLUSTRATION = 'Illustration',
  ART = 'Art',
  CARTOGRAPHIE = 'Cartographie',
  BOULANGERIE = 'Boulangerie',
  FERME = 'Ferme',
  EXPOSITION = 'Exposition',
  EDUCATION = 'Éducation',
  CARNETS = 'Carnets',
  MEDIAS = 'Médias',
  BIOGRAPHIE = 'Biographie'
}

export interface Project {
  id: string;
  title: string;
  category: Category;
  year: string;
  description?: string;
  images: string[];
  externalLink?: string;
  color?: string;
}
