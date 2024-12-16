import React from 'react';

function Awards() {
  const awardsData = [
    {
      title: "Best Affiliate Marketing Agency",
      year: 2023,
      organization: "Performance Marketing Awards",
      imageUrl: "https://probeyservices.com/wp-content/uploads/2024/05/award-icon9.webp"
    },
    {
      title: "Top Performance Marketing Company",
      year: 2022,
      organization: "Global Marketing Awards",
      imageUrl: "https://probeyservices.com/wp-content/uploads/2024/05/award-icon2.webp"
    },
    // Add more awards as needed
  ];

  return (
    <div className='container my-4'>
      <section className=''>
      <h2 className="display-4">Awards & Recognition</h2>
      <p>In Return Of Excellence & Expertise</p>
      </section>
      <section className='d-flex justify-content-center text-center flex-wrap'>
        {awardsData.map((award, index) => (
          <div key={index} className="award-card card p-0 pb-3 mx-1 bg-dark text-white" style={{height:"245px" ,width:"225px"}}>
          <div className="d-flex justify-content-center align-items-center " style={{ height: "120px" }}>
            <img
              src={award.imageUrl}
              style={{ width: "70px", height: "70px", objectFit: "contain", filter: '' }}
              alt={award.title}
            />
          </div>
          <div className="text-center">
            <div className="text-wrap mb-1 fw-bold">{award.title}</div>
            <div className="text-wrap mb-1">{award.year}</div>
            <div className="text-wrap">{award.organization}</div>
          </div>
        </div>
        ))}
      </section>
    </div>
  );
}

export default Awards;