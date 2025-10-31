import React from "react";
import "./FloatingChat.css"; // Import CSS

const FloatingChat = () => {
  // Prefilled message (make sure it’s URL encoded)
  const message = encodeURIComponent("Hi! I would like to know more about your travel packages.");

  return (
    <a
      href={`https://wa.me/918089057655?text=${message}`} // WhatsApp link with prefilled message
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
