// src/services/authService.js
import conf from "../conf/conf";

export class AuthService {
  // Simulates login and stores session token
  async mockLogin({ email, name = "Fullstack Engineer" }) {
    // 1. Simulates generating a JWT token
    const fakeToken = "jwt-mock-token-" + Date.now();
    localStorage.setItem("authToken", fakeToken);

    // 2. Simulates user payload returned from backend
    const user = { email, name, role: "ROLE_ADMIN" };
    localStorage.setItem("authUser", JSON.stringify(user));
    return user;
  }

  // Clears session storage on logout
  async mockLogout() {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");
    return true;
  }

  // Reads active user session from storage
  getCurrentUser() {
    try {
      const user = localStorage.getItem("authUser");
      return user ? JSON.parse(user) : null;
    } catch (error) {
      console.error("AuthService :: getCurrentUser :: error", error);
      return null;
    }
  }
}

// Singleton Pattern: export a single initialized instance
const authService = new AuthService();
export default authService;