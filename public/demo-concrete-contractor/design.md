---
version: alpha
name: Concrete-Contractor-Design-System
description: "A structural, heavy-duty marketing canvas built around a cool 'concrete ash' ground, deep slate type set in Inter, and a highly visible Safety Orange (#ea580c) reserved for conversion actions. Cards live as solid white blocks with sharp, minimal radii (2–4px) and deliberate drop shadows to simulate physical depth. Display headlines run heavy (weight 800) with tight, tracked-in letter spacing. The system reads as a rugged, trustworthy, and physical service business: high-quality project photography dominates, ornament is eliminated, and trust signals (badges, testimonials) are highly prominent."

colors:
  primary: "#0f172a"
  on-primary: "#ffffff"
  ink: "#0f172a"
  ink-muted: "#475569"
  ink-subtle: "#64748b"
  ink-tertiary: "#94a3b8"
  canvas: "#f1f5f9"
  surface-1: "#ffffff"
  surface-2: "#e2e8f0"
  inverse-canvas: "#020617"
  inverse-surface-1: "#1e293b"
  inverse-ink: "#ffffff"
  inverse-ink-muted: "#cbd5e1"
  hairline: "#cbd5e1"
  hairline-soft: "#e2e8f0"
  safety-orange: "#ea580c"
  hardhat-yellow: "#eab308"
  steel-blue: "#0369a1"
  semantic-error: "#dc2626"
  semantic-success: "#16a34a"

typography:
  display-xl:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: -2.0px
  display-lg:
    fontFamily: Inter
    fontSize: 56px
    fontWeight: 800
    lineHeight: 1.10
    letterSpacing: -1.5px
  display-md:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -1.0px
  headline:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.20
    letterSpacing: -0.5px
  card-title:
    fontFamily: Inter
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.3px
  subhead:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.40
    letterSpacing: -0.2px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.60
    letterSpacing: 0
  body:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.60
    letterSpacing: 0
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.40
    letterSpacing: 0.5px
    textTransform: uppercase
  button:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: 0.2px
  eyebrow:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.30
    letterSpacing: 1.0px
    textTransform: uppercase

rounded:
  xs: 2px
  sm: 4px
  md: 6px
  lg: 8px
  xl: 12px
  xxl: 16px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px

components:
  button-primary:
    backgroundColor: "{colors.safety-orange}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 14px 24px
  button-primary-hover:
    backgroundColor: "#c2410c"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
  button-secondary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 14px 24px
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: 14px 24px
    border: "2px solid {colors.primary}"
  service-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 32px
    borderBottom: "4px solid {colors.safety-orange}"
  project-gallery-card:
    backgroundColor: "{colors.inverse-surface-1}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: 0
  testimonial-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.sm}"
    padding: 32px
    border: "1px solid {colors.hairline}"
  trust-badge-tile:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 16px
    border: "1px solid {colors.hairline-soft}"
  text-input:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xs}"
    padding: 12px 16px
    border: "1px solid {colors.ink-tertiary}"
  text-input-focused:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xs}"
    padding: 12px 16px
    border: "2px solid {colors.safety-orange}"
  estimate-banner:
    backgroundColor: "{colors.inverse-canvas}"
    textColor: "{colors.inverse-ink}"
    typography: "{typography.headline}"
    rounded: "{rounded.lg}"
    padding: 64px
  top-nav:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "0px"
    height: 72px
    borderBottom: "1px solid {colors.hairline-soft}"
  footer:
    backgroundColor: "{colors.inverse-canvas}"
    textColor: "{colors.inverse-ink-muted}"
    typography: "{typography.body-sm}"
    rounded: "0px"
    padding: 80px 32px
---

## Overview

