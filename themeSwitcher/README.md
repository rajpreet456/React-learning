#  React Theme Switcher (Context API + Tailwind CSS)

A production-style dark/light mode toggle built with React and Tailwind CSS. Demonstrates the clean **All-In-One Context Module** pattern with zero prop-drilling.

##  Key Features

- **All-in-One Context Pattern**: Context declaration, Provider, and custom hook (`useTheme`) co-located in a single module (`ThemeContext.js`).
- **Tailwind `darkMode: "class"` Integration**: Synchronizes React state directly to the document root (`<html class="dark">`) using `useEffect`.
- **Pre-set Context Values**: Default context schema for instant autocomplete and developer ergonomics.
- **Responsive Card Component**: Custom styled card demonstrating instant variant switching (`dark:bg-gray-800`, `dark:text-white`).

##  Tech Stack

- **React 18** (Vite)
- **Tailwind CSS** (with PostCSS & Autoprefixer)
- **React Context API** & Custom Hooks (`useTheme`)

##  What I Learned

1. **Context Architecture**: Moving from the two-file separation model to the encapsulated module pattern.
2. **DOM Synchronization**: Cleaning up and applying dynamic classes (`classList.remove('light', 'dark')` -> `classList.add(themeMode)`) inside `useEffect`.
3. **Controlled Theme Toggles**: Reading and dispatching theme actions cleanly via custom consumer hooks.