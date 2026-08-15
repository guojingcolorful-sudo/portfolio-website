import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { MARQUEE_IMAGES } from '../data/content';

function Row({ images, lang, direction, progress }) {
  const reduce = useReducedMotion();
  const x = useTransform(
    progress,
    [0, 1],
    reduce ? ['0%', '0%'] : direction === 'right' ? ['-26%', '26%'] : ['26%', '-26%']
  );
  const tiles = [...images, ...images, ...images];

  return (
    <div className="overflow-hidden">
      <motion.div style={{ x, willChange: 'transform' }} className="flex gap-3 w-max">
        {tiles.map((item, i) => (
          <img
            key={i}
            src={item.img}
            alt={lang === 'zh' ? item.zh : item.en}
            width={420}
            height={270}
            loading="lazy"
            decoding="async"
            className="w-[420px] h-[270px] object-cover rounded-2xl shrink-0"
          />
        ))}
      </motion.div>
    </div>
  );
}

/**
 * 双排滚动跑马灯：随页面滚动反向位移（纯 transform，被动滚动）
 */
export default function Marquee({ lang }) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section id="works" ref={sectionRef} aria-label="Selected works" className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden scroll-mt-20">
      <div className="flex flex-col gap-3">
        <Row images={MARQUEE_IMAGES.row1} lang={lang} direction="right" progress={scrollYProgress} />
        <Row images={MARQUEE_IMAGES.row2} lang={lang} direction="left" progress={scrollYProgress} />
      </div>
    </section>
  );
}
