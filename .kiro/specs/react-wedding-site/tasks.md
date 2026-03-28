# Implementation Plan: React Wedding Site

## Overview

Rewrite the static HTML/CSS/JS wedding invitation site into a React SPA using Vite, react-parallax, and custom hooks. Tasks are ordered to build foundational pieces first (project setup, data, shared components), then section components, then hooks and wiring, and finally testing.

## Tasks

- [x] 1. Scaffold Vite + React project and configure dependencies
  - [x] 1.1 Initialize a new Vite project with the React template in the current directory
    - Run `npm create vite@latest . -- --template react` (or restructure existing files)
    - Install dependencies: `react-parallax`, `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`, `fast-check`
    - _Requirements: 1.1, 1.2_
  - [x] 1.2 Set up `index.html` with Google Fonts link and Vite entry point
    - Include Playfair Display, Cormorant Garamond, and Lato font imports
    - Reference `src/main.jsx` as the module script entry
    - _Requirements: 1.3_
  - [x] 1.3 Create `src/main.jsx` entry point and `src/App.jsx` root component shell
    - `main.jsx` renders `<App />` into `#root`
    - `App.jsx` returns an empty fragment for now
    - _Requirements: 1.5_
  - [x] 1.4 Create `src/App.css` with all existing styles adapted for React
    - Copy `style.css` content, add CSS custom properties (--gold, --dark, --cream, --text, --light-gold)
    - Import `App.css` in `App.jsx`
    - _Requirements: 1.4_
  - [x] 1.5 Configure Vitest in `vite.config.js` with jsdom environment
    - Add test configuration with `globals: true`, `environment: 'jsdom'`, setup file for `@testing-library/jest-dom`
    - Create `src/test/setup.js` importing `@testing-library/jest-dom`
    - _Requirements: 1.1_

- [x] 2. Create static data constants and shared decorative components
  - [x] 2.1 Create `src/data/constants.js` with event data, info card data, particle config, and wedding date
    - Define `EVENTS` array (6 events: Mehendi, Haldi, Cocktail, Engagement, Shaadi, Reception)
    - Define `INFO_ITEMS` array (4 items: Hashtag, Weather, Stay, Parking)
    - Define `WEDDING_DATE`, `PARTICLE_SYMBOLS`, `PARTICLE_COUNT`, `SPARKLE_COUNT`
    - _Requirements: 4.2, 7.2, 8.2, 12.1_
  - [x] 2.2 Create `src/components/DiyaLamp.jsx` — SVG oil lamp with animated flame glow
    - Accept `position` ('left' | 'right') and optional `className` props
    - Render the diya SVG with animated glow circles
    - _Requirements: 9.1, 9.5_
  - [x] 2.3 Create `src/components/TempleDivider.jsx` — full-width SVG divider
    - Accept `variant` ('light' | 'dark') prop to set background class
    - Render the temple divider SVG
    - _Requirements: 9.2, 9.3, 9.4_
  - [x] 2.4 Create `src/components/TempleBg.jsx` — temple silhouette background SVG
    - Render the temple background SVG used in Hero and Countdown sections
    - _Requirements: 2.6, 8.9_
  - [x] 2.5 Create `src/components/SideOrnament.jsx` — decorative parallax symbol
    - Accept `symbol` and `position` props
    - Use `react-parallax` for parallax movement
    - _Requirements: 3.6, 5.5, 11.3, 11.4_
  - [ ]* 2.6 Write property test for TempleDivider variant rendering
    - **Property 5: TempleDivider variant rendering**
    - **Validates: Requirements 9.4**

- [x] 3. Create card components (EventCard, InfoCard)
  - [x] 3.1 Create `src/components/EventCard.jsx`
    - Accept `name`, `date`, `venue`, `time`, `mapUrl` props
    - Render card with hover effects, "See the route →" link with `target="_blank"`
    - _Requirements: 4.3, 4.4, 4.5_
  - [ ]* 3.2 Write property test for EventCard rendering
    - **Property 1: EventCard renders all required content**
    - **Validates: Requirements 4.4, 4.5**
  - [x] 3.3 Create `src/components/InfoCard.jsx`
    - Accept `icon`, `title`, `description`, `index` props
    - Render card with bobbing icon animation using staggered delay based on index
    - _Requirements: 7.3, 7.4, 7.5_
  - [ ]* 3.4 Write property test for InfoCard rendering
    - **Property 2: InfoCard renders all required content**
    - **Validates: Requirements 7.3**

- [x] 4. Checkpoint — Verify shared components
  - Ensure all tests pass, ask the user if questions arise.

