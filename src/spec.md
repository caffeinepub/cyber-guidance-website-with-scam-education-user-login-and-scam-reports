# Specification

## Summary
**Goal:** Build a multi-page cyber guidance website in English that educates users about common scams, provides clear victim/helper steps and resources, and lets authenticated users submit scam reports that everyone can browse.

**Planned changes:**
- Create site navigation and pages/sections: Home, Scam Guidance, What to do / How to help (with Resources), Scam Reports.
- Add Scam Guidance content covering phishing, OTP/UPI fraud, fake customer care, card skimming, investment/crypto scams, job/loan scams, and social media impersonation.
- Add a checklist-style Help/Reporting guide with step-by-step actions (secure accounts, preserve evidence, contact bank, report via official channels) plus a Resources list (evidence to collect, bank contact approach, how to find official reporting channels by region) without hardcoded country numbers.
- Implement Login/Register UI using the platform-supported identity flow, including sign-in and sign-out state.
- Gate scam report submission so only signed-in users can submit; show a clear login prompt when signed out.
- Build Scam Reports feature: submit report with predefined scam type, short title, description, approximate date, optional loss amount; validate required fields with friendly errors.
- Display scam reports list for all users with filtering by scam type; show scam type, title, date reported, and a short description preview; update list after submit without full page refresh.
- Implement backend persistence (single Motoko actor) with APIs to create and list reports (optional scam-type filter), storing unique id, author identity, createdAt timestamp, and submitted fields.
- Apply a cohesive, distinctive visual theme across pages (not primarily blue/purple) with consistent typography, spacing, and styled components (nav, cards, forms, lists) with accessible contrast and focus states.

**User-visible outcome:** Users can navigate a themed cyber guidance site, learn about common scams and what to do, sign in/register, and (when signed in) submit scam incident reports that appear immediately in a filterable public list.
