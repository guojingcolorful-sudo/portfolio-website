import avatarImg from '../assets/img/avatar.jpg';
import avatarHeroImg from '../assets/img/avatar-hero.png';
import govCol1a from '../assets/img/gov-col1a.jpg';
import govCol1b from '../assets/img/gov-col1b.jpg';
import govCol2 from '../assets/img/gov-col2.jpg';
import engCol1a from '../assets/img/eng-col1a.jpg';
import growCol1a from '../assets/img/grow-col1a.jpg';
import pmpCol1b from '../assets/img/pmp-col1b.jpg';
import omniCol2 from '../assets/img/omni-col2.jpg';
import cdpCol2 from '../assets/img/cdp-col2.jpg';
import ivrCol1b from '../assets/img/ivr-col1b.jpg';
import wechatQr from '../assets/img/wechat.jpg';
// 履历区漂移照片（自然比例裸图）
import govMid from '../assets/img/gov-mid.jpg';
import engMid from '../assets/img/eng-mid.png';
import growMid from '../assets/img/grow-mid.jpg';
import pmpMid from '../assets/img/pmp-mid.jpg';
import innoMid from '../assets/img/inno-mid.jpg';
import omniMid from '../assets/img/omni-mid.jpg';
import cdpMid from '../assets/img/cdp-mid.jpg';

// ==================== 站点配置 ====================
export const CONFIG = {
  avatar: avatarImg,
  avatarHero: avatarHeroImg,
  resumeLink: 'https://www.kdocs.cn/l/ct0q7IEE357o',
  email: 'guojingcolorful@hotmail.com',
  linkedin: 'https://www.linkedin.com/in/jenny-kwok-590269427',
  wechatQR: wechatQr,
};

// ==================== 履历区漂移照片（两列，随滚动上漂） ====================
export const DRIFT_PHOTOS = {
  left: [
    { img: govMid, w: 800, h: 587, zh: '政务产品原型', en: 'Government service prototype' },
    { img: engMid, w: 800, h: 1583, zh: '英语学习原型', en: 'English learning prototype' },
    { img: innoMid, w: 800, h: 533, zh: '创新产品 0-1', en: '0-to-1 product innovation' },
  ],
  right: [
    { img: omniMid, w: 800, h: 570, zh: '全渠道经营', en: 'Omnichannel engagement' },
    { img: cdpMid, w: 800, h: 533, zh: 'CDP 营销中台', en: 'CDP marketing mid-platform' },
    { img: growMid, w: 800, h: 404, zh: '业务增长全流程', en: 'Business growth framework' },
    { img: pmpMid, w: 800, h: 618, zh: 'PMP 认证', en: 'PMP certification' },
  ],
};

