# Personal Journal Site (Astro)

A minimalist, typography-first personal website for journaling, sharing insights, and career guidance.

## Quick start

1) Install dependencies
```bash
npm install
```

2) Run locally
```bash
npm run dev
```

3) Build for production
```bash
npm run build
npm run preview
```

## Content workflow

- Add new posts as Markdown in: `src/content/journal/`
- Each post needs frontmatter: `title`, `description`, `pubDate`, `category`, `tags` (optional), `draft` (optional)

## Important: set your canonical site URL

Update the `site` value in `astro.config.mjs` to your real domain, e.g. `https://yourname.com`.
This is used for the sitemap + RSS.

## Where things live

- Pages: `src/pages/`
- Layouts: `src/layouts/`
- Styling: `src/styles/global.css`
- Content collection config: `src/content/config.ts`
- RSS endpoint: `src/pages/rss.xml.ts`


## OpenGraph image
Replace `public/og.png` with your preferred social preview image.
