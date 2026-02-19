"use client";
import "../styles/FAQSection.css";
import { useState } from "react";
import data from "../utils.json";

export default function FAQSection() {
  const { faqSection } = data;
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-bg" id="faq" >
      <div className="faq-box">
        <h2>
          {faqSection.title.map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </h2>

        <p>{faqSection.subtitle}</p>

        <div className="faq-grid">
          {faqSection.faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-row" onClick={() => toggleFAQ(index)}>
                <span className="faq-question">{faq.question}</span>
                <span className="faq-icon">
                  {activeIndex === index ? "–" : "+"}
                </span>
              </div>

              <div
                className={`faq-answer ${activeIndex === index ? "open" : ""}`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
