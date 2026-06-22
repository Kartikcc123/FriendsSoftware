# Friends Software Website

A React + Vite marketing website for Friends Software, covering services, industries, insights, company information, careers, and contact-focused conversion flows.

## Overview

This project is a multi-page business website built with:

- `React`
- `Vite`
- `React Router`
- `Framer Motion`
- `Lucide React`
- `Redux Toolkit` for theme state

The site includes:

- Homepage with industry, services, values, and CTA sections
- Services page with accordion-based service details
- Industry landing page plus dedicated industry pages
- Insights landing page and individual category pages
- Company page
- Careers page
- Clients page
- Contact page
- Floating WhatsApp and direct call buttons

## Routes

Main routes currently available:

- `/`
- `/services`
- `/industries`
- `/industries/education`
- `/industries/financial-services`
- `/industries/healthcare`
- `/industries/insurance-insurtech`
- `/industries/legaltech`
- `/industries/manufacturing`
- `/industries/retail`
- `/industries/transportation-logistics`
- `/insights`
- `/insights/blogs`
- `/insights/podcasts`
- `/insights/forum`
- `/insights/videos`
- `/insights/webinars`
- `/insights/white-papers`
- `/company`
- `/careers`
- `/clients`
- `/contact`

## Project Structure

Key folders:

- `src/components/layout`
  Shared layout components such as navbar, footer, floating contact actions, and particles background.

- `src/pages`
  Top-level routed pages such as Home, Services, Insights, Company, Careers, Clients, and Contact.

- `src/pages/industries`
  Individual industry pages.

- `src/pages/insights`
  Shared insights category page and category data.

- `public`
  Static assets such as logos and page images.

## Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Scripts

- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run lint`

## Branding and Contact

Current branded contact actions include:

- Direct call: `9116901749`
- WhatsApp: `919116901749`
- Facebook: `https://www.facebook.com/profile.php?id=61591406033261`
- LinkedIn: `https://www.linkedin.com/company/friends-software/?viewAsMember=true`
- Instagram: `https://www.instagram.com/friendsoftwaresin/`

## Notes

- Some pages are already fully designed, while a few industry pages may still need richer content to match the strongest sections of the site.
- The current production build shows a Vite chunk-size warning. This does not block the build, but code-splitting would be a good future improvement.
