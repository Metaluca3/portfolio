export interface Model3D {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

export const models3d: Model3D[] = [
  {
    id: 1,
    title: 'Horatio Chair',
    category: 'Fauteuil tressé',
    description: `Modélisation d'un fauteuil à structure tressée, avec un travail précis sur les volumes, les croisements de matière et le rendu naturel du bois. Mise en situation réaliste dans un intérieur lumineux.`,
    image: '/assets/portfolio/3d-models/1-horatio-chair.png',
  },
  {
    id: 2,
    title: 'Sage Chair',
    category: 'Chaise design',
    description: `Chaise contemporaine aux lignes douces, modélisée avec une attention particulière portée au tissu, aux formes arrondies et aux pieds fins noirs. Rendu sobre et élégant dans un espace intérieur moderne.`,
    image: '/assets/portfolio/3d-models/2-sage-chair.png',
  },
  {
    id: 3,
    title: 'Branzie Armchair',
    category: 'Fauteuil lounge',
    description: `Fauteuil lounge avec structure tubulaire et tressage textile. Le travail met en valeur les matériaux, le coussinage et le plaid dans une ambiance extérieure raffinée.`,
    image: '/assets/portfolio/3d-models/3-branzie-armchair.png',
  },
  {
    id: 4,
    title: 'Jardin Sofa',
    category: 'Canapé extérieur',
    description: `Canapé en rotin inspiré de mobilier outdoor, modélisé avec une attention particulière portée aux détails de tressage, aux coussins et aux proportions générales.`,
    image: '/assets/portfolio/3d-models/4-jardin-sofa.png',
  },
  {
    id: 5,
    title: 'Alto Armchair',
    category: 'Fauteuil contemporain',
    description: `Fauteuil bas à structure tubulaire noire et coussins capitonnés. Le rendu met en avant le confort, la matière textile et l'intégration dans un intérieur contemporain.`,
    image: '/assets/portfolio/3d-models/5-alto-armchair.png',
  },
  {
    id: 6,
    title: 'Madera Dining Table',
    category: 'Table à manger',
    description: `Table en bois au design minimaliste, avec travail sur les proportions, le veinage du bois et la structure métallique discrète. Mise en scène dans une salle à manger lumineuse.`,
    image: '/assets/portfolio/3d-models/6-madera-table.png',
  },
  {
    id: 7,
    title: 'Madai Chair',
    category: 'Chaise de bureau',
    description: `Chaise de bureau contemporaine avec coque en bois, assise textile claire et piètement à roulettes. Rendu professionnel dans un espace de travail moderne.`,
    image: '/assets/portfolio/3d-models/7-madai-chair.png',
  },
  {
    id: 8,
    title: 'Bedside & Table Lamp',
    category: 'Table de chevet & lampe',
    description: `Modélisation d'un ensemble table de chevet et lampe, avec un soin particulier porté au bois clair, à l'éclairage chaud et à l'atmosphère intime d'une chambre contemporaine.`,
    image: '/assets/portfolio/3d-models/8-bedside.png',
  },
  {
    id: 9,
    title: 'Itiga Chair',
    category: 'Fauteuil en rotin',
    description: `Fauteuil enveloppant en rotin, travaillé avec des lignes courbes et une structure rythmée. Mise en situation dans un espace lounge naturel et chaleureux.`,
    image: '/assets/portfolio/3d-models/9-itiga-chair.png',
  },
];
