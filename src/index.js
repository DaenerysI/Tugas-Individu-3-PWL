import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { MessageProvider } from "./MessageContext";

ReactDOM.render(
  <Router>
    <MessageProvider>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </MessageProvider>
  </Router>,
  document.getElementById("root")
);
