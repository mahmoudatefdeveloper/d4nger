import { useEffect, useState } from 'react';
import './styles.css';

/* Content and page sections are intentionally separate for easy editing. */
function Header({menuOpen,onToggle,onNav,locale,onLocaleChange}) {
  return (<header className="site-header" id="top">
<div className="wrap header-inner">
<a className="wordmark" href="#top" aria-label="Mahmoud Atef, back to top"><span className="wordmark-icon">m<span>·</span></span><span className="wordmark-text">Mahmoud<br />Atef.</span></a>
<nav onClick={onNav} id="primary-navigation" className="nav-links" aria-label="Main navigation">
<a href="#work">Projects</a><a href="#about">About</a><a href="#skills">Skills</a><a href="#contact">Contact</a>
</nav>
<a className="header-cta" href="cv/Mahmoud_Atef_CV_2026.docx" download="Mahmoud_Atef_CV_2026.docx">Download CV <svg width="17" height="17" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v13m0 0 5-5m-5 5-5-5M4 20h16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path></svg></a>
<div className="locale-switch" role="group" aria-label="Language / اللغة"><button type="button" data-locale="en" aria-pressed={locale === 'en'} className={locale === 'en' ? 'is-active' : ''} onClick={() => onLocaleChange('en')}>EN</button><button type="button" data-locale="ar" aria-pressed={locale === 'ar'} className={locale === 'ar' ? 'is-active' : ''} onClick={() => onLocaleChange('ar')}>عربي</button></div>
<button onClick={onToggle} className="menu-toggle" aria-expanded={menuOpen} aria-controls="primary-navigation" aria-label={menuOpen ? "Close navigation" : "Open navigation"} type="button"><span></span><span></span><span></span></button>
</div>
</header>);
}

function Hero() {
  return (<section className="hero" aria-labelledby="hero-title">
<div className="hero-orb hero-orb-one" aria-hidden="true"></div>
<div className="hero-orb hero-orb-two" aria-hidden="true"></div>
<div className="wrap hero-grid">
<div className="hero-copy">
<div className="eyebrow hero-eyebrow"><span className="tiny-spark"></span><span>WEB DEVELOPER <span className="eyebrow-slash">/</span> CAIRO, EGYPT</span></div>
<h1 id="hero-title">Code with a <span className="hero-fancy"><span className="underlined">business</span> mind<span className="lime-period">.</span></span></h1>
<p className="hero-lead">Hey, I'm <strong>Mahmoud Atef.</strong> I build practical digital experiences, combining a Python foundation, growing JavaScript full-stack skills, and a curiosity for how businesses actually work.</p>
<div className="hero-actions">
<a className="button button-lime" href="#work">See my work <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path></svg></a>
<a className="button-link-light" href="cv/Mahmoud_Atef_CV_2026.docx" download="Mahmoud_Atef_CV_2026.docx">Get my resume <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path></svg></a>
</div>
<div className="hero-detail"><span className="detail-dot"></span> FROM PYTHON &amp; DJANGO TO THE JS FULL-STACK JOURNEY <span className="detail-rule"></span> 2026</div>
</div>
<div className="hero-art">
<div className="orbit-outline" aria-hidden="true"></div>
<div className="portrait-card">
<div className="portrait-top"><span>THE HUMAN BEHIND THE CODE</span><span>MA — 26</span></div>
<img src="assets/mahmoud-portrait.webp" alt="Mahmoud Atef wearing a dark suit and navy tie" width="864" height="1184" fetchPriority="high" />
<div className="portrait-bottom"><span>MAHMOUD ATEF</span><svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true"><path d="M18 2v32M2 18h32M6.7 6.7l22.6 22.6m0-22.6L6.7 29.3" stroke="currentColor" strokeWidth="1.5"></path></svg></div>
</div>
<div className="hero-float" aria-hidden="true"><div className="float-symbol">✳</div><div><strong>Building. Learning.</strong><span>Always improving.</span></div></div>
<div className="tiny-orbit" aria-hidden="true"></div>
</div>
</div>
<div className="wrap hero-bottom"><div className="hero-bottom-left"><span className="ring-icon"></span> WHERE TECHNOLOGY MEETS PURPOSE</div><a href="#work">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a></div>
</section>);
}

