import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 mt-auto">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/20 text-[11px] tracking-widest">
          © {year} Luca Amore
        </p>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-white/25 text-[11px] tracking-[0.12em] uppercase hover:text-white/50 transition-colors duration-200"
          >
            Portfolio
          </Link>
          <Link
            to="/about"
            className="text-white/25 text-[11px] tracking-[0.12em] uppercase hover:text-white/50 transition-colors duration-200"
          >
            About
          </Link>
        </div>
      </div>
    </footer>
  );
}
