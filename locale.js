/* D4NGER Portfolio bilingual copy. Keep English as original document content.
   Text-node updates preserve markup, SVG icons, live links and React's DOM structure. */
(() => {
  'use strict';
  const translations = [
    ['.skip-link', 'تخطَّ إلى المحتوى الرئيسي'],
    ['.nav-links a[href="#work"]', 'المشاريع'],
    ['.nav-links a[href="#about"]', 'عني'],
    ['.nav-links a[href="#skills"]', 'المهارات'],
    ['.nav-links a[href="#contact"]', 'التواصل'],
    ['.header-cta', 'تحميل الـ CV'],
    ['.hero-eyebrow > span:last-child', 'مطور ويب / القاهرة، مصر'],
    ['#hero-title', 'كود بيفهم '],
    ['#hero-title .underlined', 'البيزنس'],
    ['#hero-title .hero-fancy', ' وبيحل المشاكل'],
    ['#hero-title .lime-period', '.'],
    ['.hero-lead', ['أنا ', ' مطور ويب ببني تجارب رقمية عملية. بدأت من Python، وبطوّر حاليًا مهاراتي في JavaScript Full-Stack، وبحب أفهم احتياجات البيزنس ورا كل مشروع.']],
    ['.hero-actions .button-lime', 'شوف مشاريعي'],
    ['.hero-actions .button-link-light', 'حمّل سيرتي الذاتية'],
    ['.hero-detail', 'من Python وDjango لرحلة JavaScript Full-Stack'],
    ['.portrait-top span:first-child', 'الإنسان ورا الكود'],
    ['.hero-float strong', 'ببني. وبتعلم.'],
    ['.hero-float span', 'كل يوم خطوة لقدّام.'],
    ['.hero-bottom-left', 'لما التكنولوجيا تخدم هدف حقيقي'],
    ['.hero-bottom > a', 'انزل وشوف شغلي'],
    ['.ribbon-track span:nth-of-type(1)', 'بنبني بهدف'],
    ['.ribbon-track span:nth-of-type(2)', 'بنفكر أبعد من الكود'],
    ['.ribbon-track span:nth-of-type(3)', 'بنصمم للناس'],
    ['.ribbon-track span:nth-of-type(4)', 'بنبني بهدف'],
    ['.work-head .label-line', 'مختارات من شغلي / 2026'],
    ['#work-title', 'مشاريع '],
    ['#work-title .hand-drawn', 'لها هدف.'],
    ['.work-head > p', 'نماذج من المشاريع اللي اشتغلت عليها: من نظام تشغيل مطاعم محلي لصفحات ومواقع بتخدم أشخاص وشركات.'],
    ['.visual-topline span:first-child', '01 / المشروع الرئيسي'],
    ['.visual-topline span:last-child', 'محلي · لقطات حقيقية'],
    ['.pos-showcase-heading small', 'إدارة وتشغيل المطاعم / 2026'],
    ['.pos-screen-bar > span:nth-child(2)', 'D4NGER POS — الكاشير'],
    ['.pos-screenshot-cta', 'شوف المشروع ↗'],
    ['.pos-bottomline span:first-child', 'لقطة شاشة حقيقية من النظام'],
    ['.pos-bottomline span:last-child', 'متصمم لشغل المطاعم'],
    ['.project-type', 'مشروع برمجي شخصي'],
    ['.featured-intro', 'نظام نقاط بيع للمطاعم، هدفه يسهل العمليات اليومية ويحافظ على سير الشغل.'],
    ['.featured-copy > p:not(.featured-intro)', 'من المنيو المصور والأوردرات المعلقة، للشيفتات والدفع الموثوق والطباعة والتقارير. مشروع Local-first استخدمت فيه أدوات AI للمساعدة في التطوير، وأنا مستمر أتعلم مسار الـ Full-Stack.'],
    ['.stack-tags span:last-child', 'بمساعدة AI'],
    ['.pos-case-study-link', 'استكشف دراسة الحالة'],
    ['.pos-availability', 'شاشات حقيقية · المميزات · قرارات هندسية'],
    ['.diploma-media .media-label', '02 / تجربة تعليمية'],
    ['.diploma-mini', 'اتعلم · طبّق · اتطور'],
    ['.diploma-media + .site-project-details .project-caption', 'تعليم / ويب'],
    ['#diploma-title + p', 'موقعي للكورس البرمجي، فيه محاضرات منظمة ومحتوى تفاعلي يساعد على التطبيق.'],
    ['.diploma-media + .site-project-details .project-text-link', 'افتح الموقع'],
    ['.zamzam-media .media-label', '03 / موقع عميل'],
    ['.zamzam-cover > p', 'اكتشف أكتر.'],
    ['.zamzam-media + .site-project-details .project-caption', 'سياحة / صفحة هبوط'],
    ['#zamzam-title + p', 'صفحة هبوط لعرض خدمات السفر وتسهيل التواصل والاستفسارات.'],
    ['.zamzam-media + .site-project-details .project-text-link', 'افتح الموقع'],
    ['.archive-row .archive-no span', ' / من البدايات'],
    ['.archive-main > p', 'بورتفوليو شخصي بنيته لصديق في بداية رحلتي في البرمجة.'],
    ['.archive-actions a:first-child', 'افتح الموقع'],
    ['.archive-actions a:last-child', 'الكود'],
    ['.about-title-col .label-line', 'القصة لحد دلوقتي'],
    ['#about-title', 'شغف بالبرمجة '],
    ['#about-title em', 'وفهم للبيزنس.'],
    ['.about-lead', 'أنا مش خريج حاسبات. درست تجارة، وبدأ شغفي بالبرمجة، ومن ساعتها وأنا بتعلم وببني مشاريع.'],
    ['.about-content > p:nth-of-type(2)', ['أنا ', '، وبعد ما جرّبت تقنيات مختلفة ركزت مدة طويلة على Python وDjango وFlask، وبعدها نقلت تركيزي لمسار JavaScript Full-Stack.']],
    ['.about-content > p:nth-of-type(2) strong', 'خريج كلية التجارة — شعبة اللغة الإنجليزية، جامعة الأزهر،  '],
    ['.about-content > p:nth-of-type(3)', ['حاليًا بتعلم React، وبعده Next.js وNode.js في خطتي. كمان اشتغلت مع فرق تسويق واتدربت في ', '، وده ساعدني أفهم الشركات محتاجة إيه غير مجرد موقع شكله حلو.']],
    ['.about-notes > div:nth-child(1) span', 'أساس خبرتي'],
    ['.about-notes > div:nth-child(2) span', 'حاليًا'],
    ['.about-notes > div:nth-child(3) span', 'منظور إضافي'],
    ['.about-notes > div:nth-child(3) strong', 'تسويق وإنتاج إبداعي'],
    ['.skills-heading .label-line', 'التقنيات والأدوات ورحلة التعلم'],
    ['#skills-title', 'لسه '],
    ['#skills-title span', 'بتعلم وبطوّر.'],
    ['.skills-heading > p', 'اشتغلت بتقنيات مختلفة وعلى مستويات متفاوتة. هنا بفصل بين خبرتي العملية والحاجات اللي بتعلمها دلوقتي.'],
    ['.skill-block:nth-child(1) .skill-index', '01 / خبرة عملية سابقة'],
    ['.skill-block:nth-child(1) h3', 'بنيت أساسي باستخدام'],
    ['.skill-block:nth-child(1) > p', 'أطول فترة ممارسة وتركيز كانت في تطوير الويب باستخدام Python.'],
    ['.skill-block:nth-child(2) .skill-index', '02 / المرحلة الجاية'],
    ['.skill-block:nth-child(2) h3', 'بتعلم وبطور نفسي في'],
    ['.skill-block:nth-child(2) .chip-highlight', 'React · بتعلمه حاليًا'],
    ['.skill-block:nth-child(2) .chip-list span:nth-child(2)', 'Next.js · الخطوة الجاية'],
    ['.skill-block:nth-child(2) .chip-list span:nth-child(3)', 'Node.js · الخطوة الجاية'],
    ['.skill-block:nth-child(2) > p', 'مشروع D4NGER-POS عرّفني على التقنيات دي عمليًا بمساعدة أدوات AI، وده مختلف عن إتقانها بشكل مستقل.'],
    ['.skill-block:nth-child(3) .skill-index', '03 / خارج محرر الكود'],
    ['.skill-block:nth-child(3) h3', 'أدواتي الإبداعية'],
    ['.skill-block:nth-child(3) > p', 'بجانب أساسيات التسويق وخطط المحتوى والحملات والاستراتيجيات من الأنشطة الطلابية والتعاون مع الوكالات.'],
    ['.skill-block:nth-child(4) .skill-index', '04 / تجارب سابقة'],
    ['.skill-block:nth-child(4) h3', 'تقنيات جرّبتها قبل كده'],
    ['.skill-block:nth-child(4) > p', 'جزء من رحلتي في الاستكشاف، ومش معنى كده إني بنفس المستوى في كل لغة أو أداة.'],
    ['.contact-top span:first-child', 'عندك فكرة أو مشروع؟'],
    ['.contact-top span:last-child', 'القاهرة، مصر — متاح للتواصل'],
    ['#contact-title', 'خلّينا نبني'],
    ['#contact-title span', 'حاجة ليها قيمة.'],
    ['.contact-email', 'ابدأ محادثة'],
    ['.contact-footer > div:first-child span', 'مطور ويب / القاهرة'],
    ['.contact-links a:nth-child(1)', 'الإيميل'],
    ['.contact-links a:nth-child(3)', 'السيرة الذاتية ↓'],
    ['.contact-links a:nth-child(4)', 'ارجع لفوق ↑'],
    ['.contact-footer small', '© 2026 محمود عاطف. معمول باهتمام.']
  ];

  const attributeTranslations = [
    ['.menu-toggle','aria-label','افتح القائمة'],
    ['.wordmark','aria-label','محمود عاطف، الرجوع لأعلى الصفحة'],
    ['.nav-links','aria-label','القائمة الرئيسية'],
    ['.pos-screenshot-link','aria-label','استكشف دراسة حالة D4NGER POS وصور الشاشات الحقيقية — يفتح في تبويب جديد'],
    ['.diploma-media','aria-label','افتح موقع D4NGER Diploma'],
    ['.zamzam-media','aria-label','افتح موقع Zamzam Travels'],
    ['.portrait-card img','alt','صورة شخصية لمحمود عاطف ببدلة داكنة وكرافتة كحلية'],
    ['.pos-screen-window img','alt','لقطة حقيقية لشاشة الكاشير في D4NGER POS تعرض المنيو والفئات والسلة']
  ];
  const originalText = new WeakMap(), originalAttrs = new WeakMap();
  function nodes(el) { return [...el.childNodes].filter(n=>n.nodeType===Node.TEXT_NODE && n.nodeValue.trim()); }
  function setLanguage(lang='en', {persist=true}={}) {
    const ar = lang==='ar'; lang=ar?'ar':'en';
    document.documentElement.lang=lang;
    document.documentElement.dir=ar?'rtl':'ltr';
    document.body.classList.toggle('arabic',ar);
    for(const [sel,translated] of translations) {
      const el=document.querySelector(sel); if(!el) continue;
      const direct=nodes(el);
      if(!direct.length)continue;
      if(!originalText.has(el))originalText.set(el,direct.map(n=>n.nodeValue));
      const source=originalText.get(el);
      const arabic=Array.isArray(translated)?translated:[translated];
      direct.forEach((node,i)=>{
        const entry=ar?arabic[i]:source[i];
        if(entry!==undefined) node.nodeValue=entry;
      });
    }
    for(const [sel,attr,arText] of attributeTranslations){
      const el=document.querySelector(sel);if(!el)continue;
      if(!originalAttrs.has(el))originalAttrs.set(el,{});
      const obj=originalAttrs.get(el);
      if(obj[attr]===undefined)obj[attr]=el.getAttribute(attr);
      el.setAttribute(attr,ar?arText:(obj[attr]||''));
    }
    const meta=document.querySelector('meta[name="description"]');
    if(meta){
      if(!meta.dataset.enCopy)meta.dataset.enCopy=meta.content;
      meta.content=ar?'محمود عاطف مطور ويب من القاهرة، بخبرة سابقة في Python وتركيز حالي على JavaScript Full-Stack. استكشف المشاريع وطرق التواصل.':meta.dataset.enCopy;
    }
    document.title=ar?'محمود عاطف — مطور ويب':'Mahmoud Atef — Web Developer';
    document.querySelectorAll('[data-locale]').forEach(button=>{
      button.setAttribute('aria-pressed',String(button.dataset.locale===lang));
      button.classList.toggle('is-active',button.dataset.locale===lang);
    });
    if(persist){try{localStorage.setItem('mahmoud-portfolio-language',lang);}catch(_){}}
    return lang;
  }
  function getPreference() {
  const query = new URLSearchParams(location.search).get('lang');

  if (query === 'ar' || query === 'en') return query;

  try {
    const saved = localStorage.getItem('mahmoud-portfolio-language');
    return saved === 'en' ? 'en' : 'ar';
  } catch (_) {
    return 'ar';
  }
}
  function initStatic(){
    document.querySelectorAll('[data-locale]').forEach(btn=>btn.addEventListener('click',()=>setLanguage(btn.dataset.locale)));
    setLanguage(getPreference(),{persist:false});
  }
  window.D4NGERPortfolioLocale={setLanguage,getPreference,initStatic};
  if(!document.getElementById('root')){
    if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initStatic,{once:true});
    else initStatic();
  }
})();
