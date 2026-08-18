import { useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from 'framer-motion';
import { CONFIG } from '../data/content';
import FadeIn from './ui/FadeIn';

const ANGLE = [-90, -30, 30, 90, 150, 210]; // 6 个标签角度（顺时针均匀分布）
const R_LINE = 36;
const R_LABEL = 44;
const INTRO_MS = 3000; // 滑到区块后先展示初始内容的停留时长
const CYCLE_MS = 1500; // 卡片轮播间隔
const REST_MS = 2000; // 每轮结束回到初始态的停留时长

function pos(deg, r) {
  const rad = (deg * Math.PI) / 180;
  return { x: 50 + r * Math.cos(rad), y: 50 + r * Math.sin(rad) };
}

/** 圆形雷达图：悬停/聚焦标签时加粗文字与放射线，并驱动左侧内容切换 */
function CircleDiagram({ categories, active, onActivate }) {
  return (
    <div className="flex w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[440px] shrink-0 items-center justify-center self-center">
      <FadeIn className="w-full aspect-square relative p-3" delay={0.4} duration={0.8} y={0}>
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" aria-hidden="true">
          <circle cx="50" cy="50" r="30" stroke="#D7E2EA" strokeWidth="0.18" opacity="0.45" fill="none" />
          {categories.map((cat, i) => {
            const { x, y } = pos(ANGLE[i], R_LINE);
            const isActive = active === i;
            return (
              <line
                key={cat.label}
                x1="50"
                y1="50"
                x2={x}
                y2={y}
                stroke="#D7E2EA"
                strokeWidth={isActive ? 0.6 : 0.22}
                opacity={isActive ? 1 : 0.65}
                style={{ transition: 'stroke-width 0.3s, opacity 0.3s' }}
              />
            );
          })}
          {/* 雷达数据面：连接 6 个锚点，让能力模型有数据可视化的体量感 */}
          <polygon
            points={ANGLE.map((deg) => {
              const { x, y } = pos(deg, R_LINE);
              return `${x},${y}`;
            }).join(' ')}
            fill="rgba(182, 0, 168, 0.07)"
            stroke="rgba(182, 0, 168, 0.3)"
            strokeWidth="0.12"
          />
          {ANGLE.map((deg, i) => {
            const { x, y } = pos(deg, R_LINE);
            const isActive = active === i;
            return (
              <circle
                key={`anchor-${i}`}
                cx={x}
                cy={y}
                r={isActive ? 1 : 0.55}
                fill="#B600A8"
                opacity={isActive ? 0.9 : 0.35}
                style={{ transition: 'opacity 0.3s' }}
              />
            );
          })}
        </svg>
        {categories.map((cat, i) => {
          const { x, y } = pos(ANGLE[i], R_LABEL);
          const isActive = active === i;
          return (
            <button
              key={cat.label}
              type="button"
              onMouseEnter={() => onActivate(i)}
              onFocus={() => onActivate(i)}
              onClick={() => onActivate(i)}
              className="absolute text-white whitespace-nowrap tracking-[-0.01em] cursor-pointer bg-transparent border-0 p-1"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: 'translate(-50%, -50%)',
                fontSize: 'clamp(0.9rem, 1.7vw, 1.2rem)',
                fontWeight: isActive ? 700 : 600,
                transition: 'font-weight 0.25s',
              }}
            >
              {cat.label}
            </button>
          );
        })}
      </FadeIn>
    </div>
  );
}

