import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

function Char({ children, progress, range, reduce }) {
  const opacity = useTransform(progress, range, reduce ? [1, 1] : [0.35, 1]);
  return (
    <span className="relative">
      <span className={reduce ? 'opacity-0' : 'opacity-35'}>{children}</span>
      <motion.span style={{ opacity }} className="absolute inset-0">
        {children}
      </motion.span>
    </span>
  );
}

/**
 * 逐字滚动显现：每个字符随段落进入视口的进度从 0.35 升到 1
 * 在段落到达视口中部前完成显现，保证阅读时全文清晰
 */
export default function AnimatedText({ text, className }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'end 0.55'],
  });

  const chars = Array.from(text);

  return (
    <p ref={ref} className={className}>
      {chars.map((char, i) => {
        const start = i / chars.length;
        const end = start + 1 / chars.length;
        return (
          <Char key={i} progress={scrollYProgress} range={[start, end]} reduce={reduce}>
            {char}
          </Char>
        );
      })}
    </p>
  );
}
