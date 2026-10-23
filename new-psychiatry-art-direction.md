# New Psychiatry — Mockup Art Direction

Built in Figma on page **Case Study — Mockups** (8 scenes, 1920 px wide). The same system is applied to page **Case Study — Social**.
Every scene frames real screens cloned from `01 Design`. No UI, data or results were invented.

---

## 1. Art direction summary

The series is called **"A room with morning light."** Every scene is staged as one quiet interior: warm travertine and linen surfaces, a single low sun coming through a tall window from the upper left, and soft mullion shadows falling across the work.

The recurring shape is the **arch niche**, a threshold you step through. It echoes the hero line "У кожного своя причина тут опинитись" (*Everyone has their own reason for being here*). Mental health care, in this framing, is about arriving somewhere safe, not about fixing a broken mind.

The product's deep moss green carries the devices and the dark scenes, so the brand stays recognisable without being loud. The typography is editorial: Instrument Serif for the voice of the case and Geologica, the product's own typeface, for facts and captions. That pairing makes it read like a Kinfolk spread rather than a SaaS pitch.

Nothing in the series floats, glows or competes with the UI. Light, grain and shadow do the work.

---

## 2. Visual system

### Palette (scene variables in the `Case Study Scene` collection; brand values are aliased to the product's primitives)

| Token | HEX | Role |
|---|---|---|
| `scene/travertine` | `#E7E1D6` | Primary scene background (stone wall / table) |
| `scene/linen` | `#F4F0E8` | Light surfaces: paper, browser chrome, close-ups |
| `scene/niche` | `#DCD3C4` | Arch niches, saucer, secondary planes |
| `scene/moss` → green/800 | `#2E4A3D` | Dark scenes, brand emphasis |
| `scene/forest` → green/950 | `#122D22` | Device bodies, text ink, shadow tint |
| `scene/clay` → warm/600 | `#B06E39` | Index numerals and labels only (large or caps text) |
| `scene/sage` → sage/250 | `#C9D5C1` | Accents on moss |

All shadows are tinted forest (`rgba(18,45,34,…)`), never black, so they blend into the warm palette.

### Materials and textures
Honed travertine, stonewashed linen, uncoated cotton paper, matte unglazed ceramic and pale oak. The devices have matte moss aluminium bodies. **No glass, chrome or gloss.** A fine monotone grain at 10% sits on every scene to remove digital flatness.

### Lighting
Late-morning natural light from the upper left, about 30° off vertical, through a tall mullioned window. The key light is soft but directional: long diagonal light planes with gentle penumbras and thin mullion shadows at 3–10% opacity. Devices sit in a three-layer shadow stack (contact 2/4 · mid 24/48 · ambient 72/120 with negative spread). There is no rim light and no bokeh.

### Typography
- **Headings / voice:** *Instrument Serif* Regular and Italic (Google Fonts). Commercial alternatives: GT Super, Editorial New, Canela Text. Instrument Serif has no Cyrillic, so Ukrainian quotes use Geologica Light.
- **Facts / captions / labels:** *Geologica* Light, Regular and Medium, the product typeface, which keeps the case tied to the product.
- Figma text styles: `Case/Display 168`, `Case/Title 104`, `Case/Heading 64`, `Case/Quote 72 italic`, `Case/Index 40 italic`, `Case/Label 16 caps +10%`, `Case/Body 24 light`, `Case/Caption 18`. On the social page, `Social/Display/H1/H2/H3` now use Instrument Serif.

### Composition rules
- 12-column grid, 120 px outer margin at 1920 (96 px on the cover), with 64–72 px between the caption and the stage.
- **Every scene opens with the same caption rail:** an italic numeral, a caps label, a hairline rule, and a one-line description on the right.
- About 40% of each frame is negative space. One hero object per scene and at most four devices.
- Devices are frontal or flat-lay only. Phones may rotate up to ±7° on a flat lay. There are no 3D tilts, so UI text stays readable.
- Crops are deliberate: phones may bleed off the bottom edge, browsers never crop the header, and close-ups crop to a single component.
- Light planes always run upper-left to lower-right across the whole series.

---

## 3. Mockup scene list

Each scene below exists in Figma as a finished vector composition with the real UI in place. The prompts generate **photographic backgrounds** that can replace the vector stage when you want more realism: drop the generated image behind the existing device layers.

