# CLAUDE.md — Portfolio Muh Fuad Zahran Firman

Personal portfolio website. Dual goal: win freelance clients AND get hired (recruiters).
Keep content balanced; do not focus only on freelance.

## RULE #1: THE DESIGN IS FROZEN
The owner likes the current design. Do NOT change colors, fonts, spacing, layout,
sidebar, card shapes, or components' styling. Only change CONTENT/DATA and the
minimum code needed to render it (for example a new filter list or a bilingual field).
If a change would alter how something looks, stop and ask first.

## Tech Stack
- Next.js (App Router), TypeScript, Tailwind CSS v4
- Framer Motion, @tabler/icons-react
- Fonts: Geist (headings), Plus Jakarta Sans (body) via next/font
- Planned: Supabase (Guestbook, GitHub login), Hostinger VPS (PM2 + Nginx)
- Local folder: D:\Projects\my-portfolio. The GitHub repo is PUBLIC:
  never put phone numbers, passwords, or keys in any committed file.

## How To Work
- READ files before changing them. Never guess their contents.
- Change only what is asked. Do not rewrite unrelated files.
- Never invent facts, numbers, clients, or testimonials. If data is missing, add
  `// TODO: ask owner` and leave a clearly marked placeholder.
- One file per section/component. TypeScript strict. Tailwind for styling.

## Language (bilingual, English is the MAIN language)
- Default language: English (`en`). Second language: Indonesian (`id`).
- All user-facing text in data files is stored as `{ en: string; id: string }`.
- Add a helper (for example `lib/i18n.ts`) with `t(field, lang = "en")`.
- A language toggle in the sidebar comes in a LATER step. For now components
  render `en`, but data must already contain both languages.
- Slugs and technical terms (Laravel, YOLOv8, DOI) stay in English in both.
- Indonesian text should sound natural, not machine-translated.

## Design System "Void Neutral" (dark, NO blue)
Backgrounds: main #111110, sidebar/card #161614, elevated #1A1A18, surface #1E1E1C
Borders: #222220, active #2A2A28, section divider #1A1A18
Text: primary #E8E8E4, secondary #C8C8C2, body #888884, muted #555550,
subtle #3A3A38, ghost #383836
Accent gold #C9A96E, used sparingly: "open to work" badge, quote marks, rating stars,
active timeline dot, SINTA 2 / certified badges.
Primary button: bg #E8E8E4, text #111110. Ghost button: transparent, border 0.5px #2A2A28.
Borders 0.5px, card radius 12px.

## Layout
- Fixed sidebar 220px on desktop: avatar, short name "M. Fuad Zahran" (one line),
  role, "Open to work" badge, nav (icon + text), social icons, copyright.
- Tablet: 72px icon-only sidebar. Mobile: bottom navigation bar.
- Main content is FULL WIDTH (no max-width on section wrappers). Padding px-16 desktop,
  px-5 mobile.

## Pages
- `/` Home (Hero, About teaser, Value/pillars, Skills + GitHub graph, Projects teaser,
  Testimonial, Contact)
- `/projects` list with filters, `/projects/[slug]` detail, `/about`
- `/guestbook` planned (Supabase, GitHub login only), not built yet
- Services page cancelled. Stats page undecided.
- Sidebar nav: Home, About, Projects, Guestbook, Contact.

## Positioning (from the owner's 2026 PPT portfolio)
Title: "Web Developer & System Analyst — Data & AI Integration"
Status: Open to work, 2026. Based in Makassar; open to Jakarta, Surabaya and remote.
Four pillars: Web Development (Laravel, PHP, MySQL; five live client sites),
AI Integration (YOLO + OCR via FastAPI in real systems),
Computer Vision (face recognition, DeepSORT tracking),
Data Analytics (SQL, Excel, Power BI dashboards).
Hero stats (real): 5 live client sites, 2 SINTA 2 journals, 2 corporate internships,
GPA 3.80.
Testimonials: NONE are real yet. Hide the testimonial section until real ones exist.
Do not show the old dummy testimonials.

## Personal Facts
- Muh Fuad Zahran Firman. S.Kom, Computer Engineering, Universitas Negeri Makassar,
  2026. GPA 3.80, Cum Laude.
- Certification: BNSP Program Analyst, valid until 2028.
- GitHub: github.com/fuadzhrn  LinkedIn: linkedin.com/in/fuadzahrann
- Email: fuadzahran64@gmail.com (phone: owner provides separately, not in this file)
- Core stack: Laravel, PHP, JavaScript, MySQL, REST API, Git, Python, FastAPI, YOLOv8,
  OpenCV, OCR, DeepSORT, SQL, Excel, Power BI, Figma. Python is NOT locked/learning.
  Still learning (locked icons): Next.js, Vue.js, TypeScript, AWS, Docker.

## Project Filters (replace the old filters)
All | Websites | Systems & Apps | AI & Data | Design & Docs | Research
(Indonesian: Semua | Website | Sistem & Aplikasi | AI & Data | Desain & Dokumentasi |
Riset & Jurnal.) There is no separate "Internship" or "College project" category.
Internship work is a normal project with an `organization` badge (PLN or Vale).

## Project Data (source of truth, from the owner's PPT)

### Websites
1. LUX&GO (luxandgo.co.id). Premium mobility membership platform. Real client project,
   Sep 2026, LIVE. Solo full-stack developer. Laravel, SQLite, JavaScript.
   Scope: bilingual site (ID/EN), admin CMS, SEO. Has desktop (ID) and mobile (EN) shots.
