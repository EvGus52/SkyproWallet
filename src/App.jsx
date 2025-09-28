import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Login,
  Register,
  MyExpenses,
  Analytics,
  Logout,
  NotFound,
} from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<MyExpenses />} />
        <Route path="/my-expenses" element={<MyExpenses />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