// ==================== 国际化词典 ====================
export const DICT = {
  zh: {
    nav: { about: '关于', timeline: '履历', projects: '项目', skills: '能力' },
    hero: {
      tag: '10年金融科技产品，从0到1到100，全链路闭环',
      title1: '画原型 · 理流程 · 搭中台 · 优前端 ',
      titleHighlight1: '· 做营销',
      title2: '用产品与运营思维',
      titleHighlight2: '，驱动金融科技业务增长',
      cta: '联系我',
    },
    about: {
      title: '关于我',
      desc: '我是一名资深商业化与增长产品专家，拥有10年保险金融科技领域经验。擅长从0到1搭建底层基础平台，及采用AARRR模型从1到100驱动用户增长的全链路操盘。核心能力是将复杂的业务需求，抽象为可执行的规则引擎与自动化运营体系，同时具备新媒体内容策划与营销转化能力。\n\n当前正以vibe coding方式开发英语学习App，系统学习AI应用层（提示词工程、AI辅助产品设计、LLM产品化），探索将规则体系产品化能力迁移至AI辅助的自动化方向。',
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
          period: '2024年12月 - 2026年4月',
          description: '主导区级政务移动端App及市级数据大屏产品，输出产品需求文档12份、原型页面80余页。在职期间获得市政府公开表扬，积累政府数字化转型中平台建设经验。',
        },
        {
          company: '阳光财产保险股份有限公司',
          rank: '中国TOP7保险公司',
          role: '产品运营（数字化转型）',
          period: '2019年7月 - 2024年12月',
          description: '负责车生活App、小程序、官微的产品规划与运营，主导从0到1搭建CDP、自动化营销引擎、会员任务体系，策划客户节等大型活动运营，搭建37人运营团队赋能线下；官微粉丝380万→830万，小程序用户100万→860万，月活从2018年的7.3万提升至120万，单场活动保费近7000万，线上续保率较线下高20个百分点。',
        },
        {
          company: '众安在线财产保险股份有限公司',
          rank: '中国首家互联网保险公司 | 全球Fintech前5',
          role: '产品经理',
          period: '2017年9月 - 2018年12月',
          description: '主导全国首个纯电子化诉讼保全保单，对接10+渠道，上线34款产品，交付周期缩短至1.5周，释放保证金约400万。',
        },
        {
          company: '大象保险（世纪保众）',
          rank: '保险科技经纪平台',
          role: '产品运营',
          period: '2015年10月 - 2017年8月',
          description: '独立策划17个线上营销活动，贡献31%的营收；优化短信营销策略，6个月内收入增长61.8倍；新媒体营销获900余笔订单。',
        },
      ],
    },
    projects: {
      title: '项目',
      featured: [
        {
          tag: '阳光保险 · 中国TOP7',
          name: 'CDP 营销中台',
          category: '增长运营与中台',
          situation: '传统保险公司依赖人工运营，用户数据分散，无法实现精准触达与自动化营销。',
          methodology: '采用数据驱动方法论，从0到1搭建CDP，整合全域数据，建立统一用户画像。',
          action: '定义128个用户标签与26个行为事件；设计自动化营销引擎（15+触发条件，8种触达渠道）；赋能37人团队。',
          result: '年节省开发成本100万元以上，月活从2018年的7.3万提升至120万，线上续保率较线下高出20个百分点。',
          timing: '2020年3月立项，8个月完成首期建设上线，此后5年持续迭代优化。',
          images: { col1a: growCol1a, col1b: govCol1b, col2: cdpCol2 },
        },
        {
          tag: '阳光保险 · 中国TOP7',
          name: '全渠道用户经营',
          category: '商业化产品设计及运营',
          situation: '缺乏统一的用户触达与权益体系，用户活跃度和留存率低。',
          methodology: '基于AARRR模型设计会员任务体系与积分权益，打通APP、小程序、官微全渠道，覆盖产品功能优化及增长运营。',
          action: '搭建会员等级、任务中心、积分商城；设计自动化触达策略；规划公众号内容策略与互动机制，策划拉新活动；优化活动模板与数据看板。',
          result: '官微粉丝380万→830万，小程序用户100万→860万（累计保费700万），平台年度保费达3000万，续保率+20%。',
          timing: '5年经营周期内持续增长，2023年平台年度保费达3000万，2024年10月达2700万。',
          images: { col1a: engCol1a, col1b: pmpCol1b, col2: omniCol2 },
        },
        {
          tag: '政务科技 · 政府数字化转型',
          name: '政务移动端App与数据大屏',
          category: '产品体验优化',
          situation: '政府需要将线下政务服务迁移至线上；实现政务服务数据大屏展示。',
          methodology: '采用以用户为中心的设计方法，梳理政务业务流程，输出标准化产品方案。',
          action: '移动端App部分功能优化，从用户流程到系统梳理并给出调研报告和需求文档。从需求分析到开发上线，输出产品需求文档12份、原型页面80余页。',
          result: '获市政府公开表扬，沉淀政府数字化转型方法论。',
          timing: '一年半任期内完成从需求分析到开发上线全流程，并获市政府公开表扬。',
          images: { col1a: govCol1a, col1b: ivrCol1b, col2: govCol2 },
        },
      ],
      more: [
        {
          tag: '众安保险 · 全球Fintech前5',
          name: '创新产品0-1 & API标准化',
          situation: '外部渠道对接效率低，交付周期长，缺乏标准化流程。',
          methodology: '采用产品标准化与流程再造，将复杂业务规则抽象为可复用的API组件。',
          action: '主导全国首个纯电子化诉讼保全保单；对接10+渠道，上线34款产品；优化保费结算流程。',
          result: '结算周期从4周缩短至1.5周，释放保证金约400万，覆盖6大行业。',
          timing: '2017年9月至12月完成小程序从0到1上线，1年任期内累计上线34款产品。',
        },
        {
          tag: '阳光保险 · 中国TOP7',
          name: '理赔流程及IVR优化',
          situation: '线上理赔流程体验不佳，同时人工服务成本高，客户满意度低。',
          methodology: '对标头部平台，优化线上全链路承保、理赔体验；从IVR为起点，多入口引导客户开展服务。',
          action: '参与小程序新车批改、出单功能建设，对标浙里快处、12306完成业务流程线上化再造；优化线上理赔流程与IVR流程，整合客服系统数据。',
          result: '理赔线上使用率提升一倍，客户满意度显著提升。',
          timing: '融入阳光5年数字化转型周期，随渠道与中台建设同步落地。',
        },
        {
          tag: '大象保险 · 保险科技经纪平台',
          name: '保险内容营销与新媒体获客',
          situation: '保险产品同质化严重，用户对传统保险销售方式抵触，获客成本高。',
          methodology: '采用内容营销策略，以原创保险科普文案建立用户信任，通过公众号实现阅读→购买转化。',
          action: '原创保险营销文案，通过公众号原文阅读实现转化；优化内容选题与发布节奏，持续提升阅读量与转化率。',
          result: '实现900+订单、400+支付成功，营销收入占同期保费4.58%，单篇文章阅读量3.5万+。',
          timing: '两年运营期内独立策划17场线上活动，其中6个月短信营销收入增长61.8倍。',
        },
      ],
    },
    skills: {
      title: '能力模型',
      quote: '十年金融科技，把复杂业务需求，抽象为可执行的规则引擎与自动化运营体系。',
      quoteBy: '郭京',
      quoteRole: '高级产品经理 · 10年金融科技',
      categories: [
        {
          name: '产品设计能力',
          label: '产品设计',
          items: [
            { label: '原型设计（Figma、Axure）', desc: '高保真原型、交互设计、设计系统' },
            { label: '产品需求文档撰写', desc: '用户故事、流程图、验收标准' },
            { label: '用户旅程设计', desc: '端到端体验优化，覆盖全链路' },
          ],
        },
        {
          name: '数据分析能力',
          label: '数据分析',
          items: [
            { label: '数据驱动决策', desc: '漏斗分析、用户分层、A/B测试' },
            { label: '指标体系搭建', desc: '月活跃用户、续保率、转化率、客户生命周期价值' },
            { label: '用户标签体系', desc: '业务标签、行为标签、预测标签' },
          ],
        },
        {
          name: '运营与增长能力',
          label: '运营增长',
          items: [
            { label: '用户运营', desc: '用户生命周期模型、会员体系、积分任务' },
            { label: '新媒体营销', desc: '公众号、小红书内容策划与营销，900+订单转化' },
            { label: '活动运营', desc: '从策划到复盘，单场活动贡献保费近7000万元' },
          ],
        },
        {
          name: '项目管理能力',
          label: '项目管理',
          items: [
            { label: '跨部门协调', desc: '技术、业务、运营、外部供应商' },
            { label: '团队管理', desc: '从零搭建37人团队，制定标准作业流程与培训体系' },
            { label: '项目推进', desc: '从需求到上线的全流程管理' },
          ],
        },
        {
          name: '工具与技术栈',
          label: '工具栈',
          items: [
            { label: 'Figma / Axure', desc: '原型设计、UI协作' },
            { label: 'ProcessOn / SQL', desc: '流程图绘制、数据提取与分析' },
            { label: 'Jira / Confluence', desc: '项目管理、文档协作' },
          ],
        },
        {
          name: '认证与语言',
          label: '认证语言',
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
      email: '邮件联系',
      download: '下载简历',
      wechat: '公众号',
      linkedin: '领英',
    },
    wechatModal: {
      title: '微信公众号',
      desc: '扫码关注，获取更多产品思考与案例',
    },
    meta: {
      portraitAlt: '郭京头像',
    },
  },
  en: {
    nav: { about: 'About', timeline: 'Experience', projects: 'Work', skills: 'Capabilities' },
    hero: {
      tag: '10 Yrs FinTech, 0-to-1-to-100, Full-Cycle Impact',
      title1: 'Prototype · Optimize · Build Mid-Platform · Enhance Front-End',
      titleHighlight1: '· Drive Growth',
      title2: 'Product & Ops thinking',
      titleHighlight2: 'that delivers FinTech growth',
      cta: 'Contact Me',
    },
    about: {
      title: 'About me',
      desc: "I'm a seasoned commercial and growth product expert with 10 years in InsurTech and FinTech. I build scalable platforms from 0 to 1 and drive user growth from 1 to 100 using the AARRR model. My core strength is translating complex business needs into executable rule engines and automated operations, combined with content strategy and marketing conversion capabilities.\n\nI'm currently vibe coding an English-learning app and systematically studying the AI application layer (prompt engineering, AI-assisted product design, LLM productization), exploring how to migrate rule-system productization into AI-assisted automation.",
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
          rank: 'GovTech, Digital Public Services',
          role: 'Product Manager',
          period: 'Dec 2024 - Apr 2026',
          description: 'Led full-cycle product development for citizen-facing App and data dashboard. Delivered 12 PRDs and 80+ prototypes. Received official commendation from the municipal government.',
        },
        {
          company: 'Sunshine Insurance Group',
          rank: 'Top 7 Insurer in China',
          role: 'Product Operations (Digital Transformation)',
          period: 'Jul 2019 - Dec 2024',
          description: 'Led product planning and operations for the Car Life App, Mini Program, and Official Account; built the CDP, automated marketing engine, and membership mission system from 0 to 1; ran large-scale customer festival campaigns and built a 37-person operations team. Grew Official Account followers 3.8M→8.3M, Mini Program users 1M→8.6M, MAU from 73K (2018) to 1.2M, ~$9.7M from a single campaign, and online renewal rate +20pp vs offline.',
        },
        {
          company: 'ZhongAn Online P&C Insurance',
          rank: "China's 1st Internet Insurer, Global Fintech Top 5",
          role: 'Product Manager',
          period: 'Sep 2017 - Dec 2018',
          description: 'Pioneered the first fully digital litigation guarantee policy in China. Onboarded 10+ channels, launched 34 products, cut delivery cycle from 4 weeks to 1.5 weeks, and released ~$560K in margin.',
        },
        {
          company: 'Daxiangbao (Century Baozhong)',
          rank: 'InsurTech Brokerage Platform',
          role: 'Product Operations',
          period: 'Oct 2015 - Aug 2017',
          description: 'Executed 17 online campaigns, contributing 31% of revenue. Optimized SMS strategy, growing revenue 61.8x in 6 months. Generated 900+ orders through content marketing.',
        },
      ],
    },
    projects: {
      title: 'Project',
      featured: [
        {
          tag: 'Sunshine, Top 7 Insurer',
          name: 'CDP & Marketing Mid-Platform',
          category: 'Growth Ops & Mid-Platform',
          situation: 'Traditional insurer relied on manual operations; user data was fragmented, preventing precision targeting.',
          methodology: 'Adopted a data-driven approach, building a CDP from scratch to unify customer data and create 360° user profiles.',
          action: 'Defined 128 user tags and 26 behavioral events. Designed an automated marketing engine with 15+ triggers and 8 channels. Empowered a 37-person team.',
          result: 'Saved $140K+ annually in development costs, grew MAU from 73K (2018) to 1.2M, and achieved a renewal rate 20% higher than offline.',
          timing: 'Kicked off in March 2020; first release shipped within 8 months, iterated over the following 5 years.',
          images: { col1a: growCol1a, col1b: govCol1b, col2: cdpCol2 },
        },
        {
          tag: 'Sunshine, Top 7 Insurer',
          name: 'Omnichannel User Engagement',
          category: 'Commercial Product Design & Ops',
          situation: 'Lacked a unified engagement and loyalty system; user activity and retention were low.',
          methodology: 'Designed a membership mission system with tiered rewards using the AARRR model, integrated across App, Mini Program, and WeChat Official Account.',
          action: 'Built membership tiers, mission center, and points mall. Designed automated engagement strategies. Planned content strategy and interactive mechanisms for the Official Account, launched acquisition campaigns, and optimized campaign templates and dashboards.',
          result: 'Grew followers from 3.8M to 8.3M and Mini Program users from 1M to 8.6M ($1M cumulative Mini Program premium), reached $4.2M in platform premium, and increased renewal rate by 20%.',
          timing: 'Sustained growth over a 5-year cycle; platform premium reached $4.2M in 2023 and $3.8M by Oct 2024.',
          images: { col1a: engCol1a, col1b: pmpCol1b, col2: omniCol2 },
        },
        {
          tag: 'GovTech, Digital Public Services',
          name: 'Citizen App & Data Dashboard',
          category: 'Product Excellence & UX',
          situation: 'Government needed to digitize offline public services and build a data dashboard for real-time service visibility.',
          methodology: 'Applied user-centered design methodology, mapped government service workflows, and delivered standardized product solutions.',
          action: 'Optimized App features, conducted user flow and system analysis, and delivered research reports and requirements documents. Managed the full lifecycle from requirements to launch, delivering 12 PRDs and 80+ prototypes.',
          result: 'Received official commendation from the municipal government and built a GovTech digital transformation playbook.',
          timing: 'Delivered end-to-end from requirements to launch within an 18-month tenure, earning municipal commendation.',
          images: { col1a: govCol1a, col1b: ivrCol1b, col2: govCol2 },
        },
      ],
      more: [
        {
          tag: 'ZhongAn, Global Fintech Top 5',
          name: '0-to-1 Product & API Standardization',
          situation: 'External channel onboarding was slow, delivery cycles were long, and lacked standardization.',
          methodology: 'Adopted product standardization and process re-engineering, abstracting complex business rules into reusable API components.',
          action: 'Pioneered the first fully digital litigation guarantee policy in China. Onboarded 10+ channels, launched 34 products, and optimized premium settlement workflows.',
          result: 'Cut delivery cycle from 4 weeks to 1.5 weeks, released ~$560K in margin, covered 6 industries.',
          timing: 'Shipped the Mini Program from 0 to 1 within Sep-Dec 2017 and launched 34 products over a one-year tenure.',
        },
        {
          tag: 'Sunshine, Top 7 Insurer',
          name: 'Claims Digitization & IVR Optimization',
          situation: 'The online claims experience was poor, service costs were high, and customer satisfaction was low.',
          methodology: 'Benchmarked against leading platforms to optimize the end-to-end underwriting and claims experience, starting with IVR improvements and multi-entry service guidance.',
          action: 'Built Mini Program features for new-car endorsement and policy issuance, benchmarking Zheli Kuaichu and 12306 to digitize business flows; optimized the online claims journey, revamped the IVR flow, and integrated customer service data.',
          result: 'Doubled the online claims usage rate and significantly improved customer satisfaction.',
          timing: 'Delivered alongside channel and mid-platform builds within Sunshine 5-year transformation cycle.',
        },
        {
          tag: 'Daxiangbao, InsurTech Brokerage',
          name: 'Insurance Content Marketing & New Media Acquisition',
          situation: 'Insurance products were highly commoditized, users were resistant to traditional sales approaches, and acquisition costs were high.',
          methodology: 'Leveraged content marketing to build trust through original educational content, converting readers via Official Account read-to-purchase flow.',
          action: 'Created original insurance marketing articles, optimized content topics and publishing cadence to continuously improve reach and conversion.',
          result: 'Generated 900+ orders and 400+ paid conversions, single article reaching 35K+ views.',
          timing: 'Ran 17 campaigns over a two-year tenure; SMS revenue grew 61.8x within 6 months.',
        },
      ],
    },
    skills: {
      title: 'Capabilities',
      quote: 'Ten years in FinTech, turning complex business needs into executable rule engines and automated operations.',
      quoteBy: 'Jing Guo',
      quoteRole: 'Senior Product Manager, 10 Yrs FinTech',
      categories: [
        {
          name: 'Product Design',
          label: 'Design',
          items: [
            { label: 'Prototyping (Figma, Axure)', desc: 'High-fidelity prototypes, interaction design, design systems' },
            { label: 'PRD Writing', desc: 'User stories, flowcharts, acceptance criteria' },
            { label: 'User Journey Design', desc: 'End-to-end experience optimization across the full lifecycle' },
          ],
        },
        {
          name: 'Data Analytics',
          label: 'Data',
          items: [
            { label: 'Data-Driven Decisions', desc: 'Funnel analysis, user segmentation, A/B testing' },
            { label: 'Metrics & KPIs', desc: 'MAU, renewal rate, conversion, LTV' },
            { label: 'User Tagging', desc: 'Business, behavioral, and predictive tags' },
          ],
        },
        {
          name: 'Operations & Growth',
          label: 'Growth',
          items: [
            { label: 'User Operations', desc: 'AARRR model, membership systems, points mechanics' },
            { label: 'New Media Marketing', desc: 'Content strategy & marketing on WeChat, RedNote - 900+ order conversions' },
            { label: 'Campaign Operations', desc: 'End-to-end campaigns, ~$9.7M premium from a single event' },
          ],
        },
        {
          name: 'Project Management',
          label: 'Delivery',
          items: [
            { label: 'Cross-functional Coordination', desc: 'Tech, business, operations, and external vendors' },
            { label: 'Team Management', desc: 'Built a 37-person team from scratch, developed SOPs and training' },
            { label: 'Project Delivery', desc: 'Full lifecycle management from requirements to launch' },
          ],
        },
        {
          name: 'Tools & Tech Stack',
          label: 'Tooling',
          items: [
            { label: 'Figma / Axure', desc: 'Prototyping, UI collaboration' },
            { label: 'ProcessOn / SQL', desc: 'Flowcharting, data extraction & analysis' },
            { label: 'Jira / Confluence', desc: 'Project management, documentation' },
          ],
        },
        {
          name: 'Certifications & Languages',
          label: 'Credentials',
          items: [
            { label: 'PMP (Project Management Professional)', desc: 'Professional certification' },
            { label: 'Chinese (Native)', desc: '' },
            { label: 'English (Reading/Writing)', desc: 'Business communication with tool support' },
          ],
        },
      ],
    },
    footer: {
      titleHighlight: 'impactful',
      subtitle: 'Open for Senior/Lead Product Management and Growth roles globally.',
      email: 'Email Me',
      download: 'Download Resume',
      wechat: 'WeChat',
      linkedin: 'LinkedIn',
    },
    wechatModal: {
      title: 'WeChat Official Account',
      desc: 'Scan to follow for product thinking and case studies',
    },
    meta: {
      portraitAlt: 'Portrait of Jing Guo',
    },
  },
};
