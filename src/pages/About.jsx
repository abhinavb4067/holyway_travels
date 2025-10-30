import React, { useEffect, useRef } from "react";
import "./About.css";

const About = () => {
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  // Scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      const image = imageRef.current;
      const content = contentRef.current;
      const triggerBottom = window.innerHeight * 0.85;

      [image, content].forEach((el) => {
        const boxTop = el.getBoundingClientRect().top;
        if (boxTop < triggerBottom) el.classList.add("show");
        else el.classList.remove("show");
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="about" className="about-page">
      {/* Page Header / Hero */}
      <div
        className="page-header"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/about_us.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          color: "white",
          textAlign: "center",
          padding: "140px 0 90px",
          position: "relative",
          zIndex: 1,
          marginTop: -80,
        }}
      >
        <h1>About Us</h1>
      </div>

      <div className="about-container">
        {/* Image with animation */}
        <div className="about-image" ref={imageRef}>
          <img src={`${process.env.PUBLIC_URL}/assets/images/logo.jpg`} alt="Logo" />
        </div>

        {/* Text with fade-in */}
        <div className="content" ref={contentRef}>
          <h2>Our Vision</h2>
          <p>
            At <strong>Holyway Travels</strong>, we envision a world where every journey becomes
            a soulful experience — connecting people to places, cultures, and themselves.
            We aim to redefine travel as a path of discovery, reflection, and meaningful connection.
          </p>
          <p>
            Our goal is to inspire travelers to explore the world with purpose, gratitude, and
            a sense of wonder — creating stories that stay in the heart long after the journey ends.
          </p>

          <h2>Our Mission</h2>
          <p>
            At Holyway Travels, our mission is to make travel seamless, soulful, and unforgettable.
            We strive to craft journeys that blend comfort, authenticity, and adventure —
            guided by care, trust, and a personal touch.
          </p>
          <p>
            Through thoughtful planning and heartfelt service, we aim to help travelers discover
            the beauty of the world — and the peace within — one trip at a time.
          </p>

          <h2>Our Values</h2>
          <ul>
            <li><strong>Authenticity</strong> — Travel that reflects the true spirit of every destination.</li>
            <li><strong>Connection</strong> — Building bridges between people, cultures, and communities.</li>
            <li><strong>Trust</strong> — Creating journeys travelers can rely on and remember.</li>
            <li><strong>Exploration</strong> — Inspiring curiosity and the joy of discovery.</li>
            <li><strong>Sustainability</strong> — Traveling responsibly to preserve the world's beauty.</li>
            <li><strong>Joy</strong> — Celebrating life through every journey, big or small.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
