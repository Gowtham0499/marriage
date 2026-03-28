# Requirements Document

## Introduction

This document defines the requirements for rewriting the existing static HTML/CSS/JS wedding invitation website for "Abhishek & Kanika" as a modern React single-page application. The rewrite preserves all existing visual design, content, and interactive features while leveraging React's component architecture and third-party libraries such as `react-parallax` to enhance the visual experience. The site uses an Indian wedding theme with a gold/cream/dark color scheme, decorative SVG elements, scroll-driven animations, and responsive layouts.

## Glossary

- **App**: The root React application that renders the wedding invitation site as a single-page application
- **Hero_Section**: The full-viewport landing section displaying the couple's names, animated text, floating ornaments, diya lamp decorations, and a temple silhouette background
- **Blessings_Section**: The section displaying a Sanskrit invocation, parent names, couple names, and invitation text
- **Events_Section**: The section displaying a grid of wedding event cards with event details and map links
- **Meet_Section**: The section introducing the bride and groom with a personal message
- **RSVP_Section**: The section containing a WhatsApp call-to-action link for guests to confirm attendance
- **Info_Section**: The section displaying informational cards about hashtag, weather, stay, and parking
- **Countdown_Section**: The section displaying a live countdown timer to the wedding date with sparkle effects
- **Footer_Component**: The footer displaying copyright information
- **Temple_Divider**: A decorative SVG divider rendered between sections to visually separate content
- **Diya_Lamp**: An SVG-based decorative oil lamp element with animated flame glow effects
- **Floating_Particles**: A system of animated symbolic characters that drift upward across the viewport
- **Sparkle_System**: A system of small animated dots that rise within the Countdown_Section
- **Scroll_Reveal**: An animation system that reveals elements as they enter the viewport during scrolling
- **Event_Card**: A card component displaying a single wedding event's name, date, venue, time, and a Google Maps link
- **Info_Card**: A card component displaying a single informational item with an icon, title, and description
- **Parallax_Effect**: A visual effect where background or decorative elements move at a different rate than the foreground during scrolling, implemented using the `react-parallax` library
- **Side_Ornament**: Decorative text symbols positioned on the sides of sections with parallax movement


## Requirements

### Requirement 1: React Application Setup

**User Story:** As a developer, I want the wedding site scaffolded as a React application with Vite, so that I can leverage component-based architecture and modern tooling.

#### Acceptance Criteria

