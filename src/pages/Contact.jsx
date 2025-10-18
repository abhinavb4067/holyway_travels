import React, { useEffect, useRef } from "react";
import "./Contact.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const textRef = useRef(null);

  // Animate only the inner text
  useEffect(() => {
    const handleScroll = () => {
      const textEl = textRef.current;
      if (!textEl) return;

      const triggerBottom = window.innerHeight * 0.85;
      const boxTop = textEl.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        textEl.classList.add("show");
      } else {
        textEl.classList.remove("show");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>

      <section id="contact" className="contact-section">
        {/* Top image banner */}
        <div className="contact-image">
<img src={`${process.env.PUBLIC_URL}/assets/images/about_us.jpg`} alt="About Us" />
          <div className="heading-wrapper">
            <h1 className="contact_heading">Contact Us</h1>
          </div>
        </div>

        {/* Contact details section */}
    <div className="contact-content">
  {/* Wrap only the inner texts */}
  <div className="contact-text" ref={textRef}>
    <h1>Get in Touch</h1>
    <p className="contact-intro">
      Have a question or need assistance? Our team at HolyWay Travels is here to help you plan a seamless and memorable journey. 
      Whether you're looking for personalized travel advice, tour packages, or booking assistance, we are just a call, WhatsApp, or email away. 
      Let us make your travel experience truly unforgettable.
    </p>
    <ul>
      <li className="black-text">
        📞 Mobile:{" "}
        <a href="tel:+918089057655" className="plain-number">
          +91 80890 57655
        </a>
      </li>
      <li className="whatsapp-text">
        <a
          href="https://wa.me/918089057655"
          target="_blank"
          rel="noreferrer"
          className="whatsapp-link"
        >
         <img
  src={`${process.env.PUBLIC_URL}/assets/images/whtsp.png`}
  alt="WhatsApp"
  className="whatsapp-icon"
/>

          WhatsApp <span className="plain-number">+91 80890 57655</span>
        </a>
      </li>
      <li className="black-text">
        📧 Email:{" "}
        <a href="mailto:info@holywaytravels.com" className="plain-number">
          info@holywaytravels.com
        </a>
      </li>
    </ul>
  </div>
</div>



      </section>

    </>
  );
};

export default Contact;
