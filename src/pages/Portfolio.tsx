import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import SEO from '../components/SEO';

type Filter = 'All' | 'Luxury' | 'Fashion' | 'Visual Design' | 'Outdoor';

const filters: Filter[] = ['All', 'Luxury', 'Fashion', 'Visual Design', 'Outdoor'];

const categoryMap: Record<string, Filter[]> = {
  'Luxury Jewelry': ['Luxury'],
  'Beauty & Luxury': ['Luxury'],
  'Fashion': ['Fashion'],
  'Visual Design': ['Visual Design'],
  'Outdoor': ['Outdoor'],
};

export default function Portfolio() {
  const [active, setActive] = useState<Filter>('All');

  const filtered =
    active === 'All'
      ? projects
      : projects.filter((p) => {
          const mapped = categoryMap[p.category] ?? [];
          return mapped.includes(active);
        });

  const sorted = [...filtered].sort((a, b) => a.order - b.order);

  return (
    <>
      <SEO
        title="Portfolio | LA7 Visuals"
        description="Sélection de projets visuels — CGI, 3D, design d'image, luxe, mode, design produit."
      />

      <div className="pt-28 md:pt-36 pb-24 px-6 md:px-10 max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="mb-10 md:mb-12"
        >
          <h1
            className="text-3xl md:text-4xl font-light text-white mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Portfolio
          </h1>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`text-[11px] tracking-[0.12em] uppercase px-4 py-2 border transition-all duration-200 ${
                  active === f
                    ? 'border-white/50 text-white bg-white/5'
                    : 'border-white/12 text-white/35 hover:border-white/25 hover:text-white/60'
                }`}
              >
                {f}
              </button>
            ))}
            <span className="text-white/20 text-[11px] self-center ml-2">
              {sorted.length} projet{sorted.length > 1 ? 's' : ''}
            </span>
          </div>
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-16"
          >
            {sorted.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
