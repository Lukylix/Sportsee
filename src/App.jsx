import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ViewportProvider from "./components/ViewportProvider/ViewportProvider";
import AsideNav from "./components/AsideNav";
import Header from "./components/Header";
import Accueil from "./screens/Accueil";
import Dashboard from "./screens/Dashboard";
import Error from "./screens/Error";

import "./App.scss";

/**
 * This component represent the app as a whole.
 * It contains providers, routes and components
 * that will be present on all pages.
 * @type {React.FC}
 * @return {React.ReactElement}
 */
function App() {
  return (
    <ViewportProvider>
      <Router>
        <Header />
        <AsideNav />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/dashboard/:id" element={<Dashboard />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </Router>
    </ViewportProvider>
  );
}

export default App;
