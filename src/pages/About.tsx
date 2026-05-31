import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const competencies = [
  'CGI / 3D Visualization',
  'Product Visualization',
  'Interior Rendering',
  'Visual Design',
  'Image Creation',
  'Lighting & Materials',
  'Art Direction',
  'Post-production',
];

export default function About() {
  return (
    <>
      <SEO
        title="About | Luca Amore"
        description="Visual designer et infographiste 3D spécialisé dans la création d'images premium, la visualisation produit et les univers de marque."
      />

      <div className="pt-28 md:pt-36 pb-24 px-6 md:px-10 max-w-6xl mx-auto w-full">

        {/* Portrait + Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-col md:flex-row md:items-start gap-10 md:gap-16 mb-16 md:mb-20"
        >
          {/* Portrait */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden ring-1 ring-white/10">
              <img
                src="/assets/portrait/luca_portrait.png"
                alt="Luca Amore"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Name + bio */}
          <div className="flex flex-col justify-center">
            <p className="text-white/30 text-[11px] tracking-[0.25em] uppercase mb-4">
              About
            </p>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-snug mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Luca Amore
            </h1>
            <p className="text-white/55 text-sm md:text-base leading-relaxed font-light max-w-xl">
              Visual designer et infographiste 3D spécialisé dans la création d&apos;images
              premium, la visualisation produit, l&apos;architecture intérieure et les univers
              de marque. Mon travail combine sens du détail, composition, lumière, matériaux
              et rendu photoréaliste.
            </p>
          </div>
        </motion.div>

        {/* Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15, ease: 'easeOut' }}
          className="border-t border-white/8 pt-12"
        >
          <p className="text-white/30 text-[11px] tracking-[0.25em] uppercase mb-8">
            Compétences
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {competencies.map((c) => (
              <span key={c} className="text-white/50 text-sm font-light">
                {c}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Selected clients */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25, ease: 'easeOut' }}
          className="border-t border-white/8 pt-12 mt-12"
        >
          <p className="text-white/30 text-[11px] tracking-[0.25em] uppercase mb-8">
            Clients sélectionnés
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              'Boucheron', 'Chaumet', 'La Prairie', 'Jean Paul Gaultier',
              'Hugo Boss', 'Chantelle', 'Chantal Thomass', 'Lacoste',
            ].map((client) => (
              <span
                key={client}
                className="text-white/40 text-sm font-light"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {client}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </>
  );
}
