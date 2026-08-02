# Shidhartha De — Photography

Live at: https://shidharthade.github.io/Photography-Portfolio/

Files: `index.html`, `styles.css`, `script.js`. Gallery is wired up with 75 photos from `images/`.

## Image folders

- `images/` — web-optimized copies (max ~2000px wide, ~280KB avg) used by the live site. This is the only image folder that gets pushed to GitHub.
- `images-original/` — full camera-resolution originals, kept locally as a backup. Excluded via `.gitignore`, never pushed.

To add more photos: drop the full-res file in `images-original/`, create a resized/compressed copy in `images/` (same filename), then add a `<figure>` tile for it in the gallery grid in `index.html`.

To swap the About section photo: replace `<div class="placeholder-img about-photo"></div>` in `index.html` with an `<img>` tag pointing at a photo in `images/`.

## Update the bio text

Edit the paragraphs inside `<div class="about-text">` in `index.html` with your real bio.

## Analytics setup (one-time)

The site is wired for [GoatCounter](https://www.goatcounter.com) — free, privacy-friendly (no cookies, no GDPR consent banner needed), and it tracks both page visits and individual link/photo clicks.

1. Go to goatcounter.com → **Sign up** (just an email, no credit card). Pick a site code, e.g. `shidharthade` → your dashboard will be `https://shidharthade.goatcounter.com`.
2. Verify via the emailed magic link.
3. In `index.html`, find the line near the bottom:
   ```html
   <script data-goatcounter="https://YOURCODE.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
   ```
   Replace `YOURCODE` with the site code you picked.
4. Push. Visits start appearing in your GoatCounter dashboard within seconds.

### What's already tracked

- **Page visits** — automatic, no extra work.
- **Photo clicks** — each gallery photo fires an event named `photo-1`, `photo-2`, etc. (matches the `Photo N` caption) when clicked/opened in the lightbox.
- **Link clicks** — `contact-email`, `social-instagram`, `social-linkedin` track clicks on those respectively.

All of this shows up under the "Campaigns" / events view in the GoatCounter dashboard, alongside regular page views.

## Imprint & Privacy page (Germany/GDPR)

`imprint.html` is a German-law Impressum + Datenschutzerklärung (with a non-binding English summary), linked from the site footer. It's a **draft, not ready to publish**:

1. Open `imprint.html` and replace every `[bracketed placeholder]` — your full legal name, address, phone number, and (if applicable) VAT ID.
2. Fill in the date at "Stand: [Datum einfügen]".
3. Have it reviewed by a lawyer (Fachanwalt für IT-Recht/Datenschutzrecht) before the site goes live — an Impressum is legally required in Germany for most non-purely-private sites, and getting the details wrong (or skipping it) carries real legal risk (Abmahnung).
4. Once filled in, remove the yellow "Placeholder content" notice box at the top of the page.

It already covers hosting on GitHub Pages and the GoatCounter analytics as data processors — if you swap either of those out later, update those sections too.

## License

All rights reserved — see `LICENSE`. Code and photos are not licensed for reuse.
