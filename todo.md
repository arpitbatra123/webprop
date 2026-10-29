# todo

## Identity and search

Plan from 2026-09-28: make arpit.tk the clear home for the developer named Arpit Batra.

### Site metadata

- [x] Homepage title: "Arpit Batra | Documentation engineer & developer"
- [ ] Page-specific homepage description and a visible intro with the distinguishing words. Keep the H1 with the name.
  - Description: "Arpit Batra's projects and writing on documentation engineering, developer tools, accessibility and creative work."
  - Intro draft, edit to sound like me: "I'm Arpit Batra, a documentation engineer and developer in India. I build tools around docs, the web and agentic AI, and write about the work behind them. I also make travel and creative projects."
  - Description is in. Intro still to write (by me).
- [x] Unique title, description, H1 and self-canonical per page (blog, posts, projects). Posts currently reuse the generic description.
  - Done for home, blog, Best of 22 and all posts. The best-of-2022 stub post canonicals to /bestof22/. Projects pages don't exist yet.
- [x] Titles and descriptions come from front matter with site defaults as fallback, escaped for HTML attributes
- [x] Canonical from the final deployed absolute URL. Keep OG and Twitter tags in sync. Check the built `_site` HTML.
- [x] Homepage Person JSON-LD: `@id` `https://arpit.tk/#person`, `sameAs` with GitHub and LinkedIn only. Add Storyblok, Instagram and YouTube after verifying exact URLs and matching bios. Use the template engine's JSON serializer, not string interpolation, and validate it. Markup guarantees no rank.
  - GitHub, LinkedIn, Instagram and YouTube are in. Storyblok still to add.

### Discovery

- [x] `sitemap.xml` generated in Eleventy from the page collection: absolute URLs for home, blog, projects and posts. No 404, feed or duplicate redirects. `lastmod` only when content really changed. Publish the projects page before listing it.
  - Home, blog, Best of 22 and posts are in. `lastmod` is the post date, posts only. Projects goes in automatically once the page exists.
- [x] `robots.txt` (`User-agent: *`, `Allow: /`, `Sitemap: https://arpit.tk/sitemap.xml`). Check both with `curl -I` and `curl -L` on Vercel.
- [ ] Verify the domain in Search Console, submit the sitemap, inspect home, projects and case studies
- [ ] Baseline the query "Arpit Batra" (country, pages, impressions, clicks, CTR, position) and take dated SERP snapshots on desktop and mobile
- [ ] Review at 2, 6 and 12 weeks. Use the pages and queries data to fix weak titles, internal links and project content.
- [ ] Acceptance check: priority pages return 200 with a unique title, description and H1, one canonical, crawlable links and no accidental noindex. Also check duplicate-slash paths and `noindex` headers.
- [ ] Human test: someone searching my name can tell within seconds which Arpit I am and find the work I want associated with me

Don't: stuff the name into headings, buy links, or request removal of the other Arpit's results.

### Bios and profiles

- [ ] Align bios on one front-end → docs → agentic AI story. Suggested line: "documentation engineer with a front-end background, building clear developer tools and agentic ai projects."
  - https://arpit.tk/
  - https://github.com/arpitbatra123
  - https://www.linkedin.com/in/arpitbatra123
  - https://news.ycombinator.com/user?id=arpitbatra123 (still says "product engineer")
  - https://www.storyblok.com/authors/arpit-batra
- [ ] Link back to the site wherever profiles are editable. Don't add addresses, email, photos or personal details for SEO.
- [ ] Update the resume (check whether to link it from the site)

## Pages and content

- [ ] `/projects/` hub, linked from the nav
  - [ ] Google Tasks MCP server (also pin on GitHub): what it does, setup, architecture, limitations, repo
  - [ ] Eleventy template: design and accessibility choices, demo, repo
  - [ ] A docs or AI workflow that's publishable, without work-confidential details
  - [ ] Each page: concrete outcome, screenshots or code samples, dates, byline linking home. No thin posts written only to rank.
  - [ ] Link each page from its GitHub README and from a relevant author or profile page
