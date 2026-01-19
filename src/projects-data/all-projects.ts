
import { Project, Category } from '../../types';

// Données pour le projet La Halle Viviante
const halleVivianteData = {
  id: 'halle-viviante',
  title: 'La Halle Viviante',
  category: Category.PROJET,
  year: '2026',
  description: 'Conception d\'un espace hybride entre halle de marché et lieu de vie bioclimatique. Ce projet explore les synergies entre agriculture urbaine, commerce local et espaces de vie durables. Intégrant des systèmes agroécologiques et des matériaux biosourcés, la Halle Viviante propose un modèle alternatif d\'échange et de consommation en milieu urbain. Les images montrent les phases de conception et de réalisation du projet architectural.',
  images: [
    {
      src: 'https://marion.land/images/halle-viviante/IMG_3041.png',
      description: 'Vue d\'ensemble du projet architectural de la Halle Viviante - Représentation conceptuelle de l\'espace hybride entre halle de marché et lieu de vie bioclimatique'
    },
    {
      src: 'https://marion.land/images/halle-viviante/chantier-projet-eape1.png',
      description: 'Phase de conception du projet architectural - Étude préliminaire de la Halle Viviante'
    },
    {
      src: 'https://marion.land/images/halle-viviante/chantier-projet-etape-2.png',
      description: 'Étape de réalisation du projet architectural - Avancement de la construction de la Halle Viviante'
    }
  ],
  externalLink: 'https://halle-vivante.land'
};

// Données pour le projet Végétaux
const vegetauxData = {
  id: 'vegetaux',
  title: 'Végétaux',
  category: Category.BOTANIQUE,
  year: '2023',
  description: 'Inventaire graphique et sensible de la flore locale. Ce projet propose une exploration botanique à travers des représentations visuelles qui mêlent observation naturaliste et sensibilité esthétique. Il s\'agit d\'une documentation artistique des plantes et végétaux du territoire, mettant en lumière les relations entre les espèces végétales et leur environnement. Les images montrent diverses plantes, végétaux et compositions florales du territoire.',
  images: [
    {
      src: 'https://marion.land/images/vegetaux/plantouz1_670.jpg',
      description: 'Herbier des jardins de France - Collection de plantes locales et de végétaux du territoire'
    },
    {
      src: 'https://marion.land/images/vegetaux/plantouz2_670.jpg',
      description: 'Herbier des jardins de France - Documentation botanique de la flore locale'
    },
    {
      src: 'https://marion.land/images/vegetaux/triptilok_670.jpg',
      description: 'Herbier des jardins de France - Composition triptyque de végétaux et de plantes locales'
    },
    {
      src: 'https://marion.land/images/vegetaux/palmiers_670.jpg',
      description: 'Herbier des jardins de France - Étude de palmiers et de végétaux exotiques'
    },
    {
      src: 'https://marion.land/images/vegetaux/le-jardin-de-Thuret_670.jpg',
      description: 'Herbier des jardins de France - Jardin de Thuret - Collection botanique historique'
    },
    {
      src: 'https://marion.land/images/vegetaux/escalier-jardin-exotique-cabane-rouge_670.png',
      description: 'Herbier des jardins de France - Vue d\'escalier dans un jardin exotique avec cabane rouge'
    },
    {
      src: 'https://marion.land/images/vegetaux/de-ouf3_670.png',
      description: 'Herbier des jardins de France - Composition florale et végétale'
    }
  ]
};

