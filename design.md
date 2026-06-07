---
version: alpha
name: acutely-ai-precision-portfolio
description: A dark, sharp, high-trust portfolio system for Acutely AI. The website should feel engineered, premium, and conversion-focused, using black canvas, white uppercase headlines, precise spacing, strong photographic bands, and a premium metallic gold/silver stripe. The style borrows the discipline of motorsport editorial design, but the brand, content, and imagery belong fully to Acutely AI and the service business niche.

colors:
  canvas: "#000000"
  surface-soft: "#0b0b0c"
  surface-card: "#151517"
  surface-elevated: "#222226"
  ink: "#ffffff"
  body: "#c7c7c9"
  body-strong: "#eeeeef"
  muted: "#87878c"
  hairline: "#343438"
  hairline-strong: "#4a4a50"
  accent-gold: "#d8b76a"
  accent-silver: "#e0e0e0"
  accent-dark: "#2a2a2a"
  warm-action: "#d8b76a"
  success: "#14b86a"

typography:
  display-xl:
    fontFamily: "Cabinet Grotesk, Inter, system-ui, sans-serif"
    fontSize: 84px
    fontWeight: 900
    lineHeight: 0.96
    letterSpacing: 0
  display-lg:
    fontFamily: "Cabinet Grotesk, Inter, system-ui, sans-serif"
    fontSize: 56px
    fontWeight: 900
    lineHeight: 1.02
    letterSpacing: 0
  display-md:
    fontFamily: "Cabinet Grotesk, Inter, system-ui, sans-serif"
    fontSize: 38px
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: 0
  body-md:
    fontFamily: "Manrope, Inter, system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: 0
  label-uppercase:
    fontFamily: "Manrope, Inter, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: 1.6px
  button:
    fontFamily: "Manrope, Inter, system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 800
    lineHeight: 1
    letterSpacing: 1.4px

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  full: 999px

spacing:
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 40px
  xxl: 64px
  section: 96px

components:
  top-nav:
    backgroundColor: "{colors.canvas}"
    height: 72px
    borderBottom: "1px solid {colors.hairline}"
  hero-photo-band:
    backgroundColor: "{colors.canvas}"
    imageTreatment: full-bleed dark portfolio photography
    textColor: "{colors.ink}"
  acutely-stripe:
    height: 4px
    background: "{colors.accent-gold} to {colors.accent-silver} to {colors.accent-dark}"
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.none}"
    border: "1px solid {colors.ink}"
    padding: 16px 26px
  button-outline:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    border: "1px solid {colors.hairline-strong}"
    padding: 16px 26px
  proof-cell:
    backgroundColor: "{colors.surface-soft}"
    border: "1px solid {colors.hairline}"
    rounded: "{rounded.none}"
  case-card:
    backgroundColor: "{colors.surface-card}"
    border: "1px solid {colors.hairline}"
    rounded: "{rounded.none}"
  founder-panel:
    backgroundColor: "{colors.surface-soft}"
    border: "1px solid {colors.hairline}"
    rounded: "{rounded.none}"
---

## Overview

Acutely AI should look like a serious portfolio for high-trust businesses, especially local service businesses and contractors. The page runs on a true black canvas with large white headlines, thin borders, sharp corners, and strong images. The site should feel less like a soft template and more like a focused studio that builds websites with precision.

The core design idea is simple: every section should feel engineered for trust. Big claim, clean proof, clear examples, direct call to action.

## Brand Signal

Use a premium metallic gradient stripe as the signature accent:

- Gold `#d8b76a`
- Silver `#e0e0e0`
- Dark `#2a2a2a`

This stripe is only for brand moments, section dividers, card top borders, and active states. It should not become the main button fill. Buttons stay white, black, or outline-based.

## Content Direction

Primary positioning:

> Premium service business websites built to turn visitors into quote requests.

Secondary positioning:

> Acutely AI designs sharp, trust-building websites for service businesses and founder-led brands that want a stronger online presence.

The site should make three things obvious:

1. The work is niche-aware, especially local service contractors.
2. The process is easy for non-technical business owners.
3. The free homepage preview removes risk.

## Section Order

1. Header and hero
2. Proof strip
3. Problem and positioning
4. Service website system
5. Selected portfolio directions
6. Process
7. Founder section
8. Risk-free preview CTA
9. FAQ
10. Contact and footer

## Visual Rules

Do:

- Use true black backgrounds.
- Use uppercase display headings.
- Use sharp rectangles, not rounded cards.
- Use thin hairline borders.
- Use large image bands and portfolio screenshots.
- Keep buttons rectangular and high-contrast.
- Keep copy direct, simple, and credible.

Do not:

- Use soft beige as the main accent.
- Use rounded pill buttons everywhere.
- Use decorative blobs, glows, or generic SaaS gradients.
- Add fake client claims or fake guarantees.
- Make the page feel like a template marketplace.

## Interaction Rules

The site should feel alive but not distracting:

- Portfolio cards can open a lightweight preview modal.
- FAQ rows should expand.
- Buttons should have small lift or border changes.
- Motion should be subtle and should never make text hard to read.

## Responsive Rules

Mobile should keep the same premium feel:

- Header collapses into a tight two-row layout if needed.
- Hero headline scales down but stays bold.
- Cards stack one per row.
- Large images keep stable aspect ratios.
- Buttons remain at least 44px tall.

## Final Quality Bar

The finished website should feel like Acutely AI can confidently send this to a service contractor, consultant, or local business owner and say, "This is the kind of trust-building website I can create for you."