function Ribbon() {
  return (<div className="color-ribbon" aria-hidden="true"><div className="ribbon-track"><span>BUILD WITH PURPOSE</span><svg viewBox="0 0 36 36" width="26" height="26"><path d="M18 1v34M1 18h34M6 6l24 24M30 6 6 30" stroke="currentColor" strokeWidth="2"></path></svg><span>THINK BEYOND CODE</span><svg viewBox="0 0 36 36" width="26" height="26"><path d="M18 1v34M1 18h34M6 6l24 24M30 6 6 30" stroke="currentColor" strokeWidth="2"></path></svg><span>DESIGN FOR PEOPLE</span><svg viewBox="0 0 36 36" width="26" height="26"><path d="M18 1v34M1 18h34M6 6l24 24M30 6 6 30" stroke="currentColor" strokeWidth="2"></path></svg><span>BUILD WITH PURPOSE</span><svg viewBox="0 0 36 36" width="26" height="26"><path d="M18 1v34M1 18h34M6 6l24 24M30 6 6 30" stroke="currentColor" strokeWidth="2"></path></svg></div></div>);
}

function Projects() {
  return (<section className="work-section section-space" id="work" aria-labelledby="work-title">
<div className="wrap">
<div className="section-head work-head"><div><span className="label-line">SELECTED WORK / 2026</span><h2 id="work-title">Projects with <span className="hand-drawn">purpose.</span></h2></div><p>A selection of what I've worked on — from local-first restaurant software to real websites for people and businesses.</p></div>
<article className="featured-project" aria-labelledby="pos-title">
<div className="pos-visual pos-visual-live">
<div className="visual-topline"><span>01 / FEATURED SYSTEM</span><span>LOCAL-FIRST · REAL SCREENS</span></div>
<div className="pos-showcase-heading"><strong>D4NGER <em>POS.</em></strong><small>RESTAURANT OPERATIONS / 2026</small></div>
<a className="pos-screenshot-link" href="https://mahmoudatefdeveloper.github.io/d4nger-pos/" target="_blank" rel="noopener noreferrer" aria-label="Explore the D4NGER POS case study and real product screenshots (opens in a new tab)">
<span className="pos-screen-window">
<span className="pos-screen-bar"><span className="pos-screen-dots" aria-hidden="true"><i></i><i></i><i></i></span><span>D4NGER POS — CASHIER</span><span className="pos-screen-external" aria-hidden="true">↗</span></span>
<img src={`${import.meta.env.BASE_URL}assets/d4nger-pos-cashier.webp`} alt="Actual D4NGER POS cashier screen, showing a visual menu, colorful categories and the order panel" width="1299" height="730" loading="lazy" decoding="async" />
</span>
<span className="pos-screenshot-cta" aria-hidden="true">SEE THE PRODUCT ↗</span>
</a>
<div className="pos-bottomline"><span>REAL PRODUCT SCREENSHOT</span><span>DESIGNED FOR RESTAURANTS</span></div>
</div>
<div className="featured-copy">
<span className="project-type"><span className="small-dot purple"></span> PERSONAL SOFTWARE PROJECT <span className="project-type-date">2026</span></span>
<h3 id="pos-title">D4NGER<span>-POS</span></h3>
<p className="featured-intro">A restaurant point-of-sale system designed to keep everyday operations moving.</p>
<p>From visual menus and held orders to staff shifts, reliable checkout, receipt printing and reports. A local-first project developed with AI assistance while I build my full-stack knowledge.</p>
<div className="stack-tags"><span>React / Next.js</span><span>TypeScript / Express</span><span>SQLite</span><span>AI-assisted</span></div>
<div className="pos-case-study-actions"><a className="pos-case-study-link" href="https://mahmoudatefdeveloper.github.io/d4nger-pos/" target="_blank" rel="noopener noreferrer">View case study <span aria-hidden="true">↗</span></a><span className="pos-availability">Real screenshots · Features · Engineering decisions</span></div>
</div>
</article>
<div className="project-grid">
<article className="site-project" aria-labelledby="diploma-title">
<a className="project-media diploma-media" href="https://d4nger-diploma.site/" target="_blank" rel="noopener noreferrer" aria-label="Visit D4NGER Diploma website">
<span className="media-label">02 / LEARNING EXPERIENCE</span><div className="diploma-cover"><span className="diploma-mini">LEARN · BUILD · GROW</span><strong>D4NGER<span>DIPLOMA</span></strong><span className="code-orbit" aria-hidden="true">{"{"} <span>/</span> {"}"}</span></div><span className="media-arrow" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24"><path d="M5 19 19 5M8 5h11v11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
</a>
<div className="site-project-details"><div><span className="project-caption">EDUCATION / WEB</span><h3 id="diploma-title">D4NGER Diploma</h3><p>My programming-course site, with structured lessons and interactive learning content.</p></div><a className="project-text-link" href="https://d4nger-diploma.site/" target="_blank" rel="noopener noreferrer">Live website <span aria-hidden="true">↗</span></a></div>
</article>
<article className="site-project" aria-labelledby="zamzam-title">
<a className="project-media zamzam-media" href="https://mahmoudatefdeveloper.github.io/zamzam/" target="_blank" rel="noopener noreferrer" aria-label="Visit Zamzam Travels website">
<span className="media-label">03 / CLIENT WEBSITE</span><div className="zamzam-cover"><span className="zamzam-sun" aria-hidden="true"></span><strong>ZAMZAM<span>TRAVELS</span></strong><p>EXPLORE MORE.</p></div><span className="media-arrow" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24"><path d="M5 19 19 5M8 5h11v11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
</a>
<div className="site-project-details"><div><span className="project-caption">TRAVEL / LANDING PAGE</span><h3 id="zamzam-title">Zamzam Travels</h3><p>A travel landing page for presenting services and making it easier to get in touch.</p></div><div className="project-text-links"><a className="project-text-link" href="https://mahmoudatefdeveloper.github.io/zamzam/" target="_blank" rel="noopener noreferrer">Live website <span aria-hidden="true">↗</span></a><a className="project-text-link" href="https://github.com/mahmoudatefdeveloper/zamzam/" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a></div></div>
</article>
</div>
<div className="archive-row"><div className="archive-no">04<span> / EARLY WORK</span></div><div className="archive-main"><h3>Abdullah Fekry</h3><p>An early personal portfolio I built for a friend.</p></div><div className="archive-actions"><a href="https://mahmoudatefdeveloper.github.io/Abdullah-Fekry-1/" target="_blank" rel="noopener noreferrer">Live website <span aria-hidden="true">↗</span></a><a href="https://github.com/mahmoudatefdeveloper/Abdullah-Fekry-1" target="_blank" rel="noopener noreferrer">Source <span aria-hidden="true">↗</span></a></div></div>
</div>
</section>);
}

