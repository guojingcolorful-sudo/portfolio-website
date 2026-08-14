import React, { useState } from 'react';
import { 
  Mail, ChevronDown, Zap, TrendingUp, Layers, CheckCircle2, 
  Briefcase, Calendar, Star, User, Layout, BarChart, Users, 
  ClipboardList, Wrench, Award, QrCode, X 
} from 'lucide-react';

// ==================== 配置项 ====================
const CONFIG = {
  avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  resumeLink: 'https://example.com/your-resume.pdf',
  email: 'guojingcolorful@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/jenny-kwok-590269427',
  wechatQR: 'https://example.com/wechat-qr.png', 
};

// ==================== 国际化词典 ====================
const DICT = {
  zh: {
  nav: { home: '首页', about: '关于', timeline: '履历', projects: '项目', skills: '能力' },
  hero: {
    tag: '10年金融科技产品 | 从0到1到100 | 全链路闭环',
    title1: '画原型 · 理流程 · 搭中台 · 优前端 ',
    titleHighlight1: '· 做营销',
    title2: '用产品与运营思维',
    titleHighlight2: '，驱动金融科技业务增长',
    contactBtn: '联系我',
  },
  about: {
    title: '关于我',
    desc: '我是一名资深商业化与增长产品专家，拥有10年保险金融科技领域经验。擅长从0到1搭建底层基础平台，及采用AARRR模型从1到100驱动用户增长的全链路操盘。核心能力是将复杂的业务需求，抽象为可执行的规则引擎与自动化运营体系，同时具备新媒体内容策划与营销转化能力。',
    metrics: [
      { value: '10年', label: '金融科技经验' },
      { value: '120万', label: '月活用户(MAU)' },
      { value: '128个', label: '系统化数据标签' },
      { value: '37人', label: '团队赋能' },
    ],
  },
  timeline: {
    title: '职业履历',
    items: [
      {
        company: '北京政务科技有限公司',
        rank: '政府数字化转型',
        role: '产品经理',
        period: '2024年12月 – 2026年4月',
        description: '主导区级政务移动端App及市级数据大屏产品，输出产品需求文档12份、原型页面80余页。在职期间获得市政府公开表扬，积累政府数字化转型中平台建设经验。',
      },
      {
        company: '阳光财产保险股份有限公司',
        rank: '中国TOP7保险公司',
        role: '产品运营（数字化转型）',
        period: '2019年7月 – 2024年11月',
        description: '主导从0到1搭建CDP、自动化营销引擎、会员体系，赋能37人团队，实现月活7.3万→120万，续保率+20%，平台保费3000万。',
      },
      {
        company: '众安在线财产保险股份有限公司',
        rank: '中国首家互联网保险公司 | 全球Fintech前5',
        role: '产品经理',
        period: '2017年9月 – 2018年12月',
        description: '主导全国首个纯电子化诉讼保全保单，对接10+渠道，上线34款产品，交付周期缩短至1.5周，释放保证金约400万。',
      },
      {
        company: '大象保险（世纪保众）',
        rank: '保险科技经纪平台',
        role: '产品运营',
        period: '2015年10月 – 2017年8月',
        description: '独立策划17个线上营销活动，贡献31%的营收；优化短信营销策略，6个月内收入增长61.8倍；新媒体营销获900余笔订单。',
      },
    ],
  },
  projects: {
    title: '项目案例库',
    items: [
      {
        tag: '阳光保险 · 中国TOP7',
        title: 'CDP 营销中台',
        category: '增长运营与中台',
        situation: '传统保险公司依赖人工运营，用户数据分散，无法实现精准触达与自动化营销。',
        methodology: '采用数据驱动方法论，从0到1搭建CDP，整合全域数据，建立统一用户画像。',
        action: '定义128个用户标签与26个行为事件；设计自动化营销引擎（15+触发条件，8种触达渠道）；赋能37人团队。',
        result: '年节省开发成本100万元以上，月活从7.3万提升至120万，线上续保率较线下高出20个百分点。',
        img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      },
      {
        tag: '阳光保险 · 中国TOP7',
        title: '全渠道用户经营',
        category: '商业化产品设计及运营',
        situation: '缺乏统一的用户触达与权益体系，用户活跃度和留存率低。',
        methodology: '基于AARRR模型设计会员任务体系与积分权益，打通APP、小程序、官微全渠道，覆盖产品功能优化及增长运营。',
        action: '搭建会员等级、任务中心、积分商城；设计自动化触达策略；规划公众号内容策略与互动机制，策划拉新活动；优化活动模板与数据看板。',
        result: '官微粉丝380万→830万，小程序用户100万→860万，平台年度保费达3000万，续保率+20%。',
        img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      },
      {
        tag: '众安保险 · 全球Fintech前5',
        title: '创新产品0-1 & API标准化',
        category: '产品体验优化',
        situation: '外部渠道对接效率低，交付周期长，缺乏标准化流程。',
        methodology: '采用产品标准化与流程再造，将复杂业务规则抽象为可复用的API组件。',
        action: '主导全国首个纯电子化诉讼保全保单；对接10+渠道，上线34款产品；优化保费结算流程。',
        result: '结算周期从4周缩短至1.5周，释放保证金约400万，覆盖6大行业。',
        img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      },
      {
        tag: '阳光保险 · 中国TOP7',
        title: '理赔流程及IVR优化',
        category: '产品体验优化',
        situation: '线上理赔流程体验不佳，同时人工服务成本高，客户满意度低。',
        methodology: '对标头部平台，优化线上全链路承保、理赔体验；从IVR为起点，多入口引导客户开展服务。',
        action: '优化线上理赔流程，优化ivr流程，整合客服系统数据。',
        result: '理赔线上使用率提升一倍，客户满意度显著提升。',
        img: 'https://images.unsplash.com/photo-1622737133809-d95047b9e673?auto=format&fit=crop&w=800&q=80',
      },
      {
        tag: '政务科技 · 政府数字化转型',
        title: '政务移动端App与数据大屏',
        category: '产品体验优化',
        situation: '政府需要将线下政务服务迁移至线上；实现政务服务数据大屏展示。',
        methodology: '采用以用户为中心的设计方法，梳理政务业务流程，输出标准化产品方案。',
        action: '移动端App部分功能优化，从用户流程到系统梳理并给出调研报告和需求文档。从需求分析到开发上线，输出产品需求文档12份、原型页面80余页。',
        result: '获市政府公开表扬，沉淀政府数字化转型方法论。',
        img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      },
      {
        tag: '大象保险 · 保险科技经纪平台',
        title: '保险内容营销与新媒体获客',
        category: '新媒体营销',
        situation: '保险产品同质化严重，用户对传统保险销售方式抵触，获客成本高。',
        methodology: '采用内容营销策略，以原创保险科普文案建立用户信任，通过公众号实现阅读→购买转化。',
        action: '原创保险营销文案，通过公众号原文阅读实现转化；优化内容选题与发布节奏，持续提升阅读量与转化率。',
        result: '实现900+订单、400+支付成功，营销收入占同期保费4.58%，单篇文章阅读量3.5万+。',
        img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  skills: {
    title: '能力模型',
    categories: [
      {
        name: '产品设计能力',
        icon: <Layout />,
        items: [
          { label: '原型设计（Figma、Axure）', desc: '高保真原型、交互设计、设计系统' },
          { label: '产品需求文档撰写', desc: '用户故事、流程图、验收标准' },
          { label: '用户旅程设计', desc: '端到端体验优化，覆盖全链路' },
        ],
      },
      {
        name: '数据分析能力',
        icon: <BarChart />,
        items: [
          { label: '数据驱动决策', desc: '漏斗分析、用户分层、A/B测试' },
          { label: '指标体系搭建', desc: '月活跃用户、续保率、转化率、客户生命周期价值' },
          { label: '用户标签体系', desc: '业务标签、行为标签、预测标签' },
        ],
      },
      {
        name: '运营与增长能力',
        icon: <Users />,
        items: [
          { label: '用户运营', desc: '用户生命周期模型、会员体系、积分任务' },
          { label: '新媒体营销', desc: '公众号、小红书内容策划与营销，900+订单转化' },
          { label: '活动运营', desc: '从策划到复盘，单场活动贡献保费近7000万元' },
        ],
      },
      {
        name: '项目管理能力',
        icon: <ClipboardList />,
        items: [
          { label: '跨部门协调', desc: '技术、业务、运营、外部供应商' },
          { label: '团队管理', desc: '从零搭建37人团队，制定标准作业流程与培训体系' },
          { label: '项目推进', desc: '从需求到上线的全流程管理' },
        ],
      },
      {
        name: '工具与技术栈',
        icon: <Wrench />,
        items: [
          { label: 'Figma / Axure', desc: '原型设计、UI协作' },
          { label: 'ProcessOn / SQL', desc: '流程图绘制、数据提取与分析' },
          { label: 'Jira / Confluence', desc: '项目管理、文档协作' },
        ],
      },
      {
        name: '认证与语言',
        icon: <Award />,
        items: [
          { label: '项目管理专业人士认证（PMP）', desc: '项目管理专业认证' },
          { label: '中文（母语）', desc: '' },
          { label: '英文（读写能力）', desc: '借助工具完成工作沟通' },
        ],
      },
    ],
  },
  footer: {
    title: '期待共同打造',
    titleHighlight: '有影响力的产品',
    subtitle: '正在寻找全球范围内的高级产品经理 / 增长专家岗位机会。',
    download: '下载简历',
    wechat: '公众号',
  },
},
  en: {
  nav: { home: 'Home', about: 'About', timeline: 'Experience', projects: 'Work', skills: 'Capabilities' },
  hero: {
    tag: '10 Yrs in FinTech · 0-to-1-to-100 · Full-Cycle Impact',
    title1: 'Prototype · Optimize · Build Mid-Platform · Enhance Front-End',
    titleHighlight1: '· Drive Growth',
    title2: 'Product & Ops thinking',
    titleHighlight2: 'that delivers FinTech growth',
    contactBtn: "Let's Connect",
  },
  about: {
    title: 'About Me',
    desc: "I'm a seasoned commercial and growth product expert with 10 years in InsurTech and FinTech. I build scalable platforms from 0 to 1 and drive user growth from 1 to 100 using the AARRR model. My core strength is translating complex business needs into executable rule engines and automated operations, combined with content strategy and marketing conversion capabilities.",
    metrics: [
      { value: '10+ Yrs', label: 'FinTech Experience' },
      { value: '1.2M', label: 'Monthly Active Users' },
      { value: '128', label: 'Systemized Data Tags' },
      { value: '37', label: 'Team Empowered' },
    ],
  },
  timeline: {
    title: 'Career Timeline',
    items: [
      {
        company: 'Beijing Government Technology Co.',
        rank: 'GovTech · Digital Public Services',
        role: 'Product Manager',
        period: 'Dec 2024 – Apr 2026',
        description: 'Led full-cycle product development for citizen-facing App and data dashboard. Delivered 12 PRDs and 80+ prototypes. Received official commendation from the municipal government.',
      },
      {
        company: 'Sunshine Insurance Group',
        rank: 'Top 7 Insurer in China',
        role: 'Product Operations (Digital Transformation)',
        period: 'Jul 2019 – Nov 2024',
        description: 'Built CDP, automated marketing engine, and membership system from 0 to 1. Empowered a 37-person team, grew MAU 73K→1.2M, increased renewal rate by 20%, and reached $4.2M in platform premium.',
      },
      {
        company: 'ZhongAn Online P&C Insurance',
        rank: "China's 1st Internet Insurer · Global Fintech Top 5",
        role: 'Product Manager',
        period: 'Sep 2017 – Dec 2018',
        description: 'Pioneered the first fully digital litigation guarantee policy in China. Onboarded 10+ channels, launched 34 products, cut delivery cycle from 4 weeks to 1.5 weeks, and released ~$560K in margin.',
      },
      {
        company: 'Daxiangbao (Century Baozhong)',
        rank: 'InsurTech Brokerage Platform',
        role: 'Product Operations',
        period: 'Oct 2015 – Aug 2017',
        description: 'Executed 17 online campaigns, contributing 31% of revenue. Optimized SMS strategy, growing revenue 61.8x in 6 months. Generated 900+ orders through content marketing.',
      },
    ],
  },
  projects: {
    title: 'Project Case Studies',
    items: [
      {
        tag: 'Sunshine · Top 7 Insurer',
        title: 'CDP & Marketing Mid-Platform',
        category: 'Growth Ops & Mid-Platform',
        situation: 'Traditional insurer relied on manual operations; user data was fragmented, preventing precision targeting.',
        methodology: 'Adopted a data-driven approach, building a CDP from scratch to unify customer data and create 360° user profiles.',
        action: 'Defined 128 user tags and 26 behavioral events. Designed an automated marketing engine with 15+ triggers and 8 channels. Empowered a 37-person team.',
        result: 'Saved $140K+ annually in development costs, grew MAU from 73K to 1.2M, and achieved a renewal rate 20% higher than offline.',
        img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      },
      {
        tag: 'Sunshine · Top 7 Insurer',
        title: 'Omnichannel User Engagement',
        category: 'Commercial Product Design & Ops',
        situation: 'Lacked a unified engagement and loyalty system; user activity and retention were low.',
        methodology: 'Designed a membership mission system with tiered rewards using the AARRR model, integrated across App, Mini Program, and WeChat Official Account — covering both product features and growth operations.',
        action: 'Built membership tiers, mission center, and points mall. Designed automated engagement strategies. Planned content strategy and interactive mechanisms for the Official Account, launched acquisition campaigns, and optimized campaign templates and dashboards.',
        result: 'Grew followers from 3.8M to 8.3M, Mini Program users from 1M to 8.6M, reached $4.2M in platform premium, and increased renewal rate by 20%.',
        img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      },
      {
        tag: 'ZhongAn · Global Fintech Top 5',
        title: '0-to-1 Product & API Standardization',
        category: 'Product Excellence & UX',
        situation: 'External channel onboarding was slow, delivery cycles were long, and lacked standardization.',
        methodology: 'Adopted product standardization and process re-engineering, abstracting complex business rules into reusable API components.',
        action: 'Pioneered the first fully digital litigation guarantee policy in China. Onboarded 10+ channels, launched 34 products, and optimized premium settlement workflows.',
        result: 'Reduced delivery cycle from 4 weeks to 1.5 weeks, released ~$560K in margin, and covered 6 industries.',
        img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      },
      {
        tag: 'Sunshine · Top 7 Insurer',
        title: 'Claims Digitization & IVR Optimization',
        category: 'Product Excellence & UX',
        situation: 'The online claims experience was poor, service costs were high, and customer satisfaction was low.',
        methodology: 'Benchmarked against leading platforms to optimize the end-to-end underwriting and claims experience, starting with IVR improvements and multi-entry service guidance.',
        action: 'Optimized the online claims journey, revamped the IVR call flow, and integrated customer service data.',
        result: 'Doubled the online claims usage rate and significantly improved customer satisfaction.',
        img: 'https://images.unsplash.com/photo-1622737133809-d95047b9e673?auto=format&fit=crop&w=800&q=80',
      },
      {
        tag: 'GovTech · Digital Public Services',
        title: 'Citizen App & Data Dashboard',
        category: 'Product Excellence & UX',
        situation: 'Government needed to digitize offline public services and build a data dashboard for real-time service visibility.',
        methodology: 'Applied user-centered design methodology, mapped government service workflows, and delivered standardized product solutions.',
        action: 'Optimized App features, conducted user flow and system analysis, and delivered research reports and requirements documents. Managed the full lifecycle from requirements to launch, delivering 12 PRDs and 80+ prototypes.',
        result: 'Received official commendation from the municipal government and built a GovTech digital transformation playbook.',
        img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      },
      {
        tag: 'Daxiangbao · InsurTech Brokerage',
        title: 'Insurance Content Marketing & New Media Acquisition',
        category: 'New Media Marketing',
        situation: 'Insurance products were highly commoditized, users were resistant to traditional sales approaches, and acquisition costs were high.',
        methodology: 'Leveraged content marketing to build trust through original educational content, converting readers via Official Account read-to-purchase flow.',
        action: 'Created original insurance marketing articles, optimized content topics and publishing cadence to continuously improve reach and conversion.',
        result: 'Generated 900+ orders and 400+ paid conversions, with marketing revenue accounting for 4.58% of premium income and a single article reaching 35K+ views.',
        img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  skills: {
    title: 'Capability Model',
    categories: [
      {
        name: 'Product Design',
        icon: <Layout />,
        items: [
          { label: 'Prototyping (Figma, Axure)', desc: 'High-fidelity prototypes, interaction design, design systems' },
          { label: 'PRD Writing', desc: 'User stories, flowcharts, acceptance criteria' },
          { label: 'User Journey Design', desc: 'End-to-end experience optimization across the full lifecycle' },
        ],
      },
      {
        name: 'Data Analytics',
        icon: <BarChart />,
        items: [
          { label: 'Data-Driven Decisions', desc: 'Funnel analysis, user segmentation, A/B testing' },
          { label: 'Metrics & KPIs', desc: 'MAU, renewal rate, conversion, LTV' },
          { label: 'User Tagging', desc: 'Business, behavioral, and predictive tags' },
        ],
      },
      {
        name: 'Operations & Growth',
        icon: <Users />,
        items: [
          { label: 'User Operations', desc: 'AARRR model, membership systems, points mechanics' },
          { label: 'New Media Marketing', desc: 'Content strategy & marketing on WeChat, RedNote — 900+ order conversions' },
          { label: 'Campaign Operations', desc: 'End-to-end campaigns, ~$9.7M premium from a single event' },
        ],
      },
      {
        name: 'Project Management',
        icon: <ClipboardList />,
        items: [
          { label: 'Cross-functional Coordination', desc: 'Tech, business, operations, and external vendors' },
          { label: 'Team Management', desc: 'Built a 37-person team from scratch, developed SOPs and training' },
          { label: 'Project Delivery', desc: 'Full lifecycle management from requirements to launch' },
        ],
      },
      {
        name: 'Tools & Tech Stack',
        icon: <Wrench />,
        items: [
          { label: 'Figma / Axure', desc: 'Prototyping, UI collaboration' },
          { label: 'ProcessOn / SQL', desc: 'Flowcharting, data extraction & analysis' },
          { label: 'Jira / Confluence', desc: 'Project management, documentation' },
        ],
      },
      {
        name: 'Certifications & Languages',
        icon: <Award />,
        items: [
          { label: 'PMP (Project Management Professional)', desc: 'Professional certification' },
          { label: 'Chinese (Native)', desc: '' },
          { label: 'English (Reading/Writing)', desc: 'Business communication with tool support' },
        ],
      },
    ],
  },
  footer: {
    title: "Let's build something",
    titleHighlight: 'impactful',
    subtitle: 'Open for Senior/Lead Product Management and Growth roles globally.',
    download: 'Download Resume',
    wechat: 'WeChat',
  },
},
};

// ==================== 主组件 ====================
export default function App() {
  const [lang, setLang] = useState('zh');
  const [showWechat, setShowWechat] = useState(false);
  const t = DICT[lang];

  return (
    <div className="relative scroll-smooth min-h-screen bg-brand-bg text-white font-sans antialiased">

      {/* ===== 导航栏 ===== */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></div>
          <span className="font-black text-xl tracking-tight">JING.<span className="text-gray-500 font-mono text-sm">PM</span></span>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-6 text-sm text-gray-400">
            <a href="#about" className="hover:text-white transition">{t.nav.about}</a>
            <a href="#timeline" className="hover:text-white transition">{t.nav.timeline}</a>
            <a href="#projects" className="hover:text-white transition">{t.nav.projects}</a>
            <a href="#skills" className="hover:text-white transition">{t.nav.skills}</a>
          </div>
          <button
            onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
            className="flex items-center justify-between w-[88px] h-9 rounded-full bg-black border border-white/10 p-1 cursor-pointer hover:border-brand-primary/50 transition-colors"
          >
            <span className={`w-1/2 text-center text-[11px] font-mono font-bold transition-colors ${lang === 'en' ? 'text-white bg-white/10 rounded-full py-1' : 'text-gray-500'}`}>EN</span>
            <span className={`w-1/2 text-center text-[11px] font-mono font-bold transition-colors ${lang === 'zh' ? 'text-white bg-white/10 rounded-full py-1' : 'text-gray-500'}`}>ZH</span>
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 md:px-12">

        {/* ===== HERO ===== */}
        <section className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0 opacity-30 mix-blend-screen"
            src="https://cdn.pixabay.com/video/2020/05/25/40156-425121406_large.mp4"></video>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/80 via-brand-bg/60 to-brand-bg z-0"></div>
          <div className="relative z-10 max-w-5xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="text-xs font-mono text-gray-300 uppercase tracking-widest">{t.hero.tag}</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[80px] font-black tracking-tight leading-[1.1] mb-10">
              {t.hero.title1} <span className="text-brand-primary glow-text-primary">{t.hero.titleHighlight1}</span><br />
              {t.hero.title2} <span className="text-brand-accent glow-text-accent">{t.hero.titleHighlight2}.</span>
            </h1>
            <a href="#footer" className="inline-flex items-center gap-2 bg-white text-black font-black px-8 py-4 rounded-full text-lg hover:scale-95 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              <Mail className="w-5 h-5" /> {t.hero.contactBtn}
            </a>
          </div>
          <div className="absolute bottom-10 animate-bounce text-gray-500 z-10"><ChevronDown className="w-8 h-8" /></div>
        </section>

        {/* ===== 关于我 ===== */}
        <section id="about" className="py-24 scroll-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-brand-primary/30 overflow-hidden shadow-[0_0_50px_rgba(56,189,248,0.15)]">
                <img src={CONFIG.avatar} alt="Jing Guo" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="lg:col-span-8">
              <h2 className="text-3xl md:text-5xl font-black mb-6">{t.about.title}</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-3xl">{t.about.desc}</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {t.about.metrics.map((item, idx) => (
                  <div key={idx} className="glass-panel p-4 rounded-2xl text-center border border-white/5">
                    <div className="text-2xl font-black text-brand-primary">{item.value}</div>
                    <div className="text-xs text-gray-500 font-mono">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== 时间轴 ===== */}
        <section id="timeline" className="py-24 scroll-mt-20">
          <h2 className="text-3xl md:text-5xl font-black mb-16 text-center">{t.timeline.title}</h2>
          <div className="relative border-l-2 border-brand-primary/30 pl-8 space-y-12">
            {t.timeline.items.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-10 top-1 w-4 h-4 rounded-full bg-brand-primary shadow-[0_0_20px_rgba(56,189,248,0.5)]"></div>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 flex-wrap">
                  <span className="text-sm font-mono text-brand-primary whitespace-nowrap">{item.period}</span>
                  <h3 className="text-xl font-bold">{item.company}</h3>
                  <span className="text-xs bg-brand-primary/20 text-brand-primary px-3 py-1 rounded-full font-mono">{item.rank}</span>
                  <span className="text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full">{item.role}</span>
                </div>
                <p className="text-gray-400 mt-3 max-w-3xl leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== 项目案例库 ===== */}
        <section id="projects" className="py-24 scroll-mt-20">
          <h2 className="text-3xl md:text-5xl font-black mb-16 text-center">{t.projects.title}</h2>
          <div className="grid grid-cols-1 gap-12">
            {t.projects.items.map((project, idx) => (
              <div key={idx} className="glass-panel rounded-3xl overflow-hidden border border-white/5 hover:border-brand-primary/30 transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                  <div className="lg:col-span-2 h-64 lg:h-auto relative overflow-hidden">
                    <img src={project.img} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                  </div>
                  <div className="lg:col-span-3 p-6 lg:p-8 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-xs font-mono text-brand-accent uppercase tracking-wider">{project.tag}</span>
                      <span className="text-xs bg-white/10 px-3 py-1 rounded-full text-gray-300">{project.category}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <div className="space-y-2 text-sm text-gray-300">
                      <p><strong className="text-brand-primary">S:</strong> {project.situation}</p>
                      <p><strong className="text-brand-primary">M:</strong> {project.methodology}</p>
                      <p><strong className="text-brand-primary">A:</strong> {project.action}</p>
                      <p><strong className="text-brand-primary">R:</strong> {project.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== 能力模型 ===== */}
        <section id="skills" className="py-24 scroll-mt-20">
          <h2 className="text-3xl md:text-5xl font-black mb-16 text-center">{t.skills.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.skills.categories.map((cat, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-brand-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary">
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-bold">{cat.name}</h3>
                </div>
                <ul className="space-y-3 text-sm text-gray-300">
                  {cat.items.map((item, i) => (
                    <li key={i} className="border-b border-white/5 pb-2 last:border-0 last:pb-0">
                      <div className="font-medium text-white">{item.label}</div>
                      {item.desc && <div className="text-xs text-gray-400 mt-0.5">{item.desc}</div>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* ===== FOOTER ===== */}
      <footer id="footer" className="w-full py-24 px-6 border-t border-white/5 text-center relative">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            {t.footer.title} <br className="md:hidden" />
            <span className="text-brand-primary glow-text-primary">{t.footer.titleHighlight}.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12">{t.footer.subtitle}</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 flex-wrap">
            <a href={`mailto:${CONFIG.email}`} className="bg-white text-black font-bold px-8 py-4 rounded-2xl flex items-center gap-3 hover:scale-95 transition-transform shadow-xl">
              <Mail className="w-5 h-5" /> Email Me
            </a>
            <a href={CONFIG.resumeLink} download className="glass-panel text-white font-bold px-8 py-4 rounded-2xl flex items-center gap-3 hover:bg-white/10 hover:scale-95 transition-transform border border-white/10">
              <i className="fa-solid fa-file-pdf text-brand-primary"></i> {t.footer.download}
            </a>
            <a href={CONFIG.linkedin} target="_blank" rel="noreferrer" className="glass-panel text-white font-bold px-8 py-4 rounded-2xl flex items-center gap-3 hover:bg-white/10 hover:scale-95 transition-transform border border-white/10">
              <i className="fa-brands fa-linkedin text-[#0A66C2] text-xl"></i> LinkedIn
            </a>
            {/* 公众号按钮 */}
            <button 
              onClick={() => setShowWechat(true)}
              className="glass-panel text-white font-bold px-8 py-4 rounded-2xl flex items-center gap-3 hover:bg-white/10 hover:scale-95 transition-transform border border-white/10"
            >
              <i className="fa-brands fa-weixin text-green-400 text-xl"></i> {t.footer.wechat}
            </button>
          </div>
          <div className="mt-16 text-gray-600 text-sm font-mono">
            © {new Date().getFullYear()} Jing Guo. All rights reserved.
          </div>
        </div>
      </footer>

      {/* ===== 公众号二维码弹窗 ===== */}
      {showWechat && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={() => setShowWechat(false)}>
          <div className="glass-panel p-8 rounded-3xl max-w-sm w-full mx-4 border border-white/10 relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowWechat(false)} className="absolute top-4 right-4 text-gray-400 hover:text-white">
              <X className="w-6 h-6" />
            </button>
            <div className="text-center">
              <div className="text-xl font-bold mb-2">微信公众号</div>
              <div className="text-sm text-gray-400 mb-4">扫码关注，获取更多产品思考与案例</div>
              <div className="w-48 h-48 mx-auto bg-white/10 rounded-2xl flex items-center justify-center overflow-hidden">
                {CONFIG.wechatQR ? (
                  <img src={CONFIG.wechatQR} alt="微信公众号二维码" className="w-full h-full object-cover" />
                ) : (
                  <div className="text-gray-500 text-sm p-4 text-center">
                    请替换<br />CONFIG.wechatQR<br />为你的二维码图片链接
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
