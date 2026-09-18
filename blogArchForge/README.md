# blogArchForge 
> Production-ready, decoupled content authoring frontend engineered with React 18, Redux Toolkit, and Tailwind CSS — architected for seamless Spring Boot REST API integration.
---

## Architecture Overview

`blogArchForge` demonstrates enterprise frontend architectural patterns designed to decouple UI components from network layers and manage complex form states without performance bottlenecks:

* **Singleton Service Layer:** Isolated data-access layer (`src/services/`) abstracting network operations away from UI components, allowing mock providers to be swapped for Spring Boot endpoints with zero component refactoring.
* **Component Encapsulation via `React.forwardRef`:** Reusable UI library (`Input`, `Select`) propagating native DOM references to consumer form libraries.
* **Uncontrolled Forms & TinyMCE Adapter:** High-performance form state managed via `react-hook-form`. Integrated rich text editing (TinyMCE) via `<Controller />` adapters to eliminate unnecessary render cascades.
* **Live Reactive Slug Generation:** Non-blocking string transformation transforming titles into URL-safe slugs in real time using `watch` and `setValue`.
* **State-Driven Route Guards:** Centralized session management using Redux Toolkit paired with an `AuthLayout` wrapper protecting private routes and handling redirect flows.

---

## 📸 Screenshots
### After Login
![Logged in](./public/Screenshot%201.png)

### Without Login
![Redirect to Login](./public/Screenshot%202.png)

### Clean Spring Boot DTO Payload
![Console Payload](./public/Screenshot%203.png)

---

##  Tech Stack

* **Core:** React 18, Vite
* **Routing:** React Router v6
* **State Management:** Redux Toolkit, React-Redux
* **Forms & Validation:** React Hook Form
* **Rich Text Editing:** TinyMCE React SDK
* **Styling:** Tailwind CSS

---

##  Project Structure

\`\`\`text
src/
├── app/
│   └── store.js              # Central Redux store configuration
├── conf/
│   └── conf.js               # Type-safe environment variable wrapper
├── features/
│   └── auth/
│       └── authSlice.js      # Global authentication state & reducers
├── services/
│   └── authService.js        # Decoupled singleton auth service
├── components/
│   ├── common/
│   │   ├── Input.jsx         # ForwardRef-enabled text input with useId
│   │   └── Select.jsx        # ForwardRef-enabled accessible dropdown
│   ├── AuthLayout.jsx        # Protected route authorization guard
│   ├── Navbar.jsx            # Dynamic navigation bar
│   ├── PostForm.jsx          # Form with reactive slug generation
│   └── RTE.jsx               # TinyMCE rich text editor bridge
├── App.jsx                   # Master application layout shell
└── main.jsx                  # Router setup and root Provider injection
\`\`\`

---

## Getting Started

### Prerequisites
* Node.js (v18+)
* npm

### Installation
1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/YOUR_USERNAME/blogArchForge.git
   cd blogArchForge
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

4. Open `http://localhost:5173` in your browser.