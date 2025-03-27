import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState, useEffect, createContext, useContext } from "react";
import Auth from "./pages/Auth";
import { setAuthToken } from "./services/api";
import toast, { Toaster } from "react-hot-toast";
import OwnerDashboard from "./components/OwnerDashboard";
import AdminDashboard from "./components/AdminDashboard";
import ReaderDashboard from "./components/ReaderDashboard";

export const AuthContext = createContext();

const App = () => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  // const fetchUser = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    setAuthToken(token);
  }
  // try {
  //   const userData = await getUserData();
  //   setUser(userData);
  // } catch (error) {
  //   console.error("Error fetching user data:", error);
  //   localStorage.removeItem("token");
  //   toast.error("Session expired, please log in again");
  // } finally {
  //   setLoading(false);
  // }
  //   };
  //   fetchUser();
  // }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    toast.success("Logged out successfully");
  };

  // if (loading) return <div>Loading...</div>;

  return (
    <AuthContext.Provider value={{ user, setUser, logout, role, setRole }}>
      <Toaster position="top-right" />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              user ? <Navigate to="/dashboard" /> : <Navigate to="/auth" />
            }
          />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/dashboard"
            element={
              user ? (
                user.Role === "owner" ? (
                  <OwnerDashboard />
                ) : user.Role === "Admin" ? (
                  <AdminDashboard />
                ) : (
                  <ReaderDashboard />
                )
              ) : (
                <Navigate to="/auth" />
              )
            }
          />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;

export const useAuth = () => useContext(AuthContext);
