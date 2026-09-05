#  React Todo App (Context API + LocalStorage Persistence)

A feature-complete task management application built with React and Tailwind CSS. Implements global state management via the React Context API and guarantees data persistence across page reloads using browser `localStorage`.

---

##  Preview

![App Screenshot](./public/Screenshot%20.png)

---

##  Key Features

- **Full In-Memory CRUD Operations**:
  - **Create**: Add new tasks with timestamp-based unique keys.
  - **Read**: Dynamic rendering of stored todos with status badges.
  - **Update**: Inline editable inputs toggled via edit/save actions.
  - **Delete**: Instant item eviction using immutable `.filter()` arrays.
  - **Toggle Complete**: Visual status flip with task strike-through and color state shifts.
- **Persistent Storage**: Automated synchronization with `localStorage` via dual decoupled `useEffect` lifecycles (bootstrapped rehydration + dynamic persistence).
- **Controlled Component Architecture**: Isolated form and item inputs maintaining pure unidirectional data flow.
- **Zero Prop-Drilling**: State and dispatch methods exposed via custom `useTodo()` hook.

---

##  Tech Stack

- **React 18** (Vite)
- **Tailwind CSS** (Modern utility-first styling)
- **Context API** (Global state orchestration)
- **Browser LocalStorage API** (JSON serialization & persistence)

---

##  What I Learned & Implemented

1. **Immutable State Manipulation**:
   - `addTodo`: Prepending objects with spread operators `[{ id, ...todo }, ...prev]`.
   - `deleteTodo`: Utilizing array `.filter()` predicates without in-place array mutation.
   - `updateTodo` & `toggleComplete`: Employing `.map()` to generate new memory references for React's reconciliation engine.
2. **Double-Effect Storage Pipeline**:
   - Isolating rehydration (`[]` dependency on mount) from serialization (`[todos]` dependency on change) to prevent destructive initial-render race conditions.
3. **Two-Tier State Strategy**:
   - Buffering active keystrokes in local component state (`todoMsg`) before committing changes to global Context state upon clicking save.

---

##  Local Setup

```bash
# Navigate to directory
cd todoContext

# Install dependencies
npm install

# Start development server
npm run dev