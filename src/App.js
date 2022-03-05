import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accuiel from "./screens/Accuiel";
import Dashboard from "./screens/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accuiel />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