function About() {
  return (<section className="about-section section-space" id="about" aria-labelledby="about-title">
<div className="wrap about-layout">
<div className="about-title-col"><span className="label-line">THE STORY SO FAR</span><h2 id="about-title">Curiosity meets <em>context.</em></h2><div className="about-symbol" aria-hidden="true"><svg viewBox="0 0 180 180" width="178" height="178" fill="none"><circle cx="90" cy="90" r="68" stroke="currentColor" strokeWidth="2" stroke-dasharray="8 11"></circle><path d="M90 20v140M20 90h140M40 40l100 100M140 40 40 140" stroke="currentColor" strokeWidth="7" strokeLinecap="round"></path></svg></div></div>
<div className="about-content"><p className="about-lead">I didn't take the traditional computer-science route. I studied commerce, got curious about code, and kept building.</p><p>I'm a <strong>2026 English Section graduate from Al-Azhar University, Faculty of Commerce</strong>. After exploring different technologies, I spent the most time with Python, Django, and Flask before shifting my focus toward JavaScript full-stack development.</p><p>I'm currently studying React, with Next.js and Node.js on my learning roadmap. Working alongside marketing teams — including training at <strong>UP-Marketing Agency</strong> — also gave me a stronger sense of what businesses need beyond a nice-looking page.</p><div className="about-notes"><div><span>MY FOUNDATION</span><strong>Python · Django · Flask</strong></div><div><span>RIGHT NOW</span><strong>React · JavaScript full-stack</strong></div><div><span>EXTRA PERSPECTIVE</span><strong>Marketing &amp; creative production</strong></div></div></div>
</div>
</section>);
}

