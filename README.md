# Sewixa Coming Soon

A responsive, dependency-free coming-soon landing page for Sewixa.

## Files

- `index.html` — page structure
- `styles.css` — responsive styling and illustration
- `script.js` — demo waitlist interaction
- `assets/sewixa-logo.png` — supplied Sewixa logo with transparent background

## Run locally

Open `index.html` directly in a browser, or use any static server.

For example with Python:

```bash
python3 -m http.server 8080
```

Then open:

http://localhost:8080

## Deploy to Cloudflare Pages

1. Create a GitHub repository, e.g. `sewixa-coming-soon`.
2. Push all files in this folder to the repository.
3. In Cloudflare, go to **Workers & Pages → Create application → Pages → Connect to Git**.
4. Select the repository.
5. Framework preset: **None**.
6. Build command: leave empty.
7. Build output directory: `/` (the project root).
8. Deploy.
9. In the Pages project, add your custom domain: `sewixa.com`.
10. Cloudflare will configure the DNS because the domain is already registered with Cloudflare.

## Important

The email form currently only shows a success message in the browser. It does NOT save email addresses.

When you are ready to collect real waitlist signups, connect the form to your Node.js API, Supabase, or an email marketing provider.

## Branding

The page uses the supplied Sewixa orange logo and a navy/orange visual system. Update the copy, links, and email address in `index.html` before launch.
