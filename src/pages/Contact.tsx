import { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const EMAIL = 'la7air@gmail.com';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build mailto link
    const subject = encodeURIComponent(`Portfolio — Message de ${form.name}`);
    const body = encodeURIComponent(
      `Nom : ${form.name}\nEmail : ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <SEO
        title="Contact | LA7 Visuals"
        description="Contactez LA7 Visuals pour vos projets de visual design et création 3D premium."
      />

      <div className="min-h-screen pt-32 pb-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20 md:mb-28"
          >
            <p className="text-white/30 text-[10px] tracking-[0.3em] uppercase mb-4">
              — Contact
            </p>
            <h1
              className="text-4xl md:text-6xl font-light text-white"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Travaillons
              <br />
              <em className="italic text-white/50">ensemble.</em>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-10"
            >
              <div>
                <p className="text-white/30 text-[10px] tracking-[0.3em] uppercase mb-4">
                  — Email
                </p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-white text-lg md:text-xl font-light hover:text-white/60 transition-colors duration-300"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {EMAIL}
                </a>
              </div>

              <div>
                <p className="text-white/30 text-[10px] tracking-[0.3em] uppercase mb-4">
                  — Basé à
                </p>
                <p className="text-white/60 text-sm font-light">Paris, France</p>
              </div>

              <div>
                <p className="text-white/30 text-[10px] tracking-[0.3em] uppercase mb-4">
                  — Disponibilité
                </p>
                <p className="text-white/60 text-sm font-light leading-relaxed">
                  Ouvert aux projets freelance et aux collaborations
                  <br />
                  longue durée avec les marques & agences.
                </p>
              </div>

              <div className="pt-4">
                <p className="text-white/20 text-xs leading-relaxed max-w-xs">
                  Pour tout projet CGI, direction artistique ou production
                  d'images premium — n'hésitez pas à prendre contact.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col gap-4 py-16"
                >
                  <p className="text-white text-xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Merci pour votre message.
                  </p>
                  <p className="text-white/40 text-sm">Votre client mail va s'ouvrir.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="text-white/30 text-[10px] tracking-[0.3em] uppercase">
                      Nom
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      className="w-full bg-transparent border-b border-white/15 text-white text-sm py-3 focus:outline-none focus:border-white/50 placeholder:text-white/20 transition-colors duration-300"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-white/30 text-[10px] tracking-[0.3em] uppercase">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      className="w-full bg-transparent border-b border-white/15 text-white text-sm py-3 focus:outline-none focus:border-white/50 placeholder:text-white/20 transition-colors duration-300"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-white/30 text-[10px] tracking-[0.3em] uppercase">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre projet..."
                      className="w-full bg-transparent border-b border-white/15 text-white text-sm py-3 focus:outline-none focus:border-white/50 placeholder:text-white/20 transition-colors duration-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex items-center gap-4 border border-white/20 text-white/60 hover:text-white hover:border-white/50 text-xs tracking-[0.2em] uppercase px-10 py-4 transition-all duration-300"
                  >
                    Envoyer
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                      <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