- [x] 5. Implement custom hooks
  - [x] 5.1 Create `src/hooks/useScrollReveal.js`
    - Use IntersectionObserver with threshold 0.1 and rootMargin "0px 0px -50px 0px"
    - Add `revealed` class on intersection; stagger children with 120ms delay if `stagger` option is true
    - Unobserve element after reveal
    - Gracefully degrade if IntersectionObserver is unavailable
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5_
  - [ ]* 5.2 Write property test for ScrollReveal direction mapping
    - **Property 6: ScrollReveal direction mapping**
    - **Validates: Requirements 10.3**
  - [ ]* 5.3 Write property test for ScrollReveal stagger delay calculation
    - **Property 7: ScrollReveal stagger delay calculation**
    - **Validates: Requirements 10.4**
  - [x] 5.4 Create `src/hooks/useCountdown.js`
    - Accept `targetDate` parameter, return `{ days, hours, minutes, seconds, isComplete }`
    - Update every second via `setInterval`, clear interval on unmount or when complete
    - Zero-pad all values to 2 digits; return all zeros and `isComplete: true` when past target
    - _Requirements: 8.2, 8.3, 8.4, 8.6_
  - [ ]* 5.5 Write property test for countdown computation correctness
    - **Property 3: Countdown computation correctness**
    - **Validates: Requirements 8.2**
  - [ ]* 5.6 Write property test for countdown zero-padding format
    - **Property 4: Countdown zero-padding format**
    - **Validates: Requirements 8.4**

- [x] 6. Implement particle and sparkle systems
  - [x] 6.1 Create `src/components/FloatingParticles.jsx`
    - Generate 15 particles on mount with random horizontal position, font size (8–18px), and animation duration (12–30s)
    - Render as fixed overlay with `pointer-events: none`
    - Use gold color at 40% peak opacity
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5_
  - [ ]* 6.2 Write property test for particle generation bounds
    - **Property 8: Particle generation bounds**
    - **Validates: Requirements 12.2, 12.3**
  - [x] 6.3 Create `src/components/SparkleSystem.jsx`
    - Generate 20 sparkle dots with random positions and animation durations
    - _Requirements: 8.7_

- [x] 7. Implement section components
  - [x] 7.1 Create `src/components/HeroSection.jsx`
    - Full-viewport dark background with gold grid pattern overlay
    - Animated couple names (ABHISHEK / W E D S / KANIKA), ornament line, floating symbols
    - Include DiyaLamp (left/right) and TempleBg
    - Wrap with `react-parallax` for background parallax
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 11.2_
  - [x] 7.2 Create `src/components/BlessingsSection.jsx`
    - Sanskrit text, parent names, couple names, invitation text
    - Include DiyaLamp, SideOrnament with parallax, useScrollReveal with staggered delays
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7_
  - [x] 7.3 Create `src/components/EventsSection.jsx`
    - "Celebrations" heading, grid of EventCard components from constants data
    - Dark background, DiyaLamp decorations, staggered scroll reveal on grid
    - _Requirements: 4.1, 4.2, 4.6, 4.7, 4.8_
  - [x] 7.4 Create `src/components/MeetSection.jsx`
    - "meet the" label, "Bride & Groom" heading, personal message
    - DiyaLamp, SideOrnament (✧) with parallax, scroll reveal
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6_
  - [x] 7.5 Create `src/components/RSVPSection.jsx`
    - "Please RSVP" heading, WhatsApp link button with pulse animation
    - Link opens `wa.me` URL in new tab with pre-filled message
    - Hover fills background gold, changes text to dark
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_
  - [x] 7.6 Create `src/components/InfoSection.jsx`
    - "Things to Know" heading with subtitle, grid of InfoCard components from constants
    - DiyaLamp decorations, staggered scroll reveal
    - _Requirements: 7.1, 7.2, 7.6, 7.7_
  - [x] 7.7 Create `src/components/CountdownSection.jsx`
    - "The Countdown Begins" heading, live countdown using useCountdown hook
    - Gold colon separators with blink animation
    - SparkleSystem, TempleBg, personal message paragraph
    - Wrap with `react-parallax` for background parallax
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6, 8.7, 8.8, 8.9, 11.5_
  - [x] 7.8 Create `src/components/Footer.jsx`
    - Display "© 2026 Abhishek & Kanika" with dark background and gold top border
    - _Requirements: 14.1, 14.2_

- [x] 8. Wire everything together in App.jsx
  - [x] 8.1 Assemble all section components and TempleDividers in App.jsx
    - Import and render: FloatingParticles, HeroSection, TempleDivider (light), BlessingsSection, TempleDivider (dark), EventsSection, TempleDivider (light), MeetSection, RSVPSection, TempleDivider (light), InfoSection, CountdownSection, Footer
    - _Requirements: 1.5, 9.3_
  - [x] 8.2 Verify responsive layout breakpoints work correctly
    - Ensure CSS media queries for 480px, 768px, and 1200px breakpoints are applied
    - Single column events on mobile, 2-col on tablet, 3-col on desktop; info grid 1/2/4 columns
    - _Requirements: 13.1, 13.2, 13.3, 13.4, 13.5_

- [x] 9. Final checkpoint — Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties from the design document
- Unit tests validate specific rendering and edge cases
