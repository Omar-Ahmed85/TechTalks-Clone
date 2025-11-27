# TechTalks Website - Complete Design Specification

This document contains comprehensive design information extracted from
[techtalkslb.com](https://techtalkslb.com) to help you recreate the website from
scratch.

---

## 🎨 Core Color System

Based on usage analysis, the website primarily uses these colors (in OKLCH format):

### Text Colors (Most Frequent)

-   **Almost Black**: `oklch(0.027 0 0)` - Primary text (used 323 times)
-   **White**: `oklch(1 0 0)` - Light text and backgrounds (used 159 times)
-   **Blue Accent**: `oklch(0.665 0.057 255.5)` - Links and accents (51 uses)
-   **Light Gray**: `oklch(0.672 0.008 261.3)` - Secondary text (51 uses)
-   **Primary Blue**: `oklch(0.789 0.154 211.53)` - Brand blue (33 uses)
-   **Brand Purple**: `oklch(0.714 0.203 305.504)` - Brand purple (16 uses)
-   **Cyan Accent**: `oklch(0.891 0.182 195.5)` - Highlighting (5 uses)

### Background Colors

-   **Dark Surface**: `oklch(0.13 0.005 256.8)` - Primary dark background (48 uses)
-   **Dark Overlay**: `oklch(0.21 0.003 264.7 / 0.5)` - Semi-transparent dark (8 uses)
-   **Pure Black**: `oklch(0 0 0)` - Deep backgrounds (8 uses)
-   **Transparent Black**: `oklch(0 0 0 / 0.4)` to `oklch(0 0 0 / 0.5)` - Overlays

### CSS Custom Properties

```css
:root {
	/* Text Colors */
	--text-primary: oklch(0.027 0 0);
	--text-white: oklch(1 0 0);
	--text-blue: oklch(0.665 0.057 255.5);
	--text-gray: oklch(0.672 0.008 261.3);

	/* Brand Colors */
	--brand-blue: oklch(0.789 0.154 211.53);
	--brand-purple: oklch(0.714 0.203 305.504);
	--accent-cyan: oklch(0.891 0.182 195.5);

	/* Backgrounds */
	--bg-dark: oklch(0.13 0.005 256.8);
	--bg-black: oklch(0 0 0);
	--bg-overlay: oklch(0 0 0 / 0.5);
}
```

---

## 🎭 Core Gradients

The website uses primarily **purple-to-blue gradients**. Here are the most frequent:

### Primary Brand Gradient (Used 24 times)

```css
/* Three-color brand gradient - MOST USED */
linear-gradient(
  to right,
  oklch(0.714 0.203 305.504) 0%,   /* Purple */
  oklch(0.789 0.154 211.53) 50%,    /* Blue */
  oklch(0.665 0.057 255.5) 100%     /* Blue-Purple */
)
```

### Two-Color Brand Gradient (Used 10 times)

```css
/* Purple to Blue */
linear-gradient(
  to right,
  oklch(0.714 0.203 305.504) 0%,
  oklch(0.789 0.154 211.53) 100%
)
```

### Utility Gradients (Used 5 times each)

```css
/* Transparent Purple to Blue - for overlays */
linear-gradient(
  to right bottom,
  oklch(0.714 0.203 305.504 / 0.2) 0%,
  oklch(0.789 0.154 211.53 / 0.2) 100%
)

/* Black fade - for edge masks */
linear-gradient(
  to top,
  oklch(0 0 0) 0%,
  oklch(0 0 0 / 0) 50%
)
```

---

## 📝 Typography

### Font Families

**Primary (Sans-Serif)**:

```css
font-family: ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji',
	'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
```

**Accent (Serif - for large headings)**:

```css
font-family: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif;
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

-   **Small**: `6px` - Buttons, small cards
-   **Medium**: `8px` - Default cards, inputs
-   **Large**: `12px` - Large cards, panels
-   **Extra Large**: `16px` - Feature cards
-   **Pill/Full**: `9999px` - Badges, pills

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

1. **Gradient Overlays**: Most cards and sections use gradient backgrounds or overlays
2. **Glassmorphism**: Some elements appear to have blur and transparency effects
3. **Glow Effects**: Buttons and cards have glowing hover states
4. **Card Designs**: Cards use rounded corners (8-16px) with gradient backgrounds
5. **Button Styles**: Gradient buttons with rounded corners, likely hover animations

---

## ⚡ Animations & Transitions

The website uses smooth, modern animations throughout to create an engaging user experience. Here are the key animation patterns:

### Timing Functions

**Primary Easing:**

-   `cubic-bezier(0.4, 0, 0.2, 1)` - Smooth ease-in-out (most common for general transitions)
-   `cubic-bezier(0, 0, 0.2, 1)` - Ease-out for element entrances
-   `cubic-bezier(0.4, 0, 1, 1)` - Ease-in for element exits
-   `ease-in-out` - Standard easing for simple transitions

**CSS Custom Properties:**

```css
:root {
	--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
	--ease-out: cubic-bezier(0, 0, 0.2, 1);
	--ease-in: cubic-bezier(0.4, 0, 1, 1);
}
```

### Animation Durations

-   **Fast**: `150ms` - Quick micro-interactions
-   **Medium**: `300ms` - Standard hover effects, button interactions
-   **Slow**: `500ms` - Card animations, element transitions
-   **Extra Slow**: `700ms` - Complex scroll-triggered animations

### Animation Types & Descriptions

**1. Scroll-Triggered Animations**

Elements fade in and slide up as they enter the viewport, creating a progressive disclosure effect.

-   **Effect**: Fade-in + slide-up (`opacity: 0 → 1` + `translateY(20px → 0)`)
-   **Duration**: `500-700ms`
-   **Timing Function**: `cubic-bezier(0, 0, 0.2, 1)` (ease-out)
-   **Trigger**: When element enters viewport
-   **Applies To**: Section headings, paragraphs, cards, feature blocks

```css
.fade-in-up {
	opacity: 0;
	transform: translateY(20px);
	transition: opacity 700ms cubic-bezier(0, 0, 0.2, 1), transform 700ms
			cubic-bezier(0, 0, 0.2, 1);
}

.fade-in-up.visible {
	opacity: 1;
	transform: translateY(0);
}
```

**2. Hover Animations**

Interactive elements respond to hover with subtle scale and shadow effects.

-   **Cards & Feature Blocks**:
    -   Scale up to `1.02-1.05`
    -   Box shadow intensifies with glow effect
    -   Duration: `300ms`
    -   Timing: `cubic-bezier(0.4, 0, 0.2, 1)`
-   **Buttons & CTAs**:
    -   Scale up to `1.05`
    -   Shadow/glow intensifies
    -   Gradient may shift or brighten
    -   Duration: `300ms`
    -   Timing: `cubic-bezier(0.4, 0, 0.2, 1)`
-   **Icons & Social Links**:
    -   Scale up to `1.10`
    -   Shadow enhancement
    -   Duration: `300ms`
    -   Timing: `ease-in-out`
-   **Text Links**:
    -   Smooth color transition
    -   Duration: `300ms`
    -   Timing: `cubic-bezier(0.4, 0, 0.2, 1)`

```css
.card {
	transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 300ms
			cubic-bezier(0.4, 0, 0.2, 1);
}

.card:hover {
	transform: scale(1.02);
	box-shadow: 0 20px 40px oklch(0 0 0 / 0.3);
}

.button {
	transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 300ms
			cubic-bezier(0.4, 0, 0.2, 1);
}

.button:hover {
	transform: scale(1.05);
	box-shadow: 0 10px 30px oklch(0.714 0.203 305.504 / 0.4);
}

.icon {
	transition: transform 300ms ease-in-out, box-shadow 300ms ease-in-out;
}

.icon:hover {
	transform: scale(1.1);
}

.link {
	transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

**3. Page Load Animations**

Initial page load uses staggered animations to establish visual hierarchy.

-   **Hero Section**: Fade-in + slide-up from bottom
-   **Navigation**: Slide-down from top
-   **Content Cards**: Staggered fade-in with sequential delays
-   **Stagger Delay**: `100ms` between each element

**4. Micro-Interactions**

Small, quick animations that provide tactile feedback.

-   **Button Press**: Scale down to `0.98` for `150ms`
-   **Input Focus**: Border color/glow transition in `200ms`
-   **Toggle/Switch**: Slide animation `300ms`
-   **WhatsApp FAB**: Scale-up hover effect `1.05`, `300ms` ease-in-out

### Common Transition Properties

```css
/* Smooth all-purpose transition */
.smooth {
	transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

/* Specific property transitions (better performance) */
.optimized {
	transition: transform 300ms var(--ease-smooth), opacity 300ms var(--ease-smooth),
		background-color 300ms var(--ease-smooth);
}

/* Hover glow effect */
.glow-hover {
	transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1), filter 300ms
			cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Animation Best Practices

1. **Performance**: Animate `transform` and `opacity` for best performance (GPU-accelerated)
2. **Consistency**: Use the same timing function family throughout the site
3. **Subtlety**: Keep scale changes small (1.02-1.10 max) to avoid overwhelming users
4. **Accessibility**: Respect user preferences for reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
	* {
		animation-duration: 0.01ms !important;
		transition-duration: 0.01ms !important;
	}
}
```

---

## 💡 Implementation Tips

### CSS Custom Properties Setup

```css
:root {
	/* Text Colors */
	--text-primary: oklch(0.027 0 0);
	--text-white: oklch(1 0 0);
	--text-blue: oklch(0.665 0.057 255.5);
	--text-gray: oklch(0.672 0.008 261.3);

	/* Brand Colors */
	--brand-blue: oklch(0.789 0.154 211.53);
	--brand-purple: oklch(0.714 0.203 305.504);
	--accent-cyan: oklch(0.891 0.182 195.5);

	/* Backgrounds */
	--bg-dark: oklch(0.13 0.005 256.8);
	--bg-black: oklch(0 0 0);
	--bg-overlay: oklch(0 0 0 / 0.5);

	/* Gradients */
	--gradient-brand: linear-gradient(
		to right,
		oklch(0.714 0.203 305.504),
		oklch(0.789 0.154 211.53)
	);
	--gradient-brand-triple: linear-gradient(
		to right,
		oklch(0.714 0.203 305.504) 0%,
		oklch(0.789 0.154 211.53) 50%,
		oklch(0.665 0.057 255.5) 100%
	);

	/* Border Radius */
	--radius-sm: 6px;
	--radius-md: 8px;
	--radius-lg: 12px;
	--radius-xl: 16px;
	--radius-full: 9999px;

	/* Typography */
	--font-sans: ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji',
		'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
	--font-serif: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif;

	/* Animation Timing Functions */
	--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
	--ease-out: cubic-bezier(0, 0, 0.2, 1);
	--ease-in: cubic-bezier(0.4, 0, 1, 1);

	/* Animation Durations */
	--duration-fast: 150ms;
	--duration-medium: 300ms;
	--duration-slow: 500ms;
	--duration-extra-slow: 700ms;
}
```

### Usage Example

```css
.hero-title {
	color: var(--text-white);
	background: var(--gradient-brand-triple);
	font-family: var(--font-serif);
}

.card {
	background: var(--bg-dark);
	border-radius: var(--radius-lg);
}
```

---

## 🎯 Next Steps

With this specification, you can now:

1. Set up your CSS variables/design system
2. Create reusable component classes
3. Build the HTML structure section by section
4. Apply the gradient and color schemes
5. Implement typography styles
6. Add interactions and hover effects
