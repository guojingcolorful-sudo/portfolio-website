import { Languages } from 'lucide-react';
import FadeIn from './ui/FadeIn';

/**
 * 顶部导航：品牌 + 单行链接 + 中英切换（参考规范：单行、≤80px、hover 70%）
 */
export default function Navbar({ t, lang, onToggleLang }) {
  const links = [
    { href: '#about', label: t.nav.about },
    { href: '#timeline', label: t.nav.timeline },
    { href: '#projects', label: t.nav.projects },
    { href: '#skills', label: t.nav.skills },
  ];

  return (
    <FadeIn y={-20} delay={0} duration={0.7}>
      <nav
        aria-label="Main navigation"
        className="fixed top-0 inset-x-0 z-40 flex items-center justify-between px-6 md:px-10 py-4 md:py-5 bg-[#0C0C0C]/40 backdrop-blur-md border-b border-white/10"
      >
        <a
          href="#top"
          className="font-black uppercase tracking-tight text-lg md:text-xl text-[#D7E2EA]"
        >
          JING.
        </a>

        <div className="hidden md:flex items-center gap-8 lg:gap-12 text-sm lg:text-[1.05rem]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="inline-block text-[#D7E2EA] font-medium uppercase tracking-wider py-3 hover:opacity-70 transition-opacity duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={onToggleLang}
          aria-label="Switch language"
          className="flex items-center h-11 rounded-full border border-[#D7E2EA]/25 bg-black/40 px-1 cursor-pointer hover:border-[#D7E2EA]/60 transition-colors"
        >
          <Languages size={14} strokeWidth={1.5} className="ml-1.5 mr-0.5 text-[#D7E2EA]/60" aria-hidden="true" />
          <span
            className={`w-8 text-center text-[11px] font-mono font-bold transition-colors ${
              lang === 'en' ? 'text-black bg-[#D7E2EA] rounded-full py-1' : 'text-[#D7E2EA]/90'
            }`}
          >
            EN
          </span>
          <span
            className={`w-8 text-center text-[11px] font-mono font-bold transition-colors ${
              lang === 'zh' ? 'text-black bg-[#D7E2EA] rounded-full py-1' : 'text-[#D7E2EA]/90'
            }`}
          >
            ZH
          </span>
        </button>
      </nav>
    </FadeIn>
  );
}
