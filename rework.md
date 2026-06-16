# Da Vinci Website — Rework Summary
**Phase 2 · June 2026**

---

## What was implemented

### 1. Language selector (ES / EN / IT)
Custom `data-i18n` JavaScript solution — no Google Translate dependency.
- New `js/i18n.js`: string maps for ES, EN, IT; swaps `textContent` on all `[data-i18n]` elements; persists choice in `localStorage('dv.lang')`.
- New `css/components/lang-switch.css`: pill-style selector using brand palette tokens (`--crema`, `--arena`, `--verde-oscuro`). Active state fills with `--verde-oscuro`; Inter 700 12px uppercase.
- Inserted as last child of `.mobile-nav-container` in `index.html`.
- ~35 annotated keys across all sections (see key map below).

### 2. "Café Da Vinci" nav link
Inserted between `CLUB DA VINCI` and `UBÍCANOS` in `.mobile-nav-container`.
```html
<a href="#cafe-davinci" data-i18n="nav.cafe">CAFÉ DA VINCI</a>
```

### 3. Restaurant — Misión / Visión / Garantía de Marca / Valores
Section now has `id="nosotros"` (fixes broken `#nosotros` nav anchor).

Heading PNG images replaced with text headings (`<h2 class="heading-display">`):
- **Nosotros** heading: replaces `nosotros.png`
- **Visión** heading: replaces `vision_02.png` — copy updated to brand manual text
- **Misión** heading: replaces `mision_02.png` — copy updated to brand manual text
- **Garantía de Marca** (NEW): brand manual §2 copy added
- **Valores** (NEW): brand manual §2 copy added

Old heading PNGs (`nosotros.png`, `vision_02.png`, `mision_02.png`) remain on disk as orphaned assets.

New CSS rule in `css/components/vision.css`:
```css
.heading-display { font-family: var(--font-display); font-size: clamp(1.6rem, 4vw, 2.8rem); color: var(--verde-oscuro); }
```

### 4. Promos section removed
Already removed from `index.html` in a prior pass. `promos.css` and `promoPlates.js` were also already deleted. No further action required.

### 5. Club section
No changes — `<section id="club">` retained as-is. Data-i18n attributes added to heading and CTA button.

### 6. New Café Da Vinci section (`#cafe-davinci`)
Placed **after** `#contacto` (end of page, before `</main>`). `#club` now explicitly closed with `</section>` before the new section.

Section composition:
1. **Intro header**: eyebrow "DAL 1996" (brand tagline), heading "Café Da Vinci", lede paragraph
2. **Photo strip**: CSS-only marquee (reuses `.marquee / .marqueeScroll` from the restaurant gallery). 16 CSS-painted placeholder panels alternating `--crema`, `--arena`, `--verde-claro`. Each shows "Foto pendiente" overlay in Inter Light italic.
3. **Pillars grid**: Misión / Visión / Valores in a 3-column staggered desktop grid, stacked on mobile. Text from brand manual café Misión/Visión; shared Valores.

Visual palette: `background: var(--crema)`, text `var(--marron)`, headings `var(--verde-oscuro)`, top border `var(--terracota)` (single accent per manual §5 guidance).

### 7. Brand palette CSS tokens added
Added to `css/base.css :root`:
`--verde-salvia`, `--verde-oscuro`, `--crema`, `--arena`, `--verde-claro`, `--terracota`, `--marron`, `--font-display`.

### 8. Google Fonts (Inter)
Added to `<head>` (weights 300, 400, 700). NalphimRegular display font was already loaded from `fonts/nephilm.otf`.

---

## Files changed

| Action | Path |
|--------|------|
| Modified | `index.html` |
| Modified | `css/base.css` |
| Modified | `css/components/vision.css` |
| Created | `css/components/lang-switch.css` |
| Created | `css/components/cafe.css` |
| Created | `js/i18n.js` |
| Created | `rework.md` (this file) |
| Already deleted (prior pass) | `css/components/promos.css` |
| Already deleted (prior pass) | `js/promoPlates.js` |

---

## i18n key namespace map