// Données pour le projet Les campagnes sont nos jardins
const voyageData = {
  id: 'voyage',
  title: 'Les campagnes sont nos jardins',
  category: Category.VOYAGE,
  year: '2023',
  description: 'Récits visuels d\'itinérance à travers les paysages ruraux. Ce projet documente les paysages, les pratiques agricoles et les écosystèmes rencontrés lors de voyages à travers différentes régions. Il explore les relations entre l\'homme et la nature, les systèmes agricoles durables et les paysages cultivés comme espaces de vie et de production. Les images montrent des paysages variés de différentes régions visitées lors des voyages.',
  images: [
    {
      src: 'https://marion.land/images/voyage/belle-ile-medley_670.jpg',
      description: 'Paysages de Belle-Île - Récit visuel d\'itinérance à travers les paysages bretons'
    },
    {
      src: 'https://marion.land/images/voyage/samzun_670.jpg',
      description: 'Paysages de Samzun - Exploration des paysages côtiers et marins'
    },
    {
      src: 'https://marion.land/images/voyage/corse_670.jpg',
      description: 'Paysages de Corse - Documentation des paysages méditerranéens et montagneux'
    },
    {
      src: 'https://marion.land/images/voyage/doubs_670.jpg',
      description: 'Paysages du Doubs - Exploration des paysages ruraux et fluviaux'
    },
    {
      src: 'https://marion.land/images/voyage/premier-regards_670.jpg',
      description: 'Premiers regards - Vue d\'ensemble des paysages explorés lors des voyages'
    },
    {
      src: 'https://marion.land/images/voyage/vosges_670.jpg',
      description: 'Paysages des Vosges - Documentation des paysages forestiers et montagneux'
    },
    {
      src: 'https://marion.land/images/voyage/mditeranne_670.jpg',
      description: 'Paysages méditerranéens - Exploration des paysages du bassin méditerranéen'
    },
    {
      src: 'https://marion.land/images/voyage/pypy2_670.jpg',
      description: 'Paysages de Pypy - Documentation des paysages ruraux et naturels'
    },
    {
      src: 'https://marion.land/images/voyage/ecosse_670.jpg',
      description: 'Paysages d\'Écosse - Exploration des paysages atlantiques et montagneux'
    },
    {
      src: 'https://marion.land/images/voyage/irlande-du-nord_670.jpg',
      description: 'Paysages d\'Irlande du Nord - Documentation des paysages insulaires et côtes'
    },
    {
      src: 'https://marion.land/images/voyage/Inde-1_670.jpg',
      description: 'Paysages d\'Inde - Exploration des paysages culturels et naturels'
    },
    {
      src: 'https://marion.land/images/voyage/inde-2_670.jpg',
      description: 'Paysages d\'Inde (suite) - Documentation des paysages variés du sous-continent'
    },
    {
      src: 'https://marion.land/images/voyage/slovaquie_670.jpg',
      description: 'Paysages de Slovaquie - Exploration des paysages européens centraux'
    },
    {
      src: 'https://marion.land/images/voyage/mexik2_670.jpg',
      description: 'Paysages du Mexique - Documentation des paysages tropicaux et culturels'
    }
  ]
};

// Données pour le projet Margival - Théâtre de la mémoire
const margivalData = {
  id: 'margival',
  title: 'Margival - Théâtre de la mémoire',
  category: Category.ART,
  year: '2023',
  description: 'Installation artistique explorant les strates mémorielles d\'un lieu. Ce projet s\'intéresse aux couches successives d\'occupation humaine d\'un espace, à la manière dont les usages, les souvenirs et les transformations imprègnent le territoire. À travers une approche sensible et poétique, il questionne la relation entre le temps, l\'espace et la mémoire collective. Les images montrent des dessins, des cartes et des plans relatifs au projet artistique.',
  images: [
    {
      src: 'https://marion.land/images/margival/tischet-des-combes_670.jpg',
      description: 'Vue de Tischet des Combes - Documentation du site pour le projet Margival'
    },
    {
      src: 'https://marion.land/images/margival/dessin1re-imp-copie_630.jpg',
      description: 'Première impression du dessin - Croquis initial du projet Margival'
    },
    {
      src: 'https://marion.land/images/margival/TABLE-DESSIN-MARGIVAL-_630.jpg',
      description: 'Table de dessin du projet Margival - Vue d\'ensemble des premières esquisses'
    },
    {
      src: 'https://marion.land/images/margival/carte-sens-copie_665.jpg',
      description: 'Carte sensible du projet Margival - Représentation émotionnelle du territoire'
    },
    {
      src: 'https://marion.land/images/margival/axo-entireoo_670.jpg',
      description: 'Vue axonométrique du projet Margival - Représentation tridimensionnelle du projet'
    },
    {
      src: 'https://marion.land/images/margival/trois-margioo_630.jpg',
      description: 'Trois vues du projet Margival - Perspectives multiples du dispositif artistique'
    },
    {
      src: 'https://marion.land/images/margival/master-plan-web_670.png',
      description: 'Plan maître du projet Margival - Vue d\'ensemble du dispositif spatial'
    },
    {
      src: 'https://marion.land/images/margival/vue-toit-tischetok_630.jpg',
      description: 'Vue du toit de Tischet - Perspective du projet Margival depuis le point de vue du toit'
    }
  ]
};

