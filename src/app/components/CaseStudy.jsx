"use client";
import Link from "next/link";
import Accordion from 'react-bootstrap/Accordion';
import PropTypes from 'prop-types';

const CommonCaseStudy = ({ caseStudies }) => {
  return (
    <div className='container d-flex justify-content-center'>
      <div className="col-md-8 my-5">
        <h1 className="display-3 text-center">Case Study</h1>
        <Accordion className="p-3 bg-transparent">
          {caseStudies.map((caseStudy, index) => (
            <Accordion.Item eventKey={index.toString()} key={index} className="bg-transparent">
              <Accordion.Header className='custom-button-accordion'>{caseStudy.headerTitle}</Accordion.Header>
              <Accordion.Body>
                {caseStudy.data.map((item, subIndex) => (
                  <div key={subIndex}>
                    <div className='fs-3'>
                      {item.title}
                    </div>
                    <p className='p-font-size custome-line-height'>{item.description}</p>
                  </div>
                ))}
                {caseStudy.button && (
                  <Link href="/Contact-us" className="btn btn-animation btn-dark">Get Free Quotes</Link>
                )}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

// Define prop types for validation
CommonCaseStudy.propTypes = {
  caseStudies: PropTypes.arrayOf(
    PropTypes.shape({
      headerTitle: PropTypes.string.isRequired,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
        })
      ).isRequired,
      button: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default CommonCaseStudy;