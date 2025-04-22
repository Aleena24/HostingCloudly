import React, { useState, useEffect } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    quote: "SenseSys transformed our workflow with automation that just works!",
    name: "Anjali Mehta",
    role: "Marketing Head, ZealCorp"
  },
  {
    quote: "Reliable and blazing fast support — we're never left in the dark.",
    name: "Ramesh Iyer",
    role: "Founder, DataDrip"
  },
  {
    quote: "The security stack and dashboard are exactly what our team needed.",
    name: "Sneha Kapoor",
    role: "Tech Lead, SmartSecure"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonial-section">
      <div className="testimonial-bg-overlay">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-carousel">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className={`testimonial-card ${index === current ? "active" : ""}`}
            >
              <p>"{t.quote}"</p>
              <h4>{t.name}</h4>
              <span>{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
