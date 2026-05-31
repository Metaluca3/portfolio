import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.06, 0.5),
        ease: 'easeOut',
      }}
    >
      <Link to={`/portfolio/${project.slug}`} className="group block">
        {/* Image */}
        <div className="relative overflow-hidden bg-neutral-900 aspect-[4/5]">
          <img
            src={project.coverImage}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            loading="lazy"
          />
          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-400" />
        </div>

        {/* Info below image */}
        <div className="mt-3 px-0.5">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="text-white/90 text-sm font-medium leading-snug group-hover:text-white transition-colors duration-200">
              {project.title}
            </h3>
            {project.year && (
              <span className="text-white/25 text-[11px] flex-shrink-0">{project.year}</span>
            )}
          </div>
          <p className="text-white/35 text-[11px] tracking-wide uppercase mt-0.5">
            {project.category}
          </p>
          <p className="text-white/30 text-[11px] mt-1.5 leading-relaxed line-clamp-2">
            {project.shortDescription}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
