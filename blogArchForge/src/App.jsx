import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import Navbar from "./components/Navbar";
import authService from "./services/authService";
import { login, logout } from "./features/auth/authSlice";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = authService.getCurrentUser();
    if (user) {
      dispatch(login(user));
    } else {
      dispatch(logout());
    }
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col font-sans antialiased">
      <Navbar />
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-8">
        <Outlet /> 
      </main>
    </div>
  );
}