// Données pour le projet Cartographie sensible
const cartographieSensibleData = {
  id: 'cartographie-sensible',
  title: 'Cartographie sensible',
  category: Category.CARTOGRAPHIE,
  year: '2022',
  description: 'L\'exercice de cartographie est la représentation dans l\'espace de repères décrivant un thème et une échelle. Une carte sensible laisse la liberté au cartographe d\'intégrer ses émotions à travers la pratique graphique. Ces travaux représentent différentes expériences de description de la vallée de la Loire et d\'autres territoires explorés. Cette approche propose une lecture alternative du territoire, où les éléments émotionnels, sensoriels et subjectifs viennent enrichir la représentation géographique traditionnelle. Les images montrent des cartes et des représentations graphiques sensibles de différents territoires.',
  images: [
    {
      src: 'https://marion.land/images/cartographie-sensible/carte-sensible-blois_670.jpg',
      description: 'Carte sensible de Blois - Représentation émotionnelle de la ville de Blois'
    },
    {
      src: 'https://marion.land/images/cartographie-sensible/blois-loire_670.jpg',
      description: 'Vue de Blois et de la Loire - Cartographie sensible du paysage fluvial'
    },
    {
      src: 'https://marion.land/images/cartographie-sensible/muides_670.jpg',
      description: 'Carte sensible de Muides - Documentation sensible du territoire de Muides-sur-Loire'
    },
    {
      src: 'https://marion.land/images/cartographie-sensible/coupe-de-la-mort-copie_670.jpg',
      description: 'Coupe de la mort - Représentation graphique des strates paysagères'
    },
    {
      src: 'https://marion.land/images/cartographie-sensible/photo-st-omer_670.jpg',
      description: 'Vue de Saint-Omer - Cartographie sensible du paysage de Saint-Omer'
    }
  ]
};

