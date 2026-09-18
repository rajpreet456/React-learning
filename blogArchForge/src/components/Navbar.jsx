import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../features/auth/authSlice";
import authService from "../services/authService";

export default function Navbar() {
  const authStatus = useSelector((state) => state.auth.status);
  const userData = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Trigger login via our decoupled service layer
  const handleMockLogin = async () => {
    const user = await authService.mockLogin({
      email: "engineer@company.com",
      name: "Rajpreet",
    });
    dispatch(login(user));
    navigate("/create-post");
  };

  // Trigger logout
  const handleMockLogout = async () => {
    await authService.mockLogout();
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="border-b border-gray-800 bg-gray-950/80 backdrop-blur sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold tracking-wider text-white">
        blog<span className="text-indigo-500">ArchForge</span>
      </Link>

      <div className="flex items-center gap-4">
        <Link to="/" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
          Home
        </Link>
        <Link to="/create-post" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
          Create Post
        </Link>

        {authStatus ? (
          <div className="flex items-center gap-3 pl-4 border-l border-gray-800">
            <span className="text-xs text-indigo-400 font-mono bg-indigo-950/60 px-2.5 py-1 rounded border border-indigo-800/50">
              {userData?.name || "Logged In"}
            </span>
            <button
              onClick={handleMockLogout}
              className="text-xs font-semibold py-1.5 px-3 bg-red-600/20 text-red-400 border border-red-800/50 rounded hover:bg-red-600 hover:text-white transition-all"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <button
            onClick={handleMockLogin}
            className="text-xs font-semibold py-1.5 px-3 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition-colors"
          >
            Simulate Login
          </button>
        )}
      </div>
    </nav>
  );
}