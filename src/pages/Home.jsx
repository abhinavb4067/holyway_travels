import React, { useEffect, useState, useRef } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Home.css";

const Home = () => {
  const [openDay, setOpenDay] = useState(null);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const scrollRef = useRef(null);

  // ✅ Smooth horizontal scroll function
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // ✅ Typed.js initialization
  useEffect(() => {
    const typed = new Typed("#typed", {
      strings: [
        "Vacation Trips",
        "Heritage Tours",
        "Adventure Getaways",
        "Spiritual Journeys",
        "Family Holidays",
      ],
      typeSpeed: 80,
      backSpeed: 40,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  // ✅ Hero video load detection
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
    question: "🧭 What types of tours do you offer?",
    answer:
      "We offer a wide range of trips including family vacations, honeymoon packages, adventure tours, spiritual journeys, and international holidays — all customizable to your preferences.",
  },
  {
    question: "🚗 Do you provide transportation and accommodation?",
    answer:
      "Yes! We arrange comfortable vehicles, hotel stays, and all travel essentials — ensuring a smooth and worry-free experience from start to finish.",
  },
  {
    question: "🎯 Can I customize my travel itinerary?",
    answer:
      "Absolutely! Whether you want to add destinations, adjust dates, or choose specific activities, we’ll tailor your itinerary to match your travel goals.",
  },
  {
    question: "💳 How can I book a trip with Holyway?",
    answer:
      "You can contact us via WhatsApp, call, or our website inquiry form. Once you confirm your package, our team will guide you through the easy booking process.",
  },
  {
    question: "🌍 Do you offer international tour packages?",
    answer:
      "Yes, we organize trips to popular international destinations — from Dubai and Singapore to Europe and beyond — complete with visa assistance and travel guidance.",
  },
  {
    question: "👨‍👩‍👧 Is Holyway suitable for family and group travel?",
    answer:
      "Definitely! We specialize in family-friendly and group tours, ensuring safety, comfort, and activities everyone will enjoy together.",
  },
];

  return (
    <div className="home-page">
      {/* ================= HERO SECTION ================= */}
      <section id="home" className="page-section active">
        <section className="hero">
          {!videoLoaded && (
            <div className="video-preloader">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/logo_without_bg1.png`}
                alt="Loading Holyway Travels"
                className="preloader-logo"
              />
              <p className="preloader-text">Loading divine experience...</p>
            </div>
          )}

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
              src={`${process.env.PUBLIC_URL}/assets/videos/natural.mp4`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className="hero-overlay"></div>

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

      {/* ================= ABOUT SECTION ================= */}
    <section className="home-section">
  <div className="home-image-left">
    <img
      src={`${process.env.PUBLIC_URL}/assets/images/beach1.jpg`}
      alt="Beach View"
    />
  </div>

  {/* content locator — positions the content above the left image */}
  <div className="home-content-locate">
   <div className="home-content">
  <h2>
    Every Journey is <span>Crafted</span> Exclusively <em>For You</em>
  </h2>
  <p>
    From sun-kissed villas along the Amalfi cliffs to dreamy bungalows floating in Bora Bora,
    Holyway Travels creates more than vacations — we design meaningful getaways.
    Each experience is personally curated to mirror your passions, rhythm, and imagination.
  </p>
  <p>
    Whether you long for golden coastlines, hidden urban wonders, or a serene corner of the world
    to simply <em>breathe</em>, we ensure every moment unfolds effortlessly, gracefully, and uniquely yours.
  </p>
  <p>
    Because when every touch is intentional, travel transforms from a plan into a beautiful emotion.
  </p>
</div>

  </div>

  <div className="home-image-right">
    <img
      src={`${process.env.PUBLIC_URL}/assets/images/hill.jpg`}
      alt="Yacht or City View"
    />
  </div>
</section>


      {/* ================= WHY CHOOSE US ================= */}
      <section className="why-choose">
        <h2>Why Travel With Holyway?</h2>
        <div className="features">
          <div className="feature">
            <div className="icon">🌍</div>
            <h3>All Types of Trips</h3>
            <p>
              From spiritual journeys and family vacations to adventure getaways and corporate tours — we plan every kind of trip with care and precision.
            </p>
          </div>
          <div className="feature">
            <div className="icon">🚌</div>
            <h3>Comfortable & Hassle-Free Travel</h3>
            <p>
              Enjoy luxury vehicles, well-designed itineraries, and seamless arrangements that make your travel smooth and worry-free.
            </p>
          </div>
       <div className="feature">
  <div className="icon">✨</div>
  <h3>Passionate Travel Experts</h3>
  <p>
    Our young and energetic team brings creativity, enthusiasm, and attention to detail to make your travel experience truly special.
  </p>
</div>

        </div>
      </section>

      {/* ================= POPULAR TOURS ================= */}
      <section className="highlights">
        <h2>Discover Incredible Journeys</h2>
        <div className="scroll-container">
          <button className="scroll-btn left" onClick={() => scroll("left")}>
            <ChevronLeft size={28} />
          </button>

        <div className="cards" ref={scrollRef}>
  {[
    {
      img: "spiritual-tour.jpg",
      title: "Spiritual Escapes",
      text:
        "Reconnect with your inner peace through divine destinations, soulful experiences, and guided heritage tours.",
    },
    {
      img: "beach-vacation.jpg",
      title: "Relax & Rejuvenate",
      text:
        "Lounge by pristine beaches or unwind in scenic hill stations — perfect for calm, refreshing getaways.",
    },
    {
      img: "adventure-trip.jpg",
      title: "Adventure Awaits",
      text:
        "Trek through mountains, dive into adventure sports, or explore offbeat paths for an adrenaline rush.",
    },
    {
      img: "family-trip.jpg",
      title: "Family Holidays",
      text:
        "Enjoy well-planned, safe, and fun-filled family trips that everyone — from kids to grandparents — will love.",
    },
    {
      img: "honeymoon-trip.jpg",
      title: "Romantic Getaways",
      text:
        "Celebrate love with tailor-made honeymoon packages at breathtaking destinations across India and beyond.",
    },
    {
      img: "international-tour.jpg",
      title: "Global Adventures",
      text:
        "Discover the world — explore iconic cities, hidden gems, and cultures across international destinations.",
    },
  ].map((card, i) => (
    <div className="card fade-in" key={i}>
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/${card.img}`}
        alt={card.title}
        className="card-img"
      />
      <h3>{card.title}</h3>
      <p>{card.text}</p>
    </div>
  ))}
</div>


          <button className="scroll-btn right" onClick={() => scroll("right")}>
            <ChevronRight size={28} />
          </button>
        </div>
      </section>

      {/* ================= PACKAGE & ITINERARY ================= */}
      {/* <div className="package-container">
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
      </div> */}

      {/* ================= GALLERY ================= */}
      <section className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          {[
            "gallery1.jpg",
            "gallery2.jpg",
            "gallery3.jpg",
            "gallery4.jpg",
           
          ].map((img, i) => (
            <img
              key={i}
              src={`${process.env.PUBLIC_URL}/assets/images/${img}`}
              alt={img.split(".")[0]}
            />
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      {/* <section className="testimonials">
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
      </section> */}

      {/* ================= FAQ ================= */}
      <section className="faq">
  <h2>Frequently Asked Questions</h2>
  <div className="faq-container">
    {faqs.map((faq, index) => (
      <div className="faq-item" key={index}>
        <button
          className="faq-question"
          onClick={() => toggleFAQ(index)}
        >
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
    </div>
  );
};

export default Home;