// Données pour le projet Boulenc' Cheminotte
const boulencCheminotteData = {
  id: 'boulenc-cheminotte',
  title: 'Boulenc\' Cheminotte',
  category: Category.BOULANGERIE,
  year: '2021',
  description: 'La Boulenc\' Cheminotte est une petite boulangerie à plusieurs facettes. Située cette année 2021 en Puisaye (89), au Café & Fournil associatif de Chez Man Jeanne et Petit Pierre du village de Villeneuve-les-Genêts, elle produit et distribue des pains 100% levain élaborés à partir des farines issus de l\'Agriculture biologique. Des farines issues de variétés anciennes de blés de population diversifiés que Vincent Lefèvre, paysan agronome, s\'engage à semer dans ses champs à St Fargeau. Plus qu\'une production dans l\'esprit de l\'économie sociale et solidaire, Il s\'agit d\'un travail de recherche vers une diversité des semences en région, une mouture respectueuse des nutriments contenus dans l\'amande farineuse des grains et une panification manuelle de la pétrie jusqu\'à l\'enfournement. Et voilà du pain paysan au café du village, au marché ou aux AMAP* ! Association pour le Maintien de l\'Agriculture Paysanne. La Cheminotte est aussi un fournil qui voyage à la rencontre des petits et grands curieux de la boulangerie. Ateliers à l\'école : Le four entre dans la cour de récréation et une journée d\'animation autour du pain s\'orchestre avec les élèves. De la maternelle au collège, elle se lie à plusieurs axes pédagogiques comme l\'apprentissage de la chronologie, du calcul, ou encore la découverte de phénomènes scientifiques naturels (fermentation, réaction de Maillard...). La journée est consacrée à comprendre l\'origine des ingrédients du pain, à la connaissance du métier de boulanger et à la fabrication de son pain pour rapporter à la maison. Tous apprentis boulangers : Faire son pain est une activité de groupe, accessible et valorisante. La boulenc\' Cheminotte peut intervenir dans différentes structures sociales (foyers, ITEP, IME, Maison de quartier...) et associatives. Boulanger d\'une journée ou pizzaïolo d\'un soir, confectionner des spécialités de différents horizons, beaucoup de recettes sont possibles avec le four à bois!',
  images: [
    {
      src: 'https://marion.land/images/boulenc-cheminotte/fournil-villeneuve_670.jpg',
      description: 'Fournil de Villeneuve - Vue d\'ensemble du fournil mobile de la Boulenc\' Cheminotte'
    },
    {
      src: 'https://marion.land/images/boulenc-cheminotte/fenetre-amap_670.jpg',
      description: 'Fenêtre de l\'AMAP - Distribution du pain à l\'AMAP via le fournil mobile'
    },
    {
      src: 'https://marion.land/images/boulenc-cheminotte/boulenco_670.jpg',
      description: 'Vue du fournil Boulenco - Présentation du fournil mobile en action'
    },
    {
      src: 'https://marion.land/images/boulenc-cheminotte/mise-en-place-esthetique2_670.jpg',
      description: 'Mise en place esthétique du fournil - Organisation esthétique du fournil mobile'
    },
    {
      src: 'https://marion.land/images/boulenc-cheminotte/48378240_307118563237367_7343309704291942400_n_670.jpg',
      description: 'Vue d\'ensemble du fournil mobile - Présentation complète du dispositif de boulangerie mobile'
    }
  ],
  externalLink: 'https://lacheminotte.wixsite.com/boulenc-cheminotte'
};

// Données pour le projet CLAJ Ferme de La Batailleuse
const clajFermeBatailleuseData = {
  id: 'claj-ferme-batailleuse',
  title: 'CLAJ Ferme de La Batailleuse',
  category: Category.FERME,
  year: '2021',
  description: 'Vie et travail au sein d\'une ferme pédagogique et sociale. Ce projet explore les dynamiques d\'une ferme associative qui allie production agricole, éducation populaire et insertion sociale. Il met en lumière les pratiques agroécologiques, les circuits courts et les solidarités territoriales à travers une expérience de terrain immersive. Les images montrent des animaux de ferme, des installations agricoles et des activités pédagogiques.',
  images: [
    {
      src: 'https://marion.land/images/claj-ferme-batailleuse/ferme-poster_670.jpg',
      description: 'Affiche de la ferme CLAJ - Promotion et communication de la ferme pédagogique'
    },
    {
      src: 'https://marion.land/images/claj-ferme-batailleuse/boulang-anouk_670.jpg',
      description: 'Anouk au fournil - Moment de boulangerie à la ferme CLAJ'
    },
    {
      src: 'https://marion.land/images/claj-ferme-batailleuse/ferme_670.jpg',
      description: 'Vue d\'ensemble de la ferme - Présentation du site de la ferme CLAJ'
    },
    {
      src: 'https://marion.land/images/claj-ferme-batailleuse/chevre2_670.jpg',
      description: 'Chèvres de la ferme - Documentation des animaux de la ferme pédagogique'
    },
    {
      src: 'https://marion.land/images/claj-ferme-batailleuse/cochon_670.jpg',
      description: 'Cochon de la ferme - Élevage et agriculture à la ferme CLAJ'
    },
    {
      src: 'https://marion.land/images/claj-ferme-batailleuse/vue-de-yourtecaravanere_670.jpg',
      description: 'Vue de la yourte caravanière - Hébergement et espace de vie à la ferme'
    },
    {
      src: 'https://marion.land/images/claj-ferme-batailleuse/bucheron_670.jpg',
      description: 'Bûcheron à la ferme - Activité de gestion forestière et boisement'
    },
    {
      src: 'https://marion.land/images/claj-ferme-batailleuse/affiches_670.jpg',
      description: 'Affiches de la ferme - Communication et promotion des activités de la ferme'
    }
  ]
};

