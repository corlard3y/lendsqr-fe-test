# Lendsqr User Dashboard – Frontend

This is a responsive frontend application built with **React**, **TypeScript**, **SCSS**, and **TanStack Table**. It's designed to mimic a simplified version of the Lendsqr Admin Dashboard UI.

---

## 🔧 Features

- **User Table View**
  Paginated and searchable table with filter options on each column.

- **User Details Page**
  Dynamic route (`/user-details/:id`) to view individual user information.

- **Tabs Component**
  Switch between sections like *General Details*, *Bank Info*, and *Documents*.

- **Tier Rating Display**
  Star-based rating system showing the user's tier visually.

- **Balance Formatting**
  Account balances are formatted with commas and Naira symbols.

- **LocalStorage Caching**
  User data is cached for the details view to minimize API requests.

- **Responsive Design**
  Mobile-friendly layout with adjusted elements for smaller screens.

---

## 🛠 Tech Stack

- React + TypeScript
- SCSS (with media queries & mixins)
- TanStack Table
- React Router v6
- React Icons

---

## 📁 Folder Structure

```
src/
├── assets/                # Icons, logos, and static images
│
├── components/            # Feature modules and all components within them
│   ├── Dashboard/         # Dashboard-related components
│   ├── Users/             # Users listing and user-specific components
│   └── ...                # Other domain-focused modules
│
├── shared/                # Reusable, app-wide UI components
│   ├── Table/             # FilterablePaginatedTable and styles
│   └── Tabs/              # Tab navigation UI
│
├── structure/             # Global layout structure and base UI
│   ├── Sidebar/           # Sidebar UI and styles
│   ├── Topbar/            # Topbar UI and styles
│   └── ...                # Other layout elements (Footer, etc.)
│
├── pages/                 # Individual page views and route-level components
│   ├── Login.tsx          # Login page
│   ├── Dashboard.tsx      # Dashboard page
│   └── UserDetails.tsx    # User details page
│
├── styles/                # Global SCSS files (e.g., mixins, media queries)
│   ├── _mixins.scss
│   ├── _media.scss
│   └── ...
│
├── constants/             # Static values, enums, nav lists, etc.
│
├── middlewares/           # Route guards and reusable logic wrappers
│
├── queries/               # React Query hooks for API calls (e.g., GetUsers)
│
├── types/                 # TypeScript interfaces and type definitions
│
├── utils/                 # Helper functions (e.g., formatCurrency)
│
├── App.tsx                # App root component and route structure
└── main.tsx               # App entry point for Vite
```
