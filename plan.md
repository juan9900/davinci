# Da Vinci Website — Change Plan

Mark items as done by changing `[ ]` to `[x]`.

---

## 1. Language Selector
- [ ] Add a language switcher (ES / EN / IT at minimum) above the photo gallery section
- [ ] Implement translation toggle — either Google Translate widget or a custom JS solution with hardcoded strings
- [ ] Make the selector visible and accessible on both desktop and mobile

---

## 2. "Café Da Vinci" Nav Link
- [ ] Add a "Café Da Vinci" button/link in the top navigation bar
- [ ] Clicking it scrolls the page down to the new Café Da Vinci section (anchor link `#cafe-davinci`)

---

## 3. Update Da Vinci Restaurant — Misión / Visión / Garantía / Valores
- [ ] Replace current Misión text with:
  > Ofrecer la calidez de Italia en cada plato y en cada momento.
- [ ] Replace current Visión text with:
  > Ser el grupo emblemático de la gastronomía italiana en la región.
- [ ] Add new **Garantía de Marca** block:
  > Sabemos lo que hacemos y garantizamos experiencias memorables.
- [ ] Add/update **Valores** block:
  > Excelencia, Servicio sobresaliente, Respeto, Compromiso.

---

## 4. Remove Promotions Section
- [ ] Remove `<section id="section-promos">` and all its contents from `index.html`
- [ ] Remove any CSS rules scoped exclusively to the promos section
- [ ] Remove any JS logic that only serves the promos carousel (`promoPlates.js` — verify nothing else depends on it)

---

## 5. Keep Club Section
- [ ] No changes — `<section id="club">` stays as-is

---

## 6. New "Café Da Vinci" Section
- [ ] Add a new `<section id="cafe-davinci">` after the Club section
- [ ] Include a **photo strip carousel** (same horizontal chain style as the existing gallery, but no large hero/banner above it)
- [ ] Add placeholder images for the café gallery (replace once real images are provided)
- [ ] Add Misión block:
  > Ofrecer a nuestros clientes productos frescos, deliciosos y de alta calidad en cada visita, combinando la tradición y la calidad en el arte de la panadería, cafetería y repostería. Nos esforzamos por crear un ambiente acogedor donde cada cliente se sienta como en casa, mientras trabajamos con pasión y dedicación para superar sus expectativas y ser parte de sus momentos especiales.
- [ ] Add Visión block:
  > Ser la referencia líder en la región como el lugar favorito para disfrutar de panes artesanales, postres únicos y desayunos excepcionales, brindando una experiencia cálida y acogedora que inspire momentos de felicidad y conexión entre las personas. Aspiramos a ser reconocidos por nuestra calidad, innovación y compromiso con nuestras tradiciones, contribuyendo al desarrollo gastronómico de la ciudad.
- [ ] Add Valores block:
  > Excelencia, Servicio sobresaliente, Respeto, Compromiso.

---

## Notes
- The language selector (item 1) should be implemented before the Café section (item 6) so translations cover all new content.
- Real café photos need to be provided by the client before the gallery in item 6 can be finalized.
