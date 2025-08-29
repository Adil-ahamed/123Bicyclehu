import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from './pages/home'
import AboutUs from './pages/aboutUs'
import Service from './pages/service'
import Contact from './pages/contact'


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="services" element={<Service />} />
        <Route path="contact" element={<Contact />} />
        
        </Route>
      </Routes>
    </Router>
  );
}
