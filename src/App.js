import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AsideNav from "./components/AsideNav";
import Header from "./components/Header";
import Accueil from "./screens/Accueil";
import Dashboard from "./screens/Dashboard";
import Error from "./screens/Error";

import "./App.scss";

function App() {
  return (
    <Router>
      <Header />
      <AsideNav />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
