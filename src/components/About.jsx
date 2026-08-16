import FadeIn from './ui/FadeIn';
import ContactButton from './ui/ContactButton';

/**
 * 关于我：居中宣言式版式，逐字显现段落 + 指标 + CTA
 */
export default function About({ t }) {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center text-center px-5 sm:px-8 md:px-10 py-20 gap-10 sm:gap-14 md:gap-16 scroll-mt-20">
      <FadeIn y={40} delay={0}>
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)]">
          {t.about.title}
        </h2>
      </FadeIn>

      <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <FadeIn y={20} delay={0.05}>
          <p className="text-[#D7E2EA] font-medium leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)] whitespace-pre-line">
            {t.about.desc}
          </p>
        </FadeIn>

        <FadeIn y={30} delay={0.15}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {t.about.metrics.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <span className="font-black text-[clamp(1.6rem,3.4vw,2.8rem)] leading-none text-[#D7E2EA]">
                  {item.value}
                </span>
                <span className="text-[#D7E2EA]/95 font-normal uppercase tracking-wide text-[clamp(0.65rem,1vw,0.8rem)]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn y={20} delay={0.25}>
          <ContactButton href="#footer">{t.hero.cta}</ContactButton>
        </FadeIn>
      </div>
    </section>
  );
}