// Données pour le projet Expo Boulange!
const expoBoulangeData = {
  id: 'expo-boulange',
  title: 'Expo Boulange!',
  category: Category.EXPOSITION,
  year: '2020',
  description: 'Exposition autour de la boulangerie et du pain. Ce projet met en valeur les gestes, les savoir-faire et les cultures liés à la transformation des céréales. Il explore les dimensions anthropologiques, sociales et symboliques du pain à travers des installations, des photographies et des objets qui racontent l\'histoire d\'un des aliments fondamentaux de l\'humanité. Les images montrent des fours, du pain et des installations liées à la boulangerie.',
  images: [
    {
      src: 'https://marion.land/images/expo-boulange/expo-boulange-2_670.jpg',
      description: 'Vue d\'ensemble de l\'exposition Expo Boulange! - Installation artistique autour de la boulangerie'
    },
    {
      src: 'https://marion.land/images/expo-boulange/fournil-de-reno-s_670.jpg',
      description: 'Fournil de Reno - Documentation photographique d\'un fournil traditionnel'
    },
    {
      src: 'https://marion.land/images/expo-boulange/conquete_670.jpg',
      description: 'La Conquête du pain - Exposition des croquis de rencontres avec différents boulangers'
    },
    {
      src: 'https://marion.land/images/expo-boulange/romain-enfourne_670.jpg',
      description: 'Romain enfourne - Moment de travail du boulanger Romain'
    },
    {
      src: 'https://marion.land/images/expo-boulange/ceci-n-est-pas-une-boul_670.jpg',
      description: 'Ceci n\'est pas une boule - Référence artistique à Magritte dans le contexte de la boulangerie'
    },
    {
      src: 'https://marion.land/images/expo-boulange/lapin-kawaii_670.jpg',
      description: 'Lapin kawaii - Illustration ludique dans le cadre de l\'exposition'
    }
  ]
};

// Données pour le projet Itinérance éducative
const itineranceEducativaData = {
  id: 'itinérance-educative',
  title: 'Itinérance éducative',
  category: Category.EDUCATION,
  year: '2020',
  description: 'Projets pédagogiques itinérants dans les écoles et structures sociales. Ce projet développe des approches éducatives mobiles qui s\'adaptent aux besoins locaux et aux spécificités territoriales. Il favorise l\'apprentissage par l\'expérience, la découverte du vivant et la sensibilisation à l\'environnement à travers des interventions dans divers contextes éducatifs. Les images montrent des documents et des supports pédagogiques liés aux interventions éducatives.',
  images: [
    {
      src: 'https://marion.land/images/itinérance-educative/mockup-de-ferme-en-ecole2_512.jpg',
      description: 'Maquette de ferme en école - Support pédagogique pour l\'itinérance éducative'
    },
    {
      src: 'https://marion.land/images/itinérance-educative/pub-lana_583.jpg',
      description: 'Publication \'Le voyage de Lana\' - Livre de jeunesse auto-édité'
    },
    {
      src: 'https://marion.land/images/itinérance-educative/pub-lana2_670.jpg',
      description: 'Publication \'Le voyage de Lana\' (suite) - Suite du livre de jeunesse'
    },
    {
      src: 'https://marion.land/images/itinérance-educative/pub-lanaok_583.jpg',
      description: 'Publication \'Le voyage de Lana\' - Version finale du livre de jeunesse'
    },
    {
      src: 'https://marion.land/images/itinérance-educative/pub-lana4_670.jpg',
      description: 'Publication \'Le voyage de Lana\' (version 4) - Quatrième version du livre'
    },
    {
      src: 'https://marion.land/images/itinérance-educative/pub-lana5_670.jpg',
      description: 'Publication \'Le voyage de Lana\' (version 5) - Cinquième version du livre'
    }
  ]
};