function Skills() {
  return (<section className="skills-section section-space" id="skills" aria-labelledby="skills-title">
<div className="wrap"><div className="skills-heading"><div><span className="label-line">TECH, TOOLS &amp; THE LEARNING CURVE</span><h2 id="skills-title">Always <span>in progress.</span></h2></div><p>Different tools, different levels of experience. Here's the clearest way to show what I've used and what I'm learning next.</p></div>
<div className="skills-columns">
<div className="skill-block"><span className="skill-index">01 / HANDS-ON BACKGROUND</span><h3>Built my foundation with</h3><div className="chip-list"><span>Python</span><span>Django</span><span>Flask</span><span>HTML</span><span>CSS</span><span>JavaScript</span><span>Bootstrap</span><span>Tailwind CSS</span></div><p>My longest period of focused practice was in Python web development.</p></div>
<div className="skill-block"><span className="skill-index">02 / THE NEXT CHAPTER</span><h3>Learning &amp; growing into</h3><div className="chip-list"><span className="chip-highlight">React · currently learning</span><span>Next.js · next step</span><span>Node.js · next step</span></div><p>D4NGER-POS provided project-level exposure to these technologies through AI-assisted development; that isn't the same as independent mastery.</p></div>
<div className="skill-block"><span className="skill-index">03 / BEYOND THE EDITOR</span><h3>The creative toolkit</h3><div className="chip-list"><span>Photoshop</span><span>Canva</span><span>Premiere Pro</span><span>CapCut</span><span>Filmora X</span><span>FL Studio</span><span>RX9</span></div><p>Plus marketing fundamentals, content plans, ad campaigns and strategy through student activities and agency collaboration.</p></div>
<div className="skill-block"><span className="skill-index">04 / EARLIER EXPLORATIONS</span><h3>Other things I've explored</h3><div className="chip-list"><span>PHP</span><span>WordPress</span><span>Java</span><span>Dart</span></div><p>Part of a broader learning path, not a claim of equal proficiency across every language.</p></div>
</div></div>
</section>);
}

function Contact() {
  return (<section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="wrap contact-wrap"><div className="contact-top"><span>GOT SOMETHING IN MIND?</span><span>CAIRO, EGYPT — OPEN TO CONVERSATION</span></div><h2 id="contact-title">Let's make<br /><span>something useful.</span></h2><div className="contact-actions"><a className="contact-email" href="mailto:MahamoudAtefDevs@gmail.com">Start a conversation <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M5 19 19 5M8 5h11v11" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path></svg></a><a className="contact-whatsapp" href="https://wa.me/201553502428" target="_blank" rel="noopener noreferrer">WhatsApp <span aria-hidden="true">↗</span></a></div><div className="contact-footer"><div><strong>Mahmoud Atef</strong><span>Web Developer / Cairo</span></div><div className="contact-links"><a href="mailto:MahamoudAtefDevs@gmail.com">Email</a><a href="https://github.com/mahmoudatefdeveloper" target="_blank" rel="noopener noreferrer">GitHub</a><a href="cv/Mahmoud_Atef_CV_2026.docx" download="Mahmoud_Atef_CV_2026.docx">Resume ↓</a><a href="#top">Back to top ↑</a></div><small>© 2026 Mahmoud Atef. Made with intention.</small></div></div></section>);
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [locale, setLocale] = useState(() => (typeof window !== 'undefined' && window.D4NGERPortfolioLocale?.getPreference?.()) || 'en');
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    window.D4NGERPortfolioLocale?.setLanguage(locale);
  }, [locale,menuOpen]);
  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen);
    return () => document.body.classList.remove('nav-open');
  }, [menuOpen]);
  useEffect(() => {
    const closeOnEscape = e => { if (e.key === 'Escape') setMenuOpen(false); };
    const onResize = () => { if (window.innerWidth > 820) setMenuOpen(false); };
    const onScroll = () => {
      const maximum = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(maximum > 0 ? Math.min(1, window.scrollY / maximum) : 0);
    };
    document.addEventListener('keydown', closeOnEscape);
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <div className="scroll-progress" aria-hidden="true" style={{ transform: `scaleX(${progress})` }} />
      <Header menuOpen={menuOpen} onToggle={() => setMenuOpen(s => !s)} onNav={() => setMenuOpen(false)} locale={locale} onLocaleChange={setLocale} />
      <main id="main">
        <Hero />
        <Ribbon />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
