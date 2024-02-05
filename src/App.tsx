import React from 'react';
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom';

import Navigationbar from "./components/Navbar/Navigationbar";

import Root from "./components/Pages/Root";
import News from "./components/Pages/News";
import Stream from "./components/Pages/Stream";
import Tutorials from "./components/Pages/Tutorials";
import Downloads from "./components/Pages/Downloads";
import Projects from "./components/Pages/Projects";
import Contact from "./components/Pages/Contact";
import Register from "./components/Pages/Register";
import Update from "./components/Pages/Update";
import Login from "./components/Pages/Login";
import BlackzspaceOS from "./components/Pages/BlackzspaceOS";

export function App() {
  return (         
    <BrowserRouter>

      <Navigationbar />
    
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/board" />
        <Route path="/news" element={<News />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/blackzspace-os" element={<BlackzspaceOS />} />
        <Route path="/update" element={<Update />} />

        <Route path="/stream" element={<Stream />} />
      </Routes>
    </BrowserRouter>

  );
}
export default App;
