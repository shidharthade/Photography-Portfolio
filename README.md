# Shidhartha De — Photography

Live at: https://shidharthade.github.io/Photography-Portfolio/

Files: `index.html`, `styles.css`, `script.js`. Gray boxes are placeholders for photos and bio content — swap them for the real thing whenever ready.

## Add your own photos

In `index.html`, each gallery tile looks like:

```html
<figure class="gallery-item">
  <div class="placeholder-img"></div>
  <figcaption>Photo 01</figcaption>
</figure>
```

Replace the `<div class="placeholder-img"></div>` with:

```html
<img src="images/your-photo.jpg" alt="Description of the photo">
```

Create an `images/` folder next to `index.html`, drop your JPGs/PNGs in there, and update the `src` paths and captions. Do the same for the About section photo.

## Update the bio text

Edit the paragraphs inside `<div class="about-text">` in `index.html` with your real bio.

## License

All rights reserved — see `LICENSE`. Code and photos are not licensed for reuse.
