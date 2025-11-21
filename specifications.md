# TechTalks Website - Complete Design Specification

This document contains comprehensive design information extracted from
[techtalkslb.com](https://techtalkslb.com) to help you recreate the website from
scratch.

---

## 🎨 Color System

The website uses modern **OKLab** and **OKLCH** color spaces for vivid,
perceptually uniform colors. Here are the key colors organized by usage:

### Primary Brand Colors

- **Primary Blue**: `oklch(0.789 0.154 211.53)` - Main brand color
- **Primary Purple**: `oklch(0.714 0.203 305.504)` - Secondary brand color
- **Dark Blue**: `oklch(0.707 0.165 254.624)` - Tertiary brand color
- **Deep Purple**: `oklch(0.623 0.214 259.815)` - Accent color

### Accent Colors

- **Cyan**: `rgb(0, 229, 255)` - Bright accent
- **Blue**: `rgb(41, 121, 255)` - Standard blue accent
- **Pink/Magenta**: `oklch(0.718 0.202 349.761)` / `oklch(0.627 0.265 303.9)`
- **Green**: `oklch(0.792 0.209 151.711)` / `oklch(0.723 0.219 149.579)` /
  `oklch(0.795 0.184 86.047)`
- **Red/Orange**: `oklch(0.637 0.237 25.331)` / `oklch(0.705 0.213 47.604)`

### Background & Surface Colors

- **Dark Background**: `oklch(0.278 0.033 256.848)` - Main dark background
- **Darker Background**: `oklch(0.21 0.034 264.665)` - Deeper dark areas
- **Medium Gray**: `oklch(0.373 0.034 259.733)` - Secondary surfaces
- **Light Gray**: `oklch(0.707 0.022 261.325)` - Tertiary surfaces
- **Very Light**: `oklch(0.928 0.006 264.531)` / `oklch(0.967 0.003 264.542)` -
  Near-white
- **White/Light Surface**: `oklch(0.872 0.01 258.338)` - Light backgrounds

### Overlay & Transparency

- `oklab(0 0 0 / 0.3)` - 30% black overlay
- `oklab(0 0 0 / 0.4)` - 40% black overlay
- `oklab(0 0 0 / 0.5)` - 50% black overlay
- `oklab(0 0 0 / 0.7)` - 70% black overlay
- `oklab(0 0 0 / 0.8)` - 80% black overlay

---

## 🎭 Gradient System

The site makes **heavy use of gradients**. Here are the most important ones:

### Brand Gradients

```css
/* Main brand gradient (Purple → Blue) */
linear-gradient(to right, oklch(0.714 0.203 305.504) 0%, oklch(0.789 0.154 211.53) 100%)

/* Triple color brand gradient */
linear-gradient(to right, oklch(0.789 0.154 211.53) 0%, oklch(0.707 0.165 254.624) 50%, oklch(0.714 0.203 305.504) 100%)

/* Purple → Pink gradient */
linear-gradient(to right, oklch(0.627 0.265 303.9) 0%, oklch(0.715 0.143 215.221) 100%)

/* Blue → Deep Purple gradient */
linear-gradient(to right, oklch(0.715 0.143 215.221) 0%, oklch(0.623 0.214 259.815) 100%)

/* Purple-Pink duo */
linear-gradient(to right, oklch(0.627 0.265 303.9) 0%, oklch(0.656 0.241 354.308) 100%)
```

### Green Gradients

```css
linear-gradient(to right, oklch(0.723 0.219 149.579) 0%, oklch(0.627 0.194 149.214) 100%)
linear-gradient(to right, oklch(0.723 0.219 149.579) 0%, oklch(0.704 0.14 182.503) 100%)
```

### Red/Orange Gradients

```css
linear-gradient(to right, oklch(0.705 0.213 47.604) 0%, oklch(0.637 0.237 25.331) 100%)
```

### Background Gradients

```css
/* Dark background gradient */
linear-gradient(to right bottom, oklch(0.278 0.033 256.848) 0%, oklch(0.21 0.034 264.665) 100%)

/* Overlay gradients with transparency */
linear-gradient(to right bottom, oklab(0.381 0.100917 -0.144194 / 0.4) 0%, oklab(0 0 0 / 0.6) 50%, oklab(0.398 -0.0473885 -0.0515202 / 0.4) 100%)
```

### Fade Gradients (for edges/masks)

```css
/* Fade from left */
linear-gradient(to right, rgb(0, 0, 0) 0%, oklab(0 0 0 / 0.9) 50%, rgba(0, 0, 0, 0) 100%)

/* Fade from right */
linear-gradient(to left, rgb(0, 0, 0) 0%, oklab(0 0 0 / 0.9) 50%, rgba(0, 0, 0, 0) 100%)

/* Center glow effect */
linear-gradient(to right, rgba(0, 0, 0, 0) 0%, oklch(0.789 0.154 211.53) 50%, rgba(0, 0, 0, 0) 100%)
```

---

## 📝 Typography

### Font Families

**Primary (Sans-Serif)**:

```css
font-family:
    ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
```

**Accent (Serif - for large headings)**:

```css
font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
```

### Font Sizes & Weights

| Usage                | Size | Weight                |
| -------------------- | ---- | --------------------- |
| Hero Heading (Serif) | 96px | 400                   |
| Extra Large Heading  | 72px | 700                   |
| Large Heading        | 60px | 700                   |
| Section Heading      | 48px | 700                   |
| Large Subheading     | 36px | 700                   |
| Medium Heading       | 30px | 700                   |
| Small Heading        | 24px | 700 / 600 / 400       |
| Body Large           | 20px | 700 / 400             |
| Body Medium          | 18px | 700 / 600 / 400       |
| Body Default         | 16px | 700 / 600 / 500 / 400 |
| Body Small           | 14px | 600 / 500 / 400       |
| Caption              | 12px | 500 / 400             |

---

## 🔲 Border Radii

- **Small**: `6px` - Buttons, small cards
- **Medium**: `8px` - Default cards, inputs
- **Large**: `12px` - Large cards, panels
- **Extra Large**: `16px` - Feature cards
- **Pill/Full**: `9999px` (shown as `3.35544e+07px`) - Badges, pills

---

## 📐 Layout & Structure

### Page Sections Observed

Based on the screenshots, the homepage contains:

1. **Navigation Bar**
   - Logo on left
   - Navigation links in center
   - CTA button on right
   - Dark background with gradient

2. **Hero Section**
   - Large heading (96px serif font)
   - Subtitle text
   - CTA buttons
   - Gradient background effects
   - Decorative elements with glow effects

3. **Features Section**
   - Multiple feature cards in a grid
   - Each card has gradient background
   - Icons with gradient effects
   - Card hover states with glow

4. **Content Sections**
   - Various sections with different layouts
   - Mix of cards, text blocks, and visual elements
   - Consistent spacing patterns

5. **Team Section**
   - "Meet Our Team" heading
   - Team member cards with gradient backgrounds
   - Name and role text in white

6. **Footer**
   - Dark background
   - Multiple columns
   - Links and information
   - Copyright notice

---

## 🎬 Visual Effects & Components

### Common Patterns Observed

1. **Gradient Overlays**: Most cards and sections use gradient backgrounds or
   overlays
2. **Glassmorphism**: Some elements appear to have blur and transparency effects
3. **Glow Effects**: Buttons and cards have glowing hover states
4. **Card Designs**: Cards use rounded corners (8-16px) with gradient
   backgrounds
5. **Button Styles**: Gradient buttons with rounded corners, likely hover
   animations

---

## 💡 Implementation Tips

### CSS Custom Properties Setup

You should set up CSS custom properties for easy reuse:

```css
:root {
    /* Brand Colors */
    --color-primary-blue: oklch(0.789 0.154 211.53);
    --color-primary-purple: oklch(0.714 0.203 305.504);
    --color-dark-blue: oklch(0.707 0.165 254.624);
    --color-deep-purple: oklch(0.623 0.214 259.815);

    /* Backgrounds */
    --bg-dark: oklch(0.278 0.033 256.848);
    --bg-darker: oklch(0.21 0.034 264.665);

    /* Gradients */
    --gradient-brand: linear-gradient(
        to right,
        var(--color-primary-purple),
        var(--color-primary-blue)
    );
    --gradient-brand-triple: linear-gradient(
        to right,
        var(--color-primary-blue) 0%,
        var(--color-dark-blue) 50%,
        var(--color-primary-purple) 100%
    );

    /* Border Radius */
    --radius-sm: 6px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-xl: 16px;
    --radius-full: 9999px;

    /* Typography */
    --font-sans:
        ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
}
```

### Color Space Support

Modern browsers support OKLab/OKLCH, but consider fallbacks:

```css
.element {
    background: #5b21b6; /* Fallback */
    background: oklch(0.714 0.203 305.504); /* Modern */
}
```

---
