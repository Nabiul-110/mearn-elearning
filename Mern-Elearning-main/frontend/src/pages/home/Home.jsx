import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Testimonials from "../../components/testimonials/Testimonials";

const slides = [
  {
    id: 1,
    image: "/img/carousel-1.jpg",
    subtitle: "Best E-learning platform",
    title: "Learn Job ready skills from free online courses with certificates",
    text: "Explore a wide range of courses designed to enhance your expertise in technology, business, arts, and more. Start learning today!",
  },
  {
    id: 2,
    image: "/img/carousel-2.jpg",
    subtitle: "Welcome to E learning platform",
    title: "Interactive Learning Experience",
    text: "Engage with interactive lessons, quizzes, and projects. Experience hands-on learning that keeps you motivated and inspired.",
  },
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  // Auto slide
  useEffect(() => {
    const timer = setInterval(
      () => setActiveIndex((prev) => (prev + 1) % slides.length),
      6000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* ===== HERO CAROUSEL ===== */}
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide ${index === activeIndex ? "active" : ""}`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="carousel-img"
            />

            <div className="carousel-overlay">
              <h5 className="carousel-subtitle">{slide.subtitle}</h5>
              <h1 className="carousel-title">{slide.title}</h1>
              <p className="carousel-text">{slide.text}</p>

              <div className="carousel-actions">
                <button
                  onClick={() => navigate("/courses")}
                  className="carousel-btn"
                >
                  Get Started
                </button>
                <button
                  onClick={() => navigate("/signup")}
                  className="carousel-btn-light"
                >
                  Join Now
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Dots */}
        <div className="carousel-dots">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`dot ${i === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <Testimonials />
    </div>
  );
};

export default Home;
