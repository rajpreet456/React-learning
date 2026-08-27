# React Router Example

A small demo React application showing setup with React Router, Vite, and a few example pages (Home, About, Contact, User, Github). The project includes a Header and Footer component and demonstrates route loaders and nested routes.

## Features

- React with Vite (fast dev server)
- React Router v6 routes and nested layouts
- Example pages: Home, About, Contact, User (params), Github (loader)
- Local SVG assets for hero images
- Simple header and footer components


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


## 📸 Preview

![react Router Screenshot](./Screenshot%20.png)
![react Router Screenshot](./Screenshot%201.png)
