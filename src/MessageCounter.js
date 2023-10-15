import React, { useContext } from "react";
import { MessageContext } from "./MessageContext";

const MessageCounter = () => {
  const { messages } = useContext(MessageContext);

  return <p>Total Messages: {messages.length}</p>;
};

export default MessageCounter;
