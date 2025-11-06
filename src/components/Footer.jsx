import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* ==== LEFT: BRAND SECTION ==== */}
        <div className="footer-section">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/3333.png`}
            alt="Holyway Travels"
            className="footer-logo"
          />
         
        </div>

        {/* ==== MIDDLE: CONTACT ==== */}
      <div className="footer-section">
  <h4>Contact</h4>
  <p className="plain-number">📞 +91 80890 57655</p>
  <p className="plain-number">
  <a 
    href="https://www.instagram.com/holyway_travels" 
    target="_blank" 
    rel="noopener noreferrer" 
    style={{ textDecoration: "none", display: "inline-flex", alignItems: "center" }}
  >
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
      alt="Instagram" 
      style={{ width: "20px", height: "20px", marginRight: "5px" }} 
    />
    <span style={{
      background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontWeight: "bold"
    }}>
      @holyway_travels
    </span>
  </a>
</p>
  <p className="plain-number">✉️ info@holywaytravels.com</p>
 
</div>


        {/* ==== RIGHT: ADDRESS ==== */}
        <div className="footer-section">
          <h4>Address</h4>
          <p className="plain-number">
            Door No. 63/700, D Space,<br />
            Sky Tower, Mavoor Road Junction,<br />
            Bank Road, Kozhikode - 673001,Kerala,India
          </p>
        </div>
      </div>

      {/* ==== BOTTOM LINE ==== */}
      <div className="footer-bottom">
        <p>
          © 2025 Holyway Travels | Designed by{" "}
          <a href="https://www.abhinavb.com" target="_blank" rel="noreferrer">
            www.abhinavb.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
