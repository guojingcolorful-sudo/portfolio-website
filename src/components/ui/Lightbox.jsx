import { useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * 图片放大查看：点击遮罩或 ✕ 关闭，Esc 可关，打开时锁定页面滚动
 */
export default function Lightbox({ item, onClose }) {
  const reduce = useReducedMotion();

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 backdrop-blur-sm overscroll-contain"
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.zh || item.en || 'Image preview'}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute top-5 right-6 text-white/70 hover:text-white text-3xl leading-none cursor-pointer"
      >
        ✕
      </button>
      <img
        src={item.full || item.img}
        alt={item.zh || item.en}
        onClick={(e) => e.stopPropagation()}
        className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl select-none"
      />
    </motion.div>
  );
}
