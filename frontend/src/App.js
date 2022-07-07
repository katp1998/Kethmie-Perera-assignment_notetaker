import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AdminDashboard from "./pages/AdminDashboard";
import AdminRegisterUser from "./pages/AdminRegisterUser";
import Login from "./pages/Login";
import LoginOnce from "./pages/LoginOnce";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registeruser" element={<AdminRegisterUser />} />
            <Route path="/firstlogin" element={<LoginOnce />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
