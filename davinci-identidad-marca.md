# DAVINCI RISTORANTE — Manual de Identidad
**Referencia para el rework de la página web**
Fuente: Manual de Identidad Corporativa (Octubre 2025) · Web: www.grupodavinci.com.ve

> Nota sobre completitud: algunas páginas del PDF (concepto creativo / historia, iconografía, patrones, aplicaciones de marca) venían con texto *placeholder* (Lorem ipsum) o solo imágenes sin contenido textual extraíble. Lo marcado como "⚠ pendiente" debe pedirse al cliente o tomarse directo de los assets visuales.

---

## 1. Sobre la marca

DAVINCI es una casa de cocina italiana auténtica con mirada contemporánea, fundada en **enero de 1996** por un grupo de jóvenes con raíces en el Sur de Italia. La marca se construye sobre tres pilares que no cambian: **calidad, servicio y respeto**.

Ofrece recetas de todas las regiones de Italia —entradas, pastas, risottos, pizzas y grill— y cuenta con un diferenciador propio, el **Mercato DOC**, productos artesanales hechos con mano de obra 100% venezolana.

El tagline / firma de marca es **"DAL 1996"**, que acompaña al logotipo.

---

## 2. Fundamentos de marca

| Elemento | Contenido |
|---|---|
| **Misión** | Ofrecer la calidez de Italia en cada plato y en cada momento. |
| **Visión** | Ser el grupo emblemático de la gastronomía italiana en la región. |
| **Garantía de marca** | Sabemos lo que hacemos y garantizamos experiencias memorables. |
| **Valores** | Excelencia · Servicio sobresaliente · Respeto · Compromiso |

---

## 3. Personalidad y relato

- **Personalidad:** Elegante, cálida, artística, auténtica, confiable.
- **Narrativa:** Italia como cultura viva; procesos artesanales con mirada actual; legado que honra el nombre Da Vinci.

Tono recomendado para copys web: cálido, cuidado y sin estridencias; transmitir tradición + autenticidad sin sonar anticuado.

---

## 4. Tipografía

Jerarquía de uso según el manual:

| Nivel | Fuente | Peso / Estilo | Kerning |
|---|---|---|---|
| **Títulos primarios** | Nephlim* | Regular | 0 pts |
| **Títulos secundarios** | Inter | Bold | 0 pts |
| **Texto base** | Inter | Regular | Máx. 25 pts |
| **Detalles** | Inter | Light | Máx. 25 pts |

\* El nombre aparece escrito de dos formas en el PDF: **"Nephlim"** y **"Nelphim"**. Conviene confirmar con el cliente cuál es la fuente exacta (la grafía correcta de la tipografía display) antes de buscarla/licenciarla para la web. **Inter** es de Google Fonts y es directa de implementar.

### Sugerencia de implementación CSS

```css
:root {
  /* Display / títulos primarios */
  --font-display: "Nephlim", serif; /* confirmar nombre real */

  /* Sistema (títulos secundarios, texto, detalles) */
  --font-base: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
}

h1, .titulo-primario {
  font-family: var(--font-display);
  letter-spacing: 0;
}
h2, .titulo-secundario {
  font-family: var(--font-base);
  font-weight: 700;
  letter-spacing: 0;
}
body, p, .texto-base {
  font-family: var(--font-base);
  font-weight: 400;
  /* "Máx 25 pts" del manual ≈ tracking sutil */
}
.detalle, small {
  font-family: var(--font-base);
  font-weight: 300;
}
```

> Inter se carga desde Google Fonts:
> `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap" rel="stylesheet">`

---

## 5. Paleta de colores

### Primaria

| Color | HEX | Uso sugerido |
|---|---|---|
| Verde salvia | `#778C71` | Acento / verdes de marca |
| Verde oscuro | `#3E4A33` | Color principal / textos sobre claro |
| Crema | `#E5DECC` | Fondos neutros cálidos |
| Arena | `#C4B292` | Secundario cálido |
| Verde claro | `#D6DDCC` | Fondos suaves / secciones |

### Secundaria

| Color | HEX | Uso sugerido |
|---|---|---|
| Verde oscuro | `#3E4A33` | (compartido con primaria) |
| Rosa pálido | `#F7DFDF` | Acento delicado |
| Rojo terracota | `#A43230` | Acento fuerte / CTA |
| Azul claro | `#B4C2DB` | Acento frío |
| Azul marino | `#15295E` | Contraste / detalles |
| Crema | `#E5DECC` | (compartido con primaria) |
| Marrón | `#665334` | Tierra / detalles |

### Variables CSS

```css
:root {
  /* Primaria */
  --verde-salvia:  #778C71;
  --verde-oscuro:  #3E4A33;
  --crema:         #E5DECC;
  --arena:         #C4B292;
  --verde-claro:   #D6DDCC;

  /* Secundaria */
  --rosa-palido:   #F7DFDF;
  --terracota:     #A43230;
  --azul-claro:    #B4C2DB;
  --azul-marino:   #15295E;
  --marron:        #665334;
}
```

---

## 6. Logotipo

- **Logotipo primario** y **logotipo secundario** (variantes según versión).
- **Isotipo:** uso alterno, requiere **aprobación previa**.
- **Tagline:** "DAL 1996".
- **Espacio y uso mínimo:** tamaño mínimo de **10 px**; respetar el área de protección alrededor del logo.
- **Usos incorrectos a evitar:** no combinar el logo con bustos/ilustraciones encima, no alterar colores fuera de paleta, no añadir elementos gráficos no aprobados (ver pág. 12 del manual para los ejemplos prohibidos).

⚠ Pendiente: archivos vectoriales del logo (SVG/PNG en versiones color, monocromo y blanco) — solicitar al cliente para la web.

---

## 7. Estilo fotográfico

Fotografía cálida y editorial: ambientes del restaurante con luz natural/tenue, planos de platos cuidados (estilo gastronómico de cerca), detalles de menú y servicio. Predomina la paleta cálida (maderas, cremas, verdes). Mantener coherencia con esta estética en banners y galerías del sitio.

⚠ Pendiente: banco de imágenes en alta resolución para la web.

---

## 8. Elementos gráficos

- **Ilustración e iconografía:** estilo de trazo (líneas finas), incluye motivos como **nubes ilustradas** y elementos clásicos/botánicos (rama de olivo) usados como acentos decorativos.
- **Patrón:** existe un patrón de marca para fondos/secciones.

⚠ Pendiente: assets de iconografía y patrón (el PDF solo los muestra como imagen sin archivos extraíbles).

---

## 9. Checklist para el rework web

- [ ] Confirmar nombre exacto y licencia de la fuente display (Nephlim / Nelphim).
- [ ] Cargar Inter (300 / 400 / 700) desde Google Fonts.
- [ ] Aplicar variables CSS de color (sección 5).
- [ ] Obtener logos en SVG (color, mono, blanco) + favicon.
- [ ] Definir versión del logo para fondo claro y fondo oscuro.
- [ ] Banco fotográfico en alta resolución coherente con el estilo.
- [ ] Recuperar assets de iconografía / patrón de marca.
- [ ] Respetar área de protección y tamaño mínimo del logo (10 px).
