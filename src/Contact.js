import React, { useState, useContext } from "react";
import { MessageContext } from "./MessageContext";
import Header from "./Header";
import Footer from "./Footer";

const Contact = () => {
  const [message, setMessage] = useState("");
  const { addMessage } = useContext(MessageContext);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mengirim pesan ke fungsi addMessage di dalam MessageContext
    addMessage(message);
    // Mengosongkan formulir setelah mengirim pesan
    setMessage("");
  };

  return (
    <div className="container mt-4">
      <Header />
      <h2>Send Message</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            className="form-control"
            id="message"
            rows="4"
            value={message}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default Contact;
