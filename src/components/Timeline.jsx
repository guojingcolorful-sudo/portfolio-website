import { useState, useRef, useEffect } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { DRIFT_PHOTOS } from '../data/content';
import FadeIn from './ui/FadeIn';
import Lightbox from './ui/Lightbox';

/**
 * 职业履历（保留原始标题与文字大小/位置）+ 02-04 钉住视窗照片漂移层：
 * - 从「02 顶部」到「04 底部」整体钉住（紧凑排版，三条履历同屏可见）
 * - 钉住期间照片在文字上方随滚动依次上漂（右列更快形成纵深）
 * - 照片可点击放大、悬停放大、圆弧光边；减弱动态时静态双列展示
 */

// 钉住阶段的总滚动距离（照片漂移序列长度）
const PIN_SCROLL = 'h-[calc(100dvh+100vh)]';

/** 履历单行（原始版式：编号 / 公司 / 职级 / 时间 / 描述，大小与间距不变） */
function Row({ item, index, compact = false }) {
  return (
    <div
      className={`border-t border-[#D7E2EA]/15 ${
        compact ? 'py-4 sm:py-5 md:py-6 [@media(max-height:820px)]:py-3' : 'py-8 sm:py-10 md:py-12 [@media(max-height:820px)]:py-3'
      }`}
    >
      <div className="flex items-start justify-between gap-6 flex-wrap md:flex-nowrap">
        <div className="flex items-start gap-4 sm:gap-6">
          <span
            className={`font-black leading-none text-[#D7E2EA]/35 ${
              compact
                ? 'text-[clamp(1.8rem,4.5vw,72px)] [@media(max-height:820px)]:text-[clamp(1.6rem,6vw,80px)]'
                : 'text-[clamp(3rem,10vw,140px)] [@media(max-height:820px)]:text-[clamp(1.8rem,7vw,96px)]'
            }`}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="flex flex-col gap-1 pt-2">
            <h3
              className={`font-medium uppercase tracking-wide text-[#D7E2EA] ${
                compact
                  ? 'text-[clamp(0.9rem,1.8vw,1.5rem)]'
                  : 'text-[clamp(1rem,2.2vw,2.1rem)] [@media(max-height:820px)]:text-[clamp(0.85rem,2vw,1.6rem)]'
              }`}
            >
              {item.company}
            </h3>
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`text-[#D7E2EA]/90 font-normal uppercase tracking-wider ${
                  compact
                    ? 'text-[clamp(0.62rem,1vw,0.8rem)]'
                    : 'text-[clamp(0.7rem,1.2vw,0.95rem)]'
                }`}
              >
                {item.rank}
              </span>
              <span
                className={`text-[#D7E2EA]/85 font-normal uppercase tracking-wider ${
                  compact
                    ? 'text-[clamp(0.62rem,1vw,0.8rem)]'
                    : 'text-[clamp(0.7rem,1.2vw,0.95rem)]'
                }`}
              >
                {item.role}
              </span>
            </div>
          </div>
        </div>
        <span
          className={`text-[#D7E2EA]/95 font-normal uppercase tracking-wider whitespace-nowrap max-sm:w-full ${
            compact
              ? 'text-[clamp(0.62rem,1vw,0.8rem)] pt-2'
              : 'text-[clamp(0.7rem,1.2vw,0.95rem)] pt-2'
          }`}
        >
          {item.period}
        </span>
      </div>
      <p
        className={`text-[#D7E2EA]/95 font-normal max-w-2xl ${
          compact
            ? 'text-[clamp(0.7rem,1.2vw,0.9rem)] leading-normal mt-3 [@media(max-height:820px)]:text-[clamp(0.6rem,1vw,0.8rem)]'
            : 'leading-relaxed text-[clamp(0.85rem,1.6vw,1.25rem)] mt-5 [@media(max-height:820px)]:mt-3 [@media(max-height:820px)]:text-[clamp(0.72rem,1.4vw,1rem)] [@media(max-height:820px)]:leading-normal'
        }`}
      >
        {item.description}
      </p>
    </div>
  );
}

