import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Style.css";
const About = () => {
  return (
    <div className="container">
      <Header />
      <h2>About Me</h2>
      <p>Saya Merupakan mahasiswa Teknik Informatika, yang lahir di bekasi</p>
      <Footer />
    </div>
  );
};

export default About;
