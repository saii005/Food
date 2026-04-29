# Food Recipe App

A React + Vite application for browsing and searching recipes by name or cuisine.

## Features

- Fetches recipe data from a public API
- Search recipes by name or cuisine
- Filter by unique cuisine types
- Add recipes to a simple cart
- View and remove cart items

## Getting Started

### Requirements

- Node.js 18+ recommended
- npm or yarn

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open the URL shown in the terminal to view the app.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` — Start Vite development server
- `npm run build` — Build the app for production
- `npm run preview` — Preview the production build locally
- `npm run lint` — Run ESLint on the project files

## Project Structure

- `src/` — React source files
- `src/App.jsx` — Main app component and recipe UI
- `src/main.jsx` — React entry point
- `public/` — Static assets

## Notes

- The app uses React 19 and Vite.
- The current implementation stores cart items in local component state.
- If you want to extend this app, consider adding cart persistence, item quantities, or a recipe details page.
