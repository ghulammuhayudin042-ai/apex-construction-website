# Apex Build Group — Construction Company Website

A multi-page, responsive corporate website for a construction and engineering company.
Built with **React 19 + Vite + Tailwind CSS v4 + React Router + Lucide React**.

> All company details, names, statistics, testimonials, project data and articles are **demo placeholders**.
> No real licenses, awards, certifications or statistics are claimed. Replace them before publishing.

## Quick start

```bash
npm install
npm run dev       # development server (http://localhost:5173)
npm run build     # production build into /dist
npm run preview   # serve the production build locally
npm run lint      # oxlint
npm run images    # regenerate the local placeholder illustrations
```

Requires Node.js 20+.

## Pages and routes (13 routes + 404)

| Route | Page |
|---|---|
| `/` | Home: hero, stats, about preview, services, featured projects, why choose us, industries, process, testimonials, CTA |
| `/about` | Story, mission/vision, timeline, values, leadership, workforce, capabilities, safety & quality |
| `/services` | Services directory (10), methodology, quality/safety, FAQ, CTA |
| `/services/:slug` | Service detail template (data-driven) |
| `/projects` | Portfolio grid with category, year, location filters and search |
| `/projects/:slug` | Project detail: facts, Challenge → Solution → Execution → Result, gallery, stats, related projects |
| `/industries` | Industries served plus the 8-step delivery process (`#process`) |
| `/insights` | Article cards, category filter, search, load-more |
| `/insights/:slug` | Article template with related posts |
| `/faq` | 8 required questions (accessible accordion) |
| `/contact` | Contact details, hours, map placeholder, social links, full quote form (`#quote`) |
| `/privacy`, `/terms` | Legal page templates (footer links) |
| `*` | 404 page |

## Project structure

```
src/
  components/
    layout/     Header (sticky, accessible mobile menu), Footer, Logo, Layout, ScrollToTop
    ui/         Button, Container, SectionHeading, Breadcrumb, PageHero, Accordion, Img, Icon, SocialIcon, LegalPage
    cards/      ServiceCard, ProjectCard, ArticleCard, TestimonialCard
    sections/   Hero, StatsBar, ProcessTimeline, CTABanner, FeatureGrid, IndustriesGrid
    forms/      QuoteForm, Field, FileUpload
  pages/        One file per route
  data/         site.js, services.js, projects.js, articles.js, content.js  (CMS/API-ready)
  hooks/        useDocumentTitle
  utils/        validators.js, api.js
public/images/  Local SVG illustrations (60 files) and favicon
scripts/        generate-images.mjs
```

## How to extend

- **Add a service:** add an object to `src/data/services.js`. The directory card, detail page, footer link and related-project logic update automatically (add a mapping in `ServiceDetail.jsx` → `relatedCategories` for related projects).
- **Add a project:** add `make('your-slug', {...})` to `src/data/projects.js`. Gallery images default to `/images/project-<slug>.svg`, `-2`, `-3`.
- **Add an article:** add an object to `src/data/articles.js`. Content blocks are `{ type: 'h' | 'p', text }`.
- **Edit company info, stats, navigation, hours and social links:** `src/data/site.js`.
- **Edit FAQ, process steps, industries, team, timeline, testimonials:** `src/data/content.js`.

## Images

To guarantee **no broken or hotlinked images**, all imagery is local. `npm run images` generates lightweight SVG
illustrations into `public/images/`. To use real photography, drop optimized `.jpg`/`.webp` files in the same
folder and update the `image` / `gallery` paths in the data files (keep 3:2 or 16:9 aspect ratios; compress to
roughly 150–250 KB). All images use `loading="lazy"`, explicit dimensions and descriptive `alt` text. Hero and
above-the-fold images load eagerly.

## Quote form

Fields: Full Name, Company, Email, Phone, Project Type, Project Location, Estimated Budget, Expected Start Date,
Project Description, Attachments (drag-and-drop UI), Preferred Contact Method, Consent.

