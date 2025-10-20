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
          <h2>About Holyway Travels</h2>
          <p>
            <strong>Holyway Travels</strong> is a dedicated travel agency based
            in India, created to connect people with the divine heritage of
            Hindu culture. Our journey began with the vision of providing
            authentic spiritual experiences to devotees, pilgrims, and explorers
            from all walks of life.
          </p>
          <p>
            We specialize in organizing tours to the most sacred temples and
            heritage sites across India, starting with <em>Ayodhya</em>, the
            birthplace of Lord Ram. Our goal is to create a seamless blend of
            spirituality, comfort, and cultural immersion. Whether you are
            seeking blessings, exploring history, or experiencing the festivals
            of India, Holyway Travels ensures every journey becomes a soulful
            memory.
          </p>
          <p>
            With professional guides, curated itineraries, and a passion for
            service, we strive to make your pilgrimage meaningful and
            unforgettable. At HolyWay Travels, it’s not just about visiting
            places – it’s about walking on a <em>holy way</em> towards peace and
            devotion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
