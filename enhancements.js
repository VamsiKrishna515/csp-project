(() => {
  const app = document.getElementById('app');
  const nav = document.getElementById('navLinks');
  const splash = document.getElementById('splash');
  const skipLink = document.querySelector('.skip-link');

  function setStatus(element, text, tone = 'info') {
    if (!element) return;
    element.textContent = text;
    element.dataset.tone = tone;
    element.style.color = tone === 'success' ? 'var(--success)' : tone === 'error' ? 'var(--danger)' : 'var(--ink-soft)';
  }

  function showToast(message, tone = 'info') {
    let toast = document.getElementById('globalToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'globalToast';
      toast.setAttribute('role', 'status');
      toast.setAttribute('aria-live', 'polite');
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.dataset.tone = tone;
    toast.classList.add('show');
    window.clearTimeout(showToast.timeout);
    showToast.timeout = window.setTimeout(() => toast.classList.remove('show'), 3000);
  }

  function initMobileNav() {
    const menuButton = document.querySelector('.burger');
    const backdrop = document.getElementById('navBackdrop');
    const links = nav ? nav.querySelectorAll('a') : [];
    const closeNav = () => {
      nav?.classList.remove('open');
      backdrop?.classList.remove('open');
      menuButton?.setAttribute('aria-expanded', 'false');
      if (menuButton) menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
    };

    if (menuButton && nav) {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        backdrop?.classList.toggle('open', isOpen);
        menuButton.setAttribute('aria-expanded', String(isOpen));
        menuButton.innerHTML = isOpen ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
      });
      links.forEach((link) => link.addEventListener('click', closeNav));
      backdrop?.addEventListener('click', closeNav);
    }
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && nav?.classList.contains('open')) {
        closeNav();
      }
    });
  }

  function addSearch() {
    const target = document.getElementById('searchBar');
    if (!target) return;
    const allTopics = Array.from(document.querySelectorAll('.cat-card, .type-card, .risk-card, .faq-item'));
    target.addEventListener('input', () => {
      const term = target.value.trim().toLowerCase();
      allTopics.forEach((node) => {
        const matches = !term || node.textContent.toLowerCase().includes(term);
        node.hidden = !matches;
      });
      const visible = allTopics.filter((node) => !node.hidden).length;
      const empty = document.getElementById('searchEmpty');
      if (empty) empty.hidden = visible !== 0;
    });
  }

  function createModal() {
    document.getElementById('globalModal')?.remove();
    const modal = document.createElement('div');
    modal.id = 'globalModal';
    modal.className = 'modal hidden';
    modal.innerHTML = `
      <div class="modal-backdrop" data-close="true"></div>
      <div class="modal-panel" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <button class="modal-close" type="button" aria-label="Close dialog"><i class="fa-solid fa-xmark"></i></button>
        <div id="modalContent"></div>
      </div>
    `;
    document.body.appendChild(modal);
    const close = () => modal.classList.add('hidden');
    modal.querySelector('.modal-close').addEventListener('click', close);
    modal.querySelector('.modal-backdrop').addEventListener('click', close);
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !modal.classList.contains('hidden')) close();
    });
    return modal;
  }

  function openPledgeModal(key) {
    const modal = document.getElementById('globalModal') || createModal();
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'pledgeName';
    nameInput.name = 'pledgeName';
    nameInput.maxLength = 80;
    nameInput.placeholder = 'Your name';
    nameInput.required = true;
    const content = document.getElementById('modalContent');
    content.innerHTML = `
      <span class="eyebrow">Student pledge</span>
      <h2 id="modalTitle">Make your commitment</h2>
      <p>Confirm your name to download a personalised awareness certificate.</p>
      <form id="pledgeForm">
        <label for="pledgeName">Full name</label>
        <input id="pledgeName" type="text" required autocomplete="name" placeholder="Enter your full name">
        <div class="modal-actions">
          <button class="btn btn-outline" type="button" data-close="true">Cancel</button>
          <button class="btn btn-primary" type="submit"><i class="fa-solid fa-certificate"></i> Download certificate</button>
        </div>
      </form>
    `;
    modal.classList.remove('hidden');
    const form = content.querySelector('#pledgeForm');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = nameInput.value.trim();
      if (!name) {
        setStatus(content.querySelector('#modalStatus'), 'Please enter your name.', 'error');
        return;
      }
      const topicTitle = TOPICS[key]?.title || 'Cyber Sprouts';
      localStorage.setItem(`cs_pledge_${key}`, JSON.stringify({ name, date: new Date().toISOString() }));
      const stats = JSON.parse(localStorage.getItem('cs_campaign_stats') || '{"visits":0,"pages":{},"pledges":0}');
      stats.pledges = Number(stats.pledges || 0) + 1;
      stats.pages[key] = (Number(stats.pages?.[key]) || 0) + 1;
      localStorage.setItem('cs_campaign_stats', JSON.stringify(stats));
      const certUrl = generateCertificate(name, topicTitle);
      showCertificatePreview(name, topicTitle, certUrl);
      showToast('Certificate created.', 'success');
    });
    content.querySelectorAll('[data-close="true"]').forEach((button) => button.addEventListener('click', () => modal.classList.add('hidden')));
    form.querySelector('#pledgeName').focus();
  }

  function enhanceFeedbackForms() {
    document.querySelectorAll('form').forEach((form) => {
      form.addEventListener('submit', (event) => {
        if (!form.dataset.enhanced) {
          form.dataset.enhanced = 'true';
          const submit = form.querySelector('button[type="submit"]');
          if (submit) {
            const original = submit.innerHTML;
            const loader = '<span class="btn-loading" aria-hidden="true"></span>';
            form.addEventListener('submit', () => {
              submit.disabled = true;
              submit.dataset.defaultContent = original;
              submit.innerHTML = `${loader}<span>Sending...</span>`;
            }, { once: true });
          }
        }
      }, { once: true });
    });
  }

  function enhanceNavigationShortcuts() {
    document.addEventListener('keydown', (event) => {
      const mod = event.ctrlKey || event.metaKey;
      if (mod && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        const search = document.getElementById('searchBar');
        if (search) {
          search.focus();
          search.select();
        }
      }
      if (event.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
        event.preventDefault();
        document.getElementById('searchBar')?.focus();
      }
    });
  }

  function enhanceForms() {
    document.querySelectorAll('input, textarea').forEach((input) => {
      const formControl = input.closest('form');
      if (formControl && !input.dataset.hasValidationLabel) {
        input.setAttribute('aria-invalid', input.validity.valid ? 'false' : 'true');
        input.addEventListener('blur', () => input.setAttribute('aria-invalid', input.validity.valid ? 'false' : 'true'));
        input.dataset.hasValidationLabel = 'true';
      }
    });
  }

  function ensureGlobalStyles() {
    if (!document.getElementById('globalToast')) {
      const css = document.createElement('style');
      css.id = 'globalToastStyles';
      css.textContent = `
        #globalToast { position: fixed; right: 1.25rem; bottom: 5.5rem; z-index: 10000; max-width: min(420px, calc(100vw - 2rem)); padding: .9rem 1rem; border-radius: 12px; color: #fff; background: #111827; box-shadow: 0 18px 44px -24px rgba(0,0,0,.75); opacity: 0; transform: translateY(10px); pointer-events: none; transition: opacity .2s, transform .2s; }
        #globalToast.show { opacity: 1; transform: translateY(0); }
        #globalToast[data-tone="success"] { background: #0f766e; }
        #globalToast[data-tone="error"] { background: #b42318; }
        .modal { position: fixed; inset: 0; z-index: 9000; display: grid; place-items: center; }
        .modal.hidden { display: none; }
        .modal-backdrop { position: absolute; inset: 0; background: rgba(2,6,23,.62); backdrop-filter: blur(4px); }
        .modal-panel { position: relative; width: min(520px, calc(100vw - 2rem)); background: var(--surface); color: var(--ink); border: 1px solid var(--border); border-radius: 20px; padding: clamp(1.25rem,4vw,2rem); box-shadow: 0 26px 80px -30px rgba(0,0,0,.72); }
        .modal-close { position: absolute; top: .75rem; right: .75rem; width: 38px; height: 38px; border: 1px solid var(--border); border-radius: 50%; background: transparent; color: var(--ink); cursor: pointer; }
        .modal-panel h2 { font-size: 1.5rem; color: var(--ink); margin: .25rem 0 .5rem; }
        .modal-panel p { margin-bottom: 1rem; }
        .modal-panel label { display: block; margin-bottom: .4rem; color: var(--ink-soft); font-size: .82rem; font-weight: 700; }
        .modal-panel input { width: 100%; min-height: 46px; margin-bottom: 1rem; padding: .8rem 1rem; border: 1px solid var(--border); border-radius: 12px; background: var(--surface-subtle); color: var(--ink); }
        .modal-actions { display: flex; justify-content: flex-end; gap: .7rem; margin-top: 1rem; }
        .btn-loading { width: 1rem; height: 1rem; border: 2px solid rgba(255,255,255,.4); border-top-color: #fff; border-radius: 50%; animation: spin .7s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .search-empty { text-align: center; padding: 2rem; color: var(--ink-soft); }
        [hidden] { display: none !important; }
      `;
      document.head.appendChild(css);
    }
  }

  function upgradeHomeSearch() {
    if (!app) return;
    if (!app.querySelector('#searchBar')) {
      const search = document.createElement('section');
      search.className = 'section';
      search.style.paddingTop = '1.25rem';
      search.innerHTML = `
        <div class="container">
          <div class="glass-card" data-reveal style="padding:1rem;display:flex;align-items:center;gap:.75rem;background:var(--surface);">
            <i class="fa-solid fa-magnifying-glass accent-text topic-blue"></i>
            <input id="searchBar" type="search" aria-label="Search awareness content" placeholder="Search topics and guidance… (Ctrl+K)" style="border:0;outline:0;background:transparent;flex:1;min-height:42px;color:var(--ink);">
            <span class="tag-badge"><kbd>Ctrl</kbd> + <kbd>K</kbd></span>
          </div>
          <p id="searchEmpty" class="search-empty" hidden>No results found. Try another topic or keyword.</p>
        </div>
      `;
      app.querySelector('#categories')?.after(search);
    }
    addSearch();
  }

  function setupPledgeHandler() {
    const original = window.openPledgeModal;
    window.openPledgeModal = (key) => { openPledgeModal(key); };
    if (original && original !== window.openPledgeModal) return;
  }

  function init() {
    ensureGlobalStyles();
    initMobileNav();
    enhanceNavigationShortcuts();
    enhanceForms();
    enhanceFeedbackForms();
    setupPledgeHandler();
    createModal();
    upgradeHomeSearch();
    const originalShowPage = window.showPage;
    window.showPage = (id) => {
      originalShowPage(id);
      setTimeout(() => {
        if (id === 'home') upgradeHomeSearch();
        else document.getElementById('searchBar')?.remove();
        document.getElementById('searchEmpty')?.remove();
      }, 0);
    };
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();

  window.addEventListener('load', () => {
    if (splash) splash.classList.add('fade-out');
    if (skipLink) skipLink.setAttribute('tabindex', '0');
  });

  window.addEventListener('hashchange', () => {
    if (location.hash === '#home') showPage('home');
  });
})();
