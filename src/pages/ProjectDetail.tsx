import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { getProjectBySlug, getAdjacentProjects } from '../data/projects';
import SEO from '../components/SEO';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [lightbox, setLightbox] = useState<string | null>(null);

  const project = slug ? getProjectBySlug(slug) : undefined;
  const { prev, next } = slug
    ? getAdjacentProjects(slug)
    : { prev: null, next: null };

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-6">
        <p className="text-white/40 text-sm">Projet introuvable.</p>
        <Link
          to="/"
          className="text-white/50 text-xs tracking-[0.15em] uppercase hover:text-white transition-colors"
        >
          ← Retour au portfolio
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${project.title} — CGI & Visual Design`}
        description={project.shortDescription}
        image={project.coverImage}
      />

      {/* Back */}
      <div className="pt-20 md:pt-24 px-6 md:px-10 max-w-6xl mx-auto w-full">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={() => navigate(-1)}
          className="group flex items-center gap-3 text-white/35 hover:text-white/70 text-[11px] tracking-[0.15em] uppercase transition-colors duration-200 mb-10 md:mb-14"
        >
          <span className="w-5 h-px bg-current group-hover:w-7 transition-all duration-200" />
          Portfolio
        </motion.button>

        {/* Project header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="mb-8 md:mb-10"
        >
          <p className="text-white/35 text-[11px] tracking-[0.2em] uppercase mb-3">
            {project.category}
            {project.year && (
              <span className="text-white/20 ml-4">{project.year}</span>
            )}
          </p>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {project.title}
          </h1>
        </motion.div>

        {/* Cover image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 md:mb-12 overflow-hidden"
        >
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-auto object-cover max-h-[70vh]"
          />
        </motion.div>

        {/* Description + tags */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16 pb-12 border-b border-white/8"
        >
          <div className="md:col-span-2">
            <p className="text-white/55 text-sm md:text-base leading-relaxed font-light">
              {project.description}
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-white/25 text-[10px] tracking-[0.25em] uppercase mb-2">Client</p>
              <p className="text-white/70 text-sm">{project.client}</p>
            </div>
            <div>
              <p className="text-white/25 text-[10px] tracking-[0.25em] uppercase mb-2">Rôle</p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-white/35 text-[10px] tracking-wide border border-white/10 px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Gallery */}
        {project.images.length > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mb-16 md:mb-20"
          >
            <div
              className={`grid gap-4 md:gap-6 ${
                project.images.length === 2
                  ? 'grid-cols-1 md:grid-cols-2'
                  : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              }`}
            >
              {project.images.slice(1).map((img, i) => (
                <div
                  key={img}
                  className="overflow-hidden cursor-zoom-in group"
                  onClick={() => setLightbox(img)}
                >
                  <img
                    src={img}
                    alt={`${project.title} ${i + 2}`}
                    className="w-full h-auto transition-transform duration-400 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Prev / Next */}
        <div className="border-t border-white/8 pt-10 pb-16 flex items-center justify-between gap-8">
          {prev ? (
            <Link
              to={`/portfolio/${prev.slug}`}
              className="group flex flex-col gap-1.5"
            >
              <span className="flex items-center gap-2 text-white/25 text-[10px] tracking-[0.2em] uppercase">
                <span className="w-4 h-px bg-current group-hover:w-6 transition-all duration-200" />
                Précédent
              </span>
              <span
                className="text-white/60 group-hover:text-white text-base font-light transition-colors duration-200"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {prev.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              to={`/portfolio/${next.slug}`}
              className="group flex flex-col gap-1.5 items-end"
            >
              <span className="flex items-center gap-2 text-white/25 text-[10px] tracking-[0.2em] uppercase">
                Suivant
                <span className="w-4 h-px bg-current group-hover:w-6 transition-all duration-200" />
              </span>
              <span
                className="text-white/60 group-hover:text-white text-base font-light transition-colors duration-200"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {next.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/96 flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
            onClick={() => setLightbox(null)}
          >
            <motion.img
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={lightbox}
              alt="Zoom"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-5 right-6 text-white/40 hover:text-white text-2xl leading-none transition-colors"
              aria-label="Fermer"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
