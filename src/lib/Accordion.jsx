import React, { useState } from "react";

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button
        className={`accordion-button ${isOpen ? "" : "collapsed"}`}
        type="button"
        onClick={onClick}
      >
        {question}
      </button>
    </h2>
    <div className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}>
      <div className="accordion-body">
        <p>{answer}</p>
      </div>
    </div>
  </div>
);

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const data = [
    {
      question: "1. What should I wear to the spa?",
      answer:
        "We recommend wearing comfortable clothing to the spa. For treatments like massages or facials, you'll be provided with a robe and slippers. Our therapists are trained to drape you discreetly to ensure your privacy at all times.",
    },
    {
      question: "2. Do I need to book an appointment in advance?",
      answer:
        "We recommend wearing comfortable clothing to the spa. For treatments like massages or facials, you'll be provided with a robe and slippers. Our therapists are trained to drape you discreetly to ensure your privacy at all times.",
    },
    {
      question: "3. What time should I arrive for my appointment?",
      answer:
        "We recommend wearing comfortable clothing to the spa. For treatments like massages or facials, you'll be provided with a robe and slippers. Our therapists are trained to drape you discreetly to ensure your privacy at all times.",
    },
    {
      question: "4. Can I request a male or female therapist?",
      answer:
        "We recommend wearing comfortable clothing to the spa. For treatments like massages or facials, you'll be provided with a robe and slippers. Our therapists are trained to drape you discreetly to ensure your privacy at all times.",
    },
  ];

  const toggleIndex = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion" id="accordionExample">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => toggleIndex(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