- [ ] Small "also photography and travel" link from the homepage
- [ ] "Now" / selected-work page: current role (documentation engineer at Storyblok), MCP work (mcp-googletasks, Storyblok MCP tutorial), Eleventy template, link to writing. Short and date-stamped.
- [ ] Timeline page like [chriscoyier.net/timeline](http://chriscoyier.net/timeline/)
- [ ] Write the "rue" blog post
- [ ] Link to external articles (my writing published elsewhere), alongside the blog posts
- [ ] AI on the site: MCP, chat. Refs: https://j.cv/, https://j.cv/craft-code-art/
- [ ] Link other creative projects - lands upon, inspo etc.

## Design

- [x] Look at the A24 site for inspiration
- [x] Study typography and image caption design on [robinrendle.com](https://robinrendle.com/photos/2025/golden-gate-2/)
- [ ] Review [Mrinal's travel site](https://wowitsmrinal.github.io/travel/) for ideas for arpit.tk or lands upon: info structure and navigation, map or trip-timeline patterns, visual ideas, one idea worth testing
  - Parked: it's a travel site in its own right, so it belongs with a separate travel project, not arpit.tk.
- [x] Social links: mail, GitHub, feed, Goodreads
  - Text links. Header: Blog, GitHub, LinkedIn, Email. Footer: Instagram, YouTube, Goodreads, RSS. The homepage icon row is gone.

### Design fixes to review

Tried on 2026-09-29, then reverted for review.

- [ ] Hindi font: Satoshi has no Devanagari, so Hindi posts and titles fall back to a system font. Add Mukta (or Noto Sans Devanagari) after Satoshi in the font stack. Google Fonts' unicode-range means it only downloads on pages with Hindi.
- [ ] Post readability: body text is 16px / 1.5. Try 18px / 1.65. The mobile `max-width: 30ch` on `main` does nothing useful; use 1rem side padding instead (posts and blog list).
  - Padding fix done for posts and the blog list. Font size still to try.
- [x] Navigation: the blog list has no link home, home only reaches the blog via "Read on", and footers are empty. Add a shared nav (name → home, Blog, RSS) on blog, posts and 404.
  - The nav must line up with the text column (`max-width: calc(60ch + 2rem)` with 1rem padding). A wider nav looks off.
  - The nav's "Arpit Batra" link home is easy to miss. Consider making the footer name link home too, or adding an explicit Home link.
  - Decide whether the nav replaces the brown "Arpit Batra's Blog" line on posts.
  - Done: big name (links home) with a small centred link row under it on every page except Best of 22. The "Arpit Batra's Blog" line is gone. Add Projects once `/projects/` exists.
- [ ] Footer: reference sites (overreacted.io, paco.me, manuelmoreale.com) keep footers in the text column, with no divider, small muted text, and no repeated nav links. Something like "© 2026 Arpit Batra · RSS". Don't set font-size on the footer itself, or its `ch` width shrinks and it stops lining up. Centre it on home and 404.
- [ ] Callouts: the "old post" note (thin light bar) and blockquotes (thick black bar) clash when stacked, as on the box-sizing post. Give them one style. Grey quote text may be too faint for TLDRs.
- [ ] Consider a "← All posts" link at the end of each post.
- [x] Home: icon row is off-centre (`.links` is 200px with `justify-content: flex-end`); drop the inline `style="color:#000"` on icons.
- [ ] Home: centred four-line bio is hard to read; left-align it next to the photo on desktop.
- [ ] Links: "many things. " and "Documentation Engineer." include the trailing space and full stop inside the link. Add `text-underline-offset: 0.2em` and a thinner underline.
- [ ] Blog list: 12px grey dates are too small. Try dates on the left in tabular numbers, or group by year.
- [ ] Colours: `_variables.scss` defines three colours, but the stylesheets hard-code `#464444`, `brown`, `#6f6c66` and `#425043`. Move to CSS variables, which also makes dark mode easy.
  - Partly done: two tones, `$color-ink` (text, home icons) and `$color-muted` (dates, post header line, home caption). `brown`, `#464444` and `$color-primary` are gone. `#425043` and the other Best of 22 colours remain, still Sass variables rather than CSS custom properties.
  - Dark mode done: colours are CSS variables with a dark set, and a header switch cycles auto, light and dark (auto follows the system). Code blocks use github-light-default and github-dark-default.
- [ ] Fonts: trim Satoshi to the ~3 weights used, trim IBM Plex on Best of 22, and remove the unused Inter files in `assets/fonts`.
- [ ] Inline code has no styling.
- [ ] Dates: "Jul 10, 2020" with a comma, and ISO `datetime` on `<time>` (it currently repeats the display text).
- [ ] Structure: move the repeated `<head>` into a shared `base.liquid` layout and a shared base stylesheet.
- [ ] Fix the Sass `mixed-decls` deprecation warnings in `bestof22.scss`.

## Done

- [x] Meta tags, images
- [x] RSS feed
- [x] Favicon
