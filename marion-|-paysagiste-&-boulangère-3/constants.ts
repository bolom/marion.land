
import { Category, Project } from './types';

// ============================================================================
// PROJETS ARCHITECTURE ET ESPACES DURABLES
// ============================================================================

const PROJETS_ARCHITECTURE = [
  {
    id: 'halle-viviante',
    title: 'La Halle Viviante',
    category: Category.PROJET,
    year: '2026',
    description: 'Conception d\'un espace hybride entre halle de marché et lieu de vie bioclimatique. Ce projet explore les synergies entre agriculture urbaine, commerce local et espaces de vie durables. Intégrant des systèmes agroécologiques et des matériaux biosourcés, la Halle Viviante propose un modèle alternatif d\'échange et de consommation en milieu urbain.',
    images: [
      'https://marion.land/images/halle-viviante/IMG_3041.png',
      'https://marion.land/images/halle-viviante/chantier-projet-eape1.png',
      'https://marion.land/images/halle-viviante/chantier-projet-etape-2.png'
    ],
    externalLink: 'https://halle-vivante.land'
  }
];

// ============================================================================
// PROJETS BOTANIQUES ET VÉGÉTAUX
// ============================================================================

const PROJETS_BOTANIQUE = [
  {
    id: 'vegetaux',
    title: 'Végétaux',
    category: Category.BOTANIQUE,
    year: '2023',
    description: 'Inventaire graphique et sensible de la flore locale. Ce projet propose une exploration botanique à travers des représentations visuelles qui mêlent observation naturaliste et sensibilité esthétique.',
    images: [
      'https://marion.land/images/vegetaux/plantouz1_670.jpg',
      'https://marion.land/images/vegetaux/plantouz2_670.jpg',
      'https://marion.land/images/vegetaux/triptilok_670.jpg',
      'https://marion.land/images/vegetaux/palmiers_670.jpg',
      'https://marion.land/images/vegetaux/le-jardin-de-Thuret_670.jpg',
      'https://marion.land/images/vegetaux/escalier-jardin-exotique-cabane-rouge_670.png',
      'https://marion.land/images/vegetaux/de-ouf3_670.png'
    ]
  }
];

// ============================================================================
// PROJETS VOYAGES ET PAYSAGES
// ============================================================================

const PROJETS_VOYAGES = [
  {
    id: 'voyage',
    title: 'Les campagnes sont nos jardins',
    category: Category.VOYAGE,
    year: '2023',
    description: 'Récits visuels d\'itinérance à travers les paysages ruraux. Ce projet documente les paysages, les pratiques agricoles et les écosystèmes rencontrés lors de voyages à travers différentes régions.',
    images: [
      'https://marion.land/images/voyage/belle-ile-medley_670.jpg',
      'https://marion.land/images/voyage/samzun_670.jpg',
      'https://marion.land/images/voyage/corse_670.jpg',
      'https://marion.land/images/voyage/doubs_670.jpg',
      'https://marion.land/images/voyage/premier-regards_670.jpg',
      'https://marion.land/images/voyage/vosges_670.jpg',
      'https://marion.land/images/voyage/mditeranne_670.jpg',
      'https://marion.land/images/voyage/pypy2_670.jpg',
      'https://marion.land/images/voyage/ecosse_670.jpg',
      'https://marion.land/images/voyage/irlande-du-nord_670.jpg',
      'https://marion.land/images/voyage/Inde-1_670.jpg',
      'https://marion.land/images/voyage/inde-2_670.jpg',
      'https://marion.land/images/voyage/slovaquie_670.jpg',
      'https://marion.land/images/voyage/mexik2_670.jpg'
    ]
  }
];

// ============================================================================
// PROJETS ARTISTIQUES
// ============================================================================

