# Profile migration: chanhdai.com template → your site

Use this file as **context for each Cursor / Copilot session**. Paste the **“Prompt template”** section at the bottom into a new chat, plus the **current session number** you are working on.

## How to use

1. Fill **Your profile sheet** once (keep it in a private note or the top of this file if you prefer).
2. Each session: open this file, complete one **Session N** block, turn that session’s `- [ ]` items into `- [x]`, then commit (`chore: migration session N – short description`).
3. Do **not** hand-edit `public/r/*.json` or `src/__registry__/*` — change `src/registry/**` and run `pnpm registry:build`.

---

## Your profile sheet (fill before Session 1)

Replace placeholders with your real values.

| Field                                        | Your value                                           |
| -------------------------------------------- | ---------------------------------------------------- |
| Display name                                 | nghia.ly                                             |
| Username (GitHub-style)                      | lyminhnghia                                          |
| Pronouns                                     |                                                      |
| Bio (short)                                  | I’m currently a Full-Stack Software Engineer         |
| Site URL (production)                        | https://lyminhnghia.github.io                        |
| GitHub user or org                           | lyminhnghia                                          |
| Repo name (source code link)                 | https://github.com/lyminhnghia/lyminhnghia.github.io |
| X/Twitter handle (or “none”)                 | none                                                 |
| Sponsors URL (or “none”)                     | none                                                 |
| Timezone (IANA, e.g. `Asia/Ho_Chi_Minh`)     | Asia/Ho_Chi_Minh                                     |
| Public email (for encoding)                  | physicalmeans@gmail.com                              |
| Phone E.164 (for encoding)                   | none                                                 |
| Registry namespace (e.g. `@lyminhnghia`)     | none                                                 |
| Keep Components/Blocks/Blog/Sponsors in nav? | yes                                                  |

**Base64 fields** in `user.ts`: encode email and phone the same way the template does (see comments in `src/features/portfolio/data/user.ts`).

---

## Master checklist (by area)

| Area                  | Primary files                                                                  |
| --------------------- | ------------------------------------------------------------------------------ |
| Environment           | `.env.local` from `.env.example`                                               |
| Site constants        | `src/config/site.ts`                                                           |
| Portfolio identity    | `src/features/portfolio/data/user.ts`                                          |
| Portfolio sections    | `src/features/portfolio/data/*.ts`                                             |
| PWA                   | `src/app/manifest.webmanifest`                                                 |
| Package metadata      | `package.json`                                                                 |
| shadcn CLI registries | `components.json`                                                              |
| Registry URL defaults | `src/config/registry.ts`                                                       |
| Registry source       | `src/registry/index.ts`, `src/registry/**/_registry.ts`, examples              |
| After registry edits  | `pnpm registry:build`                                                          |
| Brand UI              | `src/features/portfolio/components/brand.tsx`, `chanhdai-*.tsx`, header/footer |
| Legal / repo          | `LICENSE`, `README.md`, `PRIVACY_POLICY.md`, `.github/FUNDING.yml`             |
| Blog & docs           | `src/features/doc/content/**`                                                  |
| Optional tooling docs | `AGENTS.md`, `.agents/**`                                                      |

**Do not rename blindly:** External npm packages listed in registry `dependencies` should keep upstream package names until you remove that component.

---

## Session 1 — URLs and identity shell

**Goal:** Correct domain, GitHub links, UTM source, registry namespace, package identity.

**Status:** Done.

- [x] `.env.local`: `APP_URL`, `NEXT_PUBLIC_REGISTRY_NAMESPACE`, `NEXT_PUBLIC_REGISTRY_NAMESPACE_URL`
- [x] `src/config/site.ts`: URL fallback, `X_USERNAME`, `GITHUB_USERNAME`, `SOURCE_CODE_GITHUB_*`, `SPONSORSHIP_URL`, `UTM_PARAMS`
- [x] `components.json` → `registries` → your `{name}.json` base URL and namespace
- [x] `src/config/registry.ts` defaults aligned with above
- [x] `package.json`: `name`, `description`, `homepage`, `author`, `repository` (and `portless`/script names if they still say `ncdai` and you want them changed)
- [x] `pnpm dev` — site loads

---

## Session 2 — USER object and PWA manifest

**Goal:** All personal fields and assets for SEO/PWA.

**Status:** Done.

- [x] `src/features/portfolio/data/user.ts` — full replace (name, bio, about, jobs, flip sentences, keywords, `dateCreated`, timezone, base64 email/phone)
- [x] `avatar`, `ogImage`, `namePronunciationUrl` → your hosted assets or `public/`
- [x] `src/app/manifest.webmanifest` — name, description, icons, screenshots
- [x] Grep `src/app` for `chanhdai` / `ncdai` in `layout`, `sitemap`, `robots`, `vcard`, `og` — fix hardcoded URLs

---

## Session 3 — Portfolio data files

**Goal:** Experiences, projects, socials, etc. (split across multiple chats if needed — one subdirectory or one file per mini-session).

**Status:** Done.

