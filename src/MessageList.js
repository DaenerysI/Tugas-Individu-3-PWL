import React, { useContext } from "react";
import { MessageContext } from "./MessageContext";
import "./Style.css";
const MessageList = () => {
  const { messages } = useContext(MessageContext);

  return (
    <div className="container mt-4">
      <h2>Message List</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;
