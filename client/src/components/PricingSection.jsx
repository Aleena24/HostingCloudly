import React from "react";
import "./PricingSection.css";

const plans = [
  {
    name: "Spark",
    price: "₹99",
    tag: "From only",
    features: [
      "Single Website",
      "50 GB SSD Webspace",
      "100 GB Monthly Bandwidth",
      "5 MySQL Databases",
      "5 Emails",
    ],
    buttonText: "Purchase Plan",
    outOfStock: false,
  },
  {
    name: "Ignite",
    price: "₹149",
    tag: "From only",
    features: [
      "10 Websites",
      "100 GB SSD Webspace",
      "500 GB Monthly Bandwidth",
      "50 MySQL Databases",
      "50 Emails",
    ],
    buttonText: "Purchase Plan",
    outOfStock: false,
  },
  {
    name: "Blaze",
    price: "₹199",
    tag: "From only",
    features: [
      "Unlimited Websites",
      "Unlimited SSD Webspace",
      "Unlimited Monthly Bandwidth",
      "Unlimited MySQL Databases",
      "Unlimited Emails",
    ],
    buttonText: "Purchase Plan",
    popular: true,
    outOfStock: false,
  },
  {
    name: "Student",
    price: "Free",
    tag: "From only",
    features: [
      "Single Website",
      "5 GB SSD Webspace",
      "50 GB Monthly Bandwidth",
      "2 MySQL Databases",
      "1 Email",
    ],
    buttonText: "Out of Stock",
    outOfStock: true,
  },
];

export default function PricingSection() {
  return (
    <section className="pricing-section">
      <div className="container">
        <div className="pricing-header">
          <h2>Clear, Flexible Pricing</h2>
          <p>Choose the plan that suits your needs</p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card ${plan.popular ? "popular" : ""}`}
            >
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <h3 className="plan-title">{plan.name}</h3>
              <p className="plan-tag">{plan.tag}</p>
              <p className="plan-price">
                {plan.price} <span>/month</span>
              </p>
              <ul className="plan-features">
                {plan.features.map((feature, index) => (
                  <li key={index}>✅ {feature}</li>
                ))}
              </ul>
              <button
                className="purchase-button"
                disabled={plan.outOfStock}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
