import React, { useState } from 'react';
import BackToTop from '../BackToTop.jsx';
import Header from '../HomeOne/Header.jsx';
import Footer from '../HomeTwo/Footer.jsx';
import PageTitle from '../PageTitle.jsx';
function Faq() {
     // Manage the state to track which accordion is open
     const [activeIndex, setActiveIndex] = useState(null);
     const [activeIndex2, setActiveIndex2] = useState(null);
 
     // Toggle function for accordion items
     const toggleAccordion = (index) => {
         setActiveIndex(activeIndex === index ? null : index);
     };
     // Toggle function for accordion items
     const toggleAccordion2 = (index2) => {
         setActiveIndex2(activeIndex2 === index2 ? null : index2);
     };

    // Accordion data
    const faqs = [
        {
            question: "What warranties do I have for installation?",
            answer: "There are many variations of passages of available, but the majority have suffered alteration in some form."
        },
        {
            question: "What is included in your services?",
            answer: "There are many variations of passages of available, but the majority have suffered alteration in some form."
        },
        {
            question: "What are the payment methods?",
            answer: "There are many variations of passages of available, but the majority have suffered alteration in some form."
        },
        {
            question: "How fast I get my order?",
            answer: "There are many variations of passages of available, but the majority have suffered alteration in some form."
        },
    ];

    const faqs2 = [
        {
            question: "Produce Your Own Clean Save The Environment",
            answer: "In the context of solar energy, a light source for stable conversion efficiency refers to a source of light that provides a consistent and predictable output, which can be used to test and optimize the performance of solar cells and panels. This is important because the efficiency of solar cells and panels can vary depending on the intensity and wavelength of the light they receive, so it is crucial to use a stable light source to ensure accurate and reliable measurements"
        },
        {
            question: "On-Site Service And Support For Certification",
            answer: "In the context of solar energy, a light source for stable conversion efficiency refers to a source of light that provides a consistent and predictable output, which can be used to test and optimize the performance of solar cells and panels. This is important because the efficiency of solar cells and panels can vary depending on the intensity and wavelength of the light they receive, so it is crucial to use a stable light source to ensure accurate and reliable measurements"
        },
        {
            question: "Light Source For Stable Conversion Efficiency",
            answer: "In the context of solar energy, a light source for stable conversion efficiency refers to a source of light that provides a consistent and predictable output, which can be used to test and optimize the performance of solar cells and panels. This is important because the efficiency of solar cells and panels can vary depending on the intensity and wavelength of the light they receive, so it is crucial to use a stable light source to ensure accurate and reliable measurements"
        },
    ];

    return (
        <>
        <Header />
        <PageTitle
            title="FAQ"
            breadcrumb={[
                { link: '/', title: 'Home' },
            ]}
        />
        <section className="faqs-section pt-120 pb-120">
        <div className="container">
            <div className="row">
            <div className="faq-column col-lg-6">
                <div className="inner-column">
                <ul className="accordion-box style-two wow fadeInLeft">
                    {faqs.map((faq, index) => (
                    <li key={index} className={`accordion block ${activeIndex === index ? 'active-block' : ''}`}>
                        <div className={`acc-btn ${activeIndex === index ? 'active' : ''}`} onClick={() => toggleAccordion(index)}>
                            {faq.question}
                            <div className="icon fa fa-plus"></div>
                        </div>
                        <div className={`acc-content ${activeIndex === index ? 'current' : ''}`}>
                            <div className="content">
                                <div className="text">{faq.answer}</div>
                            </div>
                        </div>
                    </li>
                    ))}
                </ul>
                </div>
            </div>
            <div className="faq-column col-lg-6">
                <div className="inner-column">
                <ul className="accordion-box style-two wow fadeInLeft">
                        {faqs2.map((faq, index2) => (
                        <li key={index2} className={`accordion block pl-30 pr-30 ${activeIndex2 === index2 ? 'active-block' : ''}`}>
                            <div className={`acc-btn ${activeIndex2 === index2 ? 'active' : ''}`} onClick={() => toggleAccordion2(index2)}>
                                {faq.question}
                                <div className="icon fa fa-plus"></div>
                            </div>
                            <div className={`acc-content ${activeIndex2 === index2 ? 'current' : ''}`}>
                                <div className="content">
                                    <div className="text">{faq.answer}</div>
                                </div>
                            </div>
                        </li>
                        ))}
                </ul>
                </div>
            </div>
            </div>
        </div>
        </section>
        <Footer />
        <BackToTop />
        </>
    );
}

export default Faq;
