import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { models3d } from '../data/models3d';
import ProjectCard from '../components/ProjectCard';
import ModelCard from '../components/ModelCard';
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

      {/* 3D Models section */}
      <section className="border-t border-white/8 px-6 md:px-10 pt-16 pb-24 max-w-6xl mx-auto w-full">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mb-12 md:mb-14"
        >
          <p className="text-white/30 text-[11px] tracking-[0.25em] uppercase mb-4">
            Modélisation 3D
          </p>
          <h2
            className="text-2xl md:text-3xl font-light text-white mb-5"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Objets &amp; mobilier
          </h2>
          <p className="text-white/45 text-sm leading-relaxed max-w-2xl font-light mb-1">
            Sélection de modèles 3D réalisés avec une attention particulière portée aux
            proportions, aux détails de modélisation et aux textures PBR.
          </p>
          <p className="text-white/28 text-xs leading-relaxed max-w-2xl font-light">
            Chaque visuel présente l&apos;objet dans une mise en situation réaliste afin de
            valoriser le travail de modélisation, de rendu et de direction artistique.
          </p>
        </motion.div>

        {/* Models grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-14">
          {models3d.map((model, i) => (
            <ModelCard key={model.id} model={model} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
