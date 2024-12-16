"use client";

import Accordion from "react-bootstrap/Accordion";

function InnerAccordion() {
  const innerAccordionItems = [
    {
      eventKey: "0",
      header: "What are the key qualities of a top digital marketing agency in India?",
      body: "A top digital marketing agency in India, like Probey Services, provides their expertise across multiple digital disciplines such as SEO, PPC (Pay-Per-Click), content marketing, and social media management. The ability to provide customized, data-driven strategies that provide measurable results is what sets the best agencies apart. They should also stay updated with the latest trends in the digital space to make sure your business remains competitive. Additionally, client-centric approaches and transparent communication are important for any agency to be considered the best.",
    },
    {
      eventKey: "1",
      header: "How can a digital marketing agency help a business in India succeed?",
      body: "A top digital marketing agency in India helps businesses by applying strategies to increase online visibility, attract leads, and improve conversion rates. Agencies like Probey Services use a mix of SEO techniques to improve your website’s search rankings, PPC campaigns to create instant traffic, and social media marketing to engage your audience. These strategies are designed to target the right demographics, making sure that your business can grow in a competitive market. By continually optimizing these efforts, the agency ensures long-term success for your brand.",
    },
    {
      eventKey: "2",
      header: "Why is it important to choose a top digital marketing agency in India for your business?",
      body: "Choosing a top digital marketing agency in India is important for businesses looking to improve their online presence and grow. Such agencies bring great experience in understanding market trends, consumer behavior, and the latest SEO and PPC techniques. At Probey Services, we not only focus on increasing your search engine rankings but also work on creating a strong digital strategy that ensures long-term growth. Our customized approach ensures that we meet the specific needs of your business, whether it’s increasing brand awareness or generating leads.",
    },
    {
      eventKey: "3",
      header: "What are the services provided by a top digital marketing agency in India?",
      body: "A leading digital marketing agency in India provides a range of services that help businesses build and improve their online presence. At Probey Services, we provide SEO services to improve search engine visibility, PPC advertising to bring targeted traffic, and social media marketing to engage with customers on platforms like Facebook, Instagram, and LinkedIn. We also offer content creation, website development, and online reputation management (ORM) services to help you create a strong digital footprint that resonates with your audience.",
    },
    {
      eventKey: "4",
      header: "What kind of businesses can benefit from a top digital marketing agency in India?",
      body: "Businesses across various sectors can benefit from partnering with a top digital marketing agency. Whether you’re in e-commerce, healthcare, real estate, or education, a digital marketing agency like Probey Services can create customized campaigns to meet your specific objectives. Startups may require lead generation and brand awareness, while established companies might focus on optimizing conversion rates and retaining customers. Regardless of the business size, a complete digital marketing strategy can help improve your online presence and bring measurable growth.",
    },
    {
      eventKey: "5",
      header: "How do top digital marketing agencies in India measure success?",
      body: "Top digital marketing agencies measure success by a variety of key performance indicators (KPIs) such as increased organic traffic, better search engine rankings, improved conversion rates, and improved engagement on social media platforms. At Probey Services, we use tools like Google Analytics, Ahrefs, and SEMrush to track the effectiveness of SEO, PPC, and social media campaigns. By regularly analyzing these metrics, we adjust strategies to optimize performance and ensure that businesses see a steady growth in both traffic and revenue.",
    },
    {
      eventKey: "6",
      header: "How can a digital marketing agency in India help with lead generation?",
      body: "A top digital marketing agency in India can increase your lead generation efforts by creating targeted campaigns across various digital platforms. At Probey Services, we use SEO to attract organic traffic, PPC advertising to capture immediate leads, and social media campaigns to engage potential customers. Our goal is not just to increase the number of leads, but also to make sure that these leads are of high quality and more likely to convert into loyal customers. With data-driven insights, we refine these campaigns to maximize your return on investment (ROI).",
    },
    {
      eventKey: "7",
      header: "What sets top digital marketing agencies in India apart from others?",
      body: "What stands out in top digital marketing agencies in India from others is their commitment to give results through customized strategies, innovation, and a deep understanding of industry trends. Agencies like Probey Services provide a full suite of services, from SEO and content marketing to PPC and social media management, all while focusing on the unique goals of each client. Additionally, leading agencies adapt to changes in search engine algorithms, social media trends, and consumer behavior to ensure ongoing success for their clients.",
    },
    {
      eventKey: "8",
      header: "How can a digital marketing agency in India help with lead generation?",
      body: "A top digital marketing agency in India can increase your lead generation efforts by creating targeted campaigns across various digital platforms. At Probey Services, we use SEO to attract organic traffic, PPC advertising to capture immediate leads, and social media campaigns to engage potential customers. Our goal is not just to increase the number of leads, but also to make sure that these leads are of high quality and more likely to convert into loyal customers. With data-driven insights, we refine these campaigns to maximize your return on investment (ROI).",
    },
    {
      eventKey: "9",
      header: "How can I get started with a top digital marketing agency in India?",
      body: "To get started with a top digital marketing agency like Probey Services, you can schedule a consultation where we study your current digital presence and business goals. Based on this assessment, we recommend a custom strategy that could include SEO optimization, paid advertising campaigns, and social media marketing efforts. Our team then applies this strategy with a focus on delivering great results, such as increased traffic, improved search rankings, and higher conversion rates, all personalized to meet your business needs.",
    },
    {
      eventKey: "10",
      header: "How do I know if Probey Services is the right digital marketing agency for my business?",
      body: "Probey Services is the right digital marketing agency for your business if you’re looking for a partner that delivers customized, results-driven strategies. Our approach involves understanding your business goals and creating a complete digital marketing plan that covers SEO, PPC, social media marketing, and content creation. We continuously track performance and make data-driven adjustments to create best results. If you’re focused on long-term growth and great outcomes, we are ready to help your business succeed in the digital space.",
    },
  ];

  return (
    <Accordion className="border-0 bg-transparent">
      {innerAccordionItems.map((item, index) => (
        <Accordion.Item
          eventKey={item.eventKey}
          key={index}
          className="border-0 bg-transparent"
        >
          <Accordion.Header className="border-0 bg-transparent p-0 mb-3">
            {item.header}
          </Accordion.Header>
          <Accordion.Body className="p-0 mb-2">
            {item.body}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

function AllCollapseExample() {
  return (
    <div className="pt-2">
      <div className="container">
        <Accordion className="border-0 bg-transparent">
          <Accordion.Item eventKey="0" className="border-0 bg-transparent">
            <Accordion.Header className="border-0 bg-transparent p-0">
            </Accordion.Header>
            <Accordion.Body className="p-0">
              <InnerAccordion />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default AllCollapseExample;