### S01 — Hero cover (1920×1280) · `Scene/01 Hero cover`
**Purpose:** Signals the product, the tone and the craft in one look; it is also the Behance cover.
**Layout:** Text column on the left (label, serif title, one-line value, meta rows). On the right, a tall travertine arch niche holds a frontal desktop browser (Home hero), with a phone (mobile hero) standing in front of it to the right. Light planes fall across the arch.
**Prompt:**
> Architectural interior photograph, honed travertine wall with a tall shallow arched niche, warm cream tones, soft late-morning sunlight from upper left through a mullioned window casting long diagonal light planes and thin soft mullion shadows, empty niche with a clean flat area for a [SCREEN PLACEHOLDER] laptop-sized rectangle and a phone, minimal, calm, Kinfolk editorial, 50mm lens, eye level, f/8, fine film grain, no people, no plants, no text --ar 3:2

### S02 — Desktop showcase (1920×1440) · `Scene/02 Desktop showcase`
**Purpose:** Shows the desktop home at full readable scale: header, hero and the situation-first directions.
**Layout:** Moss-green scene with one large frontal browser (1480 px) centred under the caption rail. Faint warm light planes cross the green.
**Prompt:**
> Deep moss green matte plaster wall, soft directional morning light from upper left creating subtle diagonal light planes and gentle window shadows, large empty centered area for a [SCREEN PLACEHOLDER] browser window, quiet luxury wellness interior, Aesop store mood, frontal camera, 35mm, f/11, low contrast, fine grain, no objects, no text --ar 4:3

### S03 — Mobile multi-screen (1920×1360) · `Scene/03 Mobile screens`
**Purpose:** Shows the four key mobile moments as one calm sequence: Home, Search, Profile, Confirmed.
**Layout:** Four arch niches in a row, alternating travertine and linen. Four frontal phones stand in front of them, staggered 120 px vertically for rhythm. The light planes pass across all four.
**Prompt:**
> Row of four tall shallow arched niches carved into a warm travertine wall, alternating slightly lighter limestone inlay, soft late-morning sun from upper left, diagonal light planes and fine mullion shadows across the arches, each niche empty with space for a [SCREEN PLACEHOLDER] phone standing upright, Scandinavian-Japanese minimal, frontal, 50mm, f/8, film grain, no people --ar 7:5

### S04 — Close-up interaction detail (1920×1200) · `Scene/04 Card close-up`
**Purpose:** Zooms into Decision 02: everything a person would call to ask about is on the specialist card.
**Layout:** On a linen surface, the real card at 1.9× scale with a soft shadow on the left. On the right, a serif heading and four annotations numbered i–iv, which describe only what is on the card.
**Prompt:**
> Top-down macro photograph of stonewashed natural linen fabric on a table, soft morning window light from upper left, gentle fabric texture, one long soft diagonal shadow, large clean empty area on the left for a [SCREEN PLACEHOLDER] card, calm editorial still life, 100mm macro, f/5.6, shallow but not blurry, warm cream palette, no objects, no text --ar 8:5

### S05 — In-context lifestyle (1920×1280) · `Scene/05 In context`
**Purpose:** Places the product in a real, human moment (a quiet morning, tea, deciding to book) without showing faces or distress.
**Layout:** A flat lay on linen. A phone with the mobile hero lies at −7°. Next to it is a cotton-paper card with the real hero line and its English translation, and a matte ceramic cup of tea sits top right. Window light falls across everything.
**Prompt:**
> Overhead flat lay on a stonewashed linen tablecloth, matte unglazed ceramic cup of black tea on a saucer top right, a small uncoated cotton paper card, a smartphone lying slightly rotated with a blank [SCREEN PLACEHOLDER], soft late-morning sun from upper left with long window-frame shadows, a hand's soft shadow at the edge only, warm cream and moss palette, Kinfolk still life, 50mm, f/8, film grain --ar 3:2

