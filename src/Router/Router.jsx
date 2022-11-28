import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Cooks from "../Pages/Cooks";
import Waiters from "../Pages/Waiters";

export default function RouterProvider() {
  return (
    <Router>
      <Routes>
        <Route path="/Waiters" element={<Waiters />} />
        <Route path="/Cooks" element={<Cooks />} />
        <Route path="*" element={<Navigate replace to="/Waiters" />} />
      </Routes>
    </Router>
  );
}