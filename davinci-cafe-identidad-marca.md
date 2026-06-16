# DAVINCI CAFE — Manual de Identidad
**Referencia para el rework de la página web**
Fuente: Manual de Identidad Corporativa (Febrero, 2026) · Web: www.grupodavinci.com.ve · IG: @davincicafe.ve

> Nota sobre completitud: las páginas de elementos gráficos, patrones y aplicaciones de marca venían como imágenes (sin texto extraíble). Los patrones y assets se describen abajo, pero los archivos en sí deben solicitarse al cliente. Lo marcado como "⚠ pendiente" requiere los assets originales.

---

## 1. Sobre la marca

Davinci Café nace para crear un espacio donde **tradición, calidad y calidez** se encuentran, inspirado en el arte de la **panadería, la repostería y la cafetería**. La propuesta se basa en productos frescos, elaborados con dedicación, que celebran el equilibrio entre lo artesanal y lo contemporáneo.

Su esencia es transformar ingredientes locales en historias que conectan personas y generan momentos de felicidad. El objetivo es que cada visitante se sienta como en casa, en un ambiente acogedor, cercano y auténtico: panes artesanales, postres únicos y desayunos excepcionales.

Es parte del **Grupo Davinci** (misma casa que Davinci Ristorante), pero con una identidad propia más casual, fresca y cercana.

---

## 2. Fundamentos de marca

| Elemento | Contenido |
|---|---|
| **Misión** | Ofrecer a nuestros clientes productos frescos, deliciosos y de alta calidad en cada visita, combinando la tradición y la calidad en el arte de la panadería, cafetería y repostería. Crear un ambiente acogedor donde cada cliente se sienta como en casa, trabajando con pasión y dedicación para superar sus expectativas y ser parte de sus momentos especiales. |
| **Visión** | Ser la referencia líder en la región como el lugar favorito para disfrutar de panes artesanales, postres únicos y desayunos excepcionales, con una experiencia cálida y acogedora que inspire momentos de felicidad y conexión. Ser reconocidos por calidad, innovación y compromiso con las tradiciones, contribuyendo al desarrollo gastronómico de la ciudad. |
| **Valores** | Excelencia · Servicio sobresaliente · Respeto · Compromiso |

---

## 3. Personalidad y relato

- **Personalidad:** Cálida, cercana, casual y apasionada.
- **Narrativa:** Honramos nuestras raíces transformando ingredientes locales en una historia, generando momentos de felicidad y cercanía en cada encuentro.

Tono recomendado para copys web: cercano y espontáneo, sin formalidades pero con altos estándares de calidad; transmitir energía, comodidad y naturalidad. Más relajado y juvenil que el Ristorante.

---

## 4. Tipografía

Jerarquía de uso según el manual:

| Nivel | Fuente | Peso / Estilo | Kerning |
|---|---|---|---|
| **Títulos primarios** | Voltaire Frangela | Regular | 0 pts |
| **Títulos secundarios** | Inter | Bold | 0 pts |
| **Texto base** | Inter | Regular | Máx. 25 pts |
| **Detalles** | Inter | Light | Máx. 25 pts |

> "Voltaire Frangela" es la fuente display. Conviene confirmar con el cliente el archivo/licencia exacto (no es una fuente estándar de Google Fonts), ya que en la web habrá que cargarla como webfont propia. **Inter** sí es de Google Fonts y es directa de implementar.

### Sugerencia de implementación CSS

```css
:root {
  /* Display / títulos primarios */
  --font-display: "Voltaire Frangela", serif; /* cargar como webfont propia */

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
}
.detalle, small {
  font-family: var(--font-base);
  font-weight: 300;
}
```

> Inter desde Google Fonts:
> `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap" rel="stylesheet">`

---

## 5. Paleta de colores

Paleta más reducida y casual que el Ristorante. **Regla clave del manual:** los fondos blancos/claros son parte central de la identidad y deben predominar siempre que sea posible, para que los colores primarios destaquen.

