import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '../context/LanguageContext';
import { Database, Search, Brain, MessageSquare, Layers, Zap, Plug, Shield, FileCheck, Clock, BookOpen, Server, FileText } from 'lucide-react';

const AIPlatforms = () => {
  const { translations } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  if (!translations?.aiPlatforms) return null;

  const t = translations.aiPlatforms;

  const architectureSteps = [
    { icon: Database, key: 'ingest' },
    { icon: Layers, key: 'index' },
    { icon: Search, key: 'retrieve' },
    { icon: Brain, key: 'generate' },
    { icon: MessageSquare, key: 'deliver' }
  ];

  const useCases = [
    { icon: BookOpen, key: 'knowledge' },
    { icon: Server, key: 'logs' },
    { icon: FileText, key: 'docs' }
  ];

  return (
    <section id="ai-platforms" className="py-20 px-4 bg-gradient-dark">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
            {t.title}
          </h2>
          <p className="text-lg md:text-xl text-[var(--text-muted)] max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Problem/Solution */}
        <motion.div
          ref={ref}
          className="grid md:grid-cols-2 gap-8 mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          <motion.div
            className="card-dark rounded-2xl p-8"
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
            }}
          >
            <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-3">
              <span className="text-red-400">?</span>
              {t.problem.title}
            </h3>
            <p className="text-[var(--text-muted)] leading-relaxed">
              {t.problem.description}
            </p>
          </motion.div>

          <motion.div
            className="card-dark rounded-2xl p-8"
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
            }}
          >
            <h3 className="text-xl font-semibold mb-4 text-white flex items-center gap-3">
              <Zap className="text-[var(--accent)]" size={24} />
              {t.solution.title}
            </h3>
            <p className="text-[var(--text-muted)] leading-relaxed">
              {t.solution.description}
            </p>
          </motion.div>
        </motion.div>

        {/* Architecture Pipeline */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-4 text-white">
            {t.architecture.title}
          </h3>
          {t.architecture.subtitle && (
            <p className="text-center text-[var(--text-muted)] mb-8 max-w-3xl mx-auto">
              {t.architecture.subtitle}
            </p>
          )}

          {/* Pipeline Visualization */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[var(--primary)] via-[var(--accent)] to-[var(--primary)] transform -translate-y-1/2 z-0 mx-16" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-2 relative z-10">
              {architectureSteps.map((step, index) => {
                const IconComponent = step.icon;
                const stepData = t.architecture.steps[step.key];
                return (
                  <motion.div
                    key={step.key}
                    className="card-dark rounded-xl p-4 text-center relative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[var(--primary)] flex items-center justify-center">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <h4 className="font-semibold text-white text-sm mb-1">{stepData.title}</h4>
                    <p className="text-xs text-[var(--text-muted)]">{stepData.description}</p>

                    {/* Arrow for mobile/tablet */}
                    {index < architectureSteps.length - 1 && (
                      <div className="lg:hidden absolute -bottom-3 left-1/2 transform -translate-x-1/2 text-[var(--accent)]">
                        ↓
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-8 text-white">
            {t.stack.title}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {t.stack.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-[var(--primary)]/20 border border-[var(--primary)]/30 text-white text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-xl md:text-2xl font-semibold text-center mb-8 text-white">
            {t.useCases.title}
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => {
              const caseData = t.useCases.items[useCase.key];
              const IconComponent = useCase.icon;
              return (
                <motion.div
                  key={useCase.key}
                  className="card-dark rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.6 + 0.1 * index }}
                >
                  <div className="w-12 h-12 mb-4 rounded-lg bg-[var(--accent)]/20 flex items-center justify-center">
                    <IconComponent className="text-[var(--accent)]" size={24} />
                  </div>
                  <h4 className="font-semibold text-white mb-2">{caseData.title}</h4>
                  <p className="text-sm text-[var(--text-muted)]">{caseData.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* MCP Extension (Optional) */}
        {t.mcp && (
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="card-dark rounded-2xl p-8 border border-dashed border-[var(--accent)]/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-[var(--accent)]/20 flex items-center justify-center">
                  <Plug className="text-[var(--accent)]" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{t.mcp.title}</h3>
                  <span className="text-xs text-[var(--accent)] font-medium">{t.mcp.badge}</span>
                </div>
              </div>

              <p className="text-[var(--text-muted)] mb-6 leading-relaxed">
                {t.mcp.description}
              </p>

              {/* MCP Key Points */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {t.mcp.points.map((point, index) => {
                  const icons = [Shield, FileCheck, Clock, Plug];
                  const IconComponent = icons[index % icons.length];
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <IconComponent className="text-[var(--accent)] mt-1 flex-shrink-0" size={16} />
                      <span className="text-sm text-[var(--text-muted)]">{point}</span>
                    </div>
                  );
                })}
              </div>

              {/* What MCP is NOT */}
              <div className="bg-[var(--bg-dark)]/50 rounded-lg p-4">
                <p className="text-xs text-[var(--text-muted)] font-medium mb-2">{t.mcp.notTitle}</p>
                <p className="text-xs text-[var(--text-muted)]">{t.mcp.notDescription}</p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Differentiator */}
        <motion.div
          className="mt-16 card-dark rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-white">{t.differentiator.title}</h3>
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto leading-relaxed">
            {t.differentiator.description}
          </p>
        </motion.div>

        {/* Live Demo CTA */}
        {t.liveDemo && (
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <div className="card-dark rounded-2xl p-8 border-2 border-[var(--accent)]/50 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10">
              <h3 className="text-2xl font-bold mb-3 text-white">{t.liveDemo.title}</h3>
              <p className="text-[var(--text-muted)] mb-6 max-w-xl mx-auto">
                {t.liveDemo.description}
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-4">
                <a
                  href={t.liveDemo.showcaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-light)] text-white font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  {t.liveDemo.showcaseButton}
                  <span>→</span>
                </a>
                {t.liveDemo.graphRagUrl && (
                  <a
                    href={t.liveDemo.graphRagUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105"
                    style={{ background: 'linear-gradient(135deg, #10b981, var(--accent))' }}
                  >
                    {t.liveDemo.graphRagButton}
                    <span>→</span>
                  </a>
                )}
                <a
                  href={t.liveDemo.searchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--primary)] hover:bg-[var(--primary-light)] text-white font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  {t.liveDemo.searchButton}
                  <span>→</span>
                </a>
                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--accent)] hover:bg-[var(--accent)]/20 text-white font-semibold transition-all duration-300"
                >
                  {t.liveDemo.requestButton}
                </a>
              </div>
              <p className="mt-4 text-sm text-[var(--text-muted)]">
                {t.liveDemo.note}
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default AIPlatforms;