### S06 — Design system / components (1920×1500) · `Scene/06 Design system`
**Purpose:** Shows that the system is real and buildable: primitive colours, one typeface, and components sized for Elementor.
**Layout:** Linen scene. Six arch-topped swatches bound to the real primitive variables (with HEX values), a Geologica "Aa" specimen with the actual type ramp, and on the right the real specialist card and the quiz chips.
**Prompt:**
> Flat frontal photograph of a pale linen-covered pinboard wall with soft natural morning light from upper left, subtle diagonal light gradient and faint window shadow, very clean, generous empty space for a [SCREEN PLACEHOLDER] grid of color swatches and components, quiet museum-catalogue aesthetic, 50mm, f/11, low contrast, fine grain, no objects, no text --ar 9:7

### S07 — Flow scene (1920×1300) · `Scene/07 Flow`
**Purpose:** Tells the "I don't know whom I need" story end to end: five questions → three matches → two required fields → confirmed.
**Layout:** Moss-green scene with four frontal phones in a row. Under each phone sit a hairline rule, a serif italic numeral and a one-line step label.
**Prompt:**
> Long deep moss green matte plaster wall with a narrow pale oak ledge running across, soft warm sunlight from upper left creating gentle diagonal light planes, four evenly spaced empty spots on the ledge for upright phones [SCREEN PLACEHOLDER], calm minimal gallery interior, frontal camera at ledge height, 35mm, f/8, fine grain, no people, no text --ar 3:2

### S08 — Closing / outro (1920×1080) · `Scene/08 Outro`
**Purpose:** Ends on the product's own voice, with a quiet thank-you and contact details.
**Layout:** A centred pale arch with light passing through it. A clay caps label, the serif hero line in English, a single body line, and a contact row with `[Your Name]` and `[email / portfolio URL]` placeholders.
**Prompt:**
> Minimal architectural photograph of a single tall arched doorway in a warm travertine wall, opening onto soft diffused morning light, long gentle light planes on the floor and wall, serene, empty, centered composition with clean space in the middle of the arch for text [SCREEN PLACEHOLDER], Scandinavian-Japanese calm, 35mm, f/11, film grain, no people, no furniture --ar 16:9

**Negative prompt for all scenes** (append if your tool supports it): `people's faces, brains, puzzle pieces, neon, gradient glow, glassmorphism, glossy 3D blobs, hospital, white-blue clinical, stock smile, heavy bokeh, floating devices, clutter, text, watermark`.

---

## 4. Figma assembly tips

1. **Keep the screens live.** The screens in every device are clones of the `01 Design` frames. To update one, replace the clone inside `Device/*/Screen` and keep the screen frame's size; clipping does the crop.
2. **Placing a generated photo:** put the image as the first fill of the `Scene/*` frame (or as a full-bleed rectangle at the bottom of the layer stack), then hide the `Light/*` layers, because the photo already carries the light. Use frontal shots only, so screens never need perspective distortion. If you do use an angled photo, apply the screen with Figma's *Transform → Distort* or a plugin, and keep the angle under 10°.
3. **Shadows should match the photo's light:** offset the device shadow away from the window (light upper left → shadow down and slightly right), and keep the three-layer stack tinted `#122D22`.
4. **Colour match:** add a 4–6% `scene/travertine` overlay on top of the screen when it sits in a warm photo, and reduce photo saturation 5–10% if the UI greens look cold against it.
5. **No reflections.** The devices are matte by design; glass glare would compete with the UI.
6. **Export for Behance:** export each scene at 1920 px wide, PNG for UI-heavy scenes or JPG at 90% for photographic ones, at 1× (or 2× for retina portfolios, downscaled on upload). Recommended heights: hero 1280, desktop 1440, mobile 1360, close-up 1200, in-context 1280, system 1500, flow 1300, outro 1080. Behance displays at 1400, so 1920 keeps the UI sharp.
7. **Readability check:** before export, view each scene at 50%. If a UI label isn't readable, scale the device up rather than adding text callouts.

---

## What changed on the social page
- Headings in every frame now use Instrument Serif through the shared `Social/*` styles.
- Every frame has a warm light gradient, diagonal window light, mullion shadows and fine grain.
- Phones use the new matte moss body with an inner hairline, a three-layer shadow and the island. UI windows have a soft shadow and a hairline.

## To confirm
- Your name and contact details for Scene 08 and LinkedIn slide 01.
- Whether you want photographic backgrounds generated. It's paid: Figma AI credits or Higgsfield credits. The vector versions are complete without them.
- Instrument Serif has no Cyrillic. If you plan a Ukrainian version of the case, switch to a Cyrillic serif such as Cormorant or Lora.
