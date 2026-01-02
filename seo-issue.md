## Context
The website https://strali.solutions is a React-based Single Page Application (SPA).
React SPAs require explicit SEO handling because content, routing, and metadata are often rendered client-side.

Currently, essential SEO foundation files and best practices are missing or unverified, which can:
- Reduce crawl efficiency
- Delay or prevent indexing
- Lower ranking potential
- Reduce AI discoverability (LLMs, search assistants)

This issue defines a complete SEO baseline to be implemented.

---

## Problems Identified

### 1. Missing or unreachable SEO files
- /robots.txt not reachable
- /sitemap.xml not reachable
- /llms.txt missing (optional but recommended)

### 2. Missing crawler guidance
- No sitemap reference for search engines
- No explicit crawl policy
- No AI-readable site overview

### 3. React SPA SEO risks
- Client-side rendering may delay content indexing
- Route-level meta tags may not be present or consistent
- Canonical URLs may be missing
- Duplicate content risk across routes

---

## Goals
- Ensure all major search engines can crawl and index the site correctly
- Provide explicit structure for crawlers and AI systems
- Improve SEO reliability for a React SPA
- Establish a maintainable SEO baseline for future content

---

## Required Changes

### 1. robots.txt
Create /robots.txt at the site root.

Requirements:
- Allow all user agents
- Do NOT block JS, CSS, images, or static assets
- Reference sitemap.xml
- Use valid syntax

Example:
User-agent: *
Allow: /
Sitemap: https://strali.solutions/sitemap.xml

---

### 2. sitemap.xml
Create /sitemap.xml at the site root.

Requirements:
- Valid XML format
- Absolute URLs only
- Include all public, indexable routes
- Exclude error pages, redirects, non-public URLs
- Update automatically on build or deploy

---

### 3. llms.txt
Create /llms.txt (Markdown format).

Purpose:
- Improve AI / LLM discoverability

Requirements:
- Plain Markdown
- Short description of site purpose
- List of main public URLs

---

### 4. React SPA SEO Improvements

Metadata per route:
- title
- meta description
- canonical link

Rendering:
- Ensure Googlebot can render content
- Avoid JS-only critical content

Performance:
- Do not block assets
- Keep bundle size reasonable

---

## Acceptance Criteria

SEO files:
- robots.txt reachable
- sitemap.xml reachable and valid
- llms.txt reachable
- sitemap referenced in robots.txt

React SEO:
- unique title per route
- meta description per route
- canonical URLs set

Validation:
- no crawl errors in Google Search Console
- Lighthouse SEO score >= 90

---

## Out of Scope
- Content writing
- Backlinks
- Marketing analytics

---

## References
- https://developers.google.com/search/docs
- https://searchengineland.com/guide/sitemap
- https://web.dev/lighthouse-seo/
