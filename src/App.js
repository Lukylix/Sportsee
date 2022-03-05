import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AsideNav from "./components/AsideNav";
import Header from "./components/Header";
import Accuiel from "./screens/Accuiel";
import Dashboard from "./screens/Dashboard";

import "./App.scss";

function App() {
  return (
    <Router>
      <Header />
      <AsideNav />
      <Routes>
        <Route path="/" element={<Accuiel />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