const PROJETS_ART = [
  {
    id: 'margival',
    title: 'Margival - Théâtre de la mémoire',
    category: Category.ART,
    year: '2023',
    description: 'Installation artistique explorant les strates mémorielles d\'un camp militaire désaffecté. Questionnement sur le temps et l\'espace.',
    images: [
      'https://marion.land/images/margival/tischet-des-combes_670.jpg',
      'https://marion.land/images/margival/dessin1re-imp-copie_630.jpg',
      'https://marion.land/images/margival/TABLE-DESSIN-MARGIVAL-_630.jpg',
      'https://marion.land/images/margival/carte-sens-copie_665.jpg',
      'https://marion.land/images/margival/axo-entireoo_670.jpg',
      'https://marion.land/images/margival/trois-margioo_630.jpg',
      'https://marion.land/images/margival/master-plan-web_670.png',
      'https://marion.land/images/margival/vue-toit-tischetok_630.jpg'
    ]
  },
  {
    id: 'gravures',
    title: 'Gravures',
    category: Category.ART,
    year: '2022',
    description: 'Expérimentations sur les textures végétales et impressions révélant les qualités tactiles des matériaux naturels.',
    images: [
      'https://marion.land/images/gravures/bls-anciens2_670.jpg',
      'https://marion.land/images/gravures/gravureblss_670.jpg',
      'https://marion.land/images/gravures/xylo_670.jpg',
      'https://marion.land/images/gravures/lynx-et-pain_670.jpg'
    ]
  },
  {
    id: 'contes-bestiaire',
    title: 'Contes et bestiaire',
    category: Category.ILLUSTRATION,
    year: '2023',
    description: 'Illustrations narratives et bestiaire imaginaire mêlant réalité végétale et créatures mythiques.',
    images: [
      'https://marion.land/images/contes-bestiaire/iouton1oui_670.png',
      'https://marion.land/images/contes-bestiaire/iouton2-web_670.png',
      'https://marion.land/images/contes-bestiaire/mammouth_670.jpg'
    ]
  }
];

// ============================================================================
// PROJETS CARTOGRAPHIE
// ============================================================================

const PROJETS_CARTOGRAPHIE = [
  {
    id: 'cartographie-sensible',
    title: 'Cartographie sensible',
    category: Category.CARTOGRAPHIE,
    year: '2022',
    description: 'Représentation émotionnelle du territoire. Une carte sensible laisse la liberté au cartographe d\'intégrer ses émotions à travers la pratique graphique.',
    images: [
      'https://marion.land/images/cartographie-sensible/carte-sensible-blois_670.jpg',
      'https://marion.land/images/cartographie-sensible/blois-loire_670.jpg',
      'https://marion.land/images/cartographie-sensible/muides_670.jpg',
      'https://marion.land/images/cartographie-sensible/coupe-de-la-mort-copie_670.jpg',
      'https://marion.land/images/cartographie-sensible/photo-st-omer_670.jpg'
    ]
  }
];

// ============================================================================
// PROJETS BOULANGERIE
// ============================================================================

const PROJETS_BOULANGERIE = [
  {
    id: 'boulenc-cheminotte',
    title: 'Boulenc\' Cheminotte',
    category: Category.BOULANGERIE,
    year: '2021',
    description: 'Boulangerie artisanale mobile produisant des pains 100% levain à partir de variétés anciennes de blés. Un projet à la fois productif et pédagogique.',
    images: [
      'https://marion.land/images/boulenc-cheminotte/fournil-villeneuve_670.jpg',
      'https://marion.land/images/boulenc-cheminotte/fenetre-amap_670.jpg',
      'https://marion.land/images/boulenc-cheminotte/boulenco_670.jpg',
      'https://marion.land/images/boulenc-cheminotte/mise-en-place-esthetique2_670.jpg',
      'https://marion.land/images/boulenc-cheminotte/48378240_307118563237367_7343309704291942400_n_670.jpg'
    ],
    externalLink: 'https://lacheminotte.wixsite.com/boulenc-cheminotte'
  }
];

// ============================================================================
// PROJETS FERME ET AGRICULTURE
// ============================================================================

const PROJETS_FERME = [
  {
    id: 'claj-ferme-batailleuse',
    title: 'CLAJ Ferme de La Batailleuse',
    category: Category.FERME,
    year: '2021',
    description: 'Immersion au sein d\'une ferme pédagogique alliant agroécologie, éducation populaire et insertion sociale.',
    images: [
      'https://marion.land/images/claj-ferme-batailleuse/ferme-poster_670.jpg',
      'https://marion.land/images/claj-ferme-batailleuse/boulang-anouk_670.jpg',
      'https://marion.land/images/claj-ferme-batailleuse/ferme_670.jpg',
      'https://marion.land/images/claj-ferme-batailleuse/chevre2_670.jpg',
      'https://marion.land/images/claj-ferme-batailleuse/cochon_670.jpg',
      'https://marion.land/images/claj-ferme-batailleuse/vue-de-yourtecaravanere_670.jpg',
      'https://marion.land/images/claj-ferme-batailleuse/bucheron_670.jpg',
      'https://marion.land/images/claj-ferme-batailleuse/affiches_670.jpg'
    ]
  }
];

// ============================================================================
// PROJETS EXPOSITIONS
// ============================================================================