| Color | HEX | Uso sugerido |
|---|---|---|
| Marrón café | `#665334` | Color principal / textos / logo |
| Crema | `#E5DECC` | Fondos neutros cálidos |
| Verde claro | `#B2C587` | Acento fresco / secundario |
| Lila | `#8073AE` | Acento / toque contemporáneo |

> Fondo base recomendado: blanco / claro. Los cuatro colores funcionan como acentos sobre fondo claro.

### Variables CSS

```css
:root {
  --marron-cafe:  #665334;
  --crema:        #E5DECC;
  --verde-claro:  #B2C587;
  --lila:         #8073AE;

  --fondo:        #FFFFFF; /* el manual prioriza fondos claros */
}
```

---

## 6. Logotipo

- **Logotipo primario** (DAVINCI CAFE).
- **Logotipo secundario:** uso alterno, requiere **aprobación previa**.
- Variantes vistas en aplicaciones: logo en sello/badge ondulado (versión sobre color sólido) y versión con el isotipo ilustrado (figura tipo "Mona Lisa con taza de café").
- **Tamaño mínimo:** 5 cm de altura.
- **Área de seguridad:** la zona de seguridad mínima mide exactamente **la mitad de la altura del logotipo**; dejar más espacio siempre que sea posible para que "respire".
- El logo debe usarse tal como se proporciona: **no cortar ni modificar** de ninguna manera.

⚠ Pendiente: archivos vectoriales del logo (SVG/PNG) en versiones color, monocromo y blanco — incluido el isotipo ilustrado.

---

## 7. Elementos gráficos

- **Elementos únicos / isotipo ilustrado:** figura femenina estilizada (referencia "Mona Lisa") sosteniendo una taza de café, en trazo de línea simple.
- **Patrón de grano de café:** formas orgánicas tipo grano/semilla de café, repetidas en grilla. Disponible en las tres variantes de color de marca (marrón, lila, verde).
- **Patrón de cuadrícula (damero):** patrón ajedrezado en las mismas tres variantes de color sobre crema/claro.

Estos patrones sirven muy bien como fondos de sección, banners o detalles decorativos en la web.

⚠ Pendiente: archivos de los patrones e isotipo ilustrado (el PDF solo los muestra como imagen).

---

## 8. Estilo fotográfico

Fotografía luminosa, fresca y apetecible: bebidas frías (iced coffee, jugos/limonadas en vasos plásticos transparentes), cafés calientes con latte art, sándwiches y panes sobre tablas de madera, manos brindando/compartiendo. Luz natural, ambiente casual y cercano. Predomina la sensación cálida con verdes naturales de fondo.

⚠ Pendiente: banco de imágenes en alta resolución para la web.

---

## 9. Aplicaciones de marca (referencia)

Para mantener coherencia visual en el sitio, estas son las aplicaciones físicas de marca: vaso para llevar (kraft con rayas y logo dorado/marrón), bolsa de tela (tote con isotipo ilustrado), hoodie/merch. Útiles como referencia de mockups y secciones de "experiencia" o tienda en la web.

---

## 10. Checklist para el rework web

- [ ] Confirmar archivo y licencia de la fuente display **Voltaire Frangela** (cargar como webfont propia).
- [ ] Cargar Inter (300 / 400 / 700) desde Google Fonts.
- [ ] Aplicar variables CSS de color (sección 5) priorizando fondos claros.
- [ ] Obtener logos en SVG (color, mono, blanco) + isotipo ilustrado + favicon.
- [ ] Definir versión de logo para fondo claro y para fondo oscuro (ver portada negra del manual).
- [ ] Recuperar patrones (grano de café + damero) en las 3 variantes de color.
- [ ] Banco fotográfico en alta resolución coherente con el estilo.
- [ ] Respetar área de seguridad (½ de la altura del logo) y tamaño mínimo (5 cm).
- [ ] Definir relación visual con Davinci Ristorante dentro del Grupo Davinci (si comparten home / navegación).
