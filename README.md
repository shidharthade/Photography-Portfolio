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

## License

All rights reserved — see `LICENSE`. Code and photos are not licensed for reuse.