The concrete contractor marketing canvas is built on a cool "Concrete Ash" ground (`{colors.canvas}` ≈ #f1f5f9). Unlike software brands that lean into warm creams and soft edges, a construction brand must signal physical durability, exactness, and industrial strength. 

Cards sit as solid white blocks (`{colors.surface-1}`) with sharp corners (`{rounded.sm}`) and slight physical depth to imply weight. 

Display type is **Inter** set at heavy weights (700 and 800) with aggressively tight letter-spacing. This creates a dense, "blocky" typography structure that mirrors poured concrete. 

The single chromatic accent is **Safety Orange** (`{colors.safety-orange}` #ea580c). It is strictly reserved for primary conversion points: "Get a Free Estimate" buttons, active states, and structural highlights (like the thick bottom borders on service cards). 

The page rhythm is driven by **high-quality project photography** and **trust signals** (licensed/bonded badges, Google review stars, before/after comparisons). The UI gets out of the way to let the workmanship shine.

**Key Characteristics:**
- **Concrete Canvas** (`{colors.canvas}` #f1f5f9) is the baseline surface — a cool, structural gray.
- **Heavy, structural typography:** Inter at weight 800 for headers carries the brand's physical strength.
- **Sharp geometry:** Corners stay very tight at `{rounded.sm}` 4px and `{rounded.md}` 6px to mimic hard building materials.
- **Safety Orange** (`{colors.safety-orange}` #ea580c) drives the user to take action.
- **Physical depth:** Cards use prominent, tight drop shadows to feel heavy and layered, rather than "floating" like a cloud SaaS product.

## Colors

### Brand & Accent
- **Deep Slate** ({colors.primary}): The foundational dark color. Used for massive contrast against white and orange. 
- **White** ({colors.on-primary}): Text on dark CTAs and dark sections.
- **Safety Orange** ({colors.safety-orange}): The conversion color. Used for "Get a Quote" buttons and active form highlights.
- **Hardhat Yellow** ({colors.hardhat-yellow}): Secondary accent used primarily for 5-star review graphics and warning/alert icons.

### Surface
- **Concrete Ash** ({colors.canvas}): Default background — cool light gray #f1f5f9.
- **Surface 1** ({colors.surface-1}): Pure white — used for service cards, content blocks, and the navigation bar.
- **Surface 2** ({colors.surface-2}): Slightly darker gray for alternating sections or subtle contrast blocks.
- **Hairline** ({colors.hairline}): 1px structural borders — medium cool gray (#cbd5e1).
- **Inverse Canvas** ({colors.inverse-canvas}): Near black (#020617) — used for the footer and high-impact "Call to Action" sections.

### Text
- **Ink** ({colors.ink}): All headlines, body type, button labels — Deep Slate #0f172a.
- **Ink Muted** ({colors.ink-muted}): Secondary type at #475569 — descriptions, meta info.
- **Inverse Ink** ({colors.inverse-ink}): White on black — footer headers, CTA banner text.

## Typography

### Font Family

- **Inter** — Fallback `ui-sans-serif, system-ui`. Carries the entire hierarchy. It provides a highly legible, neutral, and structural aesthetic.

### Hierarchy & Principles

- **Weight 800 carries top-level display.** It creates a dense, immovable visual anchor.
- **Eyebrows are ALL CAPS.** Set at 14px, weight 700, with 1.0px tracking. This creates an industrial "blueprint" feel for section labels (e.g., "OUR SERVICES", "PAST PROJECTS").
- **Line-heights relax on body.** 1.60 for body text to ensure readability for detailed service descriptions or technical specs.

## Layout & Shapes

### Elevation & Depth

Unlike SaaS, which uses soft, diffused shadows, a physical contractor UI uses **harder, darker shadows** to imply actual physical layering—like materials stacked on a job site.

### Border Radius Scale

Forget pills and circles. Concrete is poured into right angles. 
- `{rounded.xs}` (2px): Form inputs.
- `{rounded.sm}` (4px): Buttons, project imagery.
- `{rounded.md}` (6px): Large service cards.
- `{rounded.full}` is ONLY used for human faces (customer avatars in reviews).

## Components

### Buttons

**`button-primary`** — Safety Orange CTA. The lifeblood of the site.
- Background `{colors.safety-orange}`, text `{colors.on-primary}`, padding 14px 24px, rounded `{rounded.sm}`.
- Used exclusively for "Get an Estimate", "Call Now", or "Book a Consultation".

**`button-secondary`** — Deep Slate button. 
- Background `{colors.primary}`, text `{colors.on-primary}`. Used for "View Gallery" or "Learn More".

**`button-outline`** — Secondary/Tertiary actions.
- Transparent background, 2px solid Slate border. High contrast, rugged feel.

### Cards & Containers

**`service-card`** — Core offering highlight (e.g., "Driveways", "Patios", "Commercial Paving").
- Background `{colors.surface-1}`, padding 32px, rounded `{rounded.md}`.
- **Distinctive trait:** A thick 4px bottom border in `{colors.safety-orange}` anchors the card to the ground visually.

**`project-gallery-card`** — Heavy on imagery.
- Typically an image container with no padding, sharp corners, and an overlay for project titles on hover.

**`trust-badge-tile`** — Used in the "Why Choose Us" or Footer section.
- Houses logos for licensing, insurance, BBB accreditation, and home-service awards (Angi, HomeAdvisor).
- Background `{colors.surface-1}`, `{colors.hairline}` border.

**`estimate-banner`** — The high-conversion strip.
- Background `{colors.inverse-canvas}` (Near Black), text `{colors.inverse-ink}` (White). Usually paired with a heavy `{typography.display-md}` headline and a massive primary button.

### Inputs & Forms

**`text-input`** — Lead capture forms must look incredibly solid and easy to tap.
- 1px Slate border by default. Focus state jumps to a 2px `{colors.safety-orange}` border.

## Do's and Don'ts

### Do
- Lead with high-resolution photography of finished concrete jobs and crews working.
- Ensure the phone number is highly visible in the `top-nav` and `footer`.
- Use the ALL CAPS `eyebrow` typography to introduce sections (e.g., "RESIDENTIAL CONCRETE").
- Include trust signals (stars, badges, licenses) explicitly in the layout.
- Use thick, structural borders to delineate content.

### Don't
- Don't use soft, pastel colors or warm creams. Keep it gray, slate, and orange.
- Don't over-round corners. Avoid pill-shaped buttons entirely; they look too soft for construction.
- Don't hide the "Get a Quote" button—it must be the most prominent element on the screen.
- Don't use decorative, abstract illustrations. Use real photos of concrete textures, tools, and finished slabs.