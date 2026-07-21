# SnapAccounts website

Static, responsive website ready for GitHub Pages.

## Included files

- `index.html` — product website
- `privacy.html` — privacy policy
- `terms.html` — terms of use
- `support.html` — App Store support page
- `delete-account.html` — account deletion instructions
- `404.html` — fallback page
- `assets/` — styles, JavaScript and images
- `.nojekyll` — prevents GitHub Pages from processing the site with Jekyll

## Upload to GitHub

Upload **the contents of this folder**, not the outer folder itself, so that `index.html` is in the root of the repository.

Then open:

`Repository → Settings → Pages`

Choose:

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/ (root)`

Save and wait a few minutes for the public URL.

## App Store URLs

Once GitHub Pages is active, use:

- Marketing URL: `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`
- Privacy Policy URL: `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/privacy.html`
- Support URL: `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/support.html`
- Account deletion URL: `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/delete-account.html`

## Before public release

Review the legal pages with a qualified professional and update them whenever the app's data handling changes. The current wording reflects the uploaded project: Supabase authentication, Anthropic receipt analysis and expense records stored locally on the device.
