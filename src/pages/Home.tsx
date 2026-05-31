import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO
        title="Portfolio CGI & Visual Design"
        description="Sélection de projets en visualisation 3D, design d'image et création visuelle pour des univers liés au luxe, à la mode et au design produit."
      />

      {/* Intro */}
      <section className="pt-28 md:pt-36 pb-12 md:pb-16 px-6 md:px-10 max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="text-white/35 text-[11px] tracking-[0.25em] uppercase mb-5">
            CGI &amp; Visual Design
          </p>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-5 max-w-2xl"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Portfolio
          </h1>
          <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-xl font-light mb-2">
            Sélection de projets en visualisation 3D, design d&apos;image et création visuelle.
          </p>
          <p className="text-white/30 text-xs md:text-sm leading-relaxed max-w-xl font-light">
            Travaux réalisés pour des univers liés au luxe, à la mode, au design produit
            et à l&apos;architecture intérieure.
          </p>
        </motion.div>
      </section>

      {/* Projects grid */}
      <section className="px-6 md:px-10 pb-24 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-16">
          {projects
            .sort((a, b) => a.order - b.order)
            .map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
        </div>
      </section>
    </>
  );
}
