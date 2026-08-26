# React Router Example

A small demo React application showing setup with React Router, Vite, and a few example pages (Home, About, Contact, User, Github). The project includes a Header and Footer component and demonstrates route loaders and nested routes.

## Features

- React with Vite (fast dev server)
- React Router v6 routes and nested layouts
- Example pages: Home, About, Contact, User (params), Github (loader)
- Local SVG assets for hero images
- Simple header and footer components

## Prerequisites

- Node.js 16+ (or compatible LTS)
- npm or yarn

## Install

```bash
# from project root
npm install
# or
# yarn
```

## Run (development)

```bash
npm run dev
# or
# yarn dev
```

Open http://localhost:5173 in the browser (Vite default) after the dev server starts.

## Build

```bash
npm run build
# or
# yarn build
```

Preview the production build locally:

```bash
npm run preview
# or
# yarn preview
```

## Project structure (high level)

- src/
  - main.jsx — router and app bootstrap
  - App.jsx — (root app file)
  - Layout.jsx — shared layout with Header and Footer
  - components/
    - Header/
    - Footer/
    - Home/
    - About/
    - Contact/
    - Github/
    - User/
  - assets/ — local SVG and image assets

## Notes

- The Github route demonstrates using a route loader to fetch GitHub user data.
- SVG assets are stored locally in `src/assets` to avoid hotlinking issues.

## How to push this project to GitHub

1. Create a repository on GitHub (either via the website or gh CLI).
2. On your local machine, set the remote (if not already set):

```bash
# replace <repo-url> with your GitHub repo URL
git remote add origin <repo-url>
```

3. Add and commit files (including this README):

```bash
git add .
git commit -m "Add project files and README"
```

4. Push to GitHub:

```bash
# push current branch, e.g. main or master
git push -u origin HEAD
```

If your branch is named `main` or `master`, you can push that explicitly:

```bash
git push -u origin main
```

## Contributing

Contributions are welcome — open issues or submit pull requests.

## License

This project is provided under the MIT License (or choose your preferred license).