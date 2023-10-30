import React from "react";
import './MainRouter.css'
import Home from "./Home";
import About from "./About";
import Blogs from "./Blogs";
import Contact from "./Contact";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
const StyledLink = styled.a`
  text-decoration: none; 
  margin-right: 10px; 

`;
function MainRouter() {
  return (
    <div>
    <div className="routers">
        <StyledLink href="/">Home</StyledLink>
        <StyledLink href="/about">About</StyledLink>
        <StyledLink href="/blogs">Blogs</StyledLink>
        <StyledLink href="/contact">Contact</StyledLink>
    </div>
    <div className="content">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}/>
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        </div>
    </div>
  );
}

export default MainRouter;
