import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * 磁吸效果：光标靠近时元素向光标轻微位移，远离后回位
 * 参考规范：padding 150 / strength 3 / 进入 0.3s ease-out / 回位 0.6s ease-in-out
 */
export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
}) {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return undefined;
    const el = ref.current;
    if (!el) return undefined;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = el.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      if (Math.abs(distX) < width / 2 + padding && Math.abs(distY) < height / 2 + padding) {
        setIsActive(true);
        setPosition({ x: distX / strength, y: distY / strength });
      } else {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [padding, strength, reduce]);

  return (
    <div
      ref={ref}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isActive ? activeTransition : inactiveTransition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
}
