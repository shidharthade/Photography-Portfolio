# Future Improvement Ideas

Recommendations from a review of top photography portfolio sites (Awwwards, Them Frames, Framer's gallery roundup), not yet implemented. Kept here so they don't get lost — pick any of these up whenever.

## Quick wins (low effort, no new tools)

- Replace generic "Photo 1"–"Photo 75" captions with real ones — location, one-line story, or shoot theme.
- Add prev/next arrow + keyboard navigation inside the lightbox, so visitors can browse without closing/reopening each photo.
- Put a real portrait of you in the About section (currently a placeholder box) — builds personal connection.
- Custom cursor on gallery hover (e.g. a small camera icon) — cheap CSS branding touch.

## Structural changes (more editing, worth doing)

- **Status: implemented.** Filter tabs (All / Wedding / Old Timers / Events / Motorsport) above the gallery, plus a short SEO-friendly blurb per category. Photos still need `data-category` tags as you sort them — see README "Gallery categories." (Musicians & Bands and Pilates were dropped from the category list; Cars was renamed to Old Timers.)
- Feature 2–3 standout shots as a large full-bleed hero above the gallery grid, so the strongest work gets first billing.

## Nice-to-haves (lower priority)

- Subtle hover scale/zoom on gallery tiles (simple CSS transform).
- ~~Open Graph meta tags~~ — **done**, see README "SEO" section.
- Custom domain (e.g. `photos.shidhartha.de`) instead of the `github.io` subdomain — DNS change + a `CNAME` file in the repo. Also worth doing once decided since it'd need updating in the canonical URL, sitemap, OG tags, and JSON-LD.

## SEO

**Status: baseline implemented** — see README "SEO" section for what's done (meta tags, structured data, sitemap/robots.txt, image dimensions, category blurbs) and what still needs your input (location text, descriptive alt text, Google Business Profile, Search Console).

## Branding

**Status: implemented.** Full rebrand to "shidhartha.de MEDIA" — wordmark logo, light/dark-aware favicon set, Urbanist typeface, `#D40000` accent color, and a one-time animated hero intro (SVG "camera focus-pull," respects `prefers-reduced-motion`). See README "Branding" section for the asset list and where each thing lives. Source brand kit lives outside this repo at `D:\Side Business\shidhartha-de_brand-kit`.

Note on the "deliberately not recommended" heavy-animation guidance below: the hero intro is an intentional, narrow exception — it's a single brand-defined animation that plays once on load, not an ongoing scroll/WebGL effect, and was requested as part of the brand system rather than general site embellishment.

## Deliberately not recommended

- Heavy scroll animations, WebGL/3D effects, or switching platforms (Framer, Squarespace, FORMAT) — big effort/cost for a site that already works well as free static hosting. See "Animations/Framer-style UI" discussion below if this changes.

## Animations / Framer-style UI — effort notes

- **Small** (hours): CSS transitions, hover effects, scroll-reveal via Intersection Observer. Fits the current static HTML/CSS/JS setup, no new dependencies.
- **Medium** (~a day, iterative): Adding a CDN-hosted animation library (GSAP, or a smooth-scroll lib) for scroll-triggered reveals, parallax, staggered gallery entrance. Still works on GitHub Pages, just extra `<script>` tags.
- **Large** (days–weeks, effectively a rebuild): Awwwards-style immersive/WebGL sites are usually built with a JS framework (React + Framer Motion, Three.js) and a build pipeline, often by specialized studios. Would mean moving off plain static files — worth it only if the site's ambition changes significantly.

## Contact/enquiry form → database → future cost calculator

**Status: implemented.** The Contact section now has a project-enquiry form (name, email, phone, project type, event date, location, budget range, message) that saves to a Supabase (Postgres) database — see README "Enquiry form setup" for the one-time account/table setup you still need to do. `imprint.html` has been updated to disclose this processing.

**Still to build:** the cost-calculation tool itself. It can read/write the same Supabase project (e.g. a `pricing_rules` table, or a `quotes` table linked to `enquiries`) — no migration needed since the database is already in place.
