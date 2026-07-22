# Photography Portfolio — GitHub Pages Setup

Three files: `index.html`, `styles.css`, `script.js`. Placeholder gray boxes stand in for photos and bio content — swap them for the real thing whenever you're ready.

## 1. Create the repo

1. Go to github.com → **New repository**.
2. Name it `photography` (or anything you like). Public, no README/gitignore needed.

## 2. Push these files

From a folder containing these three files:

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## 3. Enable GitHub Pages

1. In the repo, go to **Settings → Pages**.
2. Under "Build and deployment", set Source to **Deploy from a branch**.
3. Branch: `main`, folder: `/ (root)`. Save.
4. Your site will be live in a minute or two at:
   `https://<your-username>.github.io/<repo-name>/`

If you want it at the repo root of your GitHub profile (`https://<your-username>.github.io`), name the repo exactly `<your-username>.github.io` instead.

## 4. Add your own photos

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

## 5. Update the bio text

Edit the paragraphs inside `<div class="about-text">` in `index.html` with your real bio.