// Données pour le projet Carnettistes Tribulants
const carnettistesTribulantsData = {
  id: 'carnettistes-tribulants',
  title: 'Carnettistes Tribulants',
  category: Category.CARNETS,
  year: '2019',
  description: 'Carnets de voyage et d\'observation du paysage. Ce projet compile des observations graphiques et narratives réalisées lors de déplacements et d\'immersions territoriales. Il s\'agit d\'une démarche sensible d\'exploration du monde végétal, des pratiques agricoles et des relations entre l\'homme et le paysage à travers le dessin, la photographie et l\'écriture. Les images montrent des dessins de paysages, de jardins et d\'installations agricoles.',
  images: [
    {
      src: 'https://marion.land/images/carnettistes-tribulants/2-Rosine-dans-son-jardin_670.jpg',
      description: 'Rosine dans son jardin - Carnet de voyage et d\'observation du paysage'
    },
    {
      src: 'https://marion.land/images/carnettistes-tribulants/8--les-outils-agricolesok_670.jpg',
      description: 'Outils agricoles - Documentation des outils utilisés dans les pratiques agricoles'
    },
    {
      src: 'https://marion.land/images/carnettistes-tribulants/16--Jardin-de-Rosine_670.jpg',
      description: 'Jardin de Rosine - Observation et dessin du jardin personnel'
    },
    {
      src: 'https://marion.land/images/carnettistes-tribulants/18-Sechoir_670.jpg',
      description: 'Séchoir - Documentation d\'un équipement de séchage végétal'
    },
    {
      src: 'https://marion.land/images/carnettistes-tribulants/Anoukfour_670.jpg',
      description: 'Anouk au four - Moment de boulangerie documenté dans les carnets'
    },
    {
      src: 'https://marion.land/images/carnettistes-tribulants/La-maison_670.jpg',
      description: 'La maison - Dessin d\'une habitation dans le paysage'
    },
    {
      src: 'https://marion.land/images/carnettistes-tribulants/Chevres-feuille-d-automne_670.jpg',
      description: 'Chèvres et feuille d\'automne - Observation du vivant dans le paysage'
    },
    {
      src: 'https://marion.land/images/carnettistes-tribulants/Praline-et-la-vue-lointaine_670.jpg',
      description: 'Praline et la vue lointaine - Carnet de paysage avec figure humaine'
    }
  ]
};

// Données pour le projet Publications & Événements
const publicationsEvenementsData = {
  id: 'publications-evenements',
  title: 'Publications & Événements',
  category: Category.MEDIAS,
  year: '2018',
  description: 'Participations à des événements et publications. Ce projet regroupe différentes contributions à des revues, expositions et manifestations culturelles. Il témoigne de l\'engagement dans des réseaux professionnels, des collaborations interdisciplinaires et des réflexions croisées entre paysage, agriculture et création artistique. Les images montrent des publications, des documents imprimés et des supports de communication.',
  images: [
    {
      src: 'https://marion.land/images/publications-evenements/magiv_670.jpg',
      description: 'Publication MagIV - Contribution à la revue MagIV'
    },
    {
      src: 'https://marion.land/images/publications-evenements/publica-lana-copie_575.jpg',
      description: 'Publication \'Le voyage de Lana\' - Copie de la publication du livre de jeunesse'
    },
    {
      src: 'https://marion.land/images/publications-evenements/dessin-1_670.jpg',
      description: 'Dessin de publication - Illustration pour une publication'
    },
    {
      src: 'https://marion.land/images/publications-evenements/dessin-2_670.jpg',
      description: 'Dessin de publication (suite) - Suite des illustrations pour publication'
    },
    {
      src: 'https://marion.land/images/publications-evenements/mise-en-page-craq_670.jpg',
      description: 'Mise en page CRAQ - Publication dans les Cahiers de l\'école de Blois'
    }
  ]
};


