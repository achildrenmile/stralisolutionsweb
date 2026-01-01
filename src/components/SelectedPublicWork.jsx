import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Linkedin, Clock, Github, ExternalLink } from 'lucide-react';

const SelectedPublicWork = () => {
  const { translations } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  if (!translations) return null;

  return (
    <section id="referenzen" className="py-20 px-4 section-gradient">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {translations.publicWork.title}
        </motion.h2>

        <motion.div
          ref={ref}
          className="space-y-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {/* NDA Disclaimer */}
          <motion.div
            className="card-dark rounded-2xl p-8"
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
            }}
          >
            <div className="flex items-start gap-4">
              <div className="text-[var(--accent)] flex-shrink-0 mt-1">
                <ShieldCheck size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {translations.publicWork.ndaTitle}
                </h3>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  {translations.publicWork.ndaText}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Reference Project: Time Tracking */}
          <motion.div
            className="card-dark rounded-2xl p-8"
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
            }}
          >
            <div className="flex items-start gap-4">
              <div className="text-[var(--accent)] flex-shrink-0 mt-1">
                <Clock size={32} strokeWidth={1.5} />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {translations.publicWork.projectTitle}
                </h3>
                <p className="text-[var(--text-muted)] leading-relaxed mb-4">
                  {translations.publicWork.projectProblem}
                </p>
                <p className="text-[var(--text-muted)] leading-relaxed mb-4">
                  {translations.publicWork.projectSolution}
                </p>
                <p className="text-[var(--text-muted)] leading-relaxed mb-4">
                  {translations.publicWork.projectHighlights}
                </p>
                <p className="text-sm text-[var(--text-muted)] italic mb-4">
                  {translations.publicWork.projectDisclaimer}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://azdemo.strali.solutions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 btn-primary px-6 py-3 rounded-xl font-semibold"
                  >
                    <ExternalLink size={18} />
                    {translations.publicWork.projectDemoButton}
                  </a>
                  <a
                    href="https://github.com/achildrenmile/az"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-colors"
                  >
                    <Github size={18} />
                    {translations.publicWork.projectGithubButton}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* LinkedIn Reference */}
          <motion.div
            className="card-dark rounded-2xl p-8"
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
            }}
          >
            <div className="flex items-start gap-4">
              <div className="text-[var(--accent)] flex-shrink-0 mt-1">
                <Linkedin size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {translations.publicWork.linkedinTitle}
                </h3>
                <p className="text-[var(--text-muted)] leading-relaxed mb-4">
                  {translations.publicWork.linkedinText}
                </p>
                <a
                  href="https://linkedin.com/in/achildrenmile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn-primary px-6 py-3 rounded-xl font-semibold"
                >
                  <Linkedin size={20} />
                  {translations.publicWork.linkedinButton}
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SelectedPublicWork;
