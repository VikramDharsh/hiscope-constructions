import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

import Layout from "@/components/Layout";
import SeoMeta from "@/components/SeoMeta";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Projects from "@/pages/Projects";
import ProjectDetail from "@/pages/ProjectDetail";
import Careers from "@/pages/Careers";
import Contact from "@/pages/Contact";
import AdminInquiries from "@/pages/AdminInquiries";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SeoMeta />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin/inquiries" element={<AdminInquiries />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            borderRadius: 0,
            border: "1px solid #09090B",
            fontFamily: "IBM Plex Sans, sans-serif",
          },
        }}
      />
    </div>
  );
}

export default App;
