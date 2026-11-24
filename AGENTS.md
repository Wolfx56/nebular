# AGENTS.md

Guidance for AI coding agents working in this repository.

## Project context

This is a **fork** of [akveo/nebular](https://github.com/akveo/nebular), which appears to be no longer maintained upstream.
The upstream README says it is in "minimal maintenance", limited to Angular upgrades. Its recent history follows the pattern `feat: update angular to vN`, then `release: X.0.0`, with the major version tracking Angular (Angular 21 = 17.0.0).
The fork lives at `git@github.com:Wolfx56/nebular.git` (`origin`). Many files (package.json `repository`/`bugs`, CONTRIBUTING.md, license headers) still reference akveo — that is expected; don't "fix" them unless asked.

Nebular is an Angular UI library (currently Angular 21, version 17.0.0) published as several npm packages under `@nebular/*`. Node version: see `.nvmrc` (20.19.5, also used in CI).

## Commands

```bash
npm ci                      # postinstall also builds dev schematics (tools/dev-schematics)
npm start                   # playground app (runs gen:playground first) on :4200
npm run docs:serve          # docs site on :4100 (gulp docs prepares output.json + examples first)

npm run build:packages      # build all publishable packages into dist/ (what CI checks)
npm run build theme         # build a single library (ng build <project>)

npm test                    # ng test (karma) — default project is playground
npm run test theme -- --watch=false        # unit tests for one library
npm run test:packages       # all library tests + schematics tests, with coverage
npm run test:schematics     # ng-add schematics specs (jasmine on compiled dist)

npm run lint                # eslint src
npm run lint:styles         # stylelint framework + docs scss
npm run lint:fix            # eslint --fix / stylelint --fix / prettier --write via lint-staged
npm run e2e                 # protractor e2e against the playground (e2e/)
```

Angular CLI projects (`angular.json`): `playground`, `playground-e2e`, `docs`, `theme`, `auth`, `security`, `moment`, `date-fns`, `firebase-auth`, `eva-icons`.

Running a single spec: the reliable way is a temporary `fdescribe`/`fit` (remove it before committing). The karma builder also accepts `--include` (unverified in this repo), e.g.
`npx ng test theme --watch=false --include='src/framework/theme/components/button/**/*.spec.ts'`.

Pre-commit (husky + `.lintstagedrc.json`) runs eslint, stylelint and `prettier --check` on staged files.

CI (`.github/workflows/pr-check.yml`) builds packages (also against rxjs 7.4.0 — peer range is `^6.5.3 || ^7.4.0`), the docs, and the playground with `--configuration=production-wp`. Lint/test jobs are commented out there, so run them locally.

## Architecture

- `src/framework/<pkg>/` — one directory per npm package (`theme`, `auth`, `security`, `moment`, `date-fns`, `firebase-auth`, `eva-icons`; `bootstrap` and `icons` are legacy/unbuilt). Each has its own `package.json`, `ng-package.json`, `public_api.ts`. Inside the repo, `@nebular/*` imports resolve to `src/framework/*/public_api.ts` via `tsconfig.json` `paths`, so packages consume each other from source. `@nebular/theme` is the core; others depend on it.
- `src/framework/theme/components/<name>/` — each component typically has `*.component.ts`, `*.module.ts`, `*.spec.ts` and a `_<name>.component.theme.scss` defining a `nb-<name>-theme()` mixin. Components are still NgModule-based (`NbXModule`), with services in `theme/services` and overlay/a11y/bidi infrastructure in `components/cdk`.
- **Theming system** (`src/framework/theme/styles/`): themes (`themes/_default|dark|cosmic|corporate.scss`) define base variables; `themes/_mapping.scss` maps every component variable (e.g. `button-cursor`) to theme variables; component theme mixins read them with `nb-theme(var-name)`. Themes can be compiled to static values or to CSS custom properties (`prebuilt/*-custom-properties.scss`). Adding a component style requires:
  - declaring its variables in `_mapping.scss`,
  - registering its theme file in `styles/global/_components.scss` (and calling the mixin there),
  - registering any overrides in `styles/global/_overrides.scss`,
  - supporting RTL (`nb-ltr`/`nb-rtl` mixins) and all four built-in themes.
- `src/framework/theme/schematics/` — `ng add @nebular/theme` schematics (compiled separately via `tsconfig.schematics.json`).
- `src/playground/` — runnable examples per feature, split into `with-layout/` and `without-layout/`. Routing modules and `src/app/playground-components.ts` are **generated** by the dev schematics in `tools/dev-schematics` (`npm run gen:playground`, run automatically by `npm start`). Add example component files and regenerate rather than wiring routes by hand.
- `src/app/` — the playground shell app.
- `docs/` — documentation site (Angular app). `docs/structure.ts` defines the navigation; `docs/articles/` holds markdown. API docs are extracted from JSDoc in framework sources by the gulp `docs` task (`tools/gulp/docs`) into the gitignored `docs/output.json`, and playground files are copied into `docs/assets/examples`. JSDoc tags such as `@stacked-example(Title, button/button-showcase.component)` / `@example(...)` reference playground paths, so renaming a playground example breaks docs.
- `e2e/` — protractor specs run against the playground. `packages-smoke/` — separate app to smoke-test the built packages.
- `tools/gulp/` — docs generation, version bumping (`npm run version:bump`), schematics build. `tools/publish.sh` publishes `dist/*`.

## Conventions

- Commit messages follow Angular conventional commits (`feat(scope): ...`, `fix`, `docs`, `refactor`, `chore`, `release`…), max 100 chars per line; CHANGELOG is generated from them.
- Public API must be documented with JSDoc (it feeds the docs site) and exported from the package's `public_api.ts`.
- New features: add specs, a playground example, theme variables in the mapping, and check all themes + RTL (see CONTRIBUTING.md "New Feature Checklist").
- Source files carry the Akveo MIT license header; keep it on new files.
- Prettier config in `.prettierrc.json`; TS is `strict` but with `strictNullChecks`/`noImplicitAny` off; Angular `strictTemplates` is on.
