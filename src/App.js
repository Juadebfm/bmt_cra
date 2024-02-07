import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Hcomp/Navbar";
import Footer from "./components/Hcomp/Footer";
import Donation from "./pages/Donation";
import Education from "./pages/Education";
import FAQ from "./pages/FAQ";
import Research from "./pages/Research";
import Services from "./pages/Services";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Aboutpage from './pages/Aboutpage';
import WhatToExpect from "./components/Lcomp/WhatToExpect";
import NewsDetails from './pages/news/[id]/NewsDetails';

export default function App() {
  return (
    <div className="overflow-x-hidden w-full text-base font-Lexend scroll_snap scrollbar-thin scrollbar-thumb-primary_dark scrollbar-track-primary_faded_grey/50">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutpage/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/education" element={<Education />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/research" element={<Research />} />
          <Route path="/services" element={<Services />} />
          <Route path="/whattoexpect" element={<WhatToExpect />} />
          <Route path="/news/:id" element={<NewsDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
