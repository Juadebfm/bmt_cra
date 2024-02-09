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
import NewsDetails from './pages/news/[id]/NewsDetails';
import WhatToExpect from "./pages/WhatToExpect";

export default function App() {
  return (
    <div className="overflow-x-hidden w-full text-base font-Lexend scroll_snap scrollbar-thin scrollbar-thumb-primary_dark scrollbar-track-primary_faded_grey/50">
      <Router>
        <Navbar />
        <Routes basename={"scfn-luth-transplant.sicklecellfoundation.com/"}>
          <Route exact path="scfn-luth-transplant.sicklecellfoundation.com/" element={<Homepage />} />
          <Route path="scfn-luth-transplant.sicklecellfoundation.com/about" element={<Aboutpage/>} />
          <Route path="scfn-luth-transplant.sicklecellfoundation.com/contact" element={<Contact/>} />
          <Route path="scfn-luth-transplant.sicklecellfoundation.com/donation" element={<Donation />} />
          <Route path="scfn-luth-transplant.sicklecellfoundation.com/education" element={<Education />} />
          <Route path="scfn-luth-transplant.sicklecellfoundation.com/faq" element={<FAQ />} />
          <Route path="scfn-luth-transplant.sicklecellfoundation.com/research" element={<Research />} />
          <Route path="scfn-luth-transplant.sicklecellfoundation.com/services" element={<Services />} />
          <Route path="scfn-luth-transplant.sicklecellfoundation.com/whattoexpect" element={<WhatToExpect />} />
          <Route path="scfn-luth-transplant.sicklecellfoundation.com/news/:id" element={<NewsDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
