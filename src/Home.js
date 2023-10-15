import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import Profile from "./Profile";
import MessageList from "./MessageList";

const Home = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Profile />
      <Footer />
      <MessageList /> {}
    </div>
  );
};

export default Home;
