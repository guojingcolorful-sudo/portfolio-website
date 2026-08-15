import FadeIn from './ui/FadeIn';

/**
 * 职业履历：深色编号列表，左编号+公司，右时间段，下方描述（非对称行版式）
 */
export default function Timeline({ t }) {
  return (
    <section id="timeline" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 scroll-mt-20">
      <FadeIn y={40} delay={0}>
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28">
          {t.timeline.title}
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {t.timeline.items.map((item, i) => (
          <FadeIn key={item.company} y={30} delay={i * 0.1}>
            <div className="border-t border-[#D7E2EA]/15 py-8 sm:py-10 md:py-12">
              <div className="flex items-start justify-between gap-6 flex-wrap md:flex-nowrap">
                <div className="flex items-start gap-4 sm:gap-6">
                  <span className="font-black leading-none text-[clamp(3rem,10vw,140px)] text-[#D7E2EA]/25">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex flex-col gap-1 pt-2">
                    <h3 className="font-medium uppercase tracking-wide text-[clamp(1rem,2.2vw,2.1rem)] text-[#D7E2EA]">
                      {item.company}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[#D7E2EA]/60 font-light uppercase tracking-wider text-[clamp(0.7rem,1.2vw,0.95rem)]">
                        {item.rank}
                      </span>
                      <span className="text-[#D7E2EA]/40 font-light uppercase tracking-wider text-[clamp(0.7rem,1.2vw,0.95rem)]">
                        {item.role}
                      </span>
                    </div>
                  </div>
                </div>
                <span className="text-[#D7E2EA]/50 font-light uppercase tracking-wider text-[clamp(0.7rem,1.2vw,0.95rem)] pt-2 whitespace-nowrap">
                  {item.period}
                </span>
              </div>
              <p className="mt-5 text-[#D7E2EA]/70 font-light leading-relaxed max-w-2xl text-[clamp(0.85rem,1.6vw,1.25rem)]">
                {item.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
