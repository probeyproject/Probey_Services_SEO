import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function ModaDownload({ show, onClose }) {
  const [phoneNumber, setPhoneNumber] = useState('');

  // Handle form input change
  const handleChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <Modal show={show} onHide={onClose} size="sm" centered>
      {/* <Modal.Header closeButton className='bg-transparent' style={{backgroundColor:"transparent !important"}}>
      </Modal.Header> */}
      <Modal.Body>
        <div className='row'>
          <div className='col-md-12'>
            
            {/* Catchy Heading */}
            <h4 className="text-center mb-4" style={{ fontWeight: '600', fontSize: '20px', color: '#333' }}>
              Download Our Free Plan - Hurry Up! <br />
              Limited Time Offer
            </h4>

            <Form>
              <Form.Group controlId="phoneNumber">
                <Form.Control
                  type="tel"
                  placeholder="Enter Your Phone Number"
                  value={phoneNumber}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Form>
            
            <section className='text-center mt-0 pt-2'>
              <button className='btn btn-dark btn-animation' disabled>
                Download
              </button>
            </section>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModaDownload;