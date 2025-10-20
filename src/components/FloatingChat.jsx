import React from "react";
import "./FloatingChat.css"; // Import CSS

const FloatingChat = () => {
  return (
    <a
      href="https://wa.me/918089057655" // replace with your number
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
    >
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/whtsp.png`}
        alt="Chat on WhatsApp"
      />
    </a>
  );
};

export default FloatingChat;
