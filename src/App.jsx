import { useState } from 'react';
import { DICT } from './data/content';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

export default function App() {
  const [lang, setLang] = useState('zh');
  const [showWechat, setShowWechat] = useState(false);
  const t = DICT[lang];

  return (
    <div className="relative min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-sans antialiased overflow-x-clip">
      <main>
        <Hero t={t} lang={lang} onToggleLang={() => setLang(lang === 'zh' ? 'en' : 'zh')} />
        <Marquee lang={lang} />
        <About t={t} />
        <Timeline t={t} />
        <Skills t={t} />
        <Projects t={t} />
      </main>

      <Footer t={t} showWechat={showWechat} onToggleWechat={() => setShowWechat(!showWechat)} />
    </div>
  );
}
