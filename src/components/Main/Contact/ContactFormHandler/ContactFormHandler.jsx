import React, { useState } from 'react';
import Contact from './Contact';

const ContactFormHandler = () => {
  const [formStatus, setFormStatus] = useState('');

  const handleFormSubmit = (formData) => {
  
    console.log('Form submitted:', formData);
    setFormStatus('Form submitted successfully!');
  };

  return (
    <div>
      <Contact onSubmit={handleFormSubmit} />
      {formStatus && <p className="form-status">{formStatus}</p>}
    </div>
  );
};

export default ContactFormHandler;
