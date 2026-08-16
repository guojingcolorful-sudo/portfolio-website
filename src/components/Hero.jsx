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
    <section id="top" className="relative min-h-[100dvh] flex flex-col overflow-x-clip pt-16 sm:pt-20">
      <Navbar t={t} lang={lang} onToggleLang={onToggleLang} />
      {/* 巨字标题（文字层在立绘之上） */}
      <div className="relative z-10 overflow-hidden px-6 md:px-10 mt-6 sm:mt-4">
        <FadeIn y={40} delay={0.15} duration={0.9}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
            JING.
          </h1>
        </FadeIn>
      </div>

      {/* 价值主张标题（立绘游走于文字层之下，文字始终在上） */}
      <div className="relative z-10 px-6 md:px-10 pr-56 sm:pr-0 lg:pr-[360px] mt-6 md:mt-4">
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

      {/* 磁吸立绘：初始居中偏右（约 3cm），活动范围可覆盖「联系我」下方右侧，层级低于所有文字与按钮，不拦截任何点击 */}
      <div className="absolute z-0 left-[62%] -translate-x-1/2 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-none">
        <FadeIn y={30} delay={0.6} duration={0.9}>
          <Magnet strength={2.5} padding={450}>
            <img
              src={CONFIG.avatarHero}
              alt={t.meta.portraitAlt}
              fetchPriority="high"
              className="w-[260px] sm:w-[300px] md:w-[360px] lg:w-[460px] h-auto sm:max-h-[78vh] object-contain pointer-events-none select-none"
              draggable="false"
            />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
}
