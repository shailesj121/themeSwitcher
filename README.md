## Frontend Project README

### Project Name
**Theme Switch** (React + Vite + Tailwind CSS)

### Description
This is a multi-theme frontend web application built using **React**, powered by **Vite** for fast development, and styled with **Tailwind CSS**. The project demonstrates theme-based routing, reusable components, and a clean file structure ready for scalable development.

### Features
- 🔁 Theme Switching: Includes three distinct layout themes (`ThemeOne`, `ThemeTwo`, `ThemeThree`)
- ⚛️ React Component-Based Architecture
- ⚡ Vite for ultra-fast bundling and HMR
- 🎨 Tailwind CSS utility-first styling
- 📄 Page Routing for individual theme pages: Home, About, Contact
- 📦 Context API for global data handling
- 📷 Organized assets for branding and UI
- 📃 Pagination UI component
- 🔍 Product fetching mock service ready for API integration

### Getting Started

#### Prerequisites
- Node.js (v16+)
- npm or yarn

#### Installation
```bash
# unzip and enter project folder
cd frontend

# install dependencies
npm install
# or
yarn install
```

#### Run Development Server
```bash
npm run dev
# or
yarn dev
```
Visit: `http://localhost:5173`

#### Build for Production
```bash
npm run build
# or
yarn build
```

#### Preview Production Build
```bash
npm run preview
# or
yarn preview
```

### Project Structure
```text
frontend/
├── public/               # Static files
│   └── images/
├── src/
│   ├── assets/           # SVGs, logos
│   ├── components/       # UI components like Header, Pagination
│   ├── context/          # Context API (data.Context.jsx)
│   ├── pages/            # ThemeOne/Two/Three: Home, About, Contact
│   ├── routes/           # Route configs per theme
│   ├── services/         # FetchProduct.service.js (data fetching)
│   ├── themes/           # Main theme layout wrappers
│   ├── App.jsx           # Main app logic
│   └── main.jsx          # React entry point
├── index.html            # Base HTML
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS config
├── package.json          # Dependencies and scripts
```

### Scripts
- `dev` – Run development server
- `build` – Generate production build
- `preview` – Serve built app locally


---
