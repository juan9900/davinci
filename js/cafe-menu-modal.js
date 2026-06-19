(function () {
  /* ── Placeholder photos (cycling through café carousel) ───────────────────
     Replace each item's `img` path with a real product photo later.        */
  var PHOTOS = (function () {
    var arr = [];
    for (var i = 1; i <= 13; i++) {
      arr.push('./img/cafe/Davinci%20cafe%20carousel%20' + i + '.webp');
    }
    return arr;
  })();
  var _pi = 0;
  function ph() { return PHOTOS[_pi++ % PHOTOS.length]; }

  /* ── Menu data ─────────────────────────────────────────────────────────────
     norteOnly: true  → hidden when the "Sur" tab is active
     img              → path to product photo; replace '' to hide badge/preview
     desc             → optional description line                             */
  var MENU = [
    {
      name: 'Panini',
      items: [
        { name: 'Sándwich Leonardo',    price: '$6,00', img: ph(), desc: 'Pan de molde clásico, jamón ahumado, jamón de pierna, tocineta, queso gouda y mayonesa. Acompañado de tostones y yuquitas.' },
        { name: 'Sándwich Gioconda',    price: '$6,25', img: ph(), desc: 'Pan de molde clásico, jamón de pierna, tocineta, queso gouda, huevo y mayonesa. Acompañado de tostones y yuquitas.' },
        { name: 'Sándwich Omelette',    price: '$6,00', img: ph(), desc: 'Pan de molde multigranos, jamón ahumado, queso gouda, huevo. Acompañado de tostones y yuquitas.', norteOnly: true },
        { name: 'Prensadito',           price: '$3,50', img: ph(), desc: 'Pan francés, jamón de pierna, queso blanco y salsa cóctel. Acompañado de tostones y yuquitas.' },
        { name: 'Deli de Pavo',         price: '$7,00', img: ph(), desc: 'Pan suave de orégano, jamón de pavo, queso gouda, mozzarella y salsa de mostaza dulce. Acompañado de tostones y yuquitas.' },
        { name: 'Deli Clásico',         price: '$7,00', img: ph(), desc: 'Pan suave de orégano, jamón de pierna, queso gouda, mozzarella y salsa cóctel. Acompañado de tostones y yuquitas.' },
        { name: 'Rústico de Pollo',     price: '$7,55', img: ph(), desc: 'Pan de molde multigranos, pollo, tomates secos, queso gouda, mozzarella y mayo pesto. Acompañado de tostones y yuquitas.', norteOnly: true },
      ],
    },
    {
      name: 'Empanadas Horneadas o Integrales',
      items: [
        { name: 'Maíz y ricotta',   price: '$3,85', img: ph() },
        { name: 'Espinaca',         price: '$3,85', img: ph() },
        { name: 'Ricotta Pollo',    price: '$3,85', img: ph() },
      ],
    },
    {
      name: 'Cachitos',
      items: [
        { name: 'Pavo y queso crema', price: '$5,00', img: ph() },
        { name: 'Tres quesos',        price: '$3,50', img: ph() },
        { name: 'Jamón ahumado',      price: '$2,00', img: ph() },
        { name: 'Jamón y Queso',      price: '$2,50', img: ph() },
      ],
    },
    {
      name: 'Hojaldres',
      items: [
        { name: 'Jamón y queso crema', price: '$5,15', img: ph() },
        { name: 'Pollo',               price: '$4,00', img: ph() },
        { name: 'Jamón y queso',       price: '$4,25', img: ph() },
      ],
    },
    {
      name: 'Infusiones 14 oz',
      items: [
        { name: 'Té negro',                 price: '$2,50', img: ph() },
        { name: 'Té negro con parchita',    price: '$2,75', img: ph() },
        { name: 'Frutos rojos',             price: '$2,50', img: ph() },
        { name: 'Frutos rojos con parchita',price: '$2,75', img: ph() },
        { name: 'Limonada',                 price: '$2,85', img: ph() },
        { name: 'Limonada con menta',       price: '$3,00', img: ph() },
      ],
    },
    {
      name: 'Infusiones Frías',
      items: [
        { name: 'Limonada Detox',       price: '$3,25', img: ph(), desc: 'Pepino, jengibre y hierbabuena.' },
        { name: 'Sparkling Frutos Rojos', price: '$3,00', img: ph(), desc: 'Té de frutos rojos, agua sparkling, fresas, arándanos y limón.' },
      ],
    },
    {
      name: 'Jugos Naturales 14 oz',
      items: [
        { name: 'Jugo de naranja', price: '$4,00', img: ph() },
        { name: 'Fresa',           price: '$4,00', img: ph() },
        { name: 'Melón',           price: '$3,00', img: ph() },
        { name: 'Piña',            price: '$4,00', img: ph() },
        { name: 'Jugo Verde',      price: '$4,00', img: ph(), desc: 'Piña, célery, espinacas, pepino, jengibre y hierbabuena.' },
      ],
    },
    {
      name: 'Otras Bebidas',
      items: [
        { name: 'Agua mineral 300ml',   price: '$1,50', img: ph() },
        { name: 'Agua Sparkling 500ml', price: '$2,75', img: ph() },
        { name: 'Gaseosas en Lata',     price: '$2,95', img: ph(), desc: 'Pepsi (Regular, Light, Zero), 7up.' },
      ],
    },
    {
      name: 'Café Frío 14 oz',
      items: [
        { name: 'Iced Latte Vainilla',       price: '$4,50', img: ph(), desc: 'Crema de café, leche y vainilla.' },
        { name: 'Iced Latte Salted Caramel', price: '$4,50', img: ph(), desc: 'Crema de café, leche y caramelo salado.' },
        { name: 'Iced Latte Moka',           price: '$4,50', img: ph(), desc: 'Crema de café, leche y sirope de chocolate.' },
        { name: 'Iced Latte Tiramisú',       price: '$4,75', img: ph(), desc: 'Crema de café, crema tiramisú, leche y cacao.' },
        { name: 'Iced Latte Pistacchio',     price: '$7,00', img: ph(), desc: 'Crema de café y pistacho, leche y topping.' },
        { name: 'Frozen Cappuccino',         price: '$4,50', img: ph(), desc: 'Crema de café, leche, topping y sirope de chocolate. Servido frappe.' },
      ],
    },
    {
      name: 'Café 6oz',
      items: [
        { name: 'Americano',        price: '$2,50', img: ph() },
        { name: 'Latte',            price: '$3,30', img: ph() },
        { name: 'Latte Vainilla',   price: '$3,55', img: ph() },
        { name: 'Latte Salt Caramel', price: '$3,50', img: ph() },
        { name: 'Cappuccino',       price: '$3,25', img: ph() },
        { name: 'Pistacchino',      price: '$6,00', img: ph() },
        { name: 'Moka',             price: '$4,00', img: ph() },
      ],
    },
    {
      name: 'Café 4oz',
      items: [
        { name: 'Americano',  price: '$2,00', img: ph() },
        { name: 'Ristretto',  price: '$2,25', img: ph() },
        { name: 'Espresso',   price: '$2,00', img: ph() },
        { name: 'Doppio',     price: '$2,25', img: ph() },
        { name: 'Macchiato',  price: '$2,25', img: ph() },
        { name: 'Latte',      price: '$2,25', img: ph() },
      ],
    },
    {
      name: 'Promos',
      items: [
        { name: 'Prensadito + Cappuccino',       price: '$4,00', img: ph() },
        { name: 'Cachito + Cappuccino',          price: '$3,00', img: ph() },
        { name: 'Torta del Día + Cappuccino',    price: '$5,95', img: ph() },
        { name: 'Ponque + Cappuccino',           price: '$2,95', img: ph() },
        { name: 'Combo Pranzo',                  price: '$7,50', img: ph(), desc: 'Pastelito + Refresco + Pan.' },
      ],
    },
  ];

  /* ── DOM refs ───────────────────────────────────────────────────────────── */
  var MENU_HASHES  = new Set(['#menu', '#menu-norte', '#menu-sur']);
  var modal        = document.getElementById('cafe-menu-modal');
  var listEl       = modal && modal.querySelector('[data-cafe-menu-list]');
  var tabBtns      = modal && modal.querySelectorAll('[data-cafe-menu-tab]');
  var previewEl    = modal && modal.querySelector('[data-cafe-menu-preview]');
  var previewClose = modal && modal.querySelector('[data-cafe-preview-close]');
  var previewMedia = modal && modal.querySelector('.cafe-menu__preview-media');
  var previewImg   = modal && modal.querySelector('[data-cafe-menu-preview-img]');
  var previewName  = modal && modal.querySelector('[data-cafe-menu-preview-name]');
  var previewDesc  = modal && modal.querySelector('[data-cafe-menu-preview-desc]');
  var previewPrice = modal && modal.querySelector('[data-cafe-menu-preview-price]');
  if (!modal) return;

  /* ── Preview overlay (mobile: show/hide) ────────────────────────────────── */
  function openPreview()  { previewEl.classList.add('is-visible'); }
  function closePreview() { previewEl.classList.remove('is-visible'); }

  /* ── Preview update ─────────────────────────────────────────────────────── */
  var _currentSrc = '';

  function setPreview(el) {
    if (!el) return;
    listEl.querySelectorAll('.cafe-menu__item.is-active').forEach(function (x) {
      x.classList.remove('is-active');
    });
    el.classList.add('is-active');

    var newSrc   = el.dataset.img   || '';
    var newName  = el.dataset.name  || '';
    var newDesc  = el.dataset.desc  || '';
    var newPrice = el.dataset.price || '';

    /* Fade out the preview panel */
    previewEl.classList.add('is-transitioning');

    setTimeout(function () {
      /* Update text immediately (visible once image is ready) */
      previewName.textContent  = newName;
      previewDesc.textContent  = newDesc;
      previewPrice.textContent = newPrice;
      previewImg.alt           = newName;

      /* If same image, just fade back in — no reload needed */
      if (!newSrc || newSrc === _currentSrc) {
        previewEl.classList.remove('is-transitioning');
        return;
      }

      /* Show shimmer while the new image loads */
      previewImg.src = '';
      previewMedia.classList.add('is-loading');

      var tmp = new Image();
      tmp.onload = function () {
        _currentSrc    = newSrc;
        previewImg.src = newSrc;
        previewMedia.classList.remove('is-loading');
        previewEl.classList.remove('is-transitioning');
      };
      tmp.onerror = function () {
        _currentSrc    = newSrc;
        previewImg.src = newSrc;
        previewMedia.classList.remove('is-loading');
        previewEl.classList.remove('is-transitioning');
      };
      tmp.src = newSrc;
    }, 110);
  }

  /* ── Build menu list ────────────────────────────────────────────────────── */
  function buildMenu(loc) {
    listEl.innerHTML = '';
    var firstItem = null;

    MENU.forEach(function (cat) {
      var items = cat.items.filter(function (it) {
        return loc === 'norte' || !it.norteOnly;
      });
      if (!items.length) return;

      var catEl = document.createElement('div');
      catEl.className = 'cafe-menu__cat';
      catEl.textContent = cat.name;
      listEl.appendChild(catEl);

      items.forEach(function (item) {
        var row = document.createElement('button');
        row.type = 'button';
        row.className = 'cafe-menu__item';
        row.dataset.img   = item.img   || '';
        row.dataset.name  = item.name;
        row.dataset.desc  = item.desc  || '';
        row.dataset.price = item.price;

        /* Camera badge (visible on mobile) */
        if (item.img) {
          var badge = document.createElement('span');
          badge.className = 'cafe-menu__badge';
          badge.setAttribute('aria-hidden', 'true');
          badge.innerHTML =
            '<svg width="13" height="13" viewBox="0 0 24 24" fill="none"' +
            ' stroke="currentColor" stroke-width="2.2" stroke-linecap="round"' +
            ' stroke-linejoin="round">' +
            '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2' +
            'h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>' +
            '<circle cx="12" cy="13" r="4"/></svg>';
          row.appendChild(badge);
        }

        /* Name + description */
        var info = document.createElement('span');
        info.className = 'cafe-menu__item-info';

        var nameEl = document.createElement('span');
        nameEl.className = 'cafe-menu__item-name';
        nameEl.textContent = item.name;
        info.appendChild(nameEl);

        if (item.desc) {
          var descEl = document.createElement('span');
          descEl.className = 'cafe-menu__item-desc';
          descEl.textContent = item.desc;
          info.appendChild(descEl);
        }

        row.appendChild(info);

        /* Price */
        var priceEl = document.createElement('span');
        priceEl.className = 'cafe-menu__item-price';
        priceEl.textContent = item.price;
        row.appendChild(priceEl);

        /* Interactions */
        row.addEventListener('click',      function () { setPreview(row); openPreview(); });
        row.addEventListener('mouseenter', function () { setPreview(row); });
        row.addEventListener('focus',      function () { setPreview(row); });

        listEl.appendChild(row);
        if (!firstItem) firstItem = row;
      });
    });

    /* Default: set first item immediately, no fade */
    if (firstItem) {
      _currentSrc = firstItem.dataset.img || '';
      firstItem.classList.add('is-active');
      previewEl.classList.remove('is-transitioning');
      previewMedia.classList.remove('is-loading');
      previewImg.src           = _currentSrc;
      previewImg.alt           = firstItem.dataset.name  || '';
      previewName.textContent  = firstItem.dataset.name  || '';
      previewDesc.textContent  = firstItem.dataset.desc  || '';
      previewPrice.textContent = firstItem.dataset.price || '';
    }

    listEl.scrollTop = 0;
  }

  /* ── Open / close ───────────────────────────────────────────────────────── */
  function open(tab) {
    modal.removeAttribute('hidden');
    requestAnimationFrame(function () { modal.classList.add('is-open'); });
    document.body.style.overflow = 'hidden';
    setTab(tab || 'norte');
  }

  function close() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    if (MENU_HASHES.has(location.hash)) {
      history.replaceState(null, '', location.pathname + location.search);
    }
    modal.addEventListener('transitionend', function () {
      modal.setAttribute('hidden', '');
    }, { once: true });
  }

  function setTab(name) {
    tabBtns.forEach(function (btn) {
      btn.classList.toggle('is-active', btn.dataset.cafeMenuTab === name);
    });
    buildMenu(name);
    history.replaceState(null, '', '#menu-' + name);
  }

  /* ── Hash / deep-linking ────────────────────────────────────────────────── */
  function handleHash() {
    var hash = location.hash;
    if (hash === '#menu' || hash === '#menu-norte') open('norte');
    else if (hash === '#menu-sur') open('sur');
  }

  /* ── Event wiring ───────────────────────────────────────────────────────── */
  document.querySelectorAll('[data-cafe-menu-open]').forEach(function (el) {
    el.addEventListener('click', function (e) { e.preventDefault(); open(); });
  });

  modal.querySelectorAll('[data-cafe-menu-close]').forEach(function (el) {
    el.addEventListener('click', close);
  });

  /* Mobile preview overlay: close via × button or tap on scrim */
  if (previewClose) {
    previewClose.addEventListener('click', function (e) {
      e.stopPropagation();
      closePreview();
    });
  }
  if (previewEl) {
    previewEl.addEventListener('click', function (e) {
      /* Only close if tapping the scrim backdrop (not the card itself) */
      if (e.target === previewEl) closePreview();
    });
  }

  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () { setTab(btn.dataset.cafeMenuTab); });
  });

  window.addEventListener('keydown', function (e) {
    if (!modal.classList.contains('is-open')) return;
    if (e.key === 'Escape') {
      /* On mobile, Escape closes preview first; second press closes modal */
      if (previewEl && previewEl.classList.contains('is-visible')) {
        closePreview();
      } else {
        close();
      }
    }
  });

  window.addEventListener('hashchange', handleHash);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', handleHash);
  } else {
    handleHash();
  }
})();
