import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages (create these files)
import Home from "./pages/Home";
import CaseStudies from "./pages/CaseStudies";
import Company from "./pages/Company";
import SoftwareDevelopment from "./pages/SoftwareDevelopment"
import AIDataScience from "./pages/AIDataScience"
import CloudSolutions from "./pages/CloudSolutions"
import Cybersecurity from "./pages/Cybersecurity"

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/casestudies" element={<CaseStudies />} />
        <Route path="/company" element={<Company />} />
        <Route path="/web" element={<SoftwareDevelopment />} />
        <Route path="/ai" element={<AIDataScience />} />
        <Route path="/cloud" element={<CloudSolutions />} />
        <Route path="/security" element={<Cybersecurity />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