1. THE App SHALL be bootstrapped using Vite with the React template
2. THE App SHALL include `react-parallax` as a project dependency for parallax visual effects
3. THE App SHALL load Google Fonts (Playfair Display, Cormorant Garamond, Lato) for typography
4. THE App SHALL define CSS custom properties for the color scheme: `--gold` (#c9a96e), `--dark` (#1a1a1a), `--cream` (#faf7f2), `--text` (#333), `--light-gold` (#e8d5a8)
5. THE App SHALL render as a single-page application with all sections in a single scrollable view

### Requirement 2: Hero Section

**User Story:** As a guest, I want to see an elegant animated landing section with the couple's names, so that I feel the grandeur of the wedding invitation.

#### Acceptance Criteria

1. THE Hero_Section SHALL display "ABHISHEK", "W E D S", and "KANIKA" as animated text that fades in with upward motion and blur removal on initial page load
2. THE Hero_Section SHALL display a horizontal gold ornament line with a centered "✦" symbol below the couple's names
3. THE Hero_Section SHALL render a full-width dark background with a subtle gold grid pattern overlay
4. THE Hero_Section SHALL render four floating ornament symbols (✦, ❋, ✧, ❊) that animate with a continuous drifting motion
5. THE Hero_Section SHALL render two Diya_Lamp SVG decorations positioned on the left and right sides with animated flame glow
6. THE Hero_Section SHALL render a Temple silhouette SVG at the bottom of the section at low opacity
7. THE Hero_Section SHALL occupy the full viewport height

### Requirement 3: Blessings Section

**User Story:** As a guest, I want to see the formal wedding invitation with blessings, parent names, and couple names, so that I understand the families involved and the tone of the celebration.

#### Acceptance Criteria

1. THE Blessings_Section SHALL display the Sanskrit text "ॐ श्री गणेशाय नमः" in gold lettering
2. THE Blessings_Section SHALL display the names of both sets of parents with a decorative divider between them
3. THE Blessings_Section SHALL display the couple's names "Abhishek & Kanika" in a large serif font
4. THE Blessings_Section SHALL display the bride's parents' names below the couple's names
5. THE Blessings_Section SHALL render Diya_Lamp decorations on both sides of the section
6. THE Blessings_Section SHALL render Side_Ornament symbols with Parallax_Effect using `react-parallax`
7. THE Blessings_Section SHALL apply Scroll_Reveal animations to each text element with staggered delays


### Requirement 4: Events Section

**User Story:** As a guest, I want to see all wedding events with their dates, venues, times, and map links, so that I can plan my attendance for each celebration.

#### Acceptance Criteria

1. THE Events_Section SHALL display a "Celebrations" heading in gold uppercase lettering
2. THE Events_Section SHALL render a responsive grid of six Event_Card components for: Mehendi, Haldi, Cocktail, Engagement, Shaadi, and Reception
3. WHEN a guest hovers over an Event_Card, THE Event_Card SHALL translate upward by 6 pixels and display a gold border with a subtle gold box shadow
4. THE Event_Card SHALL display the event name, date, venue, and time
5. THE Event_Card SHALL include a "See the route →" link that opens the Google Maps location in a new browser tab
6. THE Events_Section SHALL use a dark background with light text to contrast with adjacent cream-colored sections
7. THE Events_Section SHALL render Diya_Lamp decorations on both sides
8. THE Events_Section SHALL apply staggered Scroll_Reveal animations to Event_Card components with a 120ms delay between each card

### Requirement 5: Meet the Bride & Groom Section

**User Story:** As a guest, I want to read a personal message from the couple, so that I feel a personal connection to the celebration.

#### Acceptance Criteria

1. THE Meet_Section SHALL display a "meet the" label in lowercase gold lettering above the heading
2. THE Meet_Section SHALL display a "Bride & Groom" heading in a large serif font
3. THE Meet_Section SHALL display a personal message paragraph from the couple
4. THE Meet_Section SHALL render Diya_Lamp decorations on both sides
5. THE Meet_Section SHALL render Side_Ornament symbols (✧) with Parallax_Effect using `react-parallax`
6. THE Meet_Section SHALL apply Scroll_Reveal animations to each text element with staggered delays

### Requirement 6: RSVP Section

**User Story:** As a guest, I want a clear call-to-action to RSVP via WhatsApp, so that I can easily confirm my attendance.

#### Acceptance Criteria

1. THE RSVP_Section SHALL display a "Please RSVP" heading in gold lettering
2. THE RSVP_Section SHALL render a WhatsApp link button with a gold border and uppercase text
3. WHEN a guest clicks the WhatsApp link, THE RSVP_Section SHALL open WhatsApp with a pre-filled message in a new browser tab
4. THE RSVP_Section SHALL apply a continuous pulsing box-shadow animation to the WhatsApp link button
5. WHEN a guest hovers over the WhatsApp link button, THE RSVP_Section SHALL fill the button background with gold and change the text color to dark

### Requirement 7: Things to Know Section

**User Story:** As a guest, I want to see practical information about the wedding (hashtag, weather, stay, parking), so that I can prepare for the event.

#### Acceptance Criteria

1. THE Info_Section SHALL display a "Things to Know" heading with a descriptive subtitle
2. THE Info_Section SHALL render four Info_Card components for: Hashtag (#abkan), Weather (28°C), Stay (hotel recommendation), and Parking (valet parking)
3. THE Info_Card SHALL display an icon, a title, and a description paragraph
4. THE Info_Card SHALL apply a continuous bobbing animation to the icon with staggered delays across cards
5. WHEN a guest hovers over an Info_Card, THE Info_Card SHALL translate upward by 5 pixels
6. THE Info_Section SHALL render Diya_Lamp decorations on both sides
7. THE Info_Section SHALL apply staggered Scroll_Reveal animations to Info_Card components


### Requirement 8: Countdown Timer

**User Story:** As a guest, I want to see a live countdown to the wedding date, so that I feel the excitement building toward the celebration.

#### Acceptance Criteria

1. THE Countdown_Section SHALL display a "The Countdown Begins" heading in gold lettering
2. THE Countdown_Section SHALL display a live countdown showing days, hours, minutes, and seconds until March 12, 2026 at 6:00 PM IST
3. THE Countdown_Section SHALL update the countdown display every second
4. THE Countdown_Section SHALL format each time unit as a two-digit zero-padded number separated by gold colon separators
5. THE Countdown_Section SHALL apply a blinking animation to the colon separators
6. WHEN the wedding date has passed, THE Countdown_Section SHALL display "00:00:00:00" and stop updating
7. THE Countdown_Section SHALL render a Sparkle_System of 20 animated dots that rise from the bottom of the section
8. THE Countdown_Section SHALL display a personal message paragraph below the countdown
9. THE Countdown_Section SHALL render a Temple silhouette SVG at low opacity as a background element

### Requirement 9: Decorative SVG Elements

**User Story:** As a developer, I want reusable SVG-based decorative components, so that the Indian wedding theme is consistently applied across all sections.

#### Acceptance Criteria

1. THE Diya_Lamp SHALL render an SVG oil lamp with a base, body, wick, and flame with concentric animated glow circles
2. THE Temple_Divider SHALL render a full-width SVG silhouette with a central temple spire and two smaller side towers
3. THE App SHALL render Temple_Divider components between sections to visually separate content areas
4. THE Temple_Divider SHALL support both cream and dark background variants via a prop
5. THE Diya_Lamp SHALL apply a continuous flame flicker animation alternating between two opacity levels with a drop-shadow glow

### Requirement 10: Scroll Reveal Animation System

**User Story:** As a guest, I want content to animate into view as I scroll, so that the browsing experience feels dynamic and engaging.

#### Acceptance Criteria

1. THE Scroll_Reveal SHALL detect when elements enter the viewport using an IntersectionObserver with a 0.1 threshold and a -50px bottom root margin
2. WHEN an element enters the viewport, THE Scroll_Reveal SHALL transition the element from hidden to visible using opacity and transform animations over 800ms with a cubic-bezier(0.22, 1, 0.36, 1) easing
3. THE Scroll_Reveal SHALL support four reveal directions: "up" (translateY 40px), "left" (translateX -60px), "right" (translateX 60px), and "scale" (scale 0.85)
4. WHEN a container with staggered children enters the viewport, THE Scroll_Reveal SHALL apply a 120ms incremental delay to each child element
5. THE Scroll_Reveal SHALL unobserve each element after the element has been revealed to avoid repeated animations

### Requirement 11: Parallax Effects with react-parallax

**User Story:** As a guest, I want decorative elements to move at different speeds during scrolling, so that the site feels immersive and layered.

#### Acceptance Criteria

1. THE App SHALL use the `react-parallax` library to apply parallax scrolling effects to section backgrounds
2. THE Hero_Section SHALL use `react-parallax` to create a parallax effect on the dark gradient background
3. THE Blessings_Section SHALL use `react-parallax` to apply parallax movement to the Side_Ornament symbols
4. THE Meet_Section SHALL use `react-parallax` to apply parallax movement to the Side_Ornament symbols
5. THE Countdown_Section SHALL use `react-parallax` to create a parallax effect on the dark gradient background


### Requirement 12: Floating Particles System

**User Story:** As a guest, I want to see subtle floating symbols drifting across the screen, so that the site feels alive and festive.

#### Acceptance Criteria

1. THE Floating_Particles SHALL render 15 particle elements using the symbols ✦, ✧, ❋, ❊, ·, and ⋆
2. THE Floating_Particles SHALL position each particle at a random horizontal position with a random font size between 8px and 18px
3. THE Floating_Particles SHALL animate each particle upward from the bottom of the viewport to above the top with a random duration between 12 and 30 seconds
4. THE Floating_Particles SHALL render as a fixed-position overlay with pointer-events disabled so the particles do not interfere with user interaction
5. THE Floating_Particles SHALL display particles in the gold color at 40% peak opacity

### Requirement 13: Responsive Layout

**User Story:** As a guest, I want the wedding site to look correct on mobile phones, tablets, and desktop screens, so that I can view the invitation on any device.

#### Acceptance Criteria

1. WHILE the viewport width is 480px or less, THE App SHALL display the events grid in a single column, hide floating hero ornaments, hide section diya decorations, hide side ornaments, and reduce section padding
2. WHILE the viewport width is between 481px and 768px, THE App SHALL display the events grid in two columns and the info grid in two columns
3. WHILE the viewport width is 1200px or more, THE App SHALL display the events grid in three columns and the info grid in four columns
4. THE App SHALL use CSS `clamp()` for font sizes on headings and the couple's names to scale fluidly between breakpoints
5. THE App SHALL use responsive sizing via `clamp()` for Diya_Lamp widths to scale between mobile and desktop sizes

### Requirement 14: Footer

**User Story:** As a guest, I want to see a simple footer with copyright information, so that the page has a clean ending.

#### Acceptance Criteria

1. THE Footer_Component SHALL display the text "© 2026 Abhishek & Kanika"
2. THE Footer_Component SHALL render with a dark background, a subtle gold top border, and muted text color