/**
 * 单张漂移照片：在各自的进度窗口内自下而上滑过视窗，首张起始静止、
 * 末张结束后停留在带内等待解锁；不可见时不拦截点击。
 */
function DriftPhoto({ photo, lang, index, total, side, progress, onOpen }) {
  const [clicked, setClicked] = useState(false);
  const timers = useRef([]);
  const start = index / total;
  const end = (index + 1) / total;
  const isFirst = index === 0;
  const isLast = index === total - 1;

  // 卸载时清理未触发的点击脉冲与延迟开灯箱定时器
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  // 点击特效先播放（脉冲扩散），随后打开灯箱
  const handleClick = () => {
    setClicked(true);
    timers.current.push(window.setTimeout(() => setClicked(false), 600));
    timers.current.push(window.setTimeout(() => onOpen(photo), 380));
  };

  // 首张从原位起步（静态呈现），其余自视窗下方进入；末张停在上部待解锁
  const enterY = isFirst ? '0%' : '150%';
  const exitY = isLast ? '-25%' : '-130%';
  const y = useTransform(progress, [start, end], [enterY, exitY], { clamp: true });

  // 进入淡入、离开淡出（首张起始即完全可见，末张结束时保持可见）
  // 用两个单段 clamp 变换取最小值，避免多点插值在窗口外的外推
  const fadeInEnd = isFirst ? 0 : Math.min(start + 0.05, end);
  const fadeOutStart = isLast ? end : Math.max(end - 0.06, fadeInEnd + 0.05);
  const fadeInRange = isFirst ? [0, 1] : [start, fadeInEnd];
  const fadeInValues = isFirst ? [1, 1] : [0, 1];
  const fadeOutRange = isLast ? [0, 1] : [fadeOutStart, end];
  const fadeOutValues = isLast ? [1, 1] : [1, 0];
  const fadeIn = useTransform(progress, fadeInRange, fadeInValues, { clamp: true });
  const fadeOut = useTransform(progress, fadeOutRange, fadeOutValues, { clamp: true });
  const opacity = useTransform([fadeIn, fadeOut], ([a, b]) => Math.min(a, b));
  const pointerEvents = useTransform(opacity, (v) => (v > 0.5 ? 'auto' : 'none'));

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      aria-label={
        lang === 'zh' ? `${photo.zh}（点击放大）` : `${photo.en} (click to enlarge)`
      }
      style={{
        y,
        opacity,
        pointerEvents,
        top: side === 'left' ? `${8 + index * 7}%` : `${26 + index * 5}%`,
      }}
      className={`absolute ${
        side === 'left' ? 'left-[2%] w-[20vw] md:w-[11vw]' : 'right-[2%] w-[26vw] md:w-[16vw]'
      } photo-card ${clicked ? 'clicked' : ''} cursor-zoom-in group p-0 bg-transparent border-0`}
    >
      <img
        src={photo.img}
        alt={lang === 'zh' ? photo.zh : photo.en}
        width={photo.w}
        height={photo.h}
        loading="lazy"
        decoding="async"
        draggable="false"
        className="relative w-full h-auto select-none pointer-events-none transition-transform duration-200 ease-out group-hover:scale-[1.06]"
      />
    </motion.button>
  );
}

/** 减弱动态模式：照片以静态双列排布，仍可点击放大 */
function StaticPhoto({ photo, lang, onOpen }) {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(true);
    window.setTimeout(() => setClicked(false), 600);
    onOpen(photo);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={
        lang === 'zh' ? `${photo.zh}（点击放大）` : `${photo.en} (click to enlarge)`
      }
      className={`photo-card ${clicked ? 'clicked' : ''} cursor-zoom-in group p-0 bg-transparent border-0`}
    >
      <img
        src={photo.img}
        alt={lang === 'zh' ? photo.zh : photo.en}
        width={photo.w}
        height={photo.h}
        loading="lazy"
        decoding="async"
        draggable="false"
        className="relative w-full h-auto select-none pointer-events-none transition-transform duration-200 ease-out group-hover:scale-[1.06]"
      />
    </button>
  );
}

