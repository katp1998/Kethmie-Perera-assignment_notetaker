import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import AdminRegisterUser from "./pages/AdminRegisterUser";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/registeruser" element={<AdminDashboard />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
