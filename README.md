# WebWixzard website

Astro static site with a free, Git-based CMS (Pages CMS), hosted free on Cloudflare Pages.

## Go live (one-time, about 20 minutes)

### 1. Put the code on GitHub
1. Create a new **empty** repository on GitHub, for example `webwixzard-site`.
2. Upload this folder to it (GitHub Desktop, or `git init && git add . && git commit -m "Initial site" && git push`).

### 2. Deploy on Cloudflare Pages
1. Sign up free at https://dash.cloudflare.com.
2. Go to **Workers & Pages → Create → Pages → Connect to Git** and pick the repository.
3. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Click **Save and Deploy**. You get a free `*.pages.dev` address. Check it looks right.

### 3. Point webwixzard.com at it (Namecheap)
1. In Cloudflare, click **Add a domain**, enter `webwixzard.com`, choose the **Free** plan.
2. Cloudflare shows two nameservers (like `ana.ns.cloudflare.com`).
3. In Namecheap: **Domain List → Manage → Nameservers → Custom DNS**, paste both, save.
4. Wait until Cloudflare says the domain is active (usually under an hour, can take up to 24).
5. In your Pages project: **Custom domains → Set up a custom domain** → add `webwixzard.com`, then also `www.webwixzard.com`.
6. SSL is issued automatically.

> Before switching nameservers, note any email records (MX) at Namecheap. Cloudflare usually imports them, but check they're there so email keeps working.

### 4. Turn on the CMS
1. Go to https://app.pagescms.org and sign in with GitHub.
2. Install the Pages CMS GitHub app on the `webwixzard-site` repository.
3. Open the repository. You'll see **Portfolio projects, Testimonials, Pricing packages, FAQs, Contact & social links**.

## Adding a portfolio project
1. Pages CMS → **Portfolio projects → Add an entry**.
2. Fill in the title, summary, live URL and platform, and upload a screenshot as the cover (16:10, around 1600×1000).
3. Keep **Published** on (and **Show on homepage** if you want it there). Lower **Display order** numbers show first.
4. Save. Cloudflare rebuilds and the project is live in about a minute.

## Run it on your computer (optional)
```
npm install
npm run dev
```
Open http://localhost:4321.

## Where things live
- `src/content/projects/` portfolio projects (one Markdown file each)
- `src/data/` testimonials, pricing, FAQs, contact details (JSON)
- `src/pages/` homepage, work index, project pages, 404
- `src/styles/global.css` all styling and brand colours
- `public/_redirects` sends old GoHighLevel URLs to the new pages
- `.pages.yml` CMS configuration
