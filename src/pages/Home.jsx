import React, { useEffect, useState } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";

import "./Home.css"; // Move all your CSS here or keep it modular

const Home = () => {
  const [openDay, setOpenDay] = useState(null);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [videoLoaded, setVideoLoaded] = useState(false); // For hero video

  useEffect(() => {
    const typed = new Typed("#typed", {
      strings: ["Ayodhya Heritage", "Ram Mandir Tours", "Spiritual Journeys"],
      typeSpeed: 80,
      backSpeed: 40,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  // Detect when video is ready to play
  useEffect(() => {
    const video = document.getElementById("heroVideo");
    const handleCanPlay = () => setVideoLoaded(true);

    if (video) {
      video.addEventListener("canplaythrough", handleCanPlay);
    }

    return () => {
      if (video) {
        video.removeEventListener("canplaythrough", handleCanPlay);
      }
    };
  }, []);

  const toggleDay = (index) => {
    setOpenDay(openDay === index ? null : index);
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Mobile menu toggle
  const toggleMenu = () => {
    const menu = document.getElementById("mobileMenu");
    const icon = document.getElementById("menuIcon");
    const isOpen = menu.style.display === "flex";
    menu.style.display = isOpen ? "none" : "flex";
    icon.classList.toggle("active", !isOpen);
  };

  const days = [
    {
      header: "Day 1 - Departure & Bangalore Transfer",
      content: [
        "12 pm - Start from Kuttikad by Traveller",
        "6 pm - Reach Mysore",
        "6 pm to 9 pm - Dinner",
        "10 pm - 3 am - Transfer to Bangalore Airport",
      ],
    },
    {
      header: "Day 2 - Arrival at Ayodhya",
      content: [
        "6 am - Flight from Bangalore to Ayodhya",
        "10 am - Breakfast at hotel",
        "11 am - 2 pm - Rest in room",
        "2 pm - Lunch at hotel",
        "4 pm - Visit Hanuman Temple, Kanak Bhavan, Bharat Ji’s Mandir",
        "6 pm - Visit Ram Janmabhoomi",
        "8 pm - Ayodhya Ghat Darshan & Aarti",
        "10 pm - Dinner",
      ],
    },
    {
      header: "Day 3 - Ayodhya Temple Visits",
      content: [
        "9 am - Breakfast",
        "10 am - 12:30 pm - Temple Visits",
        "1 pm - Lunch at hotel",
        "2 pm - 5 pm - Rest",
        "5 pm - Evening Temple Darshan",
        "9 pm - Dinner",
      ],
    },
    {
      header: "Day 4 - Return Journey",
      content: [
        "8 am - Breakfast",
        "11 am - Checkout from hotel & proceed to Ayodhya Airport",
        "4 pm - Arrival at Bangalore Airport",
        "10 pm - Travel back to Kuttikad",
      ],
    },
  ];

  const faqs = [
    {
      question: "🕉 What is included in the Ayodhya Tour package?",
      answer:
        "Our package includes guided visits to Ram Mandir, Hanuman Garhi, Kanak Bhavan, and other heritage spots. Transportation and local assistance are also provided.",
    },
    {
      question: "🚗 Do you provide transport services?",
      answer:
        "Yes, we arrange comfortable Traveller, cars, and pickup/drop services depending on the package.",
    },
    {
      question: "🙏 Can we customize our pilgrimage itinerary?",
      answer:
        "Absolutely! Holyway Travels offers customized packages to suit your spiritual needs and time availability.",
    },
    {
      question: "💳 How can I book a trip?",
      answer:
        "You can contact us directly via WhatsApp, phone, or social media to confirm your booking.",
    },
  ];

  return (
          <div className="home-page">

    <>

      {/* ================= HOME HERO ================= */}
      <section id="home" className="page-section active">
        <section className="hero">
          {/* Placeholder Image
          {!videoLoaded && (
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/temple.jpg`}
              alt="Ayodhya Background"
              className="hero-video-placeholder"
            />
          )} */}

          {/* Background Video */}
          <video
            id="heroVideo"
            autoPlay
            muted
            loop
            playsInline
            className="hero-video"
            style={{ display: videoLoaded ? "block" : "none" }}
          >
            <source
              src={`${process.env.PUBLIC_URL}/assets/videos/ayodya.mp4`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Overlay */}
          <div className="hero-overlay"></div>

          {/* Hero Content */}
          <div className="hero-content">
  <h2 className="hero-title">Welcome to Holyway Travels</h2>
  <h3 className="hero-subtitle">
    <span id="typed"></span>
  </h3>
 <div className="know_more">
  <Link to="/about" className="btn">
    Know More
  </Link>
</div>
</div>

        </section>
      </section>

      {/* ================= SECTIONS ================= */}
      {/* Section 1: Ayodhya & Ram Mandir */}
      <div className="container first_container">
        <div className="image-section rama_sita">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/ram_vs_ravan.jpg`}
            alt="Lord Rama Statue"
          />
        </div>
        <div className="text-section">
          <h2>Overview</h2>
          <h1>Ayodhya: The Divine Land of Lord Rama’s Birth</h1>
          <p>
            Ayodhya, one of the holiest cities for Hindus, is revered as the
            birthplace of Lord Rama. Counted among the seven most sacred
            pilgrimage sites in India, this vibrant city of Uttar Pradesh is
            deeply connected with ancient history, mythology, and the Nawabi
            era. Situated on the banks of the Sarayu River, Ayodhya—historically
            called Saketa—welcomes devotees and visitors with its timeless
            charm. The city is adorned with grand temples, heritage sites,
            enlightening museums, and serene gardens.
          </p>
          <p>
            Buddhist and Jain scriptures also describe Ayodhya as a place visited
            by their spiritual leaders, Lord Buddha and Mahavira. Followers of
            Jainism believe that the city was the birthplace of five
            Tirthankaras: Rishabhanatha, Jitanatha, Abhinandananatha, Sumatinatha,
            and Anantanatha.
          </p>

          <div className="highlight-box">
            The grand Ram Mandir in Ayodhya was inaugurated on January 22, 2024,
            by the Prime Minister of India.
          </div>
        </div>
      </div>

      {/* Section 2: About Lord Rama */}
      <div className="container reverse">
        <div className="image-section">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/rama_god.jpg`}
            alt="Lord Rama Image"
          />
        </div>
        <div className="text-section">
          <h2>About Lord Rama</h2>
          <h1>The Eternal Symbol of Dharma</h1>
          <p>
            Lord Rama, the seventh incarnation of Lord Vishnu, is worshipped as
            the embodiment of truth, virtue, and righteousness. His story is
            immortalized in the ancient epic <em>Ramayana</em>, where he is
            portrayed as the ideal son, husband, and king. Rama’s unwavering
            commitment to dharma (righteousness) and his compassion for all
            beings make him a timeless guide for humanity.
          </p>
          <p>
            His life journey—from his childhood in Ayodhya, to his exile in the
            forest, his battle with Ravana, and his return as the victorious
            ruler—symbolizes the triumph of good over evil. Across generations
            and cultures, Lord Rama is revered as an eternal source of
            inspiration, devotion, and moral strength.
          </p>
          <div className="highlight-box">
            The festival of Ram Navami is celebrated with devotion across India
            to mark the divine birth of Lord Rama.
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="why-choose">
        <h2>Why Travel With Holyway?</h2>
        <div className="features">
          <div className="feature">
            <div className="icon">✨</div>
            <h3>Spiritual Guidance</h3>
            <p>
              We specialize in heritage and temple tours, ensuring every trip is
              spiritually fulfilling.
            </p>
          </div>
          <div className="feature">
            <div className="icon">🚌</div>
            <h3>Comfortable Travel</h3>
            <p>
              Luxury Traveller, personalized packages, and hassle-free
              arrangements for your peace of mind.
            </p>
          </div>
          <div className="feature">
            <div className="icon">📖</div>
            <h3>Rich History</h3>
            <p>
              Learn the stories and legends of Ayodhya and other sacred
              destinations with our expert guides.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Tours */}
      <section className="highlights">
        <h2>Popular Heritage Tours</h2>
        <div className="cards">
          <div className="card fade-in">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/Ayodhya-Ram-Mandir.jpg`}
              alt="Ram Mandir"
            />
            <h3>Ayodhya Ram Mandir</h3>
            <p>
              Witness the majestic Ram Mandir, the heart of Hindu faith and
              devotion.
            </p>
          </div>
          <div className="card fade-in">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/Hanuman_Garhi.avif`}
              alt="Hanuman Garhi"
            />
            <h3>Hanuman Garhi</h3>
            <p>
              Experience divine blessings at Hanuman Garhi, the fortress-like
              temple of Lord Hanuman.
            </p>
          </div>
          <div className="card fade-in">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/kanak-bhavan.jpg`}
              alt="Kanak Bhavan"
            />
            <h3>Kanak Bhavan</h3>
            <p>
              Visit the sacred palace where Sita and Ram lived after their
              marriage, known as Kanak Bhavan.
            </p>
          </div>
        </div>
      </section>

      {/* Package & Itinerary */}
      <div className="package-container">
        <section className="overview">
          <h2>Package Overview</h2>
          <p>
            Join us on a sacred journey to Ayodhya, the birthplace of Lord Rama.
            This 4-day / 3-night package includes comfortable travel, temple
            visits, and guided experiences.
          </p>
        </section>

        <section className="itinerary">
          <h2>Day-wise Itinerary</h2>
          {days.map((day, index) => (
            <div className="day" key={index}>
              <div
                className={`day-header ${openDay === index ? "active" : ""}`}
                onClick={() => toggleDay(index)}
              >
                {day.header}
              </div>
              <div
                className="day-content"
                style={{ display: openDay === index ? "block" : "none" }}
              >
                {day.content.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* Gallery */}
      <section className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/Ayodhya-Saryu-Ghat.png`}
            alt="Ayodhya Ghat"
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/ayodya_diwali.jpg`}
            alt="Ayodhya Diwali"
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/temple.jpg`}
            alt="Temples"
          />
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/ram_mandir.jpg`}
            alt="Ram Mandir Model"
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Travelers Say</h2>
        <div className="testimonial-list">
          <div className="testimonial">
            <p>
              “Holyway Travels made my pilgrimage to Ayodhya unforgettable.
              Everything was perfectly organized.”
            </p>
            <h4>- Anjali Sharma</h4>
          </div>
          <div className="testimonial">
            <p>
              “The guides were knowledgeable and respectful. I felt spiritually
              enriched after the tour.”
            </p>
            <h4>- Rajesh Kumar</h4>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span className="icon">{openFAQ === index ? "−" : "+"}</span>
              </button>
              <div className={`faq-answer ${openFAQ === index ? "open" : ""}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
    </>
      </div>
  );
};

export default Home;
