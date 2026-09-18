import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import App from "./App.jsx";
import AuthLayout from "./components/AuthLayout.jsx";
import PostForm from "./components/PostForm.jsx";
import "./index.css";

function Home() {
  return (
    <div className="text-center py-20 space-y-4">
      <h1 className="text-4xl font-extrabold tracking-tight text-white">
        Welcome to <span className="text-indigo-500">blogArchForge</span>
      </h1>
      <p className="text-gray-400 max-w-md mx-auto">
        A decoupled, production-grade frontend architecture ready to connect with Spring Boot.
      </p>
      <Link
        to="/create-post"
        className="inline-block mt-4 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-white font-medium transition-colors"
      >
        Go to Post Studio
      </Link>
    </div>
  );
}

function LoginPage() {
  return (
    <div className="max-w-md mx-auto py-16 text-center space-y-4">
      <h2 className="text-2xl font-bold text-white">Authentication Required</h2>
      <p className="text-gray-400 text-sm">
        You were redirected here because this route is guarded. Click "Simulate Login" in the navbar above to authenticate.
      </p>
    </div>
  );
}

// Route Configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <LoginPage />
          </AuthLayout>
        ),
      },
      {
        path: "/create-post",
        element: (
          <AuthLayout authentication={true}>
            <PostForm />
          </AuthLayout>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);