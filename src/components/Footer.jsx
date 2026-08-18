import { CONFIG } from '../data/content';
import FadeIn from './ui/FadeIn';
import ContactButton from './ui/ContactButton';
import GhostButton from './ui/GhostButton';

/**
 * 页脚：大标题 + 联系按钮组 + 版权，公众号二维码弹窗
 */
export default function Footer({ t, showWechat, onToggleWechat }) {
  return (
    <footer id="footer" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-12">
        <FadeIn y={40} delay={0}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(2.4rem,8vw,6rem)]">
            {t.footer.title}
            <br className="md:hidden" />
            <span className="block"> {t.footer.titleHighlight}</span>
          </h2>
        </FadeIn>

        <FadeIn y={20} delay={0.1}>
          <p className="text-[#D7E2EA]/90 font-normal text-[clamp(0.9rem,1.6vw,1.15rem)] max-w-xl">
            {t.footer.subtitle}
          </p>
        </FadeIn>

        <FadeIn y={20} delay={0.2}>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 flex-wrap">
            <ContactButton href={`mailto:${CONFIG.email}`}>{t.footer.email}</ContactButton>
            <GhostButton href={CONFIG.resumeLink}>{t.footer.download}</GhostButton>
            <GhostButton href={CONFIG.linkedin}>{t.footer.linkedin}</GhostButton>
            <GhostButton onClick={onToggleWechat}>{t.footer.wechat}</GhostButton>
          </div>
        </FadeIn>

        <div className="text-[#D7E2EA]/80 text-sm font-mono">
          © {new Date().getFullYear()} Jing Guo. All rights reserved.
        </div>
      </div>

      {showWechat && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm overscroll-contain"
          onClick={onToggleWechat}
          role="dialog"
          aria-modal="true"
          aria-label={t.wechatModal.title}
        >
          <div
            className="bg-[#0C0C0C] border border-[#D7E2EA]/15 p-8 rounded-3xl max-w-sm w-full mx-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onToggleWechat}
              aria-label="Close"
              className="absolute top-4 right-4 text-[#D7E2EA]/60 hover:text-[#D7E2EA]"
            >
              ✕
            </button>
            <div className="text-center">
              <div className="text-xl font-bold mb-2 text-[#D7E2EA]">{t.wechatModal.title}</div>
              <div className="text-sm text-[#D7E2EA]/60 mb-4">{t.wechatModal.desc}</div>
              <div className="w-48 h-48 mx-auto bg-white/10 rounded-2xl flex items-center justify-center overflow-hidden">
                <img
                  src={CONFIG.wechatQR}
                  alt={t.wechatModal.title}
                  width={192}
                  height={192}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
