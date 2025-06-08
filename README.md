# Evolve Academy Website

This project contains the marketing website for the **Spoken English Master Course** offered by Evolve Academy. The site is built with [Gatsby](https://www.gatsbyjs.com/) and deployed to GitHub Pages.

## Features

- Hero section with course introduction and call to action
- Details about course benefits and schedule
- Feature list, testimonials and pricing information
- Contact information for enrolling
- Responsive layout styled with CSS Modules

## Getting Started

Install the project dependencies and start the local development server:

```bash
npm install
npm run develop
```

Your site will be available at `http://localhost:8000`.

## Building and Deployment

To generate a production build run:

```bash
npm run build
```

The generated site will be placed in the `public` directory. To deploy the site to GitHub Pages use:

```bash
npm run deploy
```

This script runs the build step and publishes the contents of `public` to the `gh-pages` branch.

## Project Structure

- `src/components` – React components used across the site
- `src/pages` – Gatsby pages
- `src/styles` – Component specific CSS modules
- `gatsby-config.js` – Configuration and plugin setup

## License

This project is licensed under the [0BSD License](LICENSE).
