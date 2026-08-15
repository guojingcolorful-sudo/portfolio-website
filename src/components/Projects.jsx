import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './ui/FadeIn';

function SmartBlock({ project }) {
  const rows = [
    { key: 'S', text: project.situation },
    { key: 'M', text: project.methodology },
    { key: 'A', text: project.action },
    { key: 'R', text: project.result },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
      {rows.map((row) => (
        <div key={row.key} className="flex gap-3">
          <span className="accent-text font-black leading-snug shrink-0">{row.key}</span>
          <p className="text-[#D7E2EA]/75 font-light leading-relaxed text-[clamp(0.78rem,1.3vw,1rem)]">
            {row.text}
          </p>
        </div>
      ))}
    </div>
  );
}

function StackCard({ project, i, total, progress, reduce }) {
  const targetScale = 1 - (total - 1 - i) * 0.03;
  const range = [i / total, 1];
  // 减弱动效模式：直接呈现最终缩放状态，避免卡片堆叠溢出
  const scale = useTransform(progress, range, reduce ? [targetScale, targetScale] : [1, targetScale]);

  return (
    <div className="sticky top-24 md:top-32 h-[85vh] overflow-hidden">
      <motion.div
        style={{ scale, top: `${i * 28}px` }}
        className="relative h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-5 sm:p-6 md:p-8 flex flex-col origin-top"
      >
        {/* 顶部信息行 */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <span className="font-black leading-none text-[clamp(2rem,5vw,4rem)] text-[#D7E2EA]">
            {String(i + 1).padStart(2, '0')}
          </span>
          <span className="text-[#D7E2EA]/60 font-light uppercase tracking-wider text-[clamp(0.65rem,1.3vw,1rem)]">
            {project.category}
          </span>
          <h3 className="font-medium uppercase tracking-wide text-[clamp(1.1rem,2.6vw,2.2rem)] text-[#D7E2EA]">
            {project.name}
          </h3>
          <span className="ml-auto text-[#D7E2EA]/50 font-light uppercase tracking-widest text-[clamp(0.6rem,1.1vw,0.85rem)]">
            {project.tag}
          </span>
        </div>

        {/* SMART 案例正文 */}
        <div className="mt-4 sm:mt-6">
          <SmartBlock project={project} />
        </div>

        {/* 单张项目图 */}
        <div className="mt-auto pt-4 sm:pt-5">
          <img
            src={project.images.col2}
            alt={project.name}
            width={800}
            height={320}
            loading="lazy"
            decoding="async"
            className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] h-[clamp(130px,18vh,230px)]"
          />
        </div>
      </motion.div>
    </div>
  );
}

/**
 * 项目案例：粘性堆叠卡片（SMART 全文 + 单图），其余项目以 SMART 文本行呈现
 */
export default function Projects({ t }) {
  const sectionRef = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const total = t.projects.featured.length;

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative z-10 bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 scroll-mt-20"
    >
      <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28">
        {t.projects.title}
      </h2>

      <div className="flex flex-col gap-[2vh]">
        {t.projects.featured.map((project, i) => (
          <StackCard key={project.name} project={project} i={i} total={total} progress={scrollYProgress} reduce={reduce} />
        ))}
      </div>

      {/* 其余项目：SMART 全文文本行 */}
      <div className="max-w-5xl mx-auto mt-20">
        {t.projects.more.map((project, i) => (
          <FadeIn key={project.name} y={20} delay={i * 0.08}>
            <div className="py-8 border-t border-[#D7E2EA]/15">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <span className="font-black leading-none text-[clamp(1.6rem,3.4vw,2.6rem)] text-[#D7E2EA]/30">
                  {String(i + 4).padStart(2, '0')}
                </span>
                <h3 className="font-medium uppercase tracking-wide text-[clamp(0.95rem,1.8vw,1.3rem)] text-[#D7E2EA]">
                  {project.name}
                </h3>
                <span className="text-[#D7E2EA]/45 font-light uppercase tracking-wider text-[clamp(0.6rem,1vw,0.8rem)]">
                  {project.tag}
                </span>
              </div>
              <div className="mt-4">
                <SmartBlock project={project} />
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
