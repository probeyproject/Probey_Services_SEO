import React from 'react';

function HowWeWork() {
  const iconBoxes = [
    {
      icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-6.png",
      title: "Understanding Client Requirements",
      description: "We begin by deeply understanding your specific requirements for cross-platform compatibility, making sure that all your needs are addressed."
    },
    {
      icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-7.png",
      title: "Design and Prototyping",
      description: "We create a design that functions across both iOS and Android platforms, improving user experience, using the flexibility that comes with being a Flutter app development company."
    },
    {
      icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-8.png",
      title: "Agile Approach Development",
      description: "Using Flutter, we create a unified codebase for both iOS and Android, increasing efficiency and performance."
    },
    {
      icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-9.png",
      title: "Continuous Communication",
      description: "We keep the conversation flowing to ensure your input shapes every step, keeping us aligned with your expectations."
    },
    {
      icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-10.png",
      title: "Thorough Quality Assurance (Testing)",
      description: "We conduct extensive testing on multiple devices to guarantee compatibility and optimal performance across both platforms."
    },
    {
      icon: "https://noviindus.com/wp-content/uploads/2024/05/Group-11.png",
      title: "Smooth Deployment and Optimization",
      description: "We manage the entire launch process on the App Store and Google Play Store, providing complete post-launch support to make sure a smooth rollout."
    }
  ];

  return (
    <div className='container-fluid py-5' style={{ backgroundColor: "#f4f4ff" }}>
      <div className="text-center mb-5">
        <h3 className="mb-0"></h3>
        <h1 className="fw-bolder">How We Work</h1>
      </div>
      <div className='container'>
      <div className="row g-4">
        {iconBoxes.map((box, index) => (
          <div key={index} className="col-lg-4 d-none d-lg-block">
            <div className="icon-box p-5 rounded-3 bg-white h-100" style={{
              transition: 'transform 0.3s ease'
            }}>
              <div className="icon-box-headline text-center">
                <div className="icon-box-icon mb-3">
                  <img
                    src={box.icon}
                    alt={box.title}
                    style={{
                      maxWidth: '41px',
                      height: 'auto',
                      margin: '0 auto'
                    }}
                  />
                </div>
                <h5 className="icon-box-title fw-bold mb-3">
                  {box.title}
                </h5>
              </div>
              <p className="text-muted text-center mb-0">
                {box.description}
              </p>
            </div>
          </div> 
        ))}
      </div>
      </div>
    </div>
  );
}

export default HowWeWork;