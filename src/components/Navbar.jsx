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
        className="relative z-10 w-full flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8"
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
              className="text-[#D7E2EA] font-medium uppercase tracking-wider hover:opacity-70 transition-opacity duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={onToggleLang}
          aria-label="Switch language"
          className="flex items-center h-9 rounded-full border border-[#D7E2EA]/25 bg-black/40 px-1 cursor-pointer hover:border-[#D7E2EA]/60 transition-colors"
        >
          <span
            className={`w-8 text-center text-[11px] font-mono font-bold transition-colors ${
              lang === 'en' ? 'text-black bg-[#D7E2EA] rounded-full py-1' : 'text-[#D7E2EA]/60'
            }`}
          >
            EN
          </span>
          <span
            className={`w-8 text-center text-[11px] font-mono font-bold transition-colors ${
              lang === 'zh' ? 'text-black bg-[#D7E2EA] rounded-full py-1' : 'text-[#D7E2EA]/60'
            }`}
          >
            ZH
          </span>
        </button>
      </nav>
    </FadeIn>
  );
}