2. Four freelance client sites, all Laravel, Feb to Jul 2026, live. Handled solo end to
   end: client acquisition, requirements, UI and admin CMS build, deploy plus technical
   SEO, revisions and handover. Each is designed around the client's own brand.
   - Kalya Rentcar (Feb 2026), car rental website, kalyarentcar.com
   - OTOBIZ (Apr 2026), vehicle partnership program, otobiz.co.id
   - BIOTRA (Jun 2026), villa and apartment partnership, biotra.id
   - CarAsset (Jul 2026), productive vehicle asset platform, carassetofficial.com

### Systems & Apps
3. Multi-Branch POS System. Personal project, agricultural retail use case.
   Laravel 13, PHP 8.3, MySQL 8.4, Blade, Vanilla JS. Roles: Owner, Admin, Cashier.
   Multi-branch stock, transfers, expenses, profit reports, dashboards.
   Under the hood: transactions with row locking (sales and stock stay consistent);
   idempotent checkout token (no duplicate sales on retry); weighted average cost
   (accurate cost per branch); audit log and snapshots (history unaffected by later
   edits). Has a checkout demo video on LinkedIn (link: TODO ask owner).
   Local demo: /videos/pos-checkout-demo.mp4, poster
   /images/projects/multi-branch-pos/pos-poster.jpg.
4. PLN UID Sulselrabar internship administration system. Intern, Rural Electrification
   Division, Dec 2024 to early Feb 2025. PHP, JavaScript, Bootstrap. Primary developer in a
   3-person intern team; UI design, coding and deployment handled independently;
   digitized response-letter and certificate workflows. Interns managed: 189.
   Documents issued: "168 response letters and 74 certificates".
   Still in use today. Figures as of September 2026.
5. PT Vale Indonesia, BAJA Scholars (employee children scholarship system). Intern,
   Talent, Performance & Culture, Sep to Dec 2025 (certificate: 30 Sep to 1 Dec 2025).
   Built solo from UI design to deployment. Laravel, MySQL, Bootstrap plus a Python
   FastAPI service running YOLO and OCR. GPA check flow: upload transcript, YOLO finds
   the GPA region, OCR reads the value, rule check GPA >= 3.20. Confidence >= 50% is
   decided automatically; lower goes to manual review.

### AI & Data
6. Real-time activity monitoring (computer vision), team of 2. Owner's part: face
   recognition pipeline and activity model training. Face recognition for names,
   DeepSORT for tracking IDs, YOLOv8m/s for activity. Detects Working, Mobile Phone Use,
   Sleeping, No Activity. mAP@50 95.7%, precision 93.8%, recall 91.9%, mAP@50-95 77.3%,
   7,373-image dataset, 4 classes. YOLOv8, OpenCV, Python, DeepSORT.
7. Spatio-Temporal Hotspot Clustering. NASA FIRMS data, 1 year, Sulawesi 2023. HDBSCAN
   with Haversine distance and temporal proximity; grid search; evaluated with
   Silhouette, DBCV and noise coverage. First author, published in JUTIF 2026.
8. Shopping Trend Analysis & Recommender. 1,087 TikTok posts scraped and cleaned, mined
   with TF-IDF and cosine similarity to find trending products and price-sensitive
   demand. Python, web scraping.
9. Viral Trend Classification. 1,000 TikTok posts manually annotated against virality
   criteria. Features: TF-IDF plus LDA topics. Models: SVM and MLP compared on
   precision and recall. Python, scikit-learn.
10. Internship Monitoring Dashboard (Power BI), built at PT Vale Sep to Dec 2025.
   Uses SYNTHETIC data because Vale data is confidential (say so on the page).
   1,008 interns, 6 periods, 12 divisions, 3,581 monthly evaluations, 5 KPI cards,
   star-schema model with 6 tables. Excel, SQL, Power Query, DAX, Power BI.

### Design & Docs
11. Product & UI Design (Figma, personal practice, NOT a client project): Langkasa
    (Home, Search results, Checkout) and KuliahKu (Register, Dashboard).
12. System Design & Documentation: sitemap of the multi-branch store system (12 modules,
    3 roles) and an item-return activity diagram (4 swimlanes, decision branch for
    damaged or lost items, academic project).

### Research (both SINTA 2)
13. "Classification of Papaya Nutrition Based on Maturity with Digital Image and
    Artificial Neural Network". JITK 11(2), 2025. Co-author (3rd of 8), contributed
    dataset and analysis. DOI: https://doi.org/10.33480/jitk.v11i2.7070
14. "Spatio-Temporal Clustering of Land Fire Hotspots Using HDBSCAN with Haversine
    Distance and Temporal Proximity for Pattern Analysis in Sulawesi". JUTIF 7(5), 2026.
    First author. DOI: https://doi.org/10.52436/1.jutif.2026.7.5.5765
Be accurate: only ONE journal is first-author. Never write "2 first-author papers".

## Privacy and Permission (important)
- PLN and Vale screenshots may show real names or emails of interns. Blur them and get
  the organization's permission before publishing. Prefer synthetic or blurred shots.
- Permission from PLN and Vale to publish the screenshots: granted.
- Never publish Vale internal data. The BI dashboard must stay labeled synthetic.

## Assets
- Photo: public/images/avatar.jpg. CV: public/cv/. Project images:
  public/images/projects/<slug>/<name>.webp (folder name = project slug). Video:
  public/videos/. No image yet for viral-trend-classification and
  papaya-nutrition-classification (they keep the icon placeholder).
  Do not fetch images from the web.

## Status
Done: setup, Sidebar, Home, responsive, /projects, /about (still with DUMMY content).
Unverified: /projects/[slug] (may be empty).
Current task: replace dummy content with real data (projects first), keep design frozen.
Later: Home and About content, project detail, GitHub API, language toggle, Guestbook,
animations, SEO, deploy.

## Starting A Session
1. Read this file, then list app/, components/, data/, lib/.
2. Report what exists vs placeholder before changing anything.