| Key | ES default |
|-----|-----------|
| `nav.inicio` | INICIO |
| `nav.menu` | MENÚ / RESTAURANT |
| `nav.reservas` | RESERVAS |
| `nav.nosotros` | NOSOTROS |
| `nav.club` | CLUB DA VINCI |
| `nav.ubicanos` | UBÍCANOS |
| `nav.cafe` | CAFÉ DA VINCI |
| `nosotros.heading` | NOSOTROS |
| `nosotros.body` | Párrafo historia desde 1996 |
| `vision.heading` | VISIÓN |
| `vision.body` | Ser el grupo emblemático... |
| `mision.heading` | MISIÓN |
| `mision.body` | Ofrecer la calidez de Italia... |
| `garantia.heading` | GARANTÍA DE MARCA |
| `garantia.body` | Sabemos lo que hacemos... |
| `valores.heading` | VALORES |
| `valores.body` | Excelencia · Servicio sobresaliente... |
| `club.heading` | CLUB DA VINCI |
| `club.cta` | COMPLETA NUESTRA ENCUESTA... |
| `contacto.heading` | Puedes visitar nuestro ristorante |
| `contacto.subheading` | en el siguiente horario |
| `contacto.dom-mier` | DE DOMINGO A MIÉRCOLES |
| `contacto.jue-sab` | DE JUEVES A SÁBADO |
| `contacto.ubicados1` | Estamos ubicados en |
| `contacto.ubicados2` | Maracaibo, edo. Zulia |
| `contacto.sedes` | Puedes visitarnos en... |
| `cafe.eyebrow` | DAL 1996 |
| `cafe.lede` | Panadería, cafetería y repostería... |
| `cafe.mision.heading` | Misión |
| `cafe.mision.body` | Texto completo Misión café |
| `cafe.vision.heading` | Visión |
| `cafe.vision.body` | Texto completo Visión café |
| `cafe.valores.heading` | Valores |
| `cafe.valores.body` | Excelencia · Servicio sobresaliente... |

---

## Deferred items (pending client assets / follow-up)

- **Real café photography**: Replace the 16 `.cafe-placeholder` divs with `<img class="imagen-- imagen--cafe-N">` elements. Create `img/CAFE/` folder. Ensure photos match brand manual §7 editorial style (warm, natural light, close-up food).
- **Brand iconography SVGs**: Manual §8 references fine-line nubes ilustradas and rama de olivo assets. A slot is reserved near the café section heading; will add once the client provides the SVG files.
- **Orphaned heading PNGs**: `img/nosotros.png`, `img/mision_02.png`, `img/vision_02.png` — safe to delete once client confirms text headings are approved.
- **Orphaned promo assets**: `img/PROMOS/` folder — safe to delete (no references in markup).
- **Full palette token migration**: Legacy `--primary`, `--color-red-*`, `--title` tokens remain in `base.css`. Migrate remaining site components to new brand tokens in a dedicated refactor pass.
- **`#contacto` nesting**: Currently nested inside `#club`'s unclosed tag. Correct nesting in a separate structural cleanup pass.

---

## Verification checklist

- [ ] Open `index.html` via local server (`python3 -m http.server`)
- [ ] Nav shows: INICIO · MENÚ/RESTAURANT · RESERVAS · NOSOTROS · CLUB DA VINCI · CAFÉ DA VINCI · UBÍCANOS · `[ES EN IT]` pill
- [ ] Click EN → all annotated strings swap to English; click IT → Italian; click ES → Spanish
- [ ] Reload page → last selected language is restored from `localStorage`
- [ ] Click CAFÉ DA VINCI in nav → page scrolls to `#cafe-davinci` section (cream background, after UBÍCANOS section)
- [ ] Click NOSOTROS → page scrolls to the vision/brand section (now has `id="nosotros"`)
- [ ] Restaurant Misión/Visión/Garantía/Valores: text headings visible, updated copy matches brand manual §2
- [ ] No promos section between gallery and Club
- [ ] Café section: eyebrow "DAL 1996" + heading + lede + marquee with cream/arena/green placeholder panels + 3-column pillar grid
- [ ] Mobile (375px): nav collapses, lang pill tappable, café grid stacks to 1 column, no horizontal overflow
- [ ] DevTools console: no errors; Network tab: no 404s for any CSS or JS files