- [x] `social-links.ts`
- [x] `experiences.ts`
- [x] `projects.ts`
- [x] `github-contributions.ts` (your GitHub username)
- [x] `testimonials.ts`, `awards.ts`, `certifications.ts`, `bookmarks.ts`, `tech-stack.ts`

After each major file: reload the homepage and the affected section.

---

## Session 4 — Branding components and navigation

**Goal:** Visible brand matches you; nav matches what you ship.

**Status:** Done.

- [x] `brand.tsx`, `chanhdai-mark.tsx`, `chanhdai-wordmark.tsx` (replace, rename, or swap to your logo)
- [x] `MAIN_NAV` / `MOBILE_NAV` in `src/config/site.ts` if dropping registry, blog, or sponsors

---

## Session 5 — Registry metadata (source only)

**Goal:** Author strings and docs URLs point to your site; examples use your repo/namespace.

**Status:** Done.

- [x] `src/registry/index.ts` — `name`, `homepage`
- [x] `src/registry/components/_registry.ts` — `author`, `docs`
- [x] Same for `hooks`, `blocks`, `examples`, `lib` `_registry.ts` files (`hooks` / `blocks` / `examples` have no `author`/`docs` fields; `lib` updated)
- [x] Examples: e.g. `github-stars-demo.tsx`, `code-block-command-demo.tsx` — repo and `@namespace` strings; block demos (blog covers, testimonials, haptic QR, work-experience) de-chanhdai’d
- [x] Run `pnpm registry:build` (uses `bun` in script; if `bun` missing: `npx tsx ./src/scripts/build-registry.mts && pnpm exec shadcn build ./src/__registry__/registry.autogenerated.json`)
- [x] Spot-check `public/r/registry.json` (generated; do not maintain by hand)
- [x] `src/scripts/build-registry.mts` — emit `name` / `homepage` from `registry` export (was hardcoded)

Optional later: the prose utility was renamed to `prose-site` (replaces legacy `prose-ncdai`).

---

## Session 6 — MDX content (blog / docs)

**Goal:** No stale author links or `assets.chanhdai.com` where inappropriate.

**Status:** Done.

- [x] Grep `src/features/doc/content` for `chanhdai`, `ncdai`, `assets.chanhdai.com`
- [x] Update frontmatter and in-article links/images
- [x] Remove or draft posts you do not own

---

## Session 7 — Repo hygiene and legal

**Goal:** README, license, privacy, funding match your fork.

**Status:** Done.

- [x] `README.md` — title, badges, screenshots, clone URL
- [x] `LICENSE` — copyright line (if applicable)
- [x] `PRIVACY_POLICY.md` — site name, contact, analytics
- [x] `.github/FUNDING.yml` — your username or remove
- [x] `.env.example` — comment URLs that still reference the original author

---

## Session 8 — Verification

**Goal:** Clean build and grep pass.

**Status:** Done.

- [x] `pnpm check-types && pnpm lint && pnpm build`
- [x] Ripgrep: `chanhdai`, `ncdai`, `iamncdai`, `assets.chanhdai.com` — fix or accept remaining intentional references
- [x] Production URL + OG + manifest sanity check

**Accepted / intentional leftovers:** Local `@TODO`s: mirror assets under `public/` (see `src/config/assets.ts`), optional template attribution in README/welcome, consent-manager demo embed, Oh My Zsh theme section in `awesome-terminal.mdx`.

---

## Optional: portfolio-only site

If you do not want a public component registry:

- Remove or hide Components, Blocks, Blog, Sponsors from nav early (Session 4).
- You may still run `pnpm registry:build` after Session 5 to keep the repo consistent, or deprioritize registry work entirely.

---

## Prompt template (copy into each new chat)

```text
I am migrating this Next.js repo from the original chanhdai.com template to my personal profile.

Rules:
- Do NOT edit generated files: public/r/*.json, src/__registry__/* (change src/registry and run pnpm registry:build instead).
- Keep scope to the session described below; do not refactor unrelated code.
- Reference PROFILE_MIGRATION_SESSIONS.md in the repo for full checklist.

Session to complete today: Session [N] only.

After edits: run checks you need (e.g. pnpm check-types, pnpm lint) and grep for remaining chanhdai/ncdai in the files we touched.

If something is ambiguous, ask before changing behavior (e.g. removing nav items).
```

Replace `[N]` with `1` through `8` (or say “Session 3 — only `experiences.ts`” for finer splits).

---

## One-line session labels (for commit messages)

| Session | Suggested tag                                                |
| ------- | ------------------------------------------------------------ |
| 1       | `chore: migration session 1 – site url and package identity` |
| 2       | `chore: migration session 2 – user data and manifest`        |
| 3       | `chore: migration session 3 – portfolio data`                |
| 4       | `chore: migration session 4 – brand and nav`                 |
| 5       | `chore: migration session 5 – registry source and build`     |
| 6       | `chore: migration session 6 – mdx content`                   |
| 7       | `chore: migration session 7 – readme and legal`              |
| 8       | `chore: migration session 8 – verify build and grep`         |
