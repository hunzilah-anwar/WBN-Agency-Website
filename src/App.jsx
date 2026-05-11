import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages (create these files)
import Home from "./pages/Home";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import ProjectDetail from "./pages/ProjectDetail";
import ScrollToTop from "./components/ScrollToTop";
import ServicePages from "./pages/ServicePages";
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/casestudies" element={<CaseStudies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        <Route path="/services/:slug" element={<ServicePages />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
