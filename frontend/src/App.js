import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import AdminDashboard from "./pages/AdminDashboard";
import AdminRegisterUser from "./pages/AdminRegisterUser";
import StudentDashboard from "./pages/StudentDashboard";
import Login from "./pages/Login";
import LoginOnce from "./pages/LoginOnce";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/adminDashboard" element={<AdminDashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registeruser" element={<AdminRegisterUser />} />
            <Route path="/firstlogin" element={<LoginOnce />} />
            <Route path="/studentDashboard" element={<StudentDashboard />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