// Données pour le projet Contes et bestiaire
const contesBestiaireData = {
  id: 'contes-bestiaire',
  title: 'Contes et bestiaire',
  category: Category.ILLUSTRATION,
  year: '2023',
  description: 'Illustrations narratives et bestiaire imaginaire. Ce projet explore les mondes fictionnels à travers des représentations graphiques qui mêlent réalité végétale et créatures imaginaires. Il s\'agit d\'une tentative de donner forme à des récits oraux et à des figures mythiques inspirées du vivant, créant ainsi un bestiaire poétique entre réel et imaginaire. Les images montrent des illustrations de personnages et de créatures imaginaires.',
  images: [
    {
      src: 'https://marion.land/images/contes-bestiaire/iouton1oui_670.png',
      description: 'Iouton 1 - Personnage du bestiaire imaginaire'
    },
    {
      src: 'https://marion.land/images/contes-bestiaire/iouton2-web_670.png',
      description: 'Iouton 2 - Personnage du bestiaire imaginaire (suite)'
    },
    {
      src: 'https://marion.land/images/contes-bestiaire/mammouth_670.jpg',
      description: 'Mammouth - Créature du bestiaire imaginaire'
    }
  ]
};

// Données pour le projet Gravures
const gravuresData = {
  id: 'gravures',
  title: 'Gravures',
  category: Category.ART,
  year: '2022',
  description: 'Travaux artistiques explorant les techniques de gravure. Ce projet expérimente les potentialités expressives de différentes techniques de gravure, du bois à la lithographie. Il s\'intéresse à la matérialité des surfaces, aux textures végétales et aux impressions qui révèlent les qualités tactiles et visuelles des matériaux naturels. Les images montrent des œuvres gravées et des impressions artistiques.',
  images: [
    {
      src: 'https://marion.land/images/gravures/bls-anciens2_670.jpg',
      description: 'Gravure des anciens - Technique de gravure traditionnelle'
    },
    {
      src: 'https://marion.land/images/gravures/gravureblss_670.jpg',
      description: 'Gravure - Œuvre gravée sur bois ou pierre'
    },
    {
      src: 'https://marion.land/images/gravures/xylo_670.jpg',
      description: 'Gravure xylographique - Technique de gravure sur bois'
    },
    {
      src: 'https://marion.land/images/gravures/lynx-et-pain_670.jpg',
      description: 'Lynx et pain - Gravure combinant animal et nourriture'
    }
  ]
};

// Données pour le projet Publications Participations Presse Evenements
const publicationsParticipationsPresseEvenementsData = {
  id: 'publications-participations-presse-evenements',
  title: 'Publications Participations Presse Evenements',
  category: Category.MEDIAS,
  year: '2018',
  description: 'Participations à des événements et publications dans la presse. Ce projet documente les différentes contributions à des médias, des expositions et des événements culturels. Il témoigne de l\'engagement dans des réseaux professionnels et des collaborations interdisciplinaires autour des thématiques du paysage, de l\'agriculture et de l\'environnement. Les images montrent des publications, des documents imprimés et des supports de communication.',
  images: [
    {
      src: 'https://marion.land/images/publications-evenements/magiv_670.jpg',
      description: 'Publication MagIV - Article ou contribution à la revue MagIV'
    },
    {
      src: 'https://marion.land/images/publications-evenements/publica-lana-copie_575.jpg',
      description: 'Publication \'Le voyage de Lana\' - Copie de la publication du livre de jeunesse'
    },
    {
      src: 'https://marion.land/images/publications-evenements/dessin-1_670.jpg',
      description: 'Dessin de publication - Illustration pour une publication dans la presse'
    },
    {
      src: 'https://marion.land/images/publications-evenements/dessin-2_670.jpg',
      description: 'Dessin de publication (suite) - Suite des illustrations publiées'
    }
  ]
};

// Exporter tous les projets dans une seule constante
export const ALL_PROJECTS_DATA = [
  halleVivianteData,
  vegetauxData,
  voyageData,
  margivalData,
  cartographieSensibleData,
  boulencCheminotteData,
  clajFermeBatailleuseData,
  expoBoulangeData,
  itineranceEducativaData,
  carnettistesTribulantsData,
  publicationsEvenementsData,
  contesBestiaireData,
  gravuresData,
  publicationsParticipationsPresseEvenementsData
];
