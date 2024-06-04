import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPencilAlt, faGraduationCap, faBook } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

import Header from './components/Headers/Header'
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Banner from "./components/Main/Banner/Banner";
import WhyChooseUs from "./components/Main/WhyChooseUs/WhyChooseUs";
import Courses from "./components/Main/Courses/Courses";
import Contact from "./components/Main/Contact/Contact";

import './App.css';
import Features from "./components/Main/Features/Features";

library.add(faPencilAlt, faGraduationCap, faBook);

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;
