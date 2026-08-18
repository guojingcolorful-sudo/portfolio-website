import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './ui/FadeIn';

/**
 * SMART 五要素（S/M/A/R/T）：lg 用于堆叠卡片主舞台（大字号展示），compact 用于文本次要项目行
 * T（Time-bound）横跨整行，作为案例的时间约束收束
 */
function SmartBlock({ project, size = 'compact' }) {
  const isLg = size === 'lg';
  const rows = [
    { key: 'S', text: project.situation },
    { key: 'M', text: project.methodology },
    { key: 'A', text: project.action },
    { key: 'R', text: project.result },
  ];
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 ${
        isLg ? 'gap-x-8 md:gap-x-14 gap-y-3 sm:gap-y-6 md:gap-y-6' : 'gap-x-8 gap-y-3'
      }`}
    >
      {rows.map((row) => (
        <div key={row.key} className={`flex items-start ${isLg ? 'gap-4 md:gap-6' : 'gap-3'}`}>
          <span
            className={`accent-text font-black leading-none shrink-0 ${
              isLg ? 'text-[1.4rem] sm:text-[clamp(1.6rem,3.2vw,3rem)]' : 'leading-snug'
            }`}
          >
            {row.key}
          </span>
          <p
            className={`leading-relaxed ${
              isLg
                ? 'font-normal text-[#D7E2EA] text-[clamp(0.85rem,1.6vw,1.3rem)] pt-1 lg:pt-2'
                : 'font-light text-[#D7E2EA]/95 text-[clamp(0.78rem,1.3vw,1rem)]'
            }`}
          >
            {row.text}
          </p>
        </div>
      ))}
      {project.timing && (
        <div
          className={`sm:col-span-2 flex items-start border-t border-[#D7E2EA]/10 pt-3 ${
            isLg ? 'gap-4 md:gap-6' : 'gap-3'
          }`}
        >
          <span
            className={`accent-text font-black leading-none shrink-0 ${
              isLg ? 'text-[1.4rem] sm:text-[clamp(1.6rem,3.2vw,3rem)]' : 'leading-snug'
            }`}
          >
            T
          </span>
          <p
            className={`leading-relaxed ${
              isLg
                ? 'font-normal text-[#D7E2EA] text-[clamp(0.85rem,1.6vw,1.3rem)] pt-1 lg:pt-2'
                : 'font-light text-[#D7E2EA]/95 text-[clamp(0.78rem,1.3vw,1rem)]'
            }`}
          >
            {project.timing}
          </p>
        </div>
      )}
    </div>
  );
}

function StackCard({ project, i, total, progress, reduce }) {
  const targetScale = 1 - (total - 1 - i) * 0.03;
  const range = [i / total, 1];
  // 减弱动效模式：直接呈现最终缩放状态，避免卡片堆叠溢出
  const scale = useTransform(progress, range, reduce ? [targetScale, targetScale] : [1, targetScale]);

  return (
    <div className="sticky top-24 md:top-32 min-h-[85vh] sm:h-[85vh] overflow-hidden">
      <motion.div
        style={{ scale, top: `${i * 28}px` }}
        className="relative h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] px-5 sm:px-6 md:px-8 pt-5 sm:pt-6 md:pt-8 pb-8 sm:pb-10 md:pb-12 flex flex-col origin-top"
      >
        {/* 顶部信息行：编号 · 类别 · 标签 */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <span className="font-black leading-none text-[clamp(2rem,5vw,4rem)] text-[#D7E2EA]">
            {String(i + 1).padStart(2, '0')}
          </span>
          <span className="text-[#D7E2EA]/90 font-normal uppercase tracking-wider text-[clamp(0.75rem,1.5vw,1.1rem)]">
            {project.category}
          </span>
          <span className="ml-auto text-[#D7E2EA] font-normal uppercase tracking-wider text-[clamp(0.72rem,1.3vw,1rem)]">
            {project.tag}
          </span>
        </div>

        {/* 展示级项目名：卡片主标题，顶部信息行下延展铺开 */}
        <h3 className="mt-3 sm:mt-5 hero-heading font-black uppercase leading-[1.1] tracking-tight text-[clamp(1.5rem,5.5vw,4.5rem)]">
          {project.name}
        </h3>

        {/* SMART 案例正文：紧随标题的阅读流，下部留白为海报式收尾（无图片） */}
        <div className="mt-5 sm:mt-8">
          <SmartBlock project={project} size="lg" />
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
                <span className="font-black leading-none text-[clamp(1.6rem,3.4vw,2.6rem)] text-[#D7E2EA]/40">
                  {String(i + 4).padStart(2, '0')}
                </span>
                <h3 className="font-medium uppercase tracking-wide text-[clamp(0.95rem,1.8vw,1.3rem)] text-[#D7E2EA]">
                  {project.name}
                </h3>
                <span className="text-[#D7E2EA]/75 font-light uppercase tracking-wider text-[clamp(0.6rem,1vw,0.8rem)]">
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