/** 头像周围的故障感白色方块（参考风格元素，克制使用） */
function GlitchBlocks() {
  const reduce = useReducedMotion();
  const blocks = [
    { left: '2%', top: '-3%', w: 22, h: 22 },
    { left: '12%', top: '-5%', w: 14, h: 10 },
    { left: '28%', top: '-2%', w: 10, h: 10 },
    { left: '82%', top: '22%', w: 8, h: 8 },
    { left: '-4%', top: '75%', w: 16, h: 12 },
    { left: '70%', top: '90%', w: 10, h: 10 },
  ];
  return (
    <>
      {blocks.map((b, i) => (
        <motion.span
          key={i}
          className="absolute bg-white hidden sm:block"
          style={{ left: b.left, top: b.top, width: b.w, height: b.h }}
          initial={reduce ? false : { scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: [0, 1, 0.9] }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 + i * 0.05, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        />
      ))}
    </>
  );
}

/** 能力卡片：发光边缘 */
function GlowCard({ cat }) {
  return (
    <div
      className="rounded-3xl border border-[#D7E2EA]/25 p-6 sm:p-8"
      style={{
        background: 'linear-gradient(160deg, #181818 0%, #0C0C0C 65%)',
        boxShadow:
          '0 0 36px rgba(182, 0, 168, 0.28), 0 0 90px rgba(118, 33, 176, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
      }}
    >
      <h3 className="font-medium uppercase tracking-wide text-[#D7E2EA] text-[clamp(1.15rem,2.2vw,1.7rem)] mb-5">
        {cat.name}
      </h3>
      <ul className="space-y-4">
        {cat.items.map((item) => (
          <li key={item.label} className="border-l-2 border-[#D7E2EA]/20 pl-4">
            <div className="text-[#D7E2EA] font-medium text-[clamp(0.9rem,1.5vw,1.05rem)]">
              {item.label}
            </div>
            {item.desc && (
              <div className="text-[#D7E2EA]/55 font-light text-[clamp(0.75rem,1.2vw,0.9rem)] mt-1">
                {item.desc}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** 左侧面板：active=-1 显示头像+引用，否则显示对应的发光能力卡片 */
function LeftPanel({ t, categories, active }) {
  return (
    <div className="relative min-w-0 flex-1 min-h-[310px]">
      <AnimatePresence mode="wait">
        {active === -1 ? (
          <motion.div
            key="quote"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10"
          >
            <FadeIn y={24} delay={0.2} className="relative shrink-0 w-[250px] h-[310px]">
              <img
                src={CONFIG.avatar}
                alt={t.meta.portraitAlt}
                width={250}
                height={310}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-xl"
              />
              <GlitchBlocks />
            </FadeIn>
            <div className="min-w-0 max-w-[420px]">
              <span className="block text-[#b8c4d0] leading-[0.7] text-[3.2rem]">“</span>
              <p className="text-[#D7E2EA]/90 font-normal leading-[1.58] text-[clamp(1.05rem,1.5vw,1.28rem)]">
                {t.skills.quote}
              </p>
              <div className="mt-8">
                <div className="text-[1.15rem] font-medium tracking-[0.01em] text-white">{t.skills.quoteBy}</div>
                <div className="mt-1 text-[0.85rem] tracking-wide text-[#D7E2EA]/75">{t.skills.quoteRole}</div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={categories[active].name}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[520px]"
          >
            <GlowCard cat={categories[active]} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * 能力模型：
 * - 滑到区块：先展示初始态（头像引用 + 下方完整列表）3s
 * - 3s 后开始轮播，1.5s/张；一轮 6 张结束后回到初始态停留 2s，再开启下一轮
 * - 悬停卡片或雷达标签时暂停；继续下滑轮播保持；减弱动效模式下不自动轮播
 */
export default function Skills({ t }) {
  const [active, setActive] = useState(-1);
  const [paused, setPaused] = useState(false);
  const [scrollPaused, setScrollPaused] = useState(false);
  const [phase, setPhase] = useState('idle'); // idle | intro | cycle | rest
  const startedRef = useRef(false);
  const sectionRef = useRef(null);
  const reduce = useReducedMotion();
  const categories = t.skills.categories;

  // 区块刚进入视口即视为「滑到能力模型」（只触发一次）
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (v >= 0.05 && !reduce && !startedRef.current) {
      startedRef.current = true;
      setPhase('intro');
    }
    // 暂停条件①：区块基本滚出视口上方（项目区滑到置顶导航下方，含区块间负边距重叠）
    // 暂停条件②：能力模型第二部分（六类能力网格）顶部滑到置顶导航下方
    // 暂停条件③：能力模型第一部分（内容行）底部滑到置顶导航下方
    const grid = sectionRef.current?.querySelector('.grid');
    const gridTop = grid ? grid.getBoundingClientRect().top : Infinity;
    const part1 = sectionRef.current?.querySelector('[data-part="first"]');
    const part1Bottom = part1 ? part1.getBoundingClientRect().bottom : -Infinity;
    setScrollPaused(
      startedRef.current &&
        (v >= 0.9 || (v > 0 && gridTop <= 96) || (v > 0 && part1Bottom <= 96))
    );
  });
  const cyclePaused = paused || scrollPaused;

  // 轮播状态机：intro 3s 后开播；cycle 阶段 1.5s 换卡，一轮结束进入 rest；rest 2s 后进入下一轮
  useEffect(() => {
    if (reduce || cyclePaused || phase === 'idle') return undefined;
    if (phase === 'intro') {
      const id = setTimeout(() => {
        setPhase('cycle');
        setActive(0);
      }, INTRO_MS);
      return () => clearTimeout(id);
    }
    if (phase === 'cycle') {
      const id = setInterval(() => {
        setActive((a) => {
          const next = a + 1;
          if (next >= categories.length) {
            // 一轮结束：回到初始态
            queueMicrotask(() => {
              setPhase('rest');
              setActive(-1);
            });
            return -1;
          }
          return next;
        });
      }, CYCLE_MS);
      return () => clearInterval(id);
    }
    // phase === 'rest'：停留后开启下一轮
    const id = setTimeout(() => {
      setPhase('cycle');
      setActive(0);
    }, REST_MS);
    return () => clearTimeout(id);
  }, [reduce, cyclePaused, phase, categories.length]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="bg-[#0C0C0C] overflow-x-hidden px-6 sm:px-10 lg:px-16 py-24 lg:py-32 scroll-mt-20"
    >
      <FadeIn y={40} delay={0}>
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)] mb-16 sm:mb-20 md:mb-28">
          {t.skills.title}
        </h2>
      </FadeIn>

      {/* 内容行（第一部分）：左面板（引用 ↔ 发光卡片自动切换）+ 雷达图；悬停整行暂停轮播 */}
      <div
        data-part="first"
        className="flex flex-col gap-14 lg:flex-row lg:items-start lg:gap-10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <LeftPanel t={t} categories={categories} active={active} />
        <CircleDiagram categories={categories} active={active} onActivate={setActive} />
      </div>

      {/* 能力网格（第二部分）：仅在引用态（未展示卡片）时显示；悬停网格暂停轮播 */}
      {active === -1 && (
        <div
          className="mt-20 sm:mt-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-12 max-w-7xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {categories.map((cat, i) => (
            <FadeIn key={cat.name} y={20} delay={i * 0.06}>
              <div className="border-t border-[#D7E2EA]/15 pt-5">
                <h3 className="font-medium uppercase tracking-wide text-[#D7E2EA] text-[clamp(1.05rem,1.8vw,1.35rem)] mb-4">
                  {cat.name}
                </h3>
                <ul className="space-y-3.5">
                  {cat.items.map((item) => (
                    <li key={item.label}>
                      <div className="text-[#D7E2EA] font-medium text-[clamp(0.85rem,1.3vw,0.95rem)]">
                        {item.label}
                      </div>
                      {item.desc && (
                        <div className="text-[#D7E2EA]/55 font-light text-[clamp(0.72rem,1.1vw,0.85rem)] mt-0.5">
                          {item.desc}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      )}
    </section>
  );
}
