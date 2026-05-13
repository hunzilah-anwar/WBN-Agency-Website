import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import ProjectDetail from "./pages/ProjectDetail";
import ScrollToTop from "./components/ScrollToTop";
import ServicePages from "./pages/ServicePages";

// Optional: Add a 404 Not Found page
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />

      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/casestudies" element={<CaseStudies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        
        {/* Service Routes */}
        <Route path="/services/:slug" element={<ServicePages />} />
        
        {/* Project Routes - matches your ProjectDetail component */}
        <Route path="/services/:slug/:projectSlug" element={<ProjectDetail />} />
        
        {/* Optional: Add a catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;