
import { Category, Project } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'halle-viviante',
    title: 'La Halle Viviante',
    category: Category.PROJET,
    year: '2026',
    description: 'Conception d\'un espace hybride entre halle de marché et lieu de vie bioclimatique.',
    images: [
      '/images/halle-viviante/IMG_3041.HEIC',
      '/images/halle-viviante/chantier-projet-eape1.png',
      '/images/halle-viviante/chantier-projet-etape-2.png'
    ],
    externalLink: 'https://halle-vivante.land'
  },
  {
    id: 'vegetaux',
    title: 'Végétaux',
    category: Category.BOTANIQUE,
    year: '2023',
    description: 'Inventaire graphique et sensible de la flore locale.',
    images: [
      '/images/vegetaux/plantouz1_670.jpg',
      '/images/vegetaux/plantouz2_670.jpg',
      '/images/vegetaux/triptilok_670.jpg',
      '/images/vegetaux/palmiers_670.jpg',
      '/images/vegetaux/le-jardin-de-Thuret_670.jpg',
      '/images/vegetaux/escalier-jardin-exotique-cabane-rouge_670.png',
      '/images/vegetaux/de-ouf3_670.png'
    ]
  },
  {
    id: 'voyage',
    title: 'Les campagnes sont nos jardins',
    category: Category.VOYAGE,
    year: '2023',
    description: 'Récits visuels d\'itinérance à travers les paysages ruraux.',
    images: [
      '/images/voyage/belle-ile-medley_670.jpg',
      '/images/voyage/samzun_670.jpg',
      '/images/voyage/corse_670.jpg',
      '/images/voyage/doubs_670.jpg',
      '/images/voyage/premier-regards_670.jpg',
      '/images/voyage/vosges_670.jpg',
      '/images/voyage/mditeranne_670.jpg',
      '/images/voyage/pypy2_670.jpg',
      '/images/voyage/ecosse_670.jpg',
      '/images/voyage/irlande-du-nord_670.jpg',
      '/images/voyage/Inde-1_670.jpg',
      '/images/voyage/inde-2_670.jpg',
      '/images/voyage/slovaquie_670.jpg',
      '/images/voyage/mexik2_670.jpg'
    ]
  },
  {
    id: 'margival',
    title: 'Margival - Théâtre de la mémoire',
    category: Category.ART,
    year: '2023',
    description: 'Installation artistique explorant les strates mémorielles d\'un lieu.',
    images: [
      '/images/margival/tischet-des-combes_670.jpg',
      '/images/margival/dessin1re-imp-copie_630.jpg',
      '/images/margival/TABLE-DESSIN-MARGIVAL-_630.jpg',
      '/images/margival/carte-sens-copie_665.jpg',
      '/images/margival/axo-entireoo_670.jpg',
      '/images/margival/trois-margioo_630.jpg',
      '/images/margival/master-plan-web_670.png',
      '/images/margival/vue-toit-tischetok_630.jpg'
    ]
  },
  {
    id: 'cartographie-sensible',
    title: 'Cartographie sensible',
    category: Category.CARTOGRAPHIE,
    year: '2022',
    description: 'Représentations subjectives du territoire par le dessin et l\'émotion.',
    images: [
      '/images/cartographie-sensible/carte-sensible-blois_670.jpg',
      '/images/cartographie-sensible/blois-loire_670.jpg',
      '/images/cartographie-sensible/muides_670.jpg',
      '/images/cartographie-sensible/coupe-de-la-mort-copie_670.jpg',
      '/images/cartographie-sensible/photo-st-omer_670.jpg'
    ]
  },
  {
    id: 'boulenc-cheminotte',
    title: 'Boulenc\' Cheminotte',
    category: Category.BOULANGERIE,
    year: '2021',
    description: 'Projet de fournil mobile et de panification itinérante.',
    images: [
      '/images/boulenc-cheminotte/fournil-villeneuve_670.jpg',
      '/images/boulenc-cheminotte/fenetre-amap_670.jpg',
      '/images/boulenc-cheminotte/boulenco_670.jpg',
      '/images/boulenc-cheminotte/mise-en-place-esthetique2_670.jpg',
      '/images/boulenc-cheminotte/48378240_307118563237367_7343309704291942400_n_670.jpg'
    ]
  },
  {
    id: 'claj-ferme-batailleuse',
    title: 'CLAJ Ferme de La Batailleuse',
    category: Category.FERME,
    year: '2021',
    description: 'Vie et travail au sein d\'une ferme pédagogique et sociale.',
    images: [
      '/src/assets/images/claj-ferme-batailleuse/ferme-poster_670.jpg',
      '/src/assets/images/claj-ferme-batailleuse/boulang-anouk_670.jpg',
      '/src/assets/images/claj-ferme-batailleuse/ferme_670.jpg',
      '/src/assets/images/claj-ferme-batailleuse/chevre2_670.jpg',
      '/src/assets/images/claj-ferme-batailleuse/cochon_670.jpg',
      '/src/assets/images/claj-ferme-batailleuse/vue-de-yourtecaravanere_670.jpg',
      '/src/assets/images/claj-ferme-batailleuse/bucheron_670.jpg',
      '/src/assets/images/claj-ferme-batailleuse/affiches_670.jpg'
    ]
  },
  {
    id: 'expo-boulange',
    title: 'Expo Boulange!',
    category: Category.EXPOSITION,
    year: '2020',
    description: 'Exposition autour de la boulangerie et du pain.',
    images: [
      '/src/assets/images/expo-boulange/expo-boulange-2_670.jpg',
      '/src/assets/images/expo-boulange/fournil-de-reno-s_670.jpg',
      '/src/assets/images/expo-boulange/conquete_670.jpg',
      '/src/assets/images/expo-boulange/romain-enfourne_670.jpg',
      '/src/assets/images/expo-boulange/ceci-n-est-pas-une-boul_670.jpg',
      '/src/assets/images/expo-boulange/lapin-kawaii_670.jpg'
    ]
  },
  {
    id: 'itinérance-educative',
    title: 'Itinérance éducative',
    category: Category.EDUCATION,
    year: '2020',
    description: 'Projets pédagogiques itinérants dans les écoles et structures sociales.',
    images: [
      '/src/assets/images/itinérance-educative/mockup-de-ferme-en-ecole2_512.jpg',
      '/src/assets/images/itinérance-educative/pub-lana_583.jpg',
      '/src/assets/images/itinérance-educative/pub-lana2_670.jpg',
      '/src/assets/images/itinérance-educative/pub-lanaok_583.jpg',
      '/src/assets/images/itinérance-educative/pub-lana4_670.jpg',
      '/src/assets/images/itinérance-educative/pub-lana5_670.jpg'
    ]
  },
  {
    id: 'carnettistes-tribulants',
    title: 'Carnettistes Tribulants',
    category: Category.CARNETS,
    year: '2019',
    description: 'Carnets de voyage et d\'observation du paysage.',
    images: [
      '/src/assets/images/carnettistes-tribulants/2-Rosine-dans-son-jardin_670.jpg',
      '/src/assets/images/carnettistes-tribulants/8--les-outils-agricolesok_670.jpg',
      '/src/assets/images/carnettistes-tribulants/16--Jardin-de-Rosine_670.jpg',
      '/src/assets/images/carnettistes-tribulants/18-Sechoir_670.jpg',
      '/src/assets/images/carnettistes-tribulants/Anoukfour_670.jpg',
      '/src/assets/images/carnettistes-tribulants/La-maison_670.jpg',
      '/src/assets/images/carnettistes-tribulants/Chevres-feuille-d-automne_670.jpg',
      '/src/assets/images/carnettistes-tribulants/Praline-et-la-vue-lointaine_670.jpg'
    ]
  },
  {
    id: 'publications-evenements',
    title: 'Publications & Événements',
    category: Category.MEDIAS,
    year: '2018',
    description: 'Participations à des événements et publications.',
    images: [
      '/src/assets/images/publications-evenements/magiv_670.jpg',
      '/src/assets/images/publications-evenements/publica-lana-copie_575.jpg',
      '/src/assets/images/publications-evenements/dessin-1_670.jpg',
      '/src/assets/images/publications-evenements/dessin-2_670.jpg',
      '/src/assets/images/publications-evenements/mise-en-page-craq_670.jpg'
    ]
  },
  {
    id: 'parcours',
    title: 'Parcours',
    category: Category.BIOGRAPHIE,
    year: '2017',
    description: 'Parcours professionnel et personnel.',
    images: [
      '/src/assets/images/parcours/reparcours-actu-2017_670.jpg'
    ]
  },
  {
    id: 'contes-bestiaire',
    title: 'Contes et bestiaire',
    category: Category.ILLUSTRATION,
    year: '2023',
    description: 'Illustrations narratives et bestiaire imaginaire.',
    images: [
      '/src/assets/images/contes-bestiaire/iouton1oui_670.png',
      '/src/assets/images/contes-bestiaire/iouton2-web_670.png',
      '/src/assets/images/contes-bestiaire/mammouth_670.jpg'
    ]
  },
  {
    id: 'gravures',
    title: 'Gravures',
    category: Category.ART,
    year: '2022',
    description: 'Travaux artistiques explorant les techniques de gravure.',
    images: [
      '/src/assets/images/gravures/bls-anciens2_670.jpg',
      '/src/assets/images/gravures/gravureblss_670.jpg',
      '/src/assets/images/gravures/xylo_670.jpg',
      '/src/assets/images/gravures/lynx-et-pain_670.jpg'
    ]
  }
];