export default function Timeline({ t, lang }) {
  const [lightbox, setLightbox] = useState(null);
  const reduce = useReducedMotion();
  const wrapRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ['start start', 'end end'],
  });
  const items = t.timeline.items;
  const [first, second, third, fourth] = items;

  return (
    <section
      id="timeline"
      className="relative bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 scroll-mt-20"
    >
      <FadeIn y={40} delay={0}>
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28">
          {t.timeline.title}
        </h2>
      </FadeIn>

      {/* 01：正常文档流 */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <FadeIn y={30} delay={0}>
          <Row item={first} index={0} />
        </FadeIn>
      </div>

      {/* 02-04 钉住视窗：三条履历紧凑同屏，照片在文字上方随滚动上漂 */}
      <div ref={wrapRef} className={reduce ? 'relative' : `relative ${PIN_SCROLL} max-[340px]:h-auto`}>
        <div
          className={
            reduce
              ? 'relative'
              : 'sticky top-0 h-[100dvh] overflow-hidden pt-[84px] sm:pt-[92px] max-[340px]:static max-[340px]:h-auto max-[340px]:overflow-visible max-[340px]:pt-0'
          }
        >
          {/* 钉住带：02 顶部 → 04 底部，超出部分裁剪 */}
          <div className={`relative overflow-hidden ${reduce ? '' : 'h-[calc(100dvh-84px)] sm:h-[calc(100dvh-92px)] max-[340px]:h-auto'}`}>
            <div className={`relative z-10 max-w-5xl mx-auto ${reduce ? '' : 'h-full flex flex-col justify-between max-[340px]:h-auto'}`}>
              <FadeIn y={30} delay={0}>
                <Row item={second} index={1} compact />
              </FadeIn>
              <FadeIn y={30} delay={0.05}>
                <Row item={third} index={2} compact />
              </FadeIn>
              {/* 移动端三行英文描述放不进视口：04 在移动端回到正常文档流 */}
              <div className="hidden sm:block">
                <FadeIn y={30} delay={0.1}>
                  <Row item={fourth} index={3} compact />
                </FadeIn>
              </div>
            </div>

            {!reduce && (
              <div className="absolute inset-0 z-20">
                {DRIFT_PHOTOS.left.map((p, i) => (
                  <DriftPhoto
                    key={p.zh}
                    photo={p}
                    lang={lang}
                    index={i}
                    total={DRIFT_PHOTOS.left.length}
                    side="left"
                    progress={scrollYProgress}
                    onOpen={setLightbox}
                  />
                ))}
                {DRIFT_PHOTOS.right.map((p, i) => (
                  <DriftPhoto
                    key={p.zh}
                    photo={p}
                    lang={lang}
                    index={i}
                    total={DRIFT_PHOTOS.right.length}
                    side="right"
                    progress={scrollYProgress}
                    onOpen={setLightbox}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {reduce && (
          <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-2 gap-4 py-6">
            <div className="flex flex-col gap-4">
              {DRIFT_PHOTOS.left.map((p) => (
                <StaticPhoto key={p.zh} photo={p} lang={lang} onOpen={setLightbox} />
              ))}
            </div>
            <div className="flex flex-col gap-4">
              {DRIFT_PHOTOS.right.map((p) => (
                <StaticPhoto key={p.zh} photo={p} lang={lang} onOpen={setLightbox} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 移动端：04 回到正常文档流（钉住带只含 02-03） */}
      <div className="sm:hidden relative z-10 max-w-5xl mx-auto">
        <FadeIn y={30} delay={0}>
          <Row item={fourth} index={3} />
        </FadeIn>
      </div>

      {lightbox && <Lightbox item={lightbox} onClose={() => setLightbox(null)} />}
    </section>
  );
}