- Client-side validation with inline messages on blur and on submit; required fields marked and announced to screen readers.
- Focus moves to the first invalid field on a failed submit.
- Loading, success (with reference number) and error states. The submit button is disabled while sending and a ref guard blocks duplicate submissions.
- File checks: up to 5 files, 5 MB each.
- Project type can be prefilled via `/contact?type=Residential#quote` (used by service, project and CTA links).

### Backend integration point

`src/utils/api.js` → `submitQuote(values, files)`.

1. Create `.env` with `VITE_API_URL=https://your-api.example.com`.
2. The function then sends a `multipart/form-data` `POST` to `${VITE_API_URL}/quotes` (fields + `attachments`) and expects `{ reference }`.
3. Without `VITE_API_URL` it runs in **demo mode** (1.4 s delay, fake reference). Use an email ending in `@error.test` to preview the error state.

The newsletter field in the footer is also a demo; connect it in `Footer.jsx` (`Newsletter` → `onSubmit`).

## Responsive and accessibility notes

- Tested at 320, 375, 430, 768 and 1280 px with no horizontal scrolling on any route.
- Sticky header (never covers hero content), hamburger menu with `aria-expanded`, `aria-controls`, Escape-to-close, body scroll lock and automatic close on navigation.
- Process timeline is horizontal on desktop and a vertical stepper on mobile/tablet.
- Skip link, visible focus styles, semantic landmarks, one `h1` per page, labelled controls, `prefers-reduced-motion` respected.
- Routes (except Home) are code-split with `React.lazy`.

## Verification performed

- Every route (13 page routes, all 10 service, 8 project and 8 article detail pages, plus 404) loaded in headless Chromium at **320, 375, 430, 768 and 1280 px**: no horizontal scroll, no broken images, no failed requests, no console errors, exactly one `h1` per page.
- Every internal link found in the header, footer, cards and CTAs resolves to a real page (no dead links).
- **axe-core** (WCAG 2.0/2.1 A + AA and best-practice rules) reports zero violations on a representative set of 18 routes at mobile and desktop widths.
- Interaction tests: mobile menu (open, Escape, close on navigation), active nav state, project filters/search/empty state, insights category + load-more, FAQ accordion, newsletter validation, and the full quote-form flow (required-field errors, email/phone/date/description/file validation, consent, loading, duplicate-click guard, success with reference number, error and retry states).
- `npm run build` and `npm run lint` finish with no errors or warnings.

## Acceptance checklist (from the task brief)

- [x] About 10 dedicated pages (13 routes + 404), each with detailed sections
- [x] Fully responsive; header, footer and navigation consistent on every page
- [x] No broken links or images, no console errors
- [x] Services (10) and projects (8) with directory/portfolio pages, detail templates, filters and related items
- [x] Insights with categories, search, load-more and article template; FAQ with the 8 required questions
- [x] Quote/contact flow validated with loading, success and error states and a documented API integration point
- [x] Reusable, organised components; data-driven content ready for a CMS/API
- [x] README, assumptions, placeholders and future backend points documented

## Assumptions and placeholders

- Company name "Apex Build Group", contact details, address, hours, social URLs (point to platform home pages), team members, timeline, testimonials, statistics, project names/clients/figures and articles are fictional.
- Currency in the budget field is intentionally unspecified; adjust `BUDGETS` in `QuoteForm.jsx`.
- Map is a placeholder with an "Open in Maps" link; replace with a Google Maps or Mapbox embed for the real address.
- Privacy Policy and Terms are templates and must be reviewed by a qualified professional.
- Google Fonts (Barlow Condensed, Inter) load from the Google Fonts CDN; self-host them if you need an offline or privacy-strict build.

## Future work

CMS/API for services, projects and articles (data files already mirror a typical schema), real image assets, analytics, SEO meta per route (a `useDocumentTitle` hook exists), sitemap, and server-side form handling with email notifications.
