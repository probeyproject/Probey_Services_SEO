"use client";

import  Accordion  from "react-bootstrap/Accordion";

const faqData = [
  {
    id: "0",
    question: "Why should I use Flutter for my app development?",
    answer: (
      <>
        <p>
        Flutter is a powerful framework for creating high-quality apps for both iOS and Android from one codebase. It speeds up development, improves app performance, and allows for attractive, responsive designs. At Probey Services, we use Flutter to build apps that perform well and look great on all devices.
        </p>
      </>
    ),
  },
  {
    id: "1",
    question: "Why is Probey Services the best Flutter app development company in India?",
    answer: (
      <p>
Probey Service is the best Flutter app development company in India as we provide personalized solutions that meet your specific needs, ensuring your app is efficient and user-friendly. Our skilled developers and designers work together to create apps that stand out in the marketplace.
      </p>
    ),
  },
  {
    id: "2",
    question: "What does your Flutter app development service include?",
    answer: (
      <p>
Our Flutter development services cover everything from initial consultation and design to development, testing, and deployment. We make sure that your app is well-designed, performs optimally, and is ready for launch on both iOS and Android platforms.
      </p>
    ),
  },
  {
    id: "3",
    question: "What is the Pricing for iOS App Development Services?",
    answer: (
      <p>
The cost of iOS app development depends depending on the app’s complexity, features, and design requirements. Basic apps are more budget-friendly, while feature-rich, custom apps come at a higher price. Probey Services provides flexible pricing packages for Flutter development services, designed to fit different budgets and project scopes. <b>Contact us</b> to get a personalized quote and find the best value for your investment.
      </p>
    ),
  },
  {
    id: "4",
    question: " How long does it take to develop a Flutter app?",
    answer: (
      <p>
The time required for Flutter app development depends on the complexity and features of your app. Typically, it takes about 8 to 12 weeks. At Probey Services, we provide clear timelines and keep you updated throughout the development process.
      </p>
    ),
  },
  {
    id: "5",
    question: " What is the cost of developing a Flutter app?",
    answer: (
      <p>
The cost depends based on your app’s features and complexity. Probey Services provides competitive rates and provides detailed cost estimates. We work with you to ensure you get the best value for your investment.
      </p>
    ),
  },
  {
    id: "6",
    question: " Will my Flutter app work on both iOS and Android?",
    answer: (
      <p>
Yes, Flutter allows us to build apps that work on both iOS and Android from a single codebase. This ensures your app provides a consistent experience across all devices and helps save on development costs.
      </p>
    ),
  },
  {
    id: "7",
    question: "How do you ensure the quality of the Flutter app?",
    answer: (
      <p>
At Probey Services, we prioritize quality. We test your app thoroughly on various devices to ensure it runs smoothly. Our testing process includes checks for functionality, performance, and user experience to deliver a reliable app.
      </p>
    ),
  },
  // Add more FAQ items here as needed
];

function ServicesFAQ() {
  return (
    <div className="faq-wrapper container">
      <div className="d-flex justify-content-between align-items-center inner-container">
        <div className="d-flex flex-column col-4 p-4">
        <h1 className="fw-semibold display-3">
        Help & FAQ
          <br />
          Center
        </h1>
        <p className="custome-line-height p-font-size">Need answers or guidance? Check out our Help & FAQ Center for quick solutions and thorough support on the best Flutter app development services in India. We’re here to assist you every step of the way.</p>
        </div>
        
        <div className="col-6">
          <Accordion className="faq-accordions w-100">
            {faqData.map((faq) => (
              <Accordion.Item
                key={faq.id}
                eventKey={faq.id}
                className="border-0 bg-transparent w-100"
              >
                <Accordion.Header className="border-0 bg-transparent p-0 w-100 d-flex align-items-center">
                  {faq.question}
                </Accordion.Header>
                <Accordion.Body
                  className="p-0 mb-3 text-muted"
                  style={{ width: "100%" }}
                >
                  {faq.answer}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default ServicesFAQ;