import { CONFIG } from '../data/content';
import Navbar from './Navbar';
import FadeIn from './ui/FadeIn';
import Magnet from './ui/Magnet';
import ContactButton from './ui/ContactButton';

/**
 * Hero：导航流内 + 巨字渐变标题 + 底部信息条 + 磁吸头像
 */
export default function Hero({ t, lang, onToggleLang }) {
  return (
    <section id="top" className="relative min-h-[100dvh] flex flex-col overflow-x-clip">
      <Navbar t={t} lang={lang} onToggleLang={onToggleLang} />
      {/* 巨字标题 */}
      <div className="overflow-hidden px-6 md:px-10 mt-6 sm:mt-4 md:-mt-5">
        <FadeIn y={40} delay={0.15} duration={0.9}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
            JING.
          </h1>
        </FadeIn>
      </div>

      {/* 价值主张标题（移动端/桌面端均为立绘预留空间，英文自动换行） */}
      <div className="relative z-10 px-6 md:px-10 pr-56 sm:pr-0 lg:pr-[500px] mt-6 md:mt-4">
        <FadeIn y={20} delay={0.3} duration={0.8}>
          <p className="text-[#D7E2EA] font-medium leading-tight tracking-wide text-[clamp(1.05rem,2.6vw,2.4rem)]">
            {t.hero.title1}
            <span className="accent-text font-semibold">{t.hero.titleHighlight1}</span>
          </p>
          <p className="text-[#D7E2EA]/80 font-medium leading-tight tracking-wide text-[clamp(1.05rem,2.6vw,2.4rem)]">
            {t.hero.title2}
            <span className="accent-text font-semibold">{t.hero.titleHighlight2}</span>
          </p>
        </FadeIn>
      </div>

      {/* 底部信息条 */}
      <div className="relative z-20 mt-auto flex items-end justify-between px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <FadeIn y={20} delay={0.35}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px] text-[clamp(0.75rem,1.4vw,1.5rem)]">
            {t.hero.tag}
          </p>
        </FadeIn>
        <FadeIn y={20} delay={0.5}>
          <ContactButton href="#footer">{t.hero.cta}</ContactButton>
        </FadeIn>
      </div>

      {/* 磁吸头像：透明背景原图，整体右移避让文字与 CTA；移动端垂直居中，sm 以上底部抬升 */}
      <div className="absolute z-10 right-0 sm:right-[6%] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-28 pointer-events-none">
        <FadeIn y={30} delay={0.6} duration={0.9}>
          <Magnet>
            <img
              src={CONFIG.avatarHero}
              alt={t.meta.portraitAlt}
              fetchPriority="high"
              className="w-[220px] sm:w-[240px] md:w-[280px] lg:w-[420px] h-auto pointer-events-auto select-none"
              draggable="false"
            />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
}
