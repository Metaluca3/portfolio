import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Model3D } from '../data/models3d';

interface ModelCardProps {
  model: Model3D;
  index?: number;
}

export default function ModelCard({ model, index = 0 }: ModelCardProps) {
  const [lightbox, setLightbox] = useState(false);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{
          duration: 0.5,
          delay: Math.min(index * 0.06, 0.4),
          ease: 'easeOut',
        }}
      >
        {/* Image */}
        <div
          className="relative overflow-hidden bg-neutral-900 aspect-[4/3] cursor-zoom-in group"
          onClick={() => setLightbox(true)}
        >
          <img
            src={model.image}
            alt={model.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-400" />

          {/* Badge */}
          <div className="absolute top-3 left-3">
            <span className="text-[9px] tracking-[0.18em] uppercase text-white/70 bg-black/50 backdrop-blur-sm px-2.5 py-1 border border-white/10">
              Modélisation 3D
            </span>
          </div>

          {/* Zoom hint */}
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M1 10L10 1M10 1H4M10 1V7" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="mt-3 px-0.5">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-white/90 text-sm font-medium leading-snug">
              {model.title}
            </h3>
          </div>
          <p className="text-white/35 text-[11px] tracking-wide uppercase mt-0.5">
            {model.category}
          </p>
          <p className="text-white/30 text-[11px] mt-2 leading-relaxed line-clamp-3">
            {model.description}
          </p>
        </div>
      </motion.article>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/96 flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
            onClick={() => setLightbox(false)}
          >
            <motion.img
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={model.image}
              alt={model.title}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <p className="text-white/50 text-xs tracking-widest uppercase">{model.title}</p>
              <p className="text-white/25 text-[11px] mt-1">{model.category}</p>
            </div>
            <button
              onClick={() => setLightbox(false)}
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