const PROJETS_EXPOSITIONS = [
  {
    id: 'expo-boulange',
    title: 'Expo Boulange!',
    category: Category.EXPOSITION,
    year: '2020',
    description: 'Valorisation des gestes et savoir-faire liés à la transformation des céréales et à la culture du pain.',
    images: [
      'https://marion.land/images/expo-boulange/expo-boulange-2_670.jpg',
      'https://marion.land/images/expo-boulange/fournil-de-reno-s_670.jpg',
      'https://marion.land/images/expo-boulange/conquete_670.jpg',
      'https://marion.land/images/expo-boulange/romain-enfourne_670.jpg',
      'https://marion.land/images/expo-boulange/ceci-n-est-pas-une-boul_670.jpg',
      'https://marion.land/images/expo-boulange/lapin-kawaii_670.jpg'
    ]
  }
];

// ============================================================================
// PROJETS ÉDUCATION
// ============================================================================

const PROJETS_EDUCATION = [
  {
    id: 'itinérance-educative',
    title: 'Itinérance éducative',
    category: Category.EDUCATION,
    year: '2020',
    description: 'Approches pédagogiques mobiles axées sur l\'apprentissage par l\'expérience et la découverte du vivant.',
    images: [
      'https://marion.land/images/itinérance-educative/mockup-de-ferme-en-ecole2_512.jpg',
      'https://marion.land/images/itinérance-educative/pub-lana_583.jpg',
      'https://marion.land/images/itinérance-educative/pub-lana2_670.jpg',
      'https://marion.land/images/itinérance-educative/pub-lanaok_583.jpg',
      'https://marion.land/images/itinérance-educative/pub-lana4_670.jpg',
      'https://marion.land/images/itinérance-educative/pub-lana5_670.jpg'
    ]
  }
];

// ============================================================================
// PROJETS CARNETS
// ============================================================================

const PROJETS_CARNETS = [
  {
    id: 'carnettistes-tribulants',
    title: 'Carnettistes Tribulants',
    category: Category.CARNETS,
    year: '2019',
    description: 'Exploration sensible du monde végétal et des paysages à travers le dessin et le carnet de bord.',
    images: [
      'https://marion.land/images/carnettistes-tribulants/2-Rosine-dans-son-jardin_670.jpg',
      'https://marion.land/images/carnettistes-tribulants/8--les-outils-agricolesok_670.jpg',
      'https://marion.land/images/carnettistes-tribulants/16--Jardin-de-Rosine_670.jpg',
      'https://marion.land/images/carnettistes-tribulants/18-Sechoir_670.jpg',
      'https://marion.land/images/carnettistes-tribulants/Anoukfour_670.jpg',
      'https://marion.land/images/carnettistes-tribulants/La-maison_670.jpg',
      'https://marion.land/images/carnettistes-tribulants/Chevres-feuille-d-automne_670.jpg',
      'https://marion.land/images/carnettistes-tribulants/Praline-et-la-vue-lointaine_670.jpg'
    ]
  }
];

// ============================================================================
// PROJETS MÉDIAS ET COMMUNICATION
// ============================================================================

const PROJETS_MEDIAS = [
  {
    id: 'publications-evenements',
    title: 'Publications & Événements',
    category: Category.MEDIAS,
    year: '2018',
    description: 'Contributions graphiques et narratives à des revues, expositions et manifestations culturelles.',
    images: [
      'https://marion.land/images/publications-evenements/magiv_670.jpg',
      'https://marion.land/images/publications-evenements/publica-lana-copie_575.jpg',
      'https://marion.land/images/publications-evenements/dessin-1_670.jpg',
      'https://marion.land/images/publications-evenements/dessin-2_670.jpg',
      'https://marion.land/images/publications-evenements/mise-en-page-craq_670.jpg'
    ]
  }
];

// ============================================================================
// PROJETS BIOGRAPHIE
// ============================================================================

const PROJETS_BIOGRAPHIE = [
  {
    id: 'parcours-visuel',
    title: 'Itinéraire Graphique',
    category: Category.BIOGRAPHIE,
    year: '2017',
    description: 'Visualisation d\'un parcours entre architecture du paysage et boulangerie artisanale.',
    images: [
      'https://marion.land/images/parcours/reparcours-actu-2017_670.jpg'
    ]
  }
];

// ============================================================================
// EXPORT FINAL
// ============================================================================

export const PROJECTS: Project[] = [
  ...PROJETS_ARCHITECTURE,
  ...PROJETS_BOTANIQUE,
  ...PROJETS_VOYAGES,
  ...PROJETS_ART,
  ...PROJETS_CARTOGRAPHIE,
  ...PROJETS_BOULANGERIE,
  ...PROJETS_FERME,
  ...PROJETS_EXPOSITIONS,
  ...PROJETS_EDUCATION,
  ...PROJETS_CARNETS,
  ...PROJETS_MEDIAS,
  ...PROJETS_BIOGRAPHIE
